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
  title: "Хирургическая стоматология в Казани — Удаление зубов | Eva Dent",
  description:
    "Хирургическая стоматология в Казани: удаление зубов, зубов мудрости, резекция корня. Безболезненно и безопасно в клинике Eva Dent.",
};

const surgeryTypes = [
  {
    title: "Удаление зубов",
    href: "/stomatologiya/khirurgiya/udalenie-zubov",
    description: "Простое и сложное удаление зубов с применением современной анестезии.",
    price: "от 2 500 ₽",
  },
  {
    title: "Удаление зуба мудрости",
    href: "/stomatologiya/khirurgiya/udalenie-zuba-mudrosti",
    description: "Удаление ретинированных и дистопированных зубов мудрости.",
    price: "от 7 500 ₽",
  },
  {
    title: "Резекция верхушки корня",
    description: "Хирургическое удаление кисты или гранулёмы на корне зуба.",
    price: "от 8 000 ₽",
  },
  {
    title: "Пластика уздечки",
    description: "Коррекция короткой уздечки языка или губы.",
    price: "от 5 000 ₽",
  },
];

const benefits = [
  "Безболезненные операции",
  "Опытные хирурги",
  "Современное оборудование",
  "Быстрое заживление",
  "Минимальная травматичность",
  "Срочный приём при боли",
];

const faqs = [
  {
    question: "Больно ли удалять зуб?",
    answer:
      "Нет, удаление проводится под местной анестезией. Вы не почувствуете боли во время операции. После окончания действия анестезии возможен умеренный дискомфорт, который снимается обезболивающими.",
  },
  {
    question: "Обязательно ли удалять зубы мудрости?",
    answer:
      "Не всегда. Если зуб мудрости прорезался правильно и не мешает, его можно оставить. Удаление рекомендуется при неправильном положении, воспалениях, кариесе или давлении на соседние зубы.",
  },
  {
    question: "Что делать после удаления зуба?",
    answer:
      "После удаления рекомендуется не есть 2-3 часа, не полоскать рот в первые сутки, прикладывать холод, принимать назначенные препараты. Врач даст подробные рекомендации.",
  },
  {
    question: "Сколько заживает десна после удаления?",
    answer:
      "Первичное заживление занимает 7-10 дней. Полное восстановление костной ткани — 3-6 месяцев. Скорость заживления зависит от сложности удаления и индивидуальных особенностей.",
  },
  {
    question: "Можно ли удалить зуб при беременности?",
    answer:
      "Плановое удаление лучше отложить. При острой необходимости удаление возможно во втором триместре с использованием безопасных анестетиков. Обязательно сообщите врачу о беременности.",
  },
];

export default function KhirurgiyaPage() {
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
                <span>Хирургическая стоматология</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Хирургическая стоматология в Казани
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Безболезненное удаление зубов и другие хирургические операции в клинике Eva Dent.
                Опытные хирурги, современное оборудование, быстрое восстановление.
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
                  Записаться на приём
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/stomatologiya/tseny">Узнать цены</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/dental-treatment.jpg"
                alt="Хирургическая стоматология в клинике Eva Dent Казань"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Surgery types */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Виды хирургических услуг
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {surgeryTypes.map((type) =>
              type.href ? (
                <Link key={type.title} href={type.href} className="group">
                  <Card className="h-full transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{type.title}</CardTitle>
                        <span className="flex-shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                          {type.price}
                        </span>
                      </div>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Подробнее
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <Card key={type.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                      <span className="flex-shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {type.price}
                      </span>
                    </div>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Хирургия в клинике Eva Dent
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Хирургическая стоматология в Eva Dent — это современные методы, минимальная
                травматичность и максимальный комфорт для пациента. Наши хирурги имеют
                многолетний опыт и регулярно совершенствуют навыки.
              </p>
              <p>
                Мы проводим все виды стоматологических операций: от простого удаления зубов
                до сложных вмешательств. Используем атравматичные методики, которые ускоряют
                заживление и уменьшают послеоперационный дискомфорт.
              </p>
              <p>
                При острой боли принимаем пациентов вне очереди. Если у вас болит зуб —
                не терпите, позвоните нам, и мы поможем в ближайшее время.
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
