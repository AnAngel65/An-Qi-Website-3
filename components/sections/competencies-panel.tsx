import { useState } from "react";
import { Layers, Compass, Sparkles, Target, ChevronRight, Zap, Heart, Clipboard } from "lucide-react";

const competencies = [
  {
    id: "operational-precision",
    icon: Zap,
    title: "Operational Precision",
    shortDesc: "Building the framework that eliminates double-work.",
    fullDesc: "I transform tribal knowledge into an immutable 'Source of Truth.' By focusing on the structural integrity of data entry, pricing maps, and asset management, I ensure the organization can scale without losing its fundamental logic.",
    impact: "Scaled organization from 1 to 6 planners, reduced onboarding time by 80%, and eliminated 4 hours of daily information retrieval overhead.",
    examples: [
      "Workflow Orchestration: Building the workflow framework that eliminates double-work.",
      "Chaos Termination: Identifying and re-engineering operational bottlenecks to be self-sustaining.",
      "Backbone Design: Creating the 'skeleton' of the business for scalable growth.",
    ],
  },
  {
    id: "client-servicing",
    icon: Heart,
    title: "Client Servicing",
    shortDesc: "Providing a 'Reliability Anchor' for high-stakes client journeys.",
    fullDesc: "I manage the entire client journey from pre-tour readiness to post-service closure, acting as the bridge between raw operations and the human experience. I use logic to make clients feel safe, providing clear backup plans and step-by-step guidance.",
    impact: "Maintained a 95% satisfaction rating and an 80% repeat client rate.",
    examples: [
      "High-Touch Concierge Operations: Managing the entire client journey with 100% precision.",
      "Structural Empathy: De-escalating complex client anxieties through structured communication.",
      "Indispensable Liaison: Ensuring high-stakes requests are executed with 100% precision.",
    ],
  },
  {
    id: "project-coordination",
    icon: Clipboard,
    title: "Project Coordination",
    shortDesc: "Ensuring synchronized execution and zero-error delivery.",
    fullDesc: "I treat every deadline as a structural requirement—non-negotiable and meticulously tracked to maintain stakeholder confidence. I manage the 'critical path'—ensuring that timelines, dependencies, and resources are mapped to prevent downstream delays.",
    impact: "Proven capability to oversee 3 concurrent projects by managing the 'critical path'.",
    examples: [
      "Synchronized Execution: Smooth coordination between departments and authorities.",
      "Resource Allocation: Maximizing utility without burning out team members.",
      "Timeline Integrity: Zero-error delivery discipline for non-negotiable deadlines.",
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
    <div className="grid lg:grid-cols-5 gap-12 items-start min-h-[calc(100vh-10rem)] px-6 py-12 max-w-7xl mx-auto">
      {/* Left Column: Header and Navigation */}
      <div className="lg:col-span-2 lg:sticky lg:top-24">
        <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
          Core Competencies
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-extralight leading-tight text-balance">
          My Capability System
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          I specialize in transforming chaos into clarity. This section breaks down my core competencies—the systems I use to ensure workflows are efficient, projects are on schedule, and operations are seamless.
        </p>
        
        {/* Tab navigation */}
        <div className="flex flex-col items-start gap-2 mt-10">
          {competencies.map((comp) => {
            const Icon = comp.icon;
            const isActive = activeCompetency === comp.id;

            return (
              <button
                key={comp.id}
                onClick={() => setActiveCompetency(comp.id)}
                className={`flex items-center gap-3 px-4 py-3 text-sm transition-all duration-300 rounded-sm w-full text-left ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/10"
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
                <span>{comp.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Active Content Panel */}
      <div className="lg:col-span-3">
        <div className="animate-in fade-in duration-500" key={activeCompetency}>
          {/* Main content */}
          <div className="p-8 bg-muted/20 border border-border/30 rounded-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-sm">
                <ActiveIcon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-light text-foreground">
                  {active.title}
                </h3>
                <p className="text-primary/80 mt-1 text-sm">{active.shortDesc}</p>
              </div>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              {active.fullDesc}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            {/* Key Impact */}
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-sm">
              <h4 className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-4">
                Key Impact
              </h4>
              <p className="text-base font-light text-foreground leading-relaxed">
                {active.impact}
              </p>
            </div>

            {/* Examples */}
            <div className="p-6 border border-border/30 rounded-sm">
              <h4 className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium mb-4">
                System in Action
              </h4>
              <div className="space-y-3">
                {active.examples.map((example, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {example}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}