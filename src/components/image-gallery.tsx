"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

export function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-border bg-muted/20">
        <Image
          src={images[selected].src}
          alt={images[selected].alt}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setSelected(i)}
            className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border transition-all ${
              i === selected
                ? "border-foreground ring-1 ring-foreground"
                : "border-border opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
