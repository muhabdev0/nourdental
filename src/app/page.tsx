import { SiteHeader } from '@/components/site/site-header';
import { Hero } from '@/components/sections/hero';
import { TrustSignals } from '@/components/sections/trust-signals';
import { Services } from '@/components/sections/services';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { About } from '@/components/sections/about';
import { Testimonials } from '@/components/sections/testimonials';
import { BeforeAfter } from '@/components/sections/before-after';
import { Booking } from '@/components/sections/booking';
import { Contact } from '@/components/sections/contact';
import { Faq } from '@/components/sections/faq';
import { FinalCta } from '@/components/sections/final-cta';
import { SiteFooter } from '@/components/site/site-footer';

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
      <SiteFooter />
    </div>
  );
}
