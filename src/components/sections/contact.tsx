import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export function Contact() {
  const mapImage = PlaceHolderImages.find((img) => img.id === "map-location");

  const contactDetails = [
    {
      icon: MapPin,
      label: "العنوان",
      value: "123 شارع الابتسامة، حي الأمل، الرياض، المملكة العربية السعودية",
    },
    {
      icon: Phone,
      label: "رقم الهاتف",
      value: "+1 234 567 890",
      href: "tel:+1234567890",
    },
    {
      icon: MessageCircle,
      label: "واتساب",
      value: "+1 234 567 890",
      href: "https://wa.me/1234567890",
    },
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: "contact@nourdental.com",
      href: "mailto:contact@nourdental.com",
    },
    {
      icon: Clock,
      label: "ساعات العمل",
      value: "السبت - الخميس: 9:00 صباحًا - 10:00 مساءً",
    },
  ];

  return (
    <section id="contact" className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            موقعنا ومعلومات التواصل
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            يسعدنا استقبالكم في عيادتنا. لا تتردد في التواصل معنا لأي استفسار.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                  <detail.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{detail.label}</h3>
                  {detail.href ? (
                    <Link
                      href={detail.href}
                      target={detail.label === 'واتساب' ? '_blank' : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {detail.value}
                    </Link>
                  ) : (
                    <p className="text-muted-foreground">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            {mapImage && (
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video relative">
                <Image
                  src={mapImage.imageUrl}
                  alt={mapImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={mapImage.imageHint}
                />
                 <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button size="lg" asChild>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                            افتح في خرائط جوجل
                        </a>
                    </Button>
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
