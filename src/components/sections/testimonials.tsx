"use client"
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    id: "testimonial-1",
    name: "سارة خالد",
    quote: "تجربة ممتازة، لم أشعر بأي ألم. أنصح الجميع بهذه العيادة. الطاقم محترف والعيادة نظيفة جدًا.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "محمد عبدالله",
    quote: "طاقم محترف وتعامل راقٍ، أفضل عيادة أسنان زرتها. الدكتور أحمد كان صبورًا وشرح لي كل خطوات العلاج.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "فاطمة وعائلتها",
    quote: "أحضر أطفالي إلى هنا دائمًا. الطاقم رائع في التعامل مع الأطفال ويجعلون الزيارة ممتعة لهم. شكرًا لكم!",
    rating: 5,
  },
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  )

  return (
    <section id="testimonials" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            ماذا يقول مرضانا
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            نحن فخورون بثقة مرضانا ونسعى دائمًا لتقديم أفضل تجربة علاجية.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
            direction: "rtl",
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col shadow-lg">
                      <CardContent className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <blockquote className="text-muted-foreground border-r-4 border-primary pr-4">
                            "{testimonial.quote}"
                          </blockquote>
                        </div>
                        <div className="flex items-center mt-6">
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="right-12 -top-4 md:-top-8" />
          <CarouselNext className="right-0 -top-4 md:-top-8" />
        </Carousel>
      </div>
    </section>
  );
}
