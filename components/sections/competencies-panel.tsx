import { useState } from "react";
import { Layers, Compass, Sparkles, Target, ChevronRight, Zap, Heart, Clipboard } from "lucide-react";

const competencies = [
  {
    id: "operational-precision",
    icon: Zap,
    title: "Operational Precision",
    shortDesc: "Building the framework that eliminates double-work.",
    fullDesc: "I transform tribal knowledge into an immutable 'Source of Truth.' By focusing on the structural integrity of data entry, pricing maps, and asset management, I ensure the organization can scale without losing its fundamental logic.",
    examples: [
      "Workflow Orchestration: Building the workflow framework that eliminates double-work.",
      "Chaos Termination: Identifying and re-engineering operational bottlenecks to be self-sustaining.",
      "Backbone Design: Creating the 'skeleton' of the business for scalable growth.",
      "Impact: Scaled organization from 1 to 6 planners, reduced onboarding time by 80%, and eliminated 4 hours of daily information retrieval overhead.",
    ],
  },
  {
    id: "client-servicing",
    icon: Heart,
    title: "Client Servicing",
    shortDesc: "Providing a 'Reliability Anchor' for high-stakes client journeys.",
    fullDesc: "I manage the entire client journey from pre-tour readiness to post-service closure, acting as the bridge between raw operations and the human experience. I use logic to make clients feel safe, providing clear backup plans and step-by-step guidance.",
    examples: [
      "High-Touch Concierge Operations: Managing the entire client journey with 100% precision.",
      "Structural Empathy: De-escalating complex client anxieties through structured communication.",
      "Indispensable Liaison: Ensuring high-stakes requests are executed with 100% precision.",
      "Impact: Maintained a 95% satisfaction rating and an 80% repeat client rate.",
    ],
  },
  {
    id: "project-coordination",
    icon: Clipboard,
    title: "Project Coordination",
    shortDesc: "Ensuring synchronized execution and zero-error delivery.",
    fullDesc: "I treat every deadline as a structural requirement—non-negotiable and meticulously tracked to maintain stakeholder confidence. I manage the 'critical path'—ensuring that timelines, dependencies, and resources are mapped to prevent downstream delays.",
    examples: [
      "Synchronized Execution: Smooth coordination between departments and authorities.",
      "Resource Allocation: Maximizing utility without burning out team members.",
      "Timeline Integrity: Zero-error delivery discipline for non-negotiable deadlines.",
      "Impact: Proven capability to oversee 3 concurrent projects by managing the 'critical path'.",
    ],
  },
];

interface CompetenciesPanelProps {
  onClose: () => void;
}

export function CompetenciesPanel({ onClose }: CompetenciesPanelProps) {
  const [activeCompetency, setActiveCompetency] = useState(competencies[0].id);
  const active = competencies.find((c) => c.id === activeCompetency)!;
  const ActiveIcon = active.icon;

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
          Core Competencies
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-extralight leading-tight text-balance">
          My Capability System
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          I like bringing order to chaos, so I turned my core strengths into an interactive setup. This is simply a breakdown of how I keep workflows organized, projects on track, and daily operations running smoothly. Click through to see what I can bring to your team.
        </p>
      </div>

      {/* Tab navigation */}
      <div className="flex flex-wrap gap-2 mb-12 border-b border-border/30 pb-4">
        {competencies.map((comp) => {
          const Icon = comp.icon;
          const isActive = activeCompetency === comp.id;

          return (
            <button
              key={comp.id}
              onClick={() => setActiveCompetency(comp.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm transition-all duration-300 rounded-sm ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/10"
              }`}
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
              <span className="hidden sm:inline">{comp.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active content panel */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Main content */}
        <div className="animate-in fade-in slide-in-from-left-4 duration-500" key={activeCompetency}>
          <div className="flex items-start gap-4 mb-8">
            <div className="p-4 bg-primary/10 rounded-sm">
              <ActiveIcon className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-3xl font-light text-foreground">
                {active.title}
              </h3>
              <p className="text-primary/80 mt-1">{active.shortDesc}</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {active.fullDesc}
          </p>

          {/* Decorative line */}
          <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </div>

        {/* Examples */}
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 delay-150" key={`${activeCompetency}-examples`}>
          <h4 className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium mb-6">
            System in Action
          </h4>

          <div className="space-y-4">
            {active.examples.map((example, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 border border-border/30 rounded-sm hover:border-primary/30 transition-colors duration-300"
              >
                <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}