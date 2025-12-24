import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");

  return (
    <section id="home" className="relative h-[80dvh] min-h-[600px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
              ابتسامتك الصحية تبدأ من هنا
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-xl drop-shadow-md">
              رعاية أسنان احترافية لجميع أفراد العائلة باستخدام أحدث التقنيات وبدون ألم.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg">
                <Link href="#booking">
                  احجز موعدك الآن
                </Link>
              </Button>
              <div className="flex gap-4">
                <Button variant="secondary" size="lg" asChild className="text-lg">
                  <Link href="tel:+1234567890">
                    <Phone className="ml-2 h-5 w-5" />
                    اتصل بنا
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild className="text-lg bg-green-500 text-white hover:bg-green-600">
                   <Link href="https://wa.me/1234567890" target="_blank">
                    <MessageCircle className="ml-2 h-5 w-5" />
                    واتساب
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
