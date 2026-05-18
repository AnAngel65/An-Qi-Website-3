"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const toolCategories = [
  {
    id: "automation_data",
    category: "Automation & Data",
    description: "Data management, automation, and enterprise systems",
    tools: [
      { name: "Google Sheets (Advanced/Automation)", level: "Expert", years: 6 },
      { name: "Apps Script", level: "Advanced", years: 4 },
      { name: "SAP", level: "Intermediate", years: 3 },
    ],
  },
  {
    id: "productivity_collaboration",
    category: "Productivity & Collaboration",
    description: "Project management, communication, and documentation",
    tools: [
      { name: "Google Workspace", level: "Expert", years: 10 },
      { name: "Microsoft Office", level: "Expert", years: 10 },
      { name: "Slack", level: "Advanced", years: 6 },
      { name: "Notion", level: "Intermediate", years: 1 },
    ],
  },
  {
    id: "development_design",
    category: "Development & Design",
    description: "Code, design, and AI-powered development",
    tools: [
      { name: "AutoCAD", level: "Expert", years: 10 },
      { name: "AI Prompting", level: "Advanced", years: 2 },
      { name: "Cursor/VS Code", level: "Advanced", years: 2 },
    ],
  },
];

const levelColors = {
  Expert: "bg-primary text-primary-foreground",
  Advanced: "bg-primary/20 text-primary",
  Intermediate: "bg-muted text-muted-foreground",
};

interface ToolsPanelProps {
  onClose: () => void;
}

export function ToolsPanel({ onClose }: ToolsPanelProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
          Capabilities
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-extralight leading-tight text-balance">
          The tools behind
          <span className="text-primary"> the craft</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Mastery isn&apos;t about the tools themselves—it&apos;s about knowing when and
          how to wield them in service of the vision.
        </p>
      </div>

      {/* Categories accordion */}
      <div className="space-y-4">
        {toolCategories.map((category) => {
          const isExpanded = activeCategory === category.id;

          return (
            <div
              key={category.id}
              className={`border rounded-sm overflow-hidden transition-all duration-300 ${
                isExpanded ? "border-primary bg-muted/5" : "border-border/30"
              }`}
            >
              {/* Category header */}
              <button
                onClick={() =>
                  setActiveCategory(isExpanded ? null : category.id)
                }
                className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-300 ${
                  isExpanded ? "bg-muted/10" : "hover:bg-muted/5"
                }`}
              >
                <div>
                  <h3 className="text-xl font-light text-foreground">
                    {category.category}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {category.description}
                  </p>
                </div>
                <div
                  className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                    isExpanded ? "bg-primary border-primary rotate-45" : ""
                  }`}
                >
                  <span
                    className={`text-lg leading-none transition-colors ${
                      isExpanded ? "text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>

              {/* Expanded tools list */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isExpanded ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2 border-t border-border/20">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {category.tools.map((tool, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-muted/5 rounded-sm"
                      >
                        <div className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-primary" />
                          <span className="text-foreground">{tool.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-muted-foreground">
                            {tool.years}y
                          </span>
                          <span
                            className={`px-2 py-0.5 text-xs rounded-sm ${
                              levelColors[tool.level as keyof typeof levelColors]
                            }`}
                          >
                            {tool.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Note */}
      <div className="mt-12 p-6 border border-primary/20 rounded-sm bg-primary/5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium">A note on tools: </span>
          This list represents my primary toolkit, but I&apos;m always exploring new 
          technologies. The best tool is the one that serves the project&apos;s needs.
        </p>
      </div>
    </div>
  );
}