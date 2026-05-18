"use client";

import { useEffect, useRef, useState } from "react";
import { Layers, Compass, Sparkles, Target } from "lucide-react";

const competencies = [
  {
    icon: Compass,
    title: "Strategic Vision",
    description:
      "Translating business objectives into compelling narratives that resonate with audiences and drive measurable outcomes.",
    accent: "from-primary/30 to-primary/5",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Building scalable, cohesive design languages that maintain brand integrity across every touchpoint.",
    accent: "from-muted/40 to-muted/10",
  },
  {
    icon: Sparkles,
    title: "Creative Direction",
    description:
      "Orchestrating multidisciplinary teams to deliver breakthrough campaigns that capture attention and inspire action.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Target,
    title: "Digital Innovation",
    description:
      "Pioneering interactive experiences that push boundaries while remaining grounded in user-centered principles.",
    accent: "from-muted/30 to-muted/5",
  },
];

export function CompetenciesSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Continuous background flow */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.75 0.12 45 / 0.08) 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Section header */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            Core Strengths
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight text-balance">
            Where craft meets
            <span className="block text-primary"> intention</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Every project is an opportunity to merge analytical thinking with creative
            intuition—building work that&apos;s both beautiful and effective.
          </p>
        </div>
      </div>

      {/* Competencies grid with flowing layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-1">
          {competencies.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleItems.includes(index);
            const isOdd = index % 2 === 1;

            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`group relative p-8 md:p-12 transition-all duration-1000 ${
                  isOdd ? "md:translate-y-16" : ""
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: `translateY(${isVisible ? 0 : 40}px) ${
                    isOdd ? "translateY(4rem)" : ""
                  }`,
                }}
              >
                {/* Subtle background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-sm`}
                />

                {/* Content */}
                <div className="relative">
                  {/* Icon with accent */}
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Icon className="relative w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-light text-foreground mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Subtle bottom border */}
                  <div className="mt-8 h-px bg-gradient-to-r from-border via-transparent to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Transition element flowing to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/30 to-transparent" />
      </div>
    </section>
  );
}