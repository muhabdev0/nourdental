import { Star, Users, ShieldCheck, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const signals = [
  {
    icon: Star,
    text: "تقييم المرضى",
    value: "⭐⭐⭐⭐⭐",
  },
  {
    icon: Users,
    text: "موثوق من أكثر من",
    value: "5000+ مريض",
  },
  {
    icon: Award,
    text: "خبرة",
    value: "أكثر من 15 سنة",
  },
  {
    icon: ShieldCheck,
    text: "أطباء معتمدون",
    value: "شركات التأمين المعتمدة",
  },
];

export function TrustSignals() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {signals.map((signal, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent">
              <CardContent className="flex flex-col items-center text-center p-4">
                <signal.icon className="w-10 h-10 text-primary mb-3" />
                <p className="text-muted-foreground text-sm">{signal.text}</p>
                <p className="font-bold text-lg text-foreground">{signal.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
