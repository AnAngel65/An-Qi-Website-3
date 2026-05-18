"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";


const timelineData = [
  {
    title: "The Origin",
    description: "Manual design & visual layout.",
    active: false,
    comingSoon: false,
    imageUrl: "/images/v1.png",
    linkUrl: "/assets/documents/2026 CV.pdf",
  },
  {
    title: "The Foundation",
    description: "Transitioning from design to code.",
    active: false,
    comingSoon: false,
    imageUrl: "/images/v2.png",
    linkUrl: "https://an-qi-website.vercel.app/",
  },
  {
    title: "The Exploration",
    description: "Integrating AI for better UI design.",
    active: false,
    comingSoon: false,
    imageUrl: "/images/v3.png",
    linkUrl: "https://website-v2-pied-five.vercel.app/",
  },
  {
    title: "The Evolution",
    description: "Advanced high-fidelity UI refinement.",
    active: true,
    comingSoon: false,
    imageUrl: "/images/v4.png",
    linkUrl: "https://an-qi-website-3.vercel.app/",
  },
  {
    title: "The Dream",
    description: "",
    active: false,
    comingSoon: true,
    imageUrl: "/images/pexels-ian-panelo-20737557.jpg",
    linkUrl: "",
  },
];

const SiteEvolution = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-primary/20 text-primary-foreground p-2 rounded-full shadow-lg hover:bg-primary/60 transition-colors duration-300 z-50"
        aria-label="Open site evolution timeline"
      >
        <Image src="/images/pngtree-a-closer-look-at-the-hourglass-png-image_11517571.png" alt="Site Evolution" width={40} height={40} loading="eager" className="opacity-75 group-hover:opacity-100 transition-opacity" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-lg shadow-xl w-full max-w-7xl text-card-foreground relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
              aria-label="Close site evolution timeline"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Site Evolution</h2>
              
              {/* Horizontal Timeline */}
              <div className="relative px-4 md:px-0">
                {/* The horizontal line for desktop */}
                <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-border"></div>
                
                {/* The vertical line for mobile */}
                <div className="block md:hidden absolute top-0 left-1/2 w-0.5 h-full bg-border transform -translate-x-1/2"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-4 items-start md:items-stretch">
                  {timelineData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center relative z-10">
                      {/* Dot on the timeline */}
                      <div className={`w-4 h-4 rounded-full ${item.active ? 'bg-primary ring-4 ring-primary/30' : 'bg-muted'} absolute md:relative top-0 left-1/2 md:left-auto transform -translate-x-1/2 md:transform-none`}></div>
                      
                      {/* Timeline Item Card */}
                      <a 
                        href={item.linkUrl} 
                        target={item.linkUrl.startsWith('http') ? '_blank' : '_self'} 
                        rel={item.linkUrl.startsWith('http') ? 'noopener noreferrer' : ''}
                        className={`mt-12 md:mt-4 p-4 rounded-lg border-2 border-border bg-card text-center flex flex-col h-full w-full max-w-xs mx-auto ${item.comingSoon || !item.linkUrl ? 'pointer-events-none' : 'cursor-pointer hover:bg-accent'}`}
                      >
                        {/* Image Placeholder */}
                        <div className="w-full h-32 bg-muted/50 rounded-md mb-4 flex items-center justify-center flex-shrink-0 relative">
                          {item.imageUrl ? (
                            <Image src={item.imageUrl} alt={item.title} fill sizes="20vw" className="rounded-md object-cover" />
                          ) : (
                            <span className="text-muted-foreground text-sm">Image</span>
                          )}
                        </div>
                        <div className="flex flex-col flex-grow justify-between">
                          <div>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <p className="text-xs mt-2 text-muted-foreground">{item.description}</p>
                          </div>
                          <div className="mt-4">
                            {item.active && (
                              <span className="inline-block px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">Active</span>
                            )}
                            {item.comingSoon && (
                              <span className="inline-block px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full shadow-[0_0_10px_var(--color-secondary)]">Coming Soon</span>
                            )}
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteEvolution;