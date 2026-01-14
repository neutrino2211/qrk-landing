"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  enableGlitch?: boolean;
}

function getRandomScatter() {
  const x = (Math.random() - 0.5) * 200;
  const y = (Math.random() - 0.5) * 200;
  const r = (Math.random() - 0.5) * 60;
  return { x, y, r };
}

export function SplitText({
  text,
  className,
  staggerDelay = 0.04,
  enableGlitch = false,
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const scatterValues = useMemo(() => {
    return text.split("").map(() => getRandomScatter());
  }, [text]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("inline-block", className)}
      aria-label={text}
    >
      {text.split("").map((char, index) => {
        const scatter = scatterValues[index];
        const isSpace = char === " ";

        if (isSpace) {
          return (
            <span key={index} className="inline-block w-[0.3em]">
              &nbsp;
            </span>
          );
        }

        return (
          <span
            key={index}
            className={cn(
              "inline-block",
              isVisible && "animate-char-scatter",
              enableGlitch && "glitch-text"
            )}
            style={{
              ["--scatter-x" as string]: `${scatter?.x ?? 0}px`,
              ["--scatter-y" as string]: `${scatter?.y ?? 0}px`,
              ["--scatter-r" as string]: `${scatter?.r ?? 0}deg`,
              animationDelay: `${index * staggerDelay}s`,
            }}
            data-text={enableGlitch ? char : undefined}
            aria-hidden="true"
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}
