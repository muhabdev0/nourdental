import Link from "next/link";
import { Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

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
              <Image src="https://tse3.mm.bing.net/th/id/OIP.TD80T-ssqDQsG-ZP2rNhwgHaG8?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Nour Dental Logo" width={40} height={40} className="rounded-full" />
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
