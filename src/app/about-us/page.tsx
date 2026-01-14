import { Code, Shield, Database, Cpu, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  RevealOnScroll,
  SplitText,
  FloatingShapes,
} from "@/components/landing";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
        <FloatingShapes />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-5xl">
            <SplitText
              text="WHO ARE WE?"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-tighter leading-[0.9]"
              staggerDelay={0.04}
              enableGlitch
            />

            <RevealOnScroll animation="fade-up" delay={400}>
              <p className="mt-8 md:mt-12 text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">
                A technology research lab from Abuja, Nigeria, building software
                that puts humans first.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* The Team Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <RevealOnScroll
              animation="fade-left"
              className="col-span-12 lg:col-span-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight leading-tight mb-8">
                A small team of{" "}
                <span className="italic font-light">engineers</span>
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-base md:text-lg leading-relaxed">
                  We work across web development, cybersecurity, and software
                  infrastructure. Our backgrounds cover frontend design, backend
                  systems, security tooling, and data processing.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Collectively, we&apos;ve built and maintained products ranging
                  from user-facing web apps to national-scale systems for
                  e-commerce and security.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll
              animation="fade-right"
              delay={150}
              className="col-span-12 lg:col-span-5 lg:col-start-8"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, label: "React & TypeScript" },
                  { icon: Shield, label: "Security Systems" },
                  { icon: Database, label: "Data Pipelines" },
                  { icon: Cpu, label: "Rust & Go" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="p-6 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm group hover:border-primary/30 transition-colors"
                  >
                    <Icon
                      className="w-8 h-8 mb-3 text-foreground/60 group-hover:text-foreground/80 transition-colors"
                      strokeWidth={1}
                    />
                    <span className="text-sm text-muted-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-destructive/[0.02] to-transparent">
        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 watermark font-extralight text-foreground select-none">
          WHY
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <RevealOnScroll className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight tracking-tight leading-tight">
              Technology no longer{" "}
              <span className="italic font-light text-destructive/80">
                helps
              </span>{" "}
              humanity
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <RevealOnScroll
              animation="fade-up"
              className="col-span-12 md:col-span-6"
            >
              <div className="p-8 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm h-full">
                <h3 className="text-xl md:text-2xl font-light mb-4">
                  The Promise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Social media enabled connecting with people across the world.
                  AI and automation have the potential to ease the lives of
                  many. Technology promised great leaps in our standard of
                  living.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll
              animation="fade-up"
              delay={150}
              className="col-span-12 md:col-span-6"
            >
              <div className="p-8 rounded-2xl border border-destructive/20 bg-destructive/[0.02] backdrop-blur-sm h-full">
                <h3 className="text-xl md:text-2xl font-light mb-4">
                  The Reality
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Endless tracking and surveillance. Misinformation at scale.
                  Misleading AI-generated content. Algorithms optimizing for
                  engagement over wellbeing. Technology creating new risks that
                  threaten our communities.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll animation="fade-up" delay={300} className="mt-12 md:mt-16">
            <p className="text-center text-xl md:text-2xl font-light text-foreground/80 max-w-3xl mx-auto">
              It&apos;s clear that technology alone is not enough. We need to
              bring back what we&apos;ve lost.{" "}
              <span className="italic">We need to bring back humanity.</span>
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-12 gap-8 md:gap-16 items-center">
            <RevealOnScroll
              animation="fade-left"
              className="col-span-12 lg:col-span-5"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight leading-tight">
                Our approach
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-chart-2 to-chart-2/20 rounded-full mt-6" />
            </RevealOnScroll>

            <RevealOnScroll
              animation="fade-right"
              delay={150}
              className="col-span-12 lg:col-span-6 lg:col-start-7"
            >
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-border/40 flex items-center justify-center text-lg font-light">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">Human-Centered</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Starting with small projects where the human is the focus.
                      How they want to use it. How it affects their lives.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-border/40 flex items-center justify-center text-lg font-light">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">Mutual Value</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Providing value under conditions that feel mutually
                      beneficial. Good old trade and barter. No dark patterns.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-border/40 flex items-center justify-center text-lg font-light">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">Collaboration</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Networking with other professionals to collaborate on
                      solutions. Building together, not in isolation.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Honesty Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <RevealOnScroll className="max-w-3xl mx-auto text-center">
            <div className="p-8 md:p-12 rounded-3xl border border-border/40 bg-card/30 backdrop-blur-sm">
              <Users
                className="w-12 h-12 mx-auto mb-6 text-foreground/60"
                strokeWidth={1}
              />
              <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80">
                &ldquo;Nothing is set in stone. We honestly don&apos;t know what
                we are doing, but we want to try.&rdquo;
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                — The QRK Team
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden cta-diagonal-bg">
        <div className="container mx-auto px-4 md:px-8">
          <RevealOnScroll className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight">
              Want to build with us?
            </h2>
            <p className="text-lg text-muted-foreground">
              We&apos;re always looking for collaborators who share our vision
              for human-centric technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="cta-button-pulse px-8 py-6 text-base"
                asChild
              >
                <Link href="mailto:hello@qrk.ng">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base"
                asChild
              >
                <Link href="https://github.com/qrk-tech" target="_blank">
                  View Our Work
                </Link>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
