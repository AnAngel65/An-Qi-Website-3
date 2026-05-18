"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { ExplorationHub } from "@/components/sections/exploration-hub";
import { ClosingSection } from "@/components/sections/closing-section";
import { ModalOverlay } from "@/components/ui/modal-overlay";
import { CompetenciesPanel } from "@/components/sections/competencies-panel";
import { ExperienceGateway } from "@/components/sections/experience-gateway";
import { TestimonialsGallery } from "@/components/sections/testimonials-gallery";
import { ToolsPanel } from "@/components/sections/tools-panel";

type SectionId = "competencies" | "experience" | "testimonials" | "tools" | null;

const sectionTitles: Record<Exclude<SectionId, null>, string> = {
  competencies: "Expertise",
  experience: "Experience",
  testimonials: "Testimonials",
  tools: "Capabilities",
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId as SectionId);
  };

  const handleClose = () => {
    setActiveSection(null);
  };

  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      {/* Global visual connectors */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Persistent side accents */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/20 to-transparent" />
        <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/20 to-transparent" />
      </div>

      {/* Scroll sections */}
      <div className="relative z-10">
        {/* Hero - scroll section */}
        <HeroSection />

        {/* Exploration Hub - interactive navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ExplorationHub onNavigate={handleNavigate} />
        </motion.div>

        {/* Closing - scroll section */}
        <ClosingSection />
      </div>

      {/* Modal overlays for each section */}
      <ModalOverlay
        isOpen={activeSection === "competencies"}
        onClose={handleClose}
        title={sectionTitles.competencies}
      >
        <CompetenciesPanel onClose={handleClose} />
      </ModalOverlay>

      <ModalOverlay
        isOpen={activeSection === "experience"}
        onClose={handleClose}
        title={sectionTitles.experience}
      >
        <ExperienceGateway onClose={handleClose} />
      </ModalOverlay>

      <ModalOverlay
        isOpen={activeSection === "testimonials"}
        onClose={handleClose}
        title={sectionTitles.testimonials}
      >
        <TestimonialsGallery onClose={handleClose} />
      </ModalOverlay>

      <ModalOverlay
        isOpen={activeSection === "tools"}
        onClose={handleClose}
        title={sectionTitles.tools}
      >
        <ToolsPanel onClose={handleClose} />
      </ModalOverlay>
    </main>
  );
}