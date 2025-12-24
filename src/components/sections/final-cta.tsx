import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">
          ابتسامتك تستحق أفضل رعاية
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/80">
          لا تؤجل صحة أسنانك. فريقنا جاهز ليمنحك الابتسامة التي طالما حلمت بها.
        </p>
        <div className="mt-8">
          <Button size="lg" variant="secondary" asChild className="text-lg">
            <Link href="#booking">
              احجز موعدك اليوم
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
