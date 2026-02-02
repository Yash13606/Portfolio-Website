"use client";

import React, { useState, useEffect, useRef } from 'react';

const DigitalSerenity = () => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const floatingElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const animateWords = () => {
      const wordElements = document.querySelectorAll('.word-animate');
      wordElements.forEach(word => {
        const delay = parseInt(word.getAttribute('data-delay') || '0');
        setTimeout(() => {
          if (word) (word as HTMLElement).style.animation = 'word-appear 0.8s ease-out forwards';
        }, delay);
      });
    };
    const timeoutId = setTimeout(animateWords, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 1000);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  
  useEffect(() => {
    const wordElements = document.querySelectorAll('.word-animate');
    const handleMouseEnter = (e: Event) => { if (e.target) (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(203, 213, 225, 0.5)'; };
    const handleMouseLeave = (e: Event) => { if (e.target) (e.target as HTMLElement).style.textShadow = 'none'; };
    wordElements.forEach(word => {
      word.addEventListener('mouseenter', handleMouseEnter);
      word.addEventListener('mouseleave', handleMouseLeave);
    });
    return () => {
      wordElements.forEach(word => {
        if (word) {
          word.removeEventListener('mouseenter', handleMouseEnter);
          word.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.floating-element-animate');
    floatingElementsRef.current = Array.from(elements) as HTMLElement[];
    const handleScroll = () => {
      if (!scrolled) {
        setScrolled(true);
        floatingElementsRef.current.forEach((el, index) => {
          setTimeout(() => {
            if (el) {
              el.style.animationPlayState = 'running';
              el.style.opacity = ''; 
            }
          }, (parseFloat(el.style.animationDelay || "0") * 1000) + index * 100);
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const pageStyles = `
    @keyframes word-appear { 0% { opacity: 0; transform: translateY(30px) scale(0.8); filter: blur(10px); } 50% { opacity: 0.8; transform: translateY(10px) scale(0.95); filter: blur(2px); } 100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }
    @keyframes pulse-glow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.2); } }
    .word-animate { display: inline-block; opacity: 0; margin: 0 0.1em; transition: color 0.3s ease, transform 0.3s ease; }
    .word-animate:hover { transform: translateY(-2px); }
    .text-decoration-animate { position: relative; }
    .text-decoration-animate::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: linear-gradient(90deg, transparent, #fe7f2d, transparent); animation: underline-grow 2s ease-out forwards; animation-delay: 2s; }
    @keyframes underline-grow { to { width: 100%; } }
    .ripple-effect { position: fixed; width: 4px; height: 4px; background: rgba(254, 127, 45, 0.6); border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; animation: pulse-glow 1s ease-out forwards; z-index: 9999; box-shadow: 0 0 10px rgba(254, 127, 45, 0.5); }
  `;

  return (
    <>
      <style>{pageStyles}</style>
      <div className="min-h-screen bg-black text-zinc-100 font-primary overflow-hidden relative border-none">
        
        {/* Responsive Main Content Padding */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between items-center px-6 py-10 sm:px-8 sm:py-12 md:px-16 md:py-20">
          <div className="text-center">
            <h2 className="text-xs sm:text-sm font-mono font-light text-zinc-400 uppercase tracking-[0.2em] opacity-80">
              <span className="word-animate" data-delay="0">Blockchain</span>
              <span className="word-animate" data-delay="200">&</span>
              <span className="word-animate" data-delay="400">Infrastructure</span>
            </h2>
            <div className="mt-4 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-30 mx-auto"></div>
          </div>

          <div className="text-center max-w-5xl mx-auto relative">
            {/* Responsive Main Heading Sizes */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight text-zinc-100 text-decoration-animate">
              <div className="mb-4 md:mb-6">
                <span className="word-animate" data-delay="800">Turning</span>
                <span className="word-animate" data-delay="950">complex</span>
                <span className="word-animate" data-delay="1100">blockchain</span>
                <span className="word-animate" data-delay="1250">challenges</span>
                <span className="word-animate" data-delay="1400">into</span>
                <span className="word-animate" data-delay="1550">elegant,</span>
                <span className="word-animate" data-delay="1700">secure</span>
                <span className="word-animate" data-delay="1850">solutions.</span>
              </div>
              {/* Responsive Secondary Heading Sizes & Added tracking-wide for letter spacing */}
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin text-zinc-400 leading-relaxed tracking-wide">
                <span className="word-animate" data-delay="2300">Building</span>
                <span className="word-animate" data-delay="2450">production-ready</span>
                <span className="word-animate" data-delay="2600">blockchain</span>
                <span className="word-animate" data-delay="2750">systems</span>
                <span className="word-animate" data-delay="2900">with</span>
                <span className="word-animate" data-delay="3050">Solidity</span>
                <span className="word-animate" data-delay="3200">and</span>
                <span className="word-animate" data-delay="3350">Web3.</span>
              </div>
            </h1>
            {/* Responsive Detail Line Offsets */}
            <div className="absolute -left-6 sm:-left-8 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-px bg-zinc-600 opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '3.5s' }}></div>
            <div className="absolute -right-6 sm:-right-8 top-1/2 transform -translate-y-1/2 w-3 sm:w-4 h-px bg-zinc-600 opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '3.7s' }}></div>
          </div>

          <div className="text-center">
            <div className="mb-4 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-30 mx-auto"></div>
            <h2 className="text-xs sm:text-sm font-mono font-light text-zinc-400 uppercase tracking-[0.2em] opacity-80">
              <span className="word-animate" data-delay="4200">Engineer.</span>
              <span className="word-animate" data-delay="4400">Auditor.</span>
              <span className="word-animate" data-delay="4600">Architect.</span>
            </h2>
            <div className="mt-6 flex justify-center space-x-4 opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '5s' }}>
              <div className="w-1 h-1 bg-zinc-600 rounded-full opacity-40"></div>
              <div className="w-1 h-1 bg-zinc-600 rounded-full opacity-60"></div>
              <div className="w-1 h-1 bg-zinc-600 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>

        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple-effect"
            style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
          ></div>
        ))}

      </div>
    </>
  );
};

export default DigitalSerenity;
