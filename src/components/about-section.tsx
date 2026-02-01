"use client"

import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { MagicText } from "@/components/ui/magic-text";
import { GradualSpacing } from './ui/gradual-spacing';




import { MinimalistHero } from "@/components/ui/minimalist-hero";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);



  // GSAP for About Hero Pinning
  const heroRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;
    
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "+=500", // "Lock" for 500px of scroll
      pin: true,
      pinSpacing: true,
      scrub: true, // Smooth scrubbing
    });
  }, { scope: heroRef });

  return (
    <section id="about" className="relative bg-transparent overflow-clip pt-0">
      
      {/* Small Top Fade Layer (Independent) */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#0a0a0b] to-transparent pointer-events-none z-20" />
      
      {/* Pinned Hero Section */}
      <div ref={heroRef} className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center bg-transparent">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="w-[60px] h-[2px] bg-flame-orange mx-auto mb-5" />
            <p className="text-flame-orange text-xs font-semibold uppercase tracking-[3px] mb-6">WHO I AM</p>
            <GradualSpacing 
              text="About Me"
              className="text-4xl md:text-6xl font-bold tracking-tight text-white font-playfair"
            />
            <div className="w-[80px] h-[3px] bg-flame-orange mx-auto rounded-sm mt-6" />
          </div>

          {/* Minimalist Profile Integration */}
          <div className="w-full max-w-[1100px] mx-auto">
              <MinimalistHero 
                  imageSrc="/profile.png"
                  imageAlt="Profile Portrait"
              >
                <div className="space-y-6">
                  <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                    I BUILD SCALABLE <br />
                    <span className="text-flame-orange">DIGITAL SYSTEMS</span>
                  </h1>

                  <p className="text-lg text-zinc-300 max-w-xl">
                    Blockchain engineer focused on smart contracts, Web3 infrastructure, and production-grade applications.
                  </p>
                </div>
              </MinimalistHero>
          </div>
      </div>



      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-on-scroll {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
