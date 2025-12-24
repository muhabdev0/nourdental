"use client";

import * as React from "react";
import Image from "next/image";
import { Grip } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const beforeImage = PlaceHolderImages.find((img) => img.id === "before-1");
  const afterImage = PlaceHolderImages.find((img) => img.id === "after-1");
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => handleMove(e.touches[0].clientX);

  if (!beforeImage || !afterImage) {
    return null;
  }

  return (
    <section id="results" className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            نتائج تتحدث عن نفسها
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            شاهد التحول الذي يمكن أن تحدثه خبرتنا في ابتسامتك.
          </p>
        </div>
        <div 
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl select-none"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
          <Image
            src={beforeImage.imageUrl}
            alt={beforeImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={beforeImage.imageHint}
          />
          <div
            className="absolute top-0 left-0 right-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={afterImage.imageUrl}
              alt={afterImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={afterImage.imageHint}
            />
          </div>
          <div
            className="absolute top-0 bottom-0 w-1 bg-white/50 cursor-ew-resize"
            style={{ left: `calc(${sliderPosition}% - 2px)` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg text-primary">
              <Grip className="rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
