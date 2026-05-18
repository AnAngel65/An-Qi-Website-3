"use client";

import { useState } from "react";

const toolCategories = [
  {
    category: "Design",
    tools: ["Figma", "Adobe Creative Suite", "Sketch", "Framer"],
  },
  {
    category: "Development",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Motion",
    tools: ["After Effects", "Lottie", "GSAP", "Rive"],
  },
  {
    category: "Strategy",
    tools: ["Notion", "Miro", "Analytics", "User Research"],
  },
];

export function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState(toolCategories[0].category);
  const activeTools = toolCategories.find(c => c.category === activeCategory)?.tools || [];

  return (
    <section className="grid lg:grid-cols-5 gap-12 items-center min-h-[calc(100vh-10rem)] px-6 py-12 max-w-7xl mx-auto">
      {/* Left Column: Header */}
      <div className="lg:col-span-2">
        <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
          Capabilities
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-extralight leading-tight text-balance">
          The tools behind the craft
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Mastery isn't just about knowing the tools—it's about knowing how and when to wield them. Here's a look at the technologies I use to bring ideas to life.
        </p>
      </div>

      {/* Right Column: Interactive Workbench */}
      <div className="lg:col-span-3">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 mb-8 border-b border-border/30 pb-4">
          {toolCategories.map((cat) => {
            const isActive = activeCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2 text-sm rounded-sm transition-colors duration-300 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Tools Display */}
        <div className="relative min-h-[200px]">
          {toolCategories.map((cat) => (
            <div
              key={cat.category}
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeCategory === cat.category ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {cat.tools.map((tool, index) => (
                  <div
                    key={tool}
                    className="animate-in fade-in slide-in-from-top-4"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <p className="text-lg text-foreground/90 font-light">{tool}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}