"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GradualSpacing } from "@/components/ui/gradual-spacing";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkillDomain {
  id: string;
  name: string;
  skills: string[];
}

const domains: SkillDomain[] = [
  {
    id: "blockchain",
    name: "Blockchain & Web3",
    skills: ["Solidity", "Smart Contracts", "Foundry", "Ethereum", "Web3.js", "DApp Development", "Chainlink Oracles"]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "EJS", "Responsive Design"]
  },
  {
    id: "backend",
    name: "Backend & Databases",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Server-Side Rendering", "MongoDB", "PostgreSQL", "SQL"]
  },
  {
    id: "ecosystems",
    name: "Blockchain Ecosystems",
    skills: ["Ethereum", "Polygon", "Chainlink (VRF, Price Feeds, CCIP)", "Layer 2 Solutions"]
  },
  {
    id: "cloud",
    name: "Cloud Platforms",
    skills: ["AWS (EC2, S3, Lambda, RDS, DynamoDB)", "Oracle Cloud Infrastructure (OCI)"]
  },
  {
    id: "languages",
    name: "Programming Languages",
    skills: ["Solidity", "JavaScript", "Python", "Java", "SQL", "C++"]
  }
];

export const ScrollDrivenSkills = () => {
  const [activeDomainId, setActiveDomainId] = useState(domains[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<globalThis.ScrollTrigger | null>(null);
  const isNavigating = useRef(false);

  useGSAP(() => {
    if (!containerRef.current) return;

    const domainCount = domains.length;

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top", // Start pinning when top of container hits top of viewport
      end: "+=3000",   // Scroll for 3000px
      pin: true,       // Pin the container
      scrub: true,     // Scrub progress
      onUpdate: (self) => {
        if (isNavigating.current) return; // Skip updates during click navigation

        // Calculate index based on scroll progress (0 to 1)
        const index = Math.min(
          Math.floor(self.progress * domainCount),
          domainCount - 1
        );
        setActiveDomainId(domains[index].id);
      },
    });
    
    scrollTriggerRef.current = st;

  }, { scope: containerRef }); // Scope cleanups to container

  const handleDomainClick = (index: number) => {
      if (scrollTriggerRef.current) {
          isNavigating.current = true;
          setActiveDomainId(domains[index].id); // Instant update

          const st = scrollTriggerRef.current;
          const progress = (index + 0.5) / domains.length;
          const targetScroll = st.start + (st.end as number - st.start) * progress;
          
          window.scrollTo({
              top: targetScroll,
              behavior: 'smooth'
          });

          // Reset navigation lock after scroll (approx 1s)
          setTimeout(() => {
              isNavigating.current = false;
          }, 1000);
      }
  };

  const activeDomain = domains.find(d => d.id === activeDomainId) || domains[0];

  return (
    // The container that gets pinned. 
    // It should be h-screen to fill the viewport when pinned.
    <div ref={containerRef} className="relative w-full h-screen flex flex-col items-center pt-12 justify-start overflow-hidden">
      
      {/* Header (Pinned) */}
      <div className="text-center mb-2 relative z-10">
          <div className="w-[60px] h-[2px] bg-flame-orange mx-auto mb-5" />
          <p className="text-flame-orange text-xs font-semibold uppercase tracking-[3px] mb-6">EXPERTISE</p>
          <GradualSpacing 
              text="Technical Arsenal"
              className="text-4xl md:text-6xl font-bold tracking-tight text-white font-playfair"
          />
          <div className="w-[80px] h-[3px] bg-flame-orange mx-auto rounded-sm mt-6" />
          <div className="animate-bounce text-zinc-500 text-xs mt-4">↓ Scroll to Explore</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-4 max-w-6xl mx-auto px-6 w-full h-full">
          
        {/* LEFT: Domain Navigator */}
        <div className="hidden md:flex flex-col space-y-6 justify-center">
             {domains.map((domain, index) => {
                 const isActive = activeDomainId === domain.id;
                 return (
                     <div 
                        key={domain.id}
                        className={cn(
                            "text-3xl font-bold cursor-pointer transition-all duration-300 relative pl-4 z-20",
                            isActive ? "text-flame-orange scale-105" : "text-zinc-500 hover:text-zinc-300"
                        )}
                        onClick={() => handleDomainClick(index)}
                     >
                        {isActive && (
                            <motion.div 
                                layoutId="activeGlow"
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full bg-flame-orange/80 blur-[8px] rounded-lg"
                                transition={{ duration: 0.3 }}
                            />
                        )}
                        {isActive && (
                            <motion.div 
                                layoutId="activeBar"
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-flame-orange rounded-full"
                                transition={{ duration: 0.3 }}
                            />
                        )}
                        {domain.name}
                     </div>
                 );
             })}
        </div>

        {/* RIGHT: Dynamic Animated Card */}
        <div className="flex flex-col items-center justify-center relative">
            
            {/* Background Glow for Depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-flame-orange/5 rounded-full blur-[80px] -z-10" />

            {/* Mobile Header (Sticky inside visible area) */}
            <div className="md:hidden w-full mb-8 text-center sticky top-20 z-20">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-flame-orange text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    {activeDomain.name}
                </span>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeDomain.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative w-full max-w-lg bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-[28px] p-12 shadow-[0_20px_80px_rgba(255,140,0,0.05)] overflow-hidden flex flex-col items-start"
                >
                    {/* Soft Light Sweep */}
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,140,0,0.03),transparent)] pointer-events-none" />

                    {/* Mobile Header (Sticky inside visible area) - Positioned relative now */}
                    <h3 className="md:hidden text-lg font-bold text-white mb-6 tracking-wide self-center z-10">
                        {activeDomain.name}
                    </h3>
                    
                    {/* Module Header */}
                    <div className="w-full flex items-center justify-between mb-8 relative z-10">
                        <h3 className="text-sm tracking-[0.3em] text-orange-400 font-bold">
                            TECHNICAL TOOLKIT
                        </h3>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-orange-400/30 to-transparent ml-6" />
                    </div>

                    <div className="relative z-10 w-full flex flex-col items-start text-left">
                        {/* Section Category Label */}
                        <p className="text-xs text-white/40 mb-6 tracking-wider uppercase font-mono">
                            Core Stack
                        </p>

                        <div className="flex flex-wrap gap-3">
                             {activeDomain.skills.map((skill, i) => (
                                 <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.04 + 0.1 }}
                                    className="px-5 py-2.5 text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-full cursor-default"
                                 >
                                     {skill}
                                 </motion.span>
                             ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
