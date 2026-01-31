import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/cta-section";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Имплантация зубов в Казани — Straumann, Medentika | Eva Dent",
  description:
    "Имплантация зубов в Казани: импланты Straumann, Medentika. Опытные имплантологи, гарантия качества, доступные цены. Запишитесь на консультацию в Eva Dent.",
};

const implantTypes = [
  {
    title: "Straumann",
    href: "/stomatologiya/implantatsiya/straumann",
    description: "Премиальные швейцарские импланты с пожизненной гарантией.",
    price: "от 55 000 ₽",
    country: "Швейцария",
  },
  {
    title: "Medentika",
    href: "/stomatologiya/implantatsiya/medentika",
    description: "Немецкое качество по доступной цене. Отличное соотношение цена/качество.",
    price: "от 35 000 ₽",
    country: "Германия",
  },
  {
    title: "Коронка на имплант",
    href: "/stomatologiya/implantatsiya/koronka-na-implant",
    description: "Установка коронки на имплант: металлокерамика или цирконий.",
    price: "от 25 000 ₽",
    country: "",
  },
];

const benefits = [
  "Пожизненная гарантия на импланты",
  "3D-планирование операции",
  "Безболезненная установка",
  "Опытные имплантологи",
  "Импланты ведущих производителей",
  "Быстрое приживление",
];

const faqs = [
  {
    question: "Сколько стоит имплантация одного зуба?",
    answer:
      "Стоимость имплантации начинается от 35 000 рублей за имплант Medentika и от 55 000 рублей за Straumann. В стоимость входит имплант, операция и контрольные осмотры. Коронка оплачивается отдельно.",
  },
  {
    question: "Больно ли ставить имплант?",
    answer:
      "Нет, операция проводится под местной анестезией и абсолютно безболезненна. После операции возможен небольшой дискомфорт, который легко снимается обезболивающими препаратами.",
  },
  {
    question: "Как долго приживается имплант?",
    answer:
      "Период приживления (остеоинтеграции) занимает от 3 до 6 месяцев в зависимости от индивидуальных особенностей организма и расположения импланта. Современные импланты Straumann могут устанавливаться по протоколу немедленной нагрузки.",
  },
  {
    question: "Какой имплант лучше выбрать?",
    answer:
      "Выбор импланта зависит от клинической ситуации, ваших пожеланий и бюджета. Straumann — премиальное решение с максимальной надёжностью. Medentika — отличный выбор с оптимальным соотношением цена/качество.",
  },
  {
    question: "Есть ли гарантия на импланты?",
    answer:
      "Да, мы даём пожизненную гарантию на импланты Straumann и Medentika. На работу врача (установку) гарантия составляет 5 лет.",
  },
];

export default function ImplantatsiyaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <nav className="mb-4 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary">
                  Главная
                </Link>
                {" / "}
                <span>Имплантация зубов</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Имплантация зубов в Казани
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Восстановите утраченные зубы с помощью имплантации в клинике Eva Dent. Мы
                устанавливаем импланты Straumann и Medentika с пожизненной гарантией.
              </p>
              <div className="mb-6 grid gap-2 sm:grid-cols-2">
                {benefits.slice(0, 4).map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="gap-2">
                  Записаться на консультацию
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/stomatologiya/tseny">Узнать цены</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/dental-implant.jpg"
                alt="Имплантация зубов в клинике Eva Dent Казань"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Implant types */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Системы имплантации
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {implantTypes.map((implant) => (
              <Link key={implant.title} href={implant.href} className="group">
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{implant.title}</CardTitle>
                        {implant.country && (
                          <span className="text-sm text-muted-foreground">{implant.country}</span>
                        )}
                      </div>
                      <span className="flex-shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {implant.price}
                      </span>
                    </div>
                    <CardDescription>{implant.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Подробнее
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Имплантация — лучший способ восстановления зубов
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Дентальная имплантация — современный и надёжный метод восстановления утраченных
                зубов. Имплант полностью заменяет корень зуба и служит опорой для коронки,
                моста или съёмного протеза.
              </p>
              <p>
                В клинике Eva Dent мы используем импланты ведущих мировых производителей:
                швейцарские Straumann и немецкие Medentika. Оба бренда имеют превосходную
                статистику приживаемости (более 98%) и многолетнюю клиническую историю.
              </p>
              <p>
                Перед имплантацией проводится тщательная диагностика: компьютерная томография,
                3D-планирование операции. Это позволяет точно спланировать положение импланта
                и избежать осложнений.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Часто задаваемые вопросы
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
