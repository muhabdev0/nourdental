import dynamic from 'next/dynamic';
import { SiteHeader } from '@/components/site/site-header';
import { Hero } from '@/components/sections/hero';
import { TrustSignals } from '@/components/sections/trust-signals';
import { Services } from '@/components/sections/services';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Skeleton } from '@/components/ui/skeleton';
import { SiteFooter } from '@/components/site/site-footer';
import { FloatingButtons } from '@/components/site/floating-buttons';

const About = dynamic(() => import('@/components/sections/about').then(mod => mod.About), {
  loading: () => <Skeleton className="h-96 w-full" />,
});
const Testimonials = dynamic(() => import('@/components/sections/testimonials').then(mod => mod.Testimonials), {
  loading: () => <Skeleton className="h-96 w-full" />,
});
const BeforeAfter = dynamic(() => import('@/components/sections/before-after').then(mod => mod.BeforeAfter), {
  loading: () => <Skeleton className="h-96 w-full" />,
});
const Booking = dynamic(() => import('@/components/sections/booking').then(mod => mod.Booking), {
  loading: () => <Skeleton className="h-96 w-full" />,
});
const Contact = dynamic(() => import('@/components/sections/contact').then(mod => mod.Contact), {
  loading: () => <Skeleton className="h-96 w-full" />,
});
const FinalCta = dynamic(() => import('@/components/sections/final-cta').then(mod => mod.FinalCta), {
  loading: () => <Skeleton className="h-48 w-full" />,
});
const Faq = dynamic(() => import('@/components/sections/faq').then(mod => mod.Faq), {
  loading: () => <Skeleton className="h-96 w-full" />,
});


export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustSignals />
        <Services />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <BeforeAfter />
        <Booking />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <FloatingButtons />
      <SiteFooter />
    </div>
  );
}
