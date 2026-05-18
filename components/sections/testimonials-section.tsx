"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Alex transformed our brand from forgettable to unforgettable. The strategic thinking combined with creative execution was unlike anything we'd experienced before.",
    author: "Sarah Mitchell",
    title: "CEO, Elevate Ventures",
    featured: true,
  },
  {
    quote:
      "Working with Alex felt like a true partnership. They challenged our assumptions while respecting our vision, ultimately delivering work that exceeded expectations.",
    author: "Marcus Chen",
    title: "Founder, Quantum Labs",
    featured: false,
  },
  {
    quote:
      "The attention to detail and commitment to craft is evident in every pixel. Alex doesn't just design—they create experiences that resonate.",
    author: "Elena Rodriguez",
    title: "Creative Director, Apex Media",
    featured: false,
  },
];

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 100% 60% at 50% 100%, oklch(0.75 0.12 45 / 0.06) 0%, transparent 70%)`,
          }}
        />
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 100px,
              oklch(1 0 0 / 0.03) 100px,
              oklch(1 0 0 / 0.03) 101px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20 md:mb-32">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
            Trusted By
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight">
            Voices that
            <span className="text-primary"> echo</span>
          </h2>
        </div>

        {/* Featured testimonial */}
        <div
          className={`relative mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative p-8 md:p-16">
            {/* Large quote mark */}
            <Quote className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 text-primary/10" />

            {/* Quote text */}
            <blockquote className="relative text-2xl md:text-3xl lg:text-4xl font-extralight leading-relaxed text-foreground text-balance max-w-4xl mx-auto text-center">
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4">
                <span className="h-px w-8 bg-primary/50" />
                <div>
                  <p className="text-foreground font-medium">
                    {testimonials[0].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[0].title}
                  </p>
                </div>
                <span className="h-px w-8 bg-primary/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Secondary testimonials */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-8 border-l border-border/50 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="text-foreground font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual connector to next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
