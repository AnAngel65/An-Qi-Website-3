"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";

interface ModalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function ModalOverlay({ isOpen, onClose, title, children }: ModalOverlayProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full flex flex-col">
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-6 bg-primary/10 backdrop-blur-sm border-b border-primary/20">
            {title && (
              <h2 className="text-lg font-light text-foreground tracking-wide">
                {title}
              </h2>
            )}
            <button
              onClick={onClose}
              className="ml-auto p-2 text-muted-foreground hover:text-foreground transition-colors rounded-sm hover:bg-muted/20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 animate-in slide-in-from-bottom-4 duration-500">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}