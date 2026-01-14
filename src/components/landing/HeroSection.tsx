"use client";

import { FloatingShapes } from "./FloatingShapes";
import { SplitText } from "./SplitText";
import { ScrollIndicator } from "./ScrollIndicator";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <FloatingShapes />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-12 gap-4">
          {/* Main headline - asymmetric positioning */}
          <div className="col-span-12 lg:col-span-10 xl:col-span-9">
            <h1 className="space-y-2">
              <SplitText
                text="LIBERATE"
                className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extralight tracking-tighter leading-[0.9]"
                staggerDelay={0.03}
                enableGlitch
              />
              <SplitText
                text="THE HUMAN"
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95] text-foreground/80"
                staggerDelay={0.025}
              />
            </h1>
          </div>

          {/* Tagline - offset to the right */}
          <div className="col-span-12 md:col-start-5 md:col-span-8 lg:col-start-6 lg:col-span-6 mt-12 md:mt-16">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-primary/40" />
              <p className="text-base md:text-lg text-muted-foreground font-light tracking-wide animate-fade-in stagger-5">
                Tech For Humanity
              </p>
            </div>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
