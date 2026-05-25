"use client";

import { useState } from "react";
import {
  FileText,
  Download,
  Briefcase,
  GraduationCap,
  Building,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PdfViewer } from "@/components/ui/pdf-viewer";

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
  const [selectedPdf, setSelectedPdf] = useState<{
    url: string;
    title: string;
  } | null>(null);

  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8 max-w-3xl">
        <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
          Professional Background
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-extralight leading-tight text-balance">
          A Journey of Growth and Expertise
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Below, you'll find a snapshot of my career highlights and educational background. For a deeper dive, please explore my professional documents.
        </p>
      </div>

      {/* Quick highlights */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {highlights.map((highlight, index) => {
          const Icon = highlight.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border border-border/30 rounded-sm"
            >
              <div className="p-2 bg-primary/10 rounded-sm">
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
      <div>
        <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium mb-6">
          Downloadable Documents
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {documents.map((doc) => {
            const Icon = doc.icon;
            const isHovered = hoveredDoc === doc.id;

            return (
              <div
                key={doc.id}
                onMouseEnter={() => setHoveredDoc(doc.id)}
                onMouseLeave={() => setHoveredDoc(null)}
                className="group relative flex flex-col p-6 border border-border/30 rounded-sm transition-all duration-500 hover:border-primary/30"
              >
                {/* Content */}
                <div className="relative flex-1">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <Icon
                      className={`relative w-7 h-7 transition-colors duration-300 flex-shrink-0 mt-1 ${
                        isHovered ? "text-primary" : "text-muted-foreground"
                      }`}
                      strokeWidth={1.5}
                    />
                    <div>
                      <h4 className="text-lg font-light text-foreground">
                        {doc.title}
                      </h4>
                      <p className="text-sm text-primary/80">
                        {doc.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="relative mt-6 pt-4 border-t border-border/30 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedPdf({
                          url: doc.href,
                          title: doc.title,
                        });
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 ${
                    isHovered ? "w-full" : "w-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
      {selectedPdf && (
        <PdfViewer
          isOpen={!!selectedPdf}
          onClose={() => setSelectedPdf(null)}
          pdfUrl={selectedPdf.url}
          title={selectedPdf.title}
        />
      )}
    </div>
  );
}