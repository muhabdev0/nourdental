import Image from "next/image";
import { Award, Cpu, HeartHandshake, ShieldCheck, Smile, BadgePercent, Clock } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
  { icon: Award, text: "أطباء أسنان معتمدون وذوو خبرة" },
  { icon: Cpu, text: "أحدث التقنيات الطبية" },
  { icon: HeartHandshake, text: "علاج بدون ألم" },
  { icon: ShieldCheck, text: "أعلى معايير التعقيم" },
  { icon: Smile, text: "طاقم ودود ومتعاون" },
  { icon: BadgePercent, text: "أسعار واضحة بدون مفاجآت" },
  { icon: Clock, text: "مواعيد مرنة تناسب الجميع" },
];

export function WhyChooseUs() {
  const whyChooseUsImage = PlaceHolderImages.find((img) => img.id === "why-choose-us");

  return (
    <section id="why-us" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">
              لماذا تختار عيادة نور؟
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              نحن نؤمن بأن زيارة طبيب الأسنان يجب أن تكون تجربة مريحة وإيجابية. لهذا السبب، نلتزم بتقديم أعلى مستويات الرعاية في بيئة هادئة ومرحبة.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            {whyChooseUsImage && (
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-w-4 aspect-h-5">
                    <Image
                        src={whyChooseUsImage.imageUrl}
                        alt={whyChooseUsImage.description}
                        width={800}
                        height={900}
                        className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
                        data-ai-hint={whyChooseUsImage.imageHint}
                    />
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
