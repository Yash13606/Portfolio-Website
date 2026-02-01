'use client';

import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const CONSTANTS = {
  itemSize: 48,
  containerSize: 300,
  openStagger: 0.05,
  closeStagger: 0.05
};

const STYLES: Record<string, Record<string, string>> = {
  trigger: {
    container:
      'rounded-full flex items-center bg-white border border-white/10 justify-center cursor-pointer outline-none ring-0 hover:bg-zinc-200 transition-all duration-100 z-50 shadow-xl',
    active: 'bg-white'
  },
  item: {
    container:
      'rounded-full flex items-center justify-center absolute bg-zinc-900/80 backdrop-blur-md border border-white/10 hover:bg-flame-orange hover:border-flame-orange cursor-pointer shadow-lg transition-colors duration-200 text-white',
    label: 'text-xs font-bold text-white absolute left-1/2 -translate-x-1/2 -bottom-6 whitespace-nowrap bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm pointer-events-none'
  }
};

const pointOnCircle = (i: number, n: number, r: number) => {
  // Quarter circle: 0 to 90 degrees (0 to PI/2)
  // 0 degrees is strictly RIGHT (East)
  // 90 degrees is strictly DOWN (South) in CSS coordinates
  // We want to fan out from Right to Down.
  
  // Calculate angle. If n=1, angle is 45deg. If n>1, spread evenly.
  const startAngle = 0;
  const endAngle = Math.PI / 2;
  
  // Distribute n items between start and end
  // i / (n - 1) gives 0 to 1 mapping
  const theta = n > 1 
    ? startAngle + (endAngle - startAngle) * (i / (n - 1))
    : Math.PI / 4; // 45 deg if only 1 item

  const x = r * Math.cos(theta);
  const y = r * Math.sin(theta);
  
  return { x, y };
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  index: number;
  totalItems: number;
  isOpen: boolean;
}

const MenuItem = ({ icon, label, href, index, totalItems, isOpen }: MenuItemProps) => {
  // Pass radius. containerSize is diameter, so radius is half? 
  // The provided code used containerSize/2. Let's stick to that but maybe increase it slightly for the quarter feel if needed.
  const { x, y } = pointOnCircle(index, totalItems, CONSTANTS.containerSize / 1.5); // Push them out a bit more
  const [hovering, setHovering] = useState(false);

  return (
    <a 
      href={href} 
      className={STYLES.item.container}
      onClick={(e) => {
        // Smooth scroll if anchor link
        if (href.startsWith('#')) {
          e.preventDefault();
          document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      <motion.button
        animate={{
          x: isOpen ? x : 0,
          y: isOpen ? y : 0,
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.5
        }}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.1,
            delay: 0
          }
        }}
        transition={{
          delay: isOpen ? index * CONSTANTS.openStagger : (totalItems - index) * CONSTANTS.closeStagger,
          type: 'spring',
          stiffness: 200,
          damping: 20
        }}
        style={{
          height: CONSTANTS.itemSize,
          width: CONSTANTS.itemSize
        }}
        className={STYLES.item.container}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {icon}
        {hovering && <span className={STYLES.item.label}>{label}</span>}
      </motion.button>
    </a>
  );
};

interface MenuTriggerProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  itemsLength: number;
  closeAnimationCallback: () => void;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
}

const MenuTrigger = ({
  setIsOpen,
  isOpen,
  itemsLength,
  closeAnimationCallback,
  openIcon,
  closeIcon
}: MenuTriggerProps) => {
  const animate = useAnimationControls();

  // Simplified trigger animation for smoother feel
  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      closeAnimationCallback();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <motion.div className="z-[60]">
      <motion.button
        animate={animate}
        whileTap={{ scale: 0.9 }}
        style={{
          height: 56, // Slightly larger trigger
          width: 56
        }}
        className={cn(STYLES.trigger.container, isOpen && "bg-flame-orange border-flame-orange")}
        onClick={toggleMenu}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {isOpen ? (
            <motion.span
              key="menu-close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {closeIcon}
            </motion.span>
          ) : (
            <motion.span
              key="menu-open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {openIcon}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

interface CircleMenuProps {
  items: Array<{ label: string; icon: React.ReactNode; href: string }>;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
}

const CircleMenu = ({
  items,
  openIcon = <Menu size={24} className="text-black" />,
  closeIcon = <X size={24} className="text-black" />
}: CircleMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Position: Fixed Top Left
  return (
    <div ref={menuRef} className="fixed top-8 left-8 z-50">
      <div className="relative">
        <MenuTrigger
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          itemsLength={items.length}
          closeAnimationCallback={() => {}}
          openIcon={openIcon}
          closeIcon={closeIcon}
        />
        
        {/* Items Container */}
        <div className="absolute top-1/2 left-1/2 -z-10 w-0 h-0 pointer-events-none">
          {items.map((item, index) => {
            return (
               <div key={`wrapper-${index}`} className="pointer-events-auto">
                <MenuItem
                  key={`menu-item-${index}`}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  index={index}
                  totalItems={items.length}
                  isOpen={isOpen}
                />
               </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { CircleMenu };
