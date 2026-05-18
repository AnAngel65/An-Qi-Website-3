"use client";

import { useEffect, useRef, useState } from "react";

const toolCategories = [
  {
    category: "Design",
    tools: ["Figma", "Adobe Creative Suite", "Sketch", "Framer"],
  },
  {
    category: "Development",
    tools: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    category: "Motion",
    tools: ["After Effects", "Lottie", "GSAP", "Rive"],
  },
  {
    category: "Strategy",
    tools: ["Notion", "Miro", "Analytics", "Research"],
  },
];

export function ToolsSection() {
  const [revealedCategories, setRevealedCategories] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = categoryRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1 && !revealedCategories.includes(index)) {
              setRevealedCategories((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [revealedCategories]);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background with depth and visual anchor */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 50% 80% at 0% 50%, oklch(0.15 0.01 260 / 0.8) 0%, transparent 60%),
              radial-gradient(ellipse 50% 80% at 100% 50%, oklch(0.15 0.01 260 / 0.8) 0%, transparent 60%)
            `,
          }}
        />
        {/* Geometric lights image - illumination metaphor */}
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden opacity-15">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-edivalen-2538501-eifhnrBLBjllRWsFxfgQmqGcswaMOS.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
            style={{
              maskImage: 'radial-gradient(ellipse 60% 70% at 50% 30%, rgba(0,0,0,0.8) 0%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 50% 30%, rgba(0,0,0,0.8) 0%, transparent 70%)',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20 md:mb-32">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            Capabilities
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight">
            The tools behind
            <span className="text-primary"> the craft</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Mastery isn&apos;t about the tools themselves—it&apos;s about knowing when and
            how to wield them in service of the vision.
          </p>
        </div>

        {/* Tools reveal grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {toolCategories.map((category, categoryIndex) => {
            const isRevealed = revealedCategories.includes(categoryIndex);

            return (
              <div
                key={categoryIndex}
                ref={(el) => {
                  categoryRefs.current[categoryIndex] = el;
                }}
                className={`text-center md:text-left transition-all duration-1000`}
                style={{
                  opacity: isRevealed ? 1 : 0,
                  transform: `translateY(${isRevealed ? 0 : 30}px)`,
                  transitionDelay: `${categoryIndex * 100}ms`,
                }}
              >
                {/* Category name */}
                <h3 className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-6">
                  {category.category}
                </h3>

                {/* Tools list */}
                <ul className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <li
                      key={toolIndex}
                      className="text-lg text-foreground/80 font-light transition-all duration-500 hover:text-foreground hover:translate-x-1"
                      style={{
                        transitionDelay: isRevealed
                          ? `${categoryIndex * 100 + toolIndex * 50}ms`
                          : "0ms",
                        opacity: isRevealed ? 1 : 0,
                        transform: isRevealed
                          ? "translateX(0)"
                          : "translateX(-10px)",
                      }}
                    >
                      {tool}
                    </li>
                  ))}
                </ul>

                {/* Decorative line */}
                <div
                  className="mt-8 h-px bg-gradient-to-r from-border to-transparent transition-all duration-1000"
                  style={{
                    transform: `scaleX(${isRevealed ? 1 : 0})`,
                    transformOrigin: "left",
                    transitionDelay: `${categoryIndex * 150}ms`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Transition to closing */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}