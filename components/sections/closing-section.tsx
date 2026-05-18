"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Linkedin, Twitter } from "lucide-react";

export function ClosingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0">
        {/* Central glow */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 60% at 50% 60%, oklch(0.75 0.12 45 / 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 30% 80%, oklch(0.5 0.08 200 / 0.08) 0%, transparent 50%)
            `,
          }}
        />
        {/* Top fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Narrative conclusion */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            Let’s connect
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight text-balance">
            Open to New Opportunities
            <span className="block mt-2">
              and Meaningful <span className="text-primary">Collaborations</span>
            </span>
          </h2>

          <p className="mt-10 text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Available for roles, projects, and meaningful work collaborations.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`mt-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <a
            href="mailto:angel_anqi_2009@hotmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-lg font-medium rounded-sm hover:bg-primary/90 transition-all duration-300 hover:gap-4"
          >
            Get in touch
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Social links */}
        <div
          className={`mt-20 flex items-center justify-center gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {[
            { icon: Mail, label: "Email", href: "mailto:angel_anqi_2009@hotmail.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/an-qi-ng-554654b6/" },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Final flourish / signature */}
      <div className="relative z-10 py-12 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-primary/30" />
              <span>An Qi Ng</span>
              <span className="text-primary/50">|</span>
              <span>Project Management &amp; Design</span>
            </div>
            <div className="text-center md:text-right">
              <span>Crafted with intention</span>
              <span className="mx-2 text-primary/50">|</span>
              <span>© 2026 All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Closing visual element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20">
        <div className="w-full h-full bg-gradient-to-b from-primary/30 to-transparent" />
      </div>
    </section>
  );
}