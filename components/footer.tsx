import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const services = [
  { title: "Лечение зубов", href: "/stomatologiya/lechenie-zubov" },
  { title: "Имплантация", href: "/stomatologiya/implantatsiya" },
  { title: "Протезирование", href: "/stomatologiya/protezirovanie" },
  { title: "Ортодонтия", href: "/stomatologiya/brekety" },
  { title: "Хирургия", href: "/stomatologiya/khirurgiya" },
  { title: "Гигиена", href: "/stomatologiya/gigiena" },
];

const navigation = [
  { title: "Главная", href: "/" },
  { title: "О клинике", href: "/o-klinike" },
  { title: "Цены", href: "/stomatologiya/tseny" },
  { title: "Отзывы", href: "/otzyvy" },
  { title: "Сбер Здоровье", href: "/sber-zdorovie" },
  { title: "Контакты", href: "/kontakty" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <span className="text-2xl font-bold text-primary-foreground">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">Eva Dent</span>
                <span className="text-xs text-primary-foreground/60">Стоматология в Казани</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Современная стоматологическая клиника с индивидуальным подходом к каждому пациенту.
              Используем передовые технологии и материалы.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider">
              Услуги
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider">
              Навигация
            </h3>
            <ul className="flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider">
              Контакты
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-primary-foreground/70">
                    г. Казань, ул. Назарбаева, 10
                  </span>
                  <span className="text-sm text-primary-foreground/70">
                    г. Казань, ул. Островского, 21
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a
                  href="tel:+78432770777"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary"
                >
                  +7 (843) 277-07-77
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a
                  href="mailto:info@eva-dent.ru"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary"
                >
                  info@eva-dent.ru
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-primary-foreground/70">Пн-Сб: 9:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Eva Dent. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link href="/privacy" className="transition-colors hover:text-primary">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="transition-colors hover:text-primary">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
