import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Clock,
  CreditCard,
  Smartphone,
  CheckCircle2,
  ExternalLink,
  Phone,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Сбер Здоровье — Запись онлайн | Eva Dent Казань",
  description:
    "Запишитесь на приём в стоматологию Eva Dent через Сбер Здоровье. Удобная онлайн-запись, оплата картой, напоминания о визите.",
};

const benefits = [
  {
    icon: Clock,
    title: "Удобная запись",
    description: "Выбирайте удобное время приёма онлайн без звонков и ожидания",
  },
  {
    icon: CreditCard,
    title: "Оплата онлайн",
    description: "Оплачивайте услуги картой через защищённую систему Сбербанка",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Все врачи проверены, отзывы реальных пациентов",
  },
  {
    icon: Smartphone,
    title: "Напоминания",
    description: "Получайте уведомления о предстоящих визитах в приложении",
  },
];

const services = [
  "Консультация стоматолога",
  "Лечение кариеса",
  "Профессиональная гигиена",
  "Удаление зубов",
  "Имплантация",
  "Протезирование",
  "Ортодонтия (брекеты)",
  "Отбеливание зубов",
];

export default function SberZdoroviePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#21A038]/10 via-background to-[#21A038]/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-6 bg-[#21A038]/10 text-[#21A038] hover:bg-[#21A038]/20">
                Партнёр Сбер Здоровье
              </Badge>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Запись через{" "}
                <span className="text-[#21A038]">Сбер Здоровье</span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Записывайтесь на приём в Eva Dent через сервис Сбер Здоровье — удобно, быстро и надёжно.
                Выбирайте врача, время и оплачивайте онлайн.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-[#21A038] px-8 hover:bg-[#1D8F32]"
                >
                  <a
                    href="https://sberhealth.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Записаться через Сбер Здоровье
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full bg-transparent"
                >
                  <a href="tel:+78432770777">
                    <Phone className="mr-2 h-4 w-4" />
                    +7 (843) 277-07-77
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-card p-8 shadow-2xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#21A038]">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 text-white" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Сбер Здоровье</h3>
                    <p className="text-sm text-muted-foreground">Официальный партнёр</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl bg-muted/50 p-4">
                    <p className="text-sm font-medium text-foreground">Eva Dent</p>
                    <p className="text-xs text-muted-foreground">Стоматологическая клиника</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-[#21A038]" />
                    <span>г. Казань, ул. Назарбаева, 10</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-[#21A038]" />
                    <span>г. Казань, ул. Островского, 21</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-[#21A038]" />
                    <span>Пн-Сб: 9:00 - 20:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              Преимущества записи через Сбер Здоровье
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Используйте современный сервис для записи к стоматологу — это быстро, удобно и безопасно
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-border/50">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#21A038]/10">
                    <benefit.icon className="h-6 w-6 text-[#21A038]" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Services */}
      <section className="border-y border-border bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
                Доступные услуги для онлайн-записи
              </h2>
              <p className="mb-8 text-muted-foreground">
                Выбирайте нужную услугу и записывайтесь к специалисту в удобное время
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#21A038]" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-bold text-foreground">Как записаться?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#21A038] text-sm font-bold text-white">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Откройте Сбер Здоровье</p>
                    <p className="text-sm text-muted-foreground">
                      В приложении или на сайте sberhealth.ru
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#21A038] text-sm font-bold text-white">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Найдите Eva Dent</p>
                    <p className="text-sm text-muted-foreground">
                      Введите название клиники или выберите раздел Стоматология
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#21A038] text-sm font-bold text-white">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Выберите услугу и врача</p>
                    <p className="text-sm text-muted-foreground">
                      Посмотрите рейтинги и отзывы, выберите удобное время
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#21A038] text-sm font-bold text-white">
                    4
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Подтвердите запись</p>
                    <p className="text-sm text-muted-foreground">
                      Получите подтверждение и напоминание о визите
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-[#21A038] to-[#1D8F32] p-8 text-center text-white md:p-12">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Запишитесь на приём прямо сейчас
            </h2>
            <p className="mb-8 text-white/80">
              Выберите удобный способ записи — через Сбер Здоровье или позвоните нам напрямую
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="gap-2 rounded-full bg-white px-8 text-[#21A038] hover:bg-white/90"
              >
                <a
                  href="https://sberhealth.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Сбер Здоровье
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a href="tel:+78432770777">
                  <Phone className="mr-2 h-4 w-4" />
                  +7 (843) 277-07-77
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-border pb-16">
        <div className="container mx-auto px-4 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            Сбер Здоровье — зарегистрированный товарный знак ПАО Сбербанк. Eva Dent является партнёром
            сервиса Сбер Здоровье. Для записи через платформу необходима регистрация в сервисе.
          </p>
        </div>
      </section>
    </main>
  );
}
