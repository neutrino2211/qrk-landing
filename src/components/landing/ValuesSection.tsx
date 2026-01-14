import { Lightbulb, Heart, Target } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

export function ValuesSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section header - off-center */}
        <RevealOnScroll className="mb-16 md:mb-24 md:ml-[5%]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight">
            What drives us
          </h2>
          <p className="text-muted-foreground mt-3 md:mt-4 max-w-md text-sm md:text-base">
            Our core values shape every decision we make and every product we
            build.
          </p>
        </RevealOnScroll>

        {/* Values - staggered asymmetric layout */}
        <div className="space-y-16 md:space-y-24">
          {/* Innovation - Full width, left-aligned */}
          <RevealOnScroll animation="fade-left">
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="col-span-12 md:col-span-7 lg:col-span-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 text-foreground/70">
                    <Lightbulb className="w-full h-full" strokeWidth={0.75} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">
                      Innovation
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                      Pioneering technology solutions that prioritize human
                      experience over algorithmic efficiency. From AI research to
                      user-centric design, we push boundaries while keeping
                      humanity at the center.
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-chart-1 to-chart-1/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Humanity - Right-aligned */}
          <RevealOnScroll animation="fade-right" delay={100}>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="col-span-12 md:col-span-7 lg:col-span-6 md:col-start-6 lg:col-start-7">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 text-foreground/70">
                    <Heart className="w-full h-full" strokeWidth={0.75} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">
                      Humanity
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                      Technology should serve people, not the other way around.
                      We design with empathy, ensuring every product we build
                      respects and elevates the human experience.
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-chart-2 to-chart-2/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Impact - Left-aligned, offset */}
          <RevealOnScroll animation="fade-left" delay={200}>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="col-span-12 md:col-span-7 lg:col-span-6 md:col-start-2 lg:col-start-3">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 text-foreground/70">
                    <Target className="w-full h-full" strokeWidth={0.75} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">
                      Impact
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                      Creating meaningful change through thoughtful solutions.
                      We measure success not just in metrics, but in the real
                      difference we make in people&apos;s lives across Africa and
                      beyond.
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-chart-4 to-chart-4/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Background accents */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-bl from-chart-1/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-chart-2/5 to-transparent blur-3xl pointer-events-none" />
    </section>
  );
}
