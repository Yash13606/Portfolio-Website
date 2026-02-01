"use client" 

import * as React from "react"
 
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
 
export interface MagicTextProps {
  text: string;
}
 
import { cn } from "@/lib/utils";

// ...

interface WordProps {
  children: string;
  progress: any;
  range: number[];
  className?: string;
}

const Word: React.FC<WordProps> = ({ children, progress, range, className }) => {
  const opacity = useTransform(progress, range, [0, 1]);
 
  return (
    <span className={cn("relative mt-[12px] mr-1 text-base md:text-lg leading-[1.8] font-normal inline-block text-text-light", className)}>
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
 
export const MagicText: React.FC<MagicTextProps & { className?: string }> = ({ text, className }) => {
  const container = useRef(null);
 
  const { scrollYProgress } = useScroll({
    target: container,
 
    offset: ["start 0.6", "start 0.25"],
  });
  
  const words = text.split(" ");
 
  return (
    <p ref={container} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
 
        const end = start + 1 / words.length;
 
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};
