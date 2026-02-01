"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  metadata?: string;
};

type FeaturesSectionProps = {
  features: FeatureItem[];
  className?: string;
};

export function FeaturesSectionWithHoverEffects({ features, className }: FeaturesSectionProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto", className)}>
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} total={features.length} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon: Icon,
  iconColor = "text-flame-orange",
  metadata,
  index,
  total,
}: FeatureItem & { index: number; total: number }) => {
  const isFirstCol = index % 3 === 0;
  const isLastRow = index >= Math.floor((total - 1) / 3) * 3;

  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-white/10",
        isFirstCol && "lg:border-l border-white/10",
        !isLastRow && "lg:border-b border-white/10"
      )}
    >
      {!isLastRow && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-flame-orange/10 to-transparent pointer-events-none" />
      )}
      {isLastRow && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-flame-orange/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-12">
        <Icon className={cn("size-6", iconColor)} strokeWidth={1.5} />
      </div>
      <div className="text-xl font-semibold mb-2 relative z-10 px-12">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-flame-orange transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      {metadata && (
        <p className="text-sm text-white/70 mb-3 relative z-10 px-12">
          {metadata}
        </p>
      )}
      <p className="text-xs text-white/60 relative z-10 px-12 leading-relaxed mt-2">
        {description}
      </p>
    </div>
  );
};
