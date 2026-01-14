import { RevealOnScroll } from "./RevealOnScroll";

export function MissionSection() {
  return (
    <section className="min-h-screen py-32 relative overflow-hidden">
      {/* Giant decorative watermark */}
      <div className="absolute top-1/4 -left-[10%] watermark font-extralight text-foreground select-none">
        QRK
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Large statement - left side, offset up */}
          <RevealOnScroll
            animation="fade-left"
            className="col-span-12 md:col-span-7 lg:col-span-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight leading-[1.1] tracking-tight">
              Technology should{" "}
              <span className="italic font-light">amplify</span> human
              potential,{" "}
              <span className="text-muted-foreground">not replace it.</span>
            </h2>
          </RevealOnScroll>

          {/* Description - right side, offset down */}
          <RevealOnScroll
            animation="fade-right"
            delay={150}
            className="col-span-12 md:col-span-5 lg:col-span-5 lg:col-start-8 md:mt-32 lg:mt-48"
          >
            <div className="space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                At QRK, we build technology that puts humans first. From AI that
                augments creativity to platforms that connect communities across
                boundaries.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Based in Abuja, Nigeria, we are pioneering the future of
                human-centric tech for Africa and beyond.
              </p>

              {/* Decorative accent */}
              <div className="pt-4">
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Floating accent elements */}
      <div className="absolute top-1/2 right-[5%] w-64 h-64 rounded-full bg-gradient-to-br from-chart-2/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[15%] w-48 h-48 rounded-full bg-gradient-to-tr from-chart-1/5 to-transparent blur-3xl pointer-events-none" />
    </section>
  );
}
