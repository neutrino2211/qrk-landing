import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const valueCardVariants = cva(
  "group relative p-6 md:p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500",
  {
    variants: {
      size: {
        large: "col-span-2 row-span-2",
        medium: "col-span-2 row-span-1 md:col-span-2",
        small: "col-span-1 row-span-1",
        full: "col-span-2",
      },
      hover: {
        tilt: "hover:rotate-1 hover:scale-[1.02]",
        lift: "hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5",
        glow: "hover:border-primary/40 hover:shadow-[0_0_40px_-10px_var(--card-accent)]",
        none: "",
      },
    },
    defaultVariants: {
      size: "medium",
      hover: "lift",
    },
  }
);

interface ValueCardProps
  extends VariantProps<typeof valueCardVariants> {
  icon: ReactNode;
  title: string;
  description: string;
  hiddenContent?: string;
  className?: string;
  accentClass?: string;
}

export function ValueCard({
  icon,
  title,
  description,
  hiddenContent,
  className,
  accentClass,
  size,
  hover,
}: ValueCardProps) {
  return (
    <div
      className={cn(
        valueCardVariants({ size, hover }),
        accentClass,
        className
      )}
      data-slot="value-card"
    >
      {/* Accent gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--card-accent)]/0 to-[var(--card-accent)]/0 group-hover:from-[var(--card-accent)]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-4 md:mb-6 text-foreground/70 group-hover:text-foreground transition-colors">
          <div className="w-10 h-10 md:w-12 md:h-12">{icon}</div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-light mb-2 md:mb-3 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
          {description}
        </p>

        {/* Hidden content that reveals on hover */}
        {hiddenContent && (
          <p className="text-sm text-muted-foreground/80 mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {hiddenContent}
          </p>
        )}
      </div>
    </div>
  );
}

export { valueCardVariants };
