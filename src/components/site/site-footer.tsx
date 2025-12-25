import Link from "next/link";
import { Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M16.5,8c0-3.03-2.47-5.5-5.5-5.5S5.5,4.97,5.5,8c0,2.12,1.2,3.95,2.96,4.89C8.3,13.25,8,13.6,8,14v3c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-3c0-0.4-0.3-0.75-0.46-0.11C15.3,11.95,16.5,10.12,16.5,8z M12,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,10,12,10z M19,19H5v-2h14V19z" />
    </svg>
);

export function SiteFooter() {
  const navLinks = [
    { href: "#services", label: "الخدمات" },
    { href: "#about", label: "عن العيادة" },
    { href: "#testimonials", label: "آراء المرضى" },
    { href: "#booking", label: "حجز موعد" },
  ];

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Twitter, label: "Twitter" },
  ];

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 text-primary">
              <ToothIcon className="h-8 w-8" />
              <h3 className="text-2xl font-bold font-headline">
                Nour Dental
              </h3>
            </Link>
            <p className="text-muted-foreground">
              رعاية أسنان احترافية لجميع أفراد العائلة. ابتسامتك الصحية تبدأ من هنا.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@nourdental.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>السبت - الخميس: 9ص - 10م</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">تابعنا</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} عيادة نور لطب الأسنان. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
