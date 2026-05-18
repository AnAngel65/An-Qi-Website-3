"use client";

import { useState } from "react";
import { Check, Code, DatabaseZap, Users } from "lucide-react";

const toolCategories = [
  {
    id: "automation_data",
    icon: DatabaseZap,
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
    icon: Users,
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
    icon: Code,
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
  const [activeCategory, setActiveCategory] = useState(toolCategories[0].id);
  const active = toolCategories.find((c) => c.id === activeCategory)!;
  const ActiveIcon = active.icon;

  return (
    <div className="grid lg:grid-cols-5 gap-12 items-start min-h-[calc(100vh-10rem)] px-6 py-12 max-w-7xl mx-auto">
      {/* Left Column: Header and Navigation */}
      <div className="lg:col-span-2 lg:sticky lg:top-24">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            Capabilities
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extralight leading-tight text-balance">
            The tools behind
            <span className="text-primary"> the craft</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Mastery isn&apos;t about the tools themselves—it&apos;s about knowing when
            and how to wield them in service of the vision.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="mt-12 space-y-2">
          {toolCategories.map((category) => {
            const isActive = activeCategory === category.id;
            const CategoryIcon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full flex items-start text-left p-4 rounded-md transition-all duration-300 ${
                  isActive
                    ? "bg-primary/10 border-primary/30 shadow-sm"
                    : "hover:bg-muted/50"
                }`}
              >
                <CategoryIcon
                  className={`w-5 h-5 mr-4 mt-1 transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <div>
                  <h3
                    className={`font-medium transition-colors ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {category.category}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {category.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Active Content Panel */}
      <div className="lg:col-span-3">
        <div className="p-8 border rounded-lg bg-muted/30 min-h-[30rem]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <ActiveIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-light text-foreground">{active.category}</h3>
              <p className="text-muted-foreground">{active.description}</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {active.tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-background/50 rounded-md border border-border/50"
              >
                <span className="text-foreground font-medium">{tool.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">
                    {tool.years}y
                  </span>
                  <span
                    className={`px-2 py-0.5 text-xs rounded-sm font-medium ${
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
      
      {/* Note */}
      <div className="lg:col-span-5 mt-8 p-4 border border-primary/20 rounded-sm bg-primary/5">
        <p className="text-sm text-center text-muted-foreground leading-relaxed">
          <span className="text-foreground font-medium">A note on tools: </span>
          This list represents my primary toolkit, but I&apos;m always exploring new 
          technologies. The best tool is the one that serves the project&apos;s needs.
        </p>
      </div>
    </div>
  );
}