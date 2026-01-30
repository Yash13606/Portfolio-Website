"use client"

import React, { useEffect } from 'react';
import { GradualSpacing } from './ui/gradual-spacing';
import { GlowCard } from './ui/spotlight-card';

import { HoverSlider, HoverSliderContent, HoverSliderImageWrap, TextStaggerHover } from './ui/animated-slideshow';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';

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



  return (
    <section id="about" className="relative bg-transparent overflow-hidden">
      


      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]"
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }} 
      />

      <div className="relative z-10 px-6 pt-[60px] pb-[80px]">
        {/* Section Header */}
        <div className="text-center mb-[60px]">
          <div className="w-[60px] h-[2px] bg-[#FE7F2D] mx-auto mb-5" />
          <p className="text-[#FE7F2D] text-xs font-semibold uppercase tracking-[3px] mb-6">WHO I AM</p>
          <GradualSpacing 
            text="About Me"
            className="text-white text-5xl md:text-6xl font-extrabold tracking-tight"
            duration={0.5}
            delayMultiple={0.08}
          />
          <div className="w-[80px] h-[3px] bg-[#FE7F2D] mx-auto rounded-sm mt-6" />
        </div>

        {/* Profile Photo + Introduction */}
        <div className="max-w-[1100px] mx-auto mb-[80px]">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Profile Photo */}
            <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] flex-shrink-0">
              <div className="relative w-full h-full rounded-2xl border-2 border-[#FE7F2D] bg-[#1a1a1c] overflow-hidden shadow-[0_0_30px_rgba(254,127,45,0.3)] flex items-center justify-center">
                {/* Professional user icon SVG */}
                <svg className="w-32 h-32 md:w-40 md:h-40 text-[#FE7F2D] opacity-60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="flex-1 max-w-[600px] text-left">
              <p className="text-[#C4C4C4] text-base md:text-lg leading-[1.8] font-normal">
                Blockchain and Full-Stack Developer with hands-on experience building secure smart contracts, decentralized applications, and production-ready web applications. Specialized in Solidity development, smart contract security, and full-stack Web3 integration.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Interactive Slideshow */}
        <div className="max-w-[1100px] mx-auto mb-[80px]">
          <HoverSlider className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              
              {/* Left Side: Categories List */}
              <div className="flex flex-col space-y-6 w-full md:w-5/12 pl-4 md:pl-0">
                <h3 className="text-[#FE7F2D] text-xs font-semibold uppercase tracking-[3px] mb-2">MY EXPERTISE</h3>
                {[
                  "BLOCKCHAIN & WEB3",
                  "FRONTEND DEV",
                  "BACKEND DEV",
                  "TOOLS & CLOUD"
                ].map((title, index) => (
                  <TextStaggerHover
                    key={index}
                    index={index}
                    className="cursor-pointer text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white hover:text-[#FE7F2D] transition-colors"
                    text={title}
                  />
                ))}
              </div>

              {/* Right Side: Detailed Cards */}
              <HoverSliderImageWrap className="w-full md:w-6/12 min-h-[400px]">
                {[
                  // 1. Blockchain
                  {
                    icon: "⛓️",
                    title: "BLOCKCHAIN & WEB3",
                    skills: ["Solidity", "Smart Contracts", "Foundry", "Ethereum", "Web3.js", "DApps", "Chainlink"]
                  },
                  // 2. Frontend
                  {
                    icon: "🎨",
                    title: "FRONTEND DEV",
                    skills: ["React", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Next.js", "Framer Motion"]
                  },
                  // 3. Backend
                  {
                    icon: "⚙️",
                    title: "BACKEND DEV",
                    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "SQL", "SSR"]
                  },
                  // 4. Tools
                  {
                    icon: "🛠️",
                    title: "TOOLS & CLOUD",
                    skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "CI/CD", "Postman"]
                  }
                ].map((item, index) => (
                  <HoverSliderContent key={index} index={index} className="w-full h-full flex items-center justify-center">
                    <CardContainer className="inter-var w-full h-full" containerClassName="w-full h-full py-0">
                      <CardBody className="bg-[#1c1c1e] relative group/card dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.1] dark:bg-[#1c1c1e] dark:border-[rgba(254,127,45,0.2)] border-black/[0.1] w-full h-auto rounded-xl p-8 border border-[rgba(254,127,45,0.15)] flex flex-col justify-center">
                        
                        <CardItem translateZ="50" className="text-4xl mb-6">
                            {item.icon}
                        </CardItem>
                        
                        <CardItem
                          as="h3"
                          translateZ="60"
                          className="text-white text-2xl font-bold uppercase tracking-wide mb-6"
                        >
                          {item.title}
                        </CardItem>
                        
                        <CardItem
                          translateZ="40"
                          className="flex flex-wrap gap-2 mt-2"
                        >
                          {item.skills.map((skill, i) => (
                             <span 
                                key={i}
                                className="px-4 py-2 rounded-full border border-[rgba(254,127,45,0.3)] bg-[rgba(254,127,45,0.05)] text-[#C4C4C4] text-sm font-medium hover:bg-[rgba(254,127,45,0.1)] hover:text-white transition-colors"
                             >
                               {skill}
                             </span>
                          ))}
                        </CardItem>
                        
                      </CardBody>
                    </CardContainer>
                  </HoverSliderContent>
                ))}
            </HoverSliderImageWrap>
            </div>
          </HoverSlider>
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
