"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; 

export interface Stat {
  icon: React.ReactNode;
  label: string;
}

export interface AnimatedHikeCardProps {
  title: string;
  images: string[];
  stats: Stat[];
  description: string;
  href: string;
  className?: string;
}

export const AnimatedHikeCard = React.forwardRef<
  HTMLAnchorElement,
  AnimatedHikeCardProps
>(({ title, images, stats, description, href, className }, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      className={cn(
        "group relative flex flex-col w-full h-full cursor-pointer rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm p-6 shadow-lg shadow-black/40 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-flame-orange/40 hover:shadow-xl hover:shadow-black/50 overflow-hidden",
        className
      )}
      aria-label={`Learn more about ${title}`}
    >
      {/* Top Right Arrow Button - Absolute */}
      <div className="absolute top-6 right-6 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-flame-orange/10 text-flame-orange opacity-100 transition-all duration-300 group-hover:bg-flame-orange group-hover:text-white group-hover:rotate-45">
        <ArrowRight className="h-4 w-4" />
      </div>

      {/* Stacking Image Animation Container */}
      <div className="relative mb-6 h-40 w-full pl-4 cursor-default">
        {images.map((src, index) => (
          <div
            key={index}
            className={cn(
              "absolute h-full w-[45%] overflow-hidden rounded-xl border-2 border-zinc-900/80 shadow-md transition-all duration-500 ease-out",
              // On hover, apply transforms using the CSS variables
              "group-hover:translate-x-[var(--tx)] group-hover:rotate-[var(--r)]"
            )}
            style={{
              // Set initial transform for the stacked look
              transform: `translateX(${index * 35}px) rotate(${index * 3}deg)`,
              // Define CSS variables for the hover state transforms
              '--tx': `${index * 85}px`,
              '--r': `${(index * 4) - 4}deg`,
              zIndex: images.length - index,
            } as React.CSSProperties}
          >
             <img
                src={src}
                alt={`${title} view ${index + 1}`}
                className="h-full w-full object-cover"
             />
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow space-y-4">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-flame-orange transition-colors duration-300">
          {title}
        </h2>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="inline-flex items-center space-x-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-flame-orange border border-white/5"
            >
              {stat.icon}
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      </div>
    </a>
  );
});

AnimatedHikeCard.displayName = "AnimatedHikeCard";
