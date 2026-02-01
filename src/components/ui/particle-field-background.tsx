"use client"

import React, { useRef, useEffect } from 'react';

export default function ParticleFieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const rendererRef = useRef<WebGLRenderer | null>(null);

  class WebGLRenderer {
    private canvas: HTMLCanvasElement;
    private gl: WebGL2RenderingContext;
    private program: WebGLProgram | null = null;
    private vs: WebGLShader | null = null;
    private fs: WebGLShader | null = null;
    private buffer: WebGLBuffer | null = null;
    private scale: number;

    private vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

    private fragmentSrc = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define PI 3.14159265359

// Hash function for randomness
float hash(vec2 p) {
  p = fract(p * vec2(123.45, 678.90));
  p += dot(p, p + 45.67);
  return fract(p.x * p.y);
}

// Smooth noise
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// Fractal Brownian Motion
float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for(int i = 0; i < 5; i++) {
    value += amplitude * noise(p);
    p *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

// Circular field pattern
float field(vec2 p, float t) {
  float d = length(p);
  float angle = atan(p.y, p.x);
  
  float layers = 0.0;
  for(float i = 1.0; i < 8.0; i++) {
    float ring = sin(d * i * 2.0 - t * 0.5 + i) * 0.5 + 0.5;
    float spiral = sin(angle * i + t * 0.3 + d * 3.0) * 0.5 + 0.5;
    layers += ring * spiral / (i * 1.5);
  }
  
  return layers;
}

void main() {
  vec2 uv = (FC - 0.5 * R) / min(R.x, R.y);
  vec3 col = vec3(0.0);
  
  // Animated position
  vec2 pos = uv * 2.0;
  pos.x += sin(T * 0.1) * 0.3;
  pos.y += cos(T * 0.15) * 0.2;
  
  // Create field effect
  float f = field(pos, T);
  
  // Add noise texture
  float n = fbm(uv * 4.0 + T * 0.1);
  
  // Create particle-like appearance
  float particles = 0.0;
  for(float i = 0.0; i < 20.0; i++) {
    vec2 offset = vec2(
      sin(T * 0.3 + i * 2.5) * 1.5,
      cos(T * 0.2 + i * 3.1) * 1.5
    );
    float dist = length(pos - offset);
    particles += 0.008 / (dist * dist);
  }
  
  // Combine effects
  float energy = f * 0.4 + particles * 0.3 + n * 0.2;
  
  // Color grading - orange/dark theme matching hero
  vec3 color1 = vec3(0.05, 0.04, 0.06);  // Very dark purple-black
  vec3 color2 = vec3(0.15, 0.08, 0.02);  // Dark orange-brown
  vec3 color3 = vec3(0.8, 0.3, 0.1);     // Orange glow
  
  col = mix(color1, color2, energy * 2.0);
  col = mix(col, color3, smoothstep(0.4, 0.8, energy));
  
  // Add subtle vignette
  float vignette = 1.0 - length(uv) * 0.3;
  col *= vignette;
  
  // Subtle scanline effect
  col *= 0.95 + 0.05 * sin(FC.y * 2.0 + T);
  
  O = vec4(col, 1.0);
}`;

    private vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

    constructor(canvas: HTMLCanvasElement, scale: number) {
      this.canvas = canvas;
      this.scale = scale;
      const gl = canvas.getContext('webgl2');
      if (!gl) throw new Error('WebGL2 not supported');
      this.gl = gl;
      this.gl.viewport(0, 0, canvas.width * scale, canvas.height * scale);
    }

    compile(shader: WebGLShader, source: string) {
      const gl = this.gl;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const error = gl.getShaderInfoLog(shader);
        console.error('Shader compilation error:', error);
      }
    }

    setup() {
      const gl = this.gl;
      this.vs = gl.createShader(gl.VERTEX_SHADER)!;
      this.fs = gl.createShader(gl.FRAGMENT_SHADER)!;
      this.compile(this.vs, this.vertexSrc);
      this.compile(this.fs, this.fragmentSrc);
      this.program = gl.createProgram()!;
      gl.attachShader(this.program, this.vs);
      gl.attachShader(this.program, this.fs);
      gl.linkProgram(this.program);

      if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(this.program));
      }
    }

    init() {
      const gl = this.gl;
      const program = this.program!;
      
      this.buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

      const position = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      (program as any).resolution = gl.getUniformLocation(program, 'resolution');
      (program as any).time = gl.getUniformLocation(program, 'time');
    }

    updateScale(scale: number) {
      this.scale = scale;
      this.gl.viewport(0, 0, this.canvas.width * scale, this.canvas.height * scale);
    }

    render(now = 0) {
      const gl = this.gl;
      const program = this.program;
      
      if (!program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return;

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      
      gl.uniform2f((program as any).resolution, this.canvas.width, this.canvas.height);
      gl.uniform1f((program as any).time, now * 1e-3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    reset() {
      const gl = this.gl;
      if (this.program && !gl.getProgramParameter(this.program, gl.DELETE_STATUS)) {
        if (this.vs) {
          gl.detachShader(this.program, this.vs);
          gl.deleteShader(this.vs);
        }
        if (this.fs) {
          gl.detachShader(this.program, this.fs);
          gl.deleteShader(this.fs);
        }
        gl.deleteProgram(this.program);
      }
    }
  }

  const resize = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
    
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    
    if (rendererRef.current) {
      rendererRef.current.updateScale(dpr);
    }
  };

  const loop = (now: number) => {
    if (!rendererRef.current) return;
    
    rendererRef.current.render(now);
    animationFrameRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
    
    rendererRef.current = new WebGLRenderer(canvas, dpr);
    
    rendererRef.current.setup();
    rendererRef.current.init();
    
    resize();
    loop(0);
    
    window.addEventListener('resize', resize);
    
    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.reset();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
}
