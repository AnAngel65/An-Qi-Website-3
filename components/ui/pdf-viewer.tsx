"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PdfViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export function PdfViewer({
  isOpen,
  onClose,
  pdfUrl,
  title,
}: PdfViewerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 w-[90vw] max-w-[90vw] sm:max-w-[90vw] h-[90vh] flex flex-col">
        <DialogHeader className="p-4 border-b">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="sr-only">
            PDF viewer for {title}
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1">
          <iframe src={pdfUrl} className="w-full h-full" />
        </div>
      </DialogContent>
    </Dialog>
  );
}