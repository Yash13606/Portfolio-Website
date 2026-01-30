"use client"

import { GodRays } from "@paper-design/shaders-react"

export default function GodRaysBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <GodRays
        colorBack="#00000000"
        // Using slightly transparent grays/whites to work on both dark/light backgrounds
        colors={["#a1a1aa40", "#e4e4e740", "#71717a40", "#52525b40"]}
        colorBloom="#a1a1aa"
        offsetX={0.85}
        offsetY={-1}
        intensity={0.5}
        spotty={0.45}
        midSize={10}
        midIntensity={0}
        density={0.38}
        bloom={0.3}
        speed={0.5}
        scale={1.6}
        frame={3332042.8159981333}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  )
}
