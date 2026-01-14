import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "./RevealOnScroll";

export function CTASection() {
  return (
    <section className="min-h-[80vh] cta-diagonal-bg relative overflow-hidden flex items-center">
      {/* Oversized background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="watermark font-extralight tracking-tighter text-foreground">
          JOIN
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <RevealOnScroll>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[1.1] tracking-tight">
              Ready to build the{" "}
              <span className="font-light italic">future</span>?
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto">
              Join us in creating technology that serves humanity. Let&apos;s
              build something meaningful together.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-8">
              <Button
                size="lg"
                className="cta-button-pulse px-8 md:px-12 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto"
                asChild
              >
                <Link href="mailto:hello@qrk.ng">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 md:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto"
                asChild
              >
                <Link href="/about-us">Learn About Us</Link>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Corner gradient accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-chart-2/5 to-transparent pointer-events-none" />
    </section>
  );
}
