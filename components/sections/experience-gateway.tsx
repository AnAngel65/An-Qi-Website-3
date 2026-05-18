"use client";

import { useState } from "react";
import { FileText, Download, Briefcase, GraduationCap, Building } from "lucide-react";

const documents = [
  {
    id: "resume",
    title: "View Resume",
    subtitle: "One-Page Summary",
    description: "A concise, powerful summary of my career, tailored for quick reviews. It highlights key achievements, skills, and strategic impact in a single page.",
    icon: FileText,
    href: "/documents/resume.pdf",
    accent: "primary",
  },
  {
    id: "cv",
    title: "View CV",
    subtitle: "Comprehensive History",
    description: "A detailed account of my professional journey, including full work experience, academic qualifications, and project timelines.",
    icon: FileText,
    href: "/documents/2026 CV.pdf",
    accent: "muted",
  },
  {
    id: "portfolio",
    title: "View Architectural Portfolio",
    subtitle: "Curated Works",
    description: "A visual showcase of my architectural projects, featuring design concepts, project management insights, and final outcomes.",
    icon: Building,
    href: "/documents/portfolio.pdf",
    accent: "primary",
  },
];

const highlights = [
  {
    icon: Briefcase,
    label: "Most Recent Role",
    value: "Travel Planner Manager",
  },
  {
    icon: Building,
    label: "Industry Experience",
    value: "Project Management, Academia, Travel",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Sc Architecture, UTM",
  },
];

export function ExperienceGateway() {
  const [hoveredDoc, setHoveredDoc] = useState<string | null>(null);

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
          Professional Background
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-extralight leading-tight text-balance">
          A Journey of Growth and Expertise
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Below, you'll find a snapshot of my career highlights and educational background. For a deeper dive, please explore my professional documents.
        </p>
      </div>

      {/* Quick highlights */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {highlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-6 border border-border/30 rounded-sm"
            >
              <div className="p-3 bg-primary/10 rounded-sm">
                <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {highlight.label}
                </p>
                <p className="text-foreground font-medium mt-1">
                  {highlight.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Documents grid */}
      <div className="mb-8">
        <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium mb-8">
          Downloadable Documents
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {documents.map((doc) => {
            const Icon = doc.icon;
            const isHovered = hoveredDoc === doc.id;

            return (
              <a
                key={doc.id}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredDoc(doc.id)}
                onMouseLeave={() => setHoveredDoc(null)}
                className="group relative flex flex-col p-8 border border-border/30 rounded-sm transition-all duration-500 hover:border-primary/30"
              >
                {/* Hover background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${doc.accent}/10 to-transparent rounded-sm transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-sm transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    boxShadow: doc.accent === "primary" 
                      ? "inset 0 0 40px rgba(255,200,150,0.05)"
                      : "inset 0 0 40px rgba(255,255,255,0.02)",
                  }}
                />

                {/* Content */}
                <div className="relative flex-1">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`absolute -inset-3 bg-primary/10 rounded-full blur-xl transition-opacity duration-500 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <Icon
                      className={`relative w-8 h-8 transition-colors duration-300 ${
                        isHovered ? "text-primary" : "text-muted-foreground"
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Text */}
                  <h4 className="text-xl font-light text-foreground mb-1">
                    {doc.title}
                  </h4>
                  <p className="text-sm text-primary/80 mb-4">
                    {doc.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="relative mt-8 pt-6 border-t border-border/30 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>PDF</span>
                  </div>
                  <Download
                    className={`w-4 h-4 transition-all duration-300 ${
                      isHovered
                        ? "text-primary translate-y-0 opacity-100"
                        : "text-muted-foreground translate-y-1 opacity-50"
                    }`}
                  />
                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 ${
                    isHovered ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}