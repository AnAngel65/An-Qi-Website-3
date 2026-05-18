"use client";

import { useState, useEffect, useRef } from "react";
import { Compass, Briefcase, MessageSquare, Wrench, X, ChevronRight } from "lucide-react";

interface HubItem {
  id: string;
  icon: typeof Compass;
  title: string;
  subtitle: string;
  accent: string;
}

const hubItems: HubItem[] = [
  {
    id: "competencies",
    icon: Compass,
    title: "Expertise",
    subtitle: "Core strengths & approach",
    accent: "from-primary/20 to-primary/5",
  },
  {
    id: "experience",
    icon: Briefcase,
    title: "Experience",
    subtitle: "Journey & credentials",
    accent: "from-muted/30 to-muted/10",
  },
  {
    id: "testimonials",
    icon: MessageSquare,
    title: "Testimonials",
    subtitle: "Visual proof of impact",
    accent: "from-primary/15 to-primary/5",
  },
  {
    id: "tools",
    icon: Wrench,
    title: "Capabilities",
    subtitle: "Tools & technologies",
    accent: "from-muted/25 to-muted/5",
  },
];

interface ExplorationHubProps {
  onNavigate: (sectionId: string) => void;
}

export function ExplorationHub({ onNavigate }: ExplorationHubProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 100% 80% at 50% 100%, oklch(0.75 0.12 45 / 0.06) 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            A closer look
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight">
            How Work
            <span className="text-primary"> Takes Shape</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            A structured view of execution, experience, capability, and execution in practice
          </p>
        </div>

        {/* Hub navigation grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {hubItems.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`group relative p-8 md:p-10 text-left border border-border/30 rounded-sm transition-all duration-700 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Hover background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.accent} rounded-sm transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-sm transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    boxShadow: "inset 0 0 60px rgba(255,200,150,0.05)",
                  }}
                />

                {/* Content */}
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div
                        className={`absolute -inset-3 bg-primary/10 rounded-full blur-xl transition-opacity duration-500 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <Icon
                        className={`relative w-7 h-7 transition-colors duration-300 ${
                          isHovered ? "text-primary" : "text-muted-foreground"
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Text */}
                    <h3 className="text-2xl font-light text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <ChevronRight
                    className={`w-5 h-5 text-primary transition-all duration-300 ${
                      isHovered
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2"
                    }`}
                  />
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 ${
                    isHovered ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual connector */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}