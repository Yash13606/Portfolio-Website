"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function TextRevealCardDemo() {
  return (
    <div className="flex items-center justify-center bg-deep-black min-h-[40rem] rounded-2xl w-full py-20">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry"
        className="max-w-[90%] md:max-w-[40rem]"
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
