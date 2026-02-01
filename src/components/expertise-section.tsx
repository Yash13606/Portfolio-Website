"use client";
import React from "react";
import { ScrollDrivenSkills } from "@/components/ui/scroll-driven-skills";

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="pt-0 pb-0 max-w-6xl mx-auto px-6">
      <div className="w-full relative z-20">
        <ScrollDrivenSkills />
      </div>
    </section>
  );
}
