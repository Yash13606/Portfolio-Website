import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  className?: string; // Allow custom classes
}

// The main reusable Hero Section component (Adapted for Section Usage)
export const MinimalistHero = ({
  children,
  imageSrc,
  imageAlt,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex w-full flex-col items-center justify-center overflow-hidden bg-transparent p-0 font-sans',
        className
      )}
    >
      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl grid-cols-1 items-center md:grid-cols-2 gap-12 md:gap-8">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          {children}
        </motion.div>

        {/* Center Image with Glow & Cutout */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-[500px]">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative flex items-center justify-center w-[480px] h-[480px]"
            >


                {/* Profile Image (Transparent PNG) */}
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="relative w-[400px] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
                />
            </motion.div>
        </div>
      </div>
    </div>
  );
};
