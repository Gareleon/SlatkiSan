"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type CarouselPluginProps = {
  images: string[];
};

export function CarouselPlugin({ images }: CarouselPluginProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-7xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/3">
            <div className="p-4">
              <Card className="overflow-hidden rounded-2xl shadow-lg">
                <CardContent className="px-6">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={image}
                      alt={`Highlight ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
