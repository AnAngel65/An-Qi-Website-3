"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, MapPin, Briefcase } from "lucide-react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const [particleStyles, setParticleStyles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Generate particle styles only on the client
    setParticleStyles(
      [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 4}s`,
        // Store a random factor for the transform
        '--transform-factor': (0.2 + Math.random() * 0.3).toFixed(4),
      }))
    );

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 600);
  const scale = 1 + scrollY * 0.0003;
  const translateY = scrollY * 0.4;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Layered background elements */}
      <div className="absolute inset-0">
        {/* Deep background layer */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent"
          style={{
            transform: `scale(${scale})`,
          }}
        />
        
        {/* Atmospheric gradients */}
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, oklch(0.75 0.12 45 / 0.2) 0%, transparent 50%),
                               radial-gradient(circle at 80% 70%, oklch(0.6 0.08 200 / 0.15) 0%, transparent 50%),
                               radial-gradient(circle at 50% 50%, oklch(0.4 0.05 260 / 0.25) 0%, transparent 70%)`,
            }}
          />
        </div>

        {/* Floating particles layer */}
        <div className="absolute inset-0 overflow-hidden">
          {particleStyles.map((style, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/20"
              style={{
                ...style,
                transform: `translateY(${translateY * parseFloat(style['--transform-factor'] as string)}px)`,
              }}
            />
          ))}
        </div>


      </div>

      {/* Main content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      >
        {/* Subtle overline */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-primary/50" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
            Operations Specialist | Client Success Concierge | Project Coordinator
          </span>
          <span className="h-px w-12 bg-primary/50" />
        </div>

        {/* Main title with layered typography */}
        <h1 className="relative">
          <span className="block text-[clamp(3rem,12vw,9rem)] font-extralight tracking-tight leading-[0.9] text-foreground">
            NG AN QI
          </span>
        </h1>

        {/* Subheading with refined spacing */}
        <p className="mt-16 text-lg md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto text-balance">
          With 8 years of experience in project-driven environments, I provide the operational backbone that allows businesses to scale and leaders to focus. I turn complex coordination into a seamless, reliable experience, managing the structural integrity of your workflow with empathy and precision.
        </p>

        {/* Location & Work */}
        <div className="mt-20 flex items-center justify-center gap-6 text-base text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Based in Malaysia</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={16} />
            <span>Remote full-time/freelance</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ opacity }}
      >
        <span className="text-xs tracking-widest uppercase text-muted-foreground">
          Explore
        </span>
        <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
}