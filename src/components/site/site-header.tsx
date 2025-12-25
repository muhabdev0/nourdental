"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "الخدمات" },
  { href: "#about", label: "عن العيادة" },
  { href: "#testimonials", label: "آراء المرضى" },
  { href: "#contact", label: "تواصل معنا" },
];

const ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M17.8 8.4c0-3-2.3-5.4-5.3-5.4S7.2 5.3 7.2 8.4c0 2 1.1 3.8 2.8 4.8.1.1.2.2.2.3v3.1c0 .3.3.6.6.6h2.8c.3 0 .6-.3.6-.6v-3.1c0-.1.1-.2.2-.3 1.7-1 2.8-2.8 2.8-4.8zm-5.3-3.9c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5S9 10.1 9 8.2s1.6-3.7 3.5-3.7zM20 18H4v-2h16v2z"/>
    </svg>
);


export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-primary">
          <ToothIcon className="h-8 w-8" />
          <span className="sr-only">Nour Dental</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link href="#booking">احجز موعدك الآن</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-background">
              <div className="flex flex-col h-full p-6">
                 <div className="flex justify-between items-center mb-8">
                    <Link href="/" onClick={handleLinkClick} className="text-primary">
                        <ToothIcon className="h-8 w-8" />
                        <span className="sr-only">Nour Dental</span>
                    </Link>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetTrigger>
                </div>
                <nav className="flex flex-col gap-6 text-lg">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                    <Button asChild className="w-full" size="lg">
                        <Link href="#booking" onClick={handleLinkClick}>احجز موعدك الآن</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
