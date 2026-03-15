import Link from "next/link";
import { Phone, MapPin, Clock, Mail, Send, MessageCircle } from "lucide-react";
import { FaVk } from "react-icons/fa";

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
  { title: "Врачи", href: "/doctors" },
  { title: "Отзывы", href: "/otzyvy" },
  { title: "Сбер Здоровье", href: "/sber-zdorovie" },
  { title: "Контакты", href: "/kontakty" },
];

const socialLinks = [
  {
    name: "VK",
    href: "https://vk.com/evadent",
    icon: FaVk,
    label: "ВКонтакте",
    color: "hover:text-[#4C75A3]"
  },
  {
    name: "Telegram",
    href: "https://t.me/evadentkzn",
    icon: Send,
    label: "Telegram",
    color: "hover:text-[#26A5E4]"
  },
  {
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=79297223555&text&app_absent=0",
    icon: MessageCircle,
    label: "WhatsApp",
    color: "hover:text-[#25D366]"
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      {/* Schema.org markup for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "@id": "https://evadent.ru",
            name: "Eva Dent",
            description: "Современная стоматологическая клиника в Казани с индивидуальным подходом к каждому пациенту. Используем передовые технологии и материалы.",
            url: "https://evadent.ru",
            telephone: "+78432770777",
            email: "info@eva-dent.ru",
            priceRange: "₽₽",
            address: [
              {
                "@type": "PostalAddress",
                streetAddress: "ул. Назарбаева, 10",
                addressLocality: "Казань",
                addressRegion: "Татарстан",
                postalCode: "420000",
                addressCountry: "RU"
              },
              {
                "@type": "PostalAddress",
                streetAddress: "ул. Островского, 21",
                addressLocality: "Казань",
                addressRegion: "Татарстан",
                postalCode: "420000",
                addressCountry: "RU"
              }
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "20:00"
              }
            ],
            sameAs: [
              "https://vk.com/evadent",
              "https://t.me/evadentkzn"
            ]
          })
        }}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Eva Dent - Стоматология в Казани">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary transition-transform group-hover:scale-110">
                <span className="text-2xl font-bold text-primary-foreground">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">Eva Dent</span>
                <span className="text-xs text-primary-foreground/60">Стоматология в Казани</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Современная стоматологическая клиника с индивидуальным подходом к каждому пациенту.
              Используем передовые технологии и материалы.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 transition-all hover:scale-110 hover:bg-primary-foreground/20 ${social.color}`}
                    aria-label={`Мы в ${social.label}`}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Услуги
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-sm text-primary-foreground/70 transition-all hover:translate-x-1 hover:text-primary inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Навигация
            </h3>
            <ul className="flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-all hover:translate-x-1 hover:text-primary inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Контакты
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-primary-foreground/70">
                    ул. Назарбаева, 10
                  </span>
                  <span className="text-sm text-primary-foreground/70">
                    ул. Островского, 21
                  </span>
                  <span className="text-xs text-primary-foreground/50">Казань</span>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a
                  href="tel:+78432770777"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary"
                >
                  +7 (843) 277-07-77
                </a>
              </li>
              <li className="flex items-center gap-3 group">
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
                <div className="flex flex-col">
                  <span className="text-sm text-primary-foreground/70">Пн-Сб: 9:00 - 20:00</span>
                  <span className="text-xs text-primary-foreground/50">Вс: выходной</span>
                </div>
              </li>
            </ul>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="https://api.whatsapp.com/send/?phone=79297223555&text&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#25D366]/90 hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                Написать в WhatsApp
              </a>
              <a
                href="https://t.me/evadentkzn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#26A5E4] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#26A5E4]/90 hover:scale-105"
              >
                <Send className="h-4 w-4" />
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Eva Dent. Все права защищены.
          </p>
          
          {/* Mobile Social Links */}
          <div className="flex items-center gap-4 md:hidden">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/50 transition-colors hover:text-primary"
                  aria-label={`Мы в ${social.label}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/50 md:gap-6">
            <Link href="/privacy" className="transition-colors hover:text-primary">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="transition-colors hover:text-primary">
              Пользовательское соглашение
            </Link>
            <Link href="/sitemap" className="transition-colors hover:text-primary">
              Карта сайта
            </Link>
          </div>
        </div>

        {/* SEO Microdata */}
        <div className="hidden" itemScope itemType="https://schema.org/Dentist">
          <meta itemProp="name" content="Eva Dent" />
          <meta itemProp="telephone" content="+78432770777" />
          <meta itemProp="email" content="info@eva-dent.ru" />
          <meta itemProp="priceRange" content="₽₽" />
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <meta itemProp="addressLocality" content="Казань" />
            <meta itemProp="streetAddress" content="ул. Назарбаева, 10" />
            <meta itemProp="addressRegion" content="Татарстан" />
            <meta itemProp="addressCountry" content="RU" />
          </div>
        </div>
      </div>
    </footer>
  );
}