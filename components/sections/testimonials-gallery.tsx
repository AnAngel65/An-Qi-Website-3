"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// Testimonial images - screenshots and photos
const testimonialImages = [
  {
    id: 1,
    src: "/testimonials/1.png",
    client: "Valued Customer",
  },
  {
    id: 2,
    src: "/testimonials/2.png",
    client: "Happy Client",
  },
  {
    id: 3,
    src: "/testimonials/3.png",
    client: "Satisfied Customer",
  },
  {
    id: 4,
    src: "/testimonials/4.png",
    client: "Grateful Collaborator",
  },
  {
    id: 5,
    src: "/testimonials/5.png",
    client: "Successful Proposal",
  },
  {
    id: 6,
    src: "/testimonials/6.png",
    client: "Long-term Partner",
  },
  {
    id: 7,
    src: "/testimonials/7.png",
    client: "Appreciated Service",
  },
  {
    id: 8,
    src: "/testimonials/8.png",
    client: "Elderly Client",
  },
  {
    id: 9,
    src: "/testimonials/9.png",
    client: "Pleased Client",
  },
  {
    id: 10,
    src: "/testimonials/10.png",
    client: "Immediate assistance",
  },
  {
    id: 11,
    src: "/testimonials/11.png",
    client: "Testimonial",
  },
  {
    id: 12,
    src: "/testimonials/12.png",
    client: "Testimonial",
  },
];

interface TestimonialsGalleryProps {
  onClose: () => void;
}

export function TestimonialsGallery({ onClose }: TestimonialsGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex =
      direction === "next"
        ? (selectedImage + 1) % testimonialImages.length
        : (selectedImage - 1 + testimonialImages.length) % testimonialImages.length;
    setSelectedImage(newIndex);
  };

  const testimonialsRow1 = testimonialImages.slice(0, 6);
  const testimonialsRow2 = testimonialImages.slice(6, 12);

  const duplicatedTestimonials1 = [...testimonialsRow1, ...testimonialsRow1];
  const duplicatedTestimonials2 = [...testimonialsRow2, ...testimonialsRow2];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Gallery header */}
      <div className="mb-16 max-w-3xl">
        <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
          Visual Proof
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-extralight leading-tight text-balance">
          Wall of
          <span className="text-primary"> Proof</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          A collection of experiences and kind words from clients and partners I've had the pleasure to work with.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative flex flex-col gap-4 sm:gap-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-4 sm:gap-8"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              ease: 'linear',
              duration: 40,
              repeat: Infinity,
            }}
          >
            {duplicatedTestimonials1.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                onClick={() => openLightbox(testimonial.id - 1)}
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.client}
                  className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex gap-4 sm:gap-8"
            animate={{ x: ['-100%', '0%'] }}
            transition={{
              ease: 'linear',
              duration: 40,
              repeat: Infinity,
            }}
          >
            {duplicatedTestimonials2.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                onClick={() => openLightbox(testimonial.id - 1)}
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.client}
                  className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      {/* Fullscreen Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Prev & Next Navigation */}
          <button
            aria-label="Previous image"
            className="absolute left-4 p-3 text-gray-400 hover:text-white transition-colors z-20"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            aria-label="Next image"
            className="absolute right-4 p-3 text-gray-400 hover:text-white transition-colors z-20"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Content Wrapper: This centers the content */}
          <div className="relative flex flex-col items-center justify-center w-full h-full">
            {/* This div stops clicks from closing the lightbox */}
            <div onClick={(e) => e.stopPropagation()}>
              {/* Image Container */}
              <div className="relative">
                <img
                  src={testimonialImages[selectedImage].src}
                  alt={`Testimonial from ${testimonialImages[selectedImage].client}`}
                  className="block max-w-[90vw] max-h-[80vh] object-contain rounded-md"
                />
                {/* 'X' Close Button (inside image) */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-2 right-2 p-1.5 bg-black/60 rounded-full text-gray-300 hover:text-white transition-colors z-10"
                  aria-label="Close image view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Caption */}
              <div className="mt-4 text-center text-white">
                <p className="font-medium">
                  {testimonialImages[selectedImage].client}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {selectedImage + 1} / {testimonialImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}