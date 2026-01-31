import type { Metadata } from "next";
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

/* ================= CONSTANT ================= */

const SBER_HEALTH_LINK =
  "https://kazan.docdoc.ru/clinic/stomatologiya_eva_dent";

/* ================= METADATA ================= */

export const metadata: Metadata = {
  title: "Сбер Здоровье — Онлайн запись в Eva Dent | Казань",
  description:
    "Официальная страница Eva Dent на Сбер Здоровье (DocDoc). Онлайн запись к стоматологу в Казани: лечение зубов, имплантация, брекеты, гигиена.",
};

/* ================= DATA ================= */

const benefits = [
  {
    icon: Clock,
    title: "Удобная запись",
    description:
      "Выбирайте удобное время приёма онлайн без звонков и ожидания",
  },
  {
    icon: CreditCard,
    title: "Оплата онлайн",
    description:
      "Оплачивайте услуги картой через защищённую систему Сбербанка",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description:
      "Клиника представлена на официальной платформе Сбер Здоровье",
  },
  {
    icon: Smartphone,
    title: "Напоминания",
    description:
      "Получайте уведомления о визитах через сервис Сбер Здоровье",
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

/* ================= PAGE ================= */

export default function SberZdoroviePage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#21A038]/10 via-background to-[#21A038]/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-6 bg-[#21A038]/10 text-[#21A038]">
                Партнёр Сбер Здоровье
              </Badge>

              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Онлайн запись через{" "}
                <span className="text-[#21A038]">Сбер Здоровье</span>
              </h1>

              <p className="mb-8 text-lg text-muted-foreground">
                Записывайтесь на приём в стоматологию Eva Dent через официальный
                сервис Сбер Здоровье (DocDoc). Выбирайте врача, удобное время и
                подтверждайте запись онлайн.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-[#21A038] px-8 hover:bg-[#1D8F32]"
                >
                  <a
                    href={SBER_HEALTH_LINK}
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

            {/* INFO CARD */}
            <div className="rounded-3xl bg-card p-8 shadow-2xl">
              <h3 className="mb-4 text-xl font-bold">Eva Dent</h3>

              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#21A038]" />
                  г. Казань, ул. Назарбаева, 10
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#21A038]" />
                  г. Казань, ул. Островского, 21
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-[#21A038]" />
                  Пн–Сб: 9:00 – 20:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Преимущества записи через Сбер Здоровье
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Современный сервис онлайн-записи к стоматологу в Казани
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#21A038]/10">
                    <benefit.icon className="h-6 w-6 text-[#21A038]" />
                  </div>
                  <h3 className="mb-2 font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="border-y bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold">
            Доступные услуги для онлайн-записи
          </h2>

          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#21A038]" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl rounded-3xl bg-linear-to-br from-[#21A038] to-[#1D8F32] p-8 text-white">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Запишитесь на приём онлайн
            </h2>
            <p className="mb-8 text-white/80">
              Официальная запись Eva Dent через Сбер Здоровье (DocDoc)
            </p>

            <Button
              asChild
              size="lg"
              className="gap-2 rounded-full bg-white px-8 text-[#21A038]"
            >
              <a
                href={SBER_HEALTH_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Перейти к записи
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="border-t pb-16">
        <div className="container mx-auto px-4 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            Сбер Здоровье (DocDoc) — медицинский сервис ПАО Сбербанк. Eva Dent
            представлена на платформе Сбер Здоровье как официальная
            стоматологическая клиника. Запись осуществляется через внешний
            сервис.
          </p>
        </div>
      </section>
    </main>
  );
}
