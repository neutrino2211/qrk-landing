"use client";

import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors cursor-pointer"
      aria-label="Scroll to next section"
    >
      <span className="text-xs font-light tracking-widest uppercase">
        Scroll
      </span>
      <ChevronDown className="w-5 h-5 animate-bounce-down" />
    </button>
  );
}
