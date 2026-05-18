"use client";

import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    year: "2024",
    role: "Creative Director",
    company: "Nexus Studios",
    description:
      "Leading a team of 12 designers and strategists, delivering award-winning campaigns for Fortune 500 clients.",
    highlight: true,
  },
  {
    year: "2021",
    role: "Senior Design Lead",
    company: "Digital Pulse",
    description:
      "Spearheaded the redesign of flagship products, increasing user engagement by 340% across platforms.",
    highlight: false,
  },
  {
    year: "2018",
    role: "Art Director",
    company: "Horizon Creative",
    description:
      "Directed visual identity systems for emerging tech startups, establishing brand foundations that scaled.",
    highlight: false,
  },
  {
    year: "2015",
    role: "Designer",
    company: "Studio Forma",
    description:
      "Began my journey crafting digital experiences, learning the fundamentals of user-centered design.",
    highlight: false,
  },
];

export function BackgroundSection() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = timelineRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setActiveIndex((prev) => Math.max(prev, index));
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background continuity with image anchor */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 60% 40% at 80% 50%, oklch(0.2 0.02 260 / 0.5) 0%, transparent 70%)`,
          }}
        />
        {/* Blended visual anchor - frosted glass collaboration */}
        <div className="absolute right-0 top-1/4 w-1/2 h-2/3 overflow-hidden opacity-20 hidden lg:block">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-robson-zuccolotto-3214763-5496969-4BxCmSeyOedXdH0H6txGHSo6fmGa9k.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{
              maskImage: 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header - offset to the left */}
        <div className="max-w-3xl mb-24 md:mb-32">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            Professional Journey
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight text-balance">
            A decade of
            <span className="block text-primary"> purposeful growth</span>
          </h2>
        </div>

        {/* Timeline with integrated visual flow */}
        <div className="relative">
          {/* Vertical line connecting all entries */}
          <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px">
            <div
              className="absolute inset-0 bg-gradient-to-b from-primary via-border to-transparent transition-all duration-1000"
              style={{
                clipPath: `inset(0 0 ${Math.max(0, 100 - (activeIndex + 1) * 30)}% 0)`,
              }}
            />
          </div>

          {/* Timeline entries */}
          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, index) => {
              const isActive = index <= activeIndex;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    timelineRefs.current[index] = el;
                  }}
                  className={`relative pl-8 md:pl-0 md:grid md:grid-cols-4 md:gap-12 transition-all duration-1000`}
                  style={{
                    opacity: isActive ? 1 : 0.3,
                    transform: `translateX(${isActive ? 0 : -20}px)`,
                  }}
                >
                  {/* Year marker */}
                  <div className="md:text-right">
                    <span
                      className={`text-2xl md:text-3xl font-light transition-colors duration-500 ${
                        item.highlight ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 md:relative md:left-auto flex items-start justify-center">
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        item.highlight
                          ? "bg-primary shadow-[0_0_20px_rgba(255,200,150,0.4)]"
                          : isActive
                          ? "bg-muted-foreground"
                          : "bg-border"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 mt-4 md:mt-0">
                    <h3 className="text-xl md:text-2xl font-light text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-primary/80 text-sm tracking-wide">
                      {item.company}
                    </p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Flowing transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
