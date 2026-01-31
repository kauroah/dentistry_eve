"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, User, HelpCircle, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppointmentModal } from "@/components/appointment-modal";

const services = [
  {
    title: "Лечение зубов",
    href: "/stomatologiya/lechenie-zubov",
    description: "Лечение кариеса, пульпита, периодонтита",
  },
  {
    title: "Имплантация",
    href: "/stomatologiya/implantatsiya",
    description: "Установка имплантов Straumann, Medentika",
  },
  {
    title: "Протезирование",
    href: "/stomatologiya/protezirovanie",
    description: "Виниры, коронки, съёмные протезы",
  },
  {
    title: "Ортодонтия",
    href: "/stomatologiya/brekety",
    description: "Брекеты и исправление прикуса",
  },
  {
    title: "Хирургия",
    href: "/stomatologiya/khirurgiya",
    description: "Удаление зубов, зубы мудрости",
  },
  {
    title: "Гигиена",
    href: "/stomatologiya/gigiena",
    description: "Профессиональная чистка, фторирование",
  },
];

const topNavItems = [
  { title: "Услуги", href: "/stomatologiya/tseny", icon: Menu },
  { title: "Профиль", href: "/o-klinike", icon: User },
  { title: "Помощь", href: "/kontakty", icon: HelpCircle },
  { title: "Новости", href: "#", icon: Newspaper },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      {/* Top bar */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <nav className="hidden items-center gap-6 md:flex">
            {topNavItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+78432770777" className="hover:text-primary">
                +7 (843) 277-07-77
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <span className="text-2xl font-bold text-primary-foreground">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-foreground">Eva Dent</span>
                <span className="text-xs text-muted-foreground">Стоматологическая клиника</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Главная
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Услуги</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/stomatologiya/tseny" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Цены
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/o-klinike" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      О клинике
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/otzyvy" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Отзывы
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/kontakty" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Контакты
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              <AppointmentModal>
                <Button size="lg" className="hidden rounded-full px-6 sm:inline-flex">
                  Записаться на приём
                </Button>
              </AppointmentModal>

              {/* Mobile Navigation */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Открыть меню</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4 pt-8">
                    <Link
                      href="/"
                      className="text-lg font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Главная
                    </Link>
                    <div className="flex flex-col gap-2">
                      <span className="text-lg font-medium">Услуги</span>
                      <div className="ml-4 flex flex-col gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            className="text-muted-foreground hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link
                      href="/stomatologiya/tseny"
                      className="text-lg font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Цены
                    </Link>
                    <Link
                      href="/o-klinike"
                      className="text-lg font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      О клинике
                    </Link>
                    <Link
                      href="/otzyvy"
                      className="text-lg font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Отзывы
                    </Link>
                    <Link
                      href="/kontakty"
                      className="text-lg font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Контакты
                    </Link>
                    <div className="mt-4 flex flex-col gap-2 border-t pt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <a href="tel:+78432770777">+7 (843) 277-07-77</a>
                      </div>
                    </div>
                    <AppointmentModal>
                      <Button className="mt-4 w-full rounded-full">Записаться на приём</Button>
                    </AppointmentModal>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
