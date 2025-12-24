import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const dentistPhoto = PlaceHolderImages.find((img) => img.id === "dentist-photo");

  return (
    <section id="about" className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-none shadow-lg">
          <div className="grid md:grid-cols-3 items-center">
            <div className="md:col-span-1">
              {dentistPhoto && (
                <div className="relative w-full h-80 md:h-full min-h-[300px]">
                  <Image
                    src={dentistPhoto.imageUrl}
                    alt={dentistPhoto.description}
                    fill
                    className="object-cover object-top"
                    data-ai-hint={dentistPhoto.imageHint}
                  />
                </div>
              )}
            </div>
            <div className="md:col-span-2">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                  تعرف على طبيبك
                </h2>
                <h3 className="text-2xl font-semibold text-foreground mb-4">د. أحمد المصري</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  د. أحمد طبيب أسنان بخبرة تزيد عن 15 عامًا، يحرص على تقديم علاج مريح وآمن ومساعدة المرضى على الشعور بالاطمئنان والثقة أثناء العلاج. يتخصص في طب الأسنان التجميلي وزراعة الأسنان، وهو ملتزم بمواكبة أحدث التطورات في عالم طب الأسنان ليقدم لمرضاه أفضل النتائج الممكنة.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
