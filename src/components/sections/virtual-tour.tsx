
export function VirtualTour() {
  return (
    <section id="virtual-tour" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            جولة افتراضية في عيادتنا
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            تعرف على عيادتنا واستكشف أجواءها المريحة قبل زيارتك.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1628630455889!6m8!1m7!1sCAoSLEFGMVFpcE5qX1h3X1l3Z3l3X3N3X2ZRLUl3bHlfaVdWLWdWNkZTdHJz!2m2!1d21.583605!2d39.197709!3f324.95!4f-9.58!5f0.7820865974627469"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Virtual Tour of the Clinic"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
