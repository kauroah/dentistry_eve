"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Clock, MapPin, ChevronDown } from "lucide-react";
import { AppointmentModal } from "@/components/appointment-modal";
import { EvaDentLogo } from "@/public/logo/eva-dent-logo";

/* ================= HEADER ================= */

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navigation = [
    { name: "Главная", href: "/" },
    { 
      name: "Услуги", 
      href: "/stomatologiya/tseny",
      children: [
        { name: "Лечение зубов", href: "/stomatologiya/lechenie-zubov" },
        { name: "Имплантация", href: "/stomatologiya/implantatsiya" },
        { name: "Протезирование", href: "/stomatologiya/protezirovanie" },
        { name: "Ортодонтия", href: "/stomatologiya/ortodontiya" },
        { name: "Хирургия", href: "/stomatologiya/khirurgiya" },
        { name: "Все услуги", href: "/stomatologiya/tseny" },
      ]
    },
    { name: "Врачи", href: "/doctors" },
    { name: "О клинике", href: "/o-klinike" },
    { name: "Отзывы", href: "/otzyvy" },
    { name: "Контакты", href: "/kontakty" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname?.startsWith(href);
  };

  return (
    <>
      {/* TOP BAR - Contact Info for SEO */}
      <div className="bg-primary/5 text-sm py-2 border-b border-border hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Ежедневно 09:00 – 21:00</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>г. Казань, ул. Назарбаева, 10</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>г. Казань, ул. Островского, 21</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:info@evadent.ru" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@evadent.ru
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header 
        className={`sticky top-0 z-50 w-full bg-background transition-all duration-300 ${
          isScrolled ? "shadow-md border-b border-border" : "border-b border-border"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">

            {/* LOGO with structured data */}
            <Link 
              href="/" 
              className="flex items-center group"
              aria-label="Eva Dent - Стоматологическая клиника в Казани"
            >
              <EvaDentLogo className="h-10 w-auto transition-transform group-hover:scale-105" color="#2563EB" />
              <span className="sr-only">Eva Dent - Стоматологическая клиника в Казани</span>
            </Link>

            {/* DESKTOP NAV with dropdowns */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Основная навигация">
              {navigation.map((item) => (
                <div key={item.href} className="relative group">
                  {item.children ? (
                    <>
                      <button
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                          isActive(item.href) 
                            ? "text-primary bg-primary/10" 
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2 text-sm hover:bg-primary/5 hover:text-primary transition-colors ${
                                isActive(child.href) ? "text-primary bg-primary/10" : "text-muted-foreground"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`inline-flex px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                        isActive(item.href) 
                          ? "text-primary bg-primary/10" 
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">

              {/* PHONE with microdata */}
              <div className="hidden md:flex items-center gap-2" itemScope itemType="https://schema.org/ContactPoint">
                <meta itemProp="contactType" content="customer service" />
                <meta itemProp="telephone" content="+78432770777" />
                <meta itemProp="availableLanguage" content="Russian" />
                <Phone className="h-4 w-4 text-primary animate-pulse" />
                <a 
                  href="tel:+78432770777" 
                  className="text-sm font-medium hover:text-primary transition-colors"
                  itemProp="telephone"
                >
                  +7 (843) 277-07-77
                </a>
              </div>

              {/* CTA */}
              <AppointmentModal>
                <Button 
                  size="lg" 
                  className="hidden sm:inline-flex rounded-full px-6 bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                >
                  Записаться на приём
                </Button>
              </AppointmentModal>

              {/* MOBILE MENU */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full hover:bg-primary/10 transition-colors"
                    aria-label="Открыть меню"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-75 sm:w-100 p-0">
                  <div className="flex flex-col h-full">
                    
                    {/* Mobile Header */}
                    <div className="p-6 border-b">
                      <EvaDentLogo className="h-8 w-auto" color="#2563EB" />
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 overflow-y-auto p-6" aria-label="Мобильная навигация">
                      <div className="flex flex-col gap-2">
                        {navigation.map((item) => (
                          <div key={item.href}>
                            {item.children ? (
                              <>
                                <div className="text-sm font-medium text-muted-foreground mb-2 px-3">
                                  {item.name}
                                </div>
                                <div className="ml-4 space-y-1 mb-4">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      onClick={() => setIsOpen(false)}
                                      className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                                        isActive(child.href)
                                          ? "text-primary bg-primary/10 font-medium"
                                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                                      }`}
                                    >
                                      {child.name}
                                    </Link>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 text-sm rounded-lg transition-colors mb-1 ${
                                  isActive(item.href)
                                    ? "text-primary bg-primary/10 font-medium"
                                    : "text-foreground hover:text-primary hover:bg-primary/5"
                                }`}
                              >
                                {item.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </nav>

                    {/* Mobile Footer */}
                    <div className="p-6 border-t bg-muted/20">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">09:00 – 21:00 ежедневно</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">г. Казань, ул. Баумана, 123</span>
                        </div>
                        <a 
                          href="tel:+78432770777" 
                          className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                        >
                          <Phone className="h-4 w-4 text-primary" />
                          +7 (843) 277-07-77
                        </a>
                        <a 
                          href="mailto:info@evadent.ru" 
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                        >
                          info@evadent.ru
                        </a>
                        <AppointmentModal>
                          <Button className="w-full rounded-full mt-2">
                            Записаться на приём
                          </Button>
                        </AppointmentModal>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}