import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GeneralDentistry, TeethCleaning, TeethWhitening, RootCanal, Orthodontics, PediatricDentistry, DentalImplants, Emergency } from "@/components/service-icons";

const services = [
  {
    icon: GeneralDentistry,
    title: "طب الأسنان العام",
    description: "رعاية أساسية وعلاجات للحفاظ على صحة أسنانك ولثتك.",
  },
  {
    icon: TeethCleaning,
    title: "تنظيف الأسنان",
    description: "إزالة الجير والبلاك باحترافية لتحصل على أسنان نظيفة ونفس منعش.",
  },
  {
    icon: TeethWhitening,
    title: "تبييض الأسنان",
    description: "احصل على ابتسامة أكثر بياضًا وإشراقًا بجلسة آمنة وفعالة.",
  },
  {
    icon: RootCanal,
    title: "علاج العصب",
    description: "علاج دقيق لإنقاذ أسنانك المصابة وتخليصك من الألم نهائيًا.",
  },
  {
    icon: Orthodontics,
    title: "تقويم الأسنان",
    description: "ترتيب الأسنان وتحسين مظهرها ووظيفتها باستخدام أحدث طرق التقويم.",
  },
  {
    icon: PediatricDentistry,
    title: "طب أسنان الأطفال",
    description: "رعاية متخصصة ولطيفة لأسنان أطفالك في بيئة مريحة ومحببة.",
  },
  {
    icon: DentalImplants,
    title: "زراعة الأسنان",
    description: "تعويض الأسنان المفقودة بحلول دائمة تشبه الأسنان الطبيعية.",
  },
  {
    icon: Emergency,
    title: "حالات الطوارئ",
    description: "نحن هنا لمساعدتك في حالات ألم الأسنان أو الإصابات الطارئة.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">خدماتنا</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من خدمات طب الأسنان لتلبية جميع احتياجاتك واحتياجات عائلتك.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-background shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 transition-colors duration-300 group-hover:bg-primary/20">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="font-bold text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
