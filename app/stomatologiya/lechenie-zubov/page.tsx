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
  title: "Лечение зубов в Казани — Терапевтическая стоматология | Eva Dent",
  description:
    "Качественное лечение зубов в Казани: кариес, пульпит, периодонтит. Современные методы, безболезненное лечение, доступные цены. Стоматология Eva Dent.",
};

const subServices = [
  {
    title: "Лечение кариеса",
    href: "/stomatologiya/lechenie-zubov/karies",
    description: "Лечение кариеса на любой стадии с использованием современных пломбировочных материалов.",
    price: "от 3 500 ₽",
  },
  {
    title: "Лечение каналов",
    href: "/stomatologiya/lechenie-zubov/kanaly",
    description: "Эндодонтическое лечение с использованием микроскопа для максимальной точности.",
    price: "от 5 500 ₽",
  },
  {
    title: "Лечение дёсен",
    href: "/stomatologiya/lechenie-zubov/desny",
    description: "Комплексное лечение заболеваний пародонта: гингивит, пародонтит.",
    price: "от 4 000 ₽",
  },
];

const benefits = [
  "Безболезненное лечение под анестезией",
  "Современные пломбировочные материалы",
  "Лечение под микроскопом",
  "Гарантия на все виды работ",
  "Индивидуальный план лечения",
  "Комфортная атмосфера",
];

const faqs = [
  {
    question: "Больно ли лечить зубы?",
    answer:
      "Нет, современные методы анестезии позволяют полностью исключить болевые ощущения во время лечения. Мы используем качественные анестетики и индивидуально подбираем дозировку.",
  },
  {
    question: "Сколько стоит лечение кариеса?",
    answer:
      "Стоимость лечения кариеса начинается от 3 500 рублей и зависит от степени поражения зуба и используемых материалов. Точную стоимость врач определит после осмотра.",
  },
  {
    question: "Как долго держится пломба?",
    answer:
      "При правильном уходе современные световые пломбы служат 7-10 лет и более. Мы используем только качественные материалы ведущих производителей.",
  },
  {
    question: "Нужно ли удалять нерв при кариесе?",
    answer:
      "Не всегда. Если кариес обнаружен на ранней стадии, нерв можно сохранить. При глубоком поражении или пульпите требуется эндодонтическое лечение каналов.",
  },
  {
    question: "Что делать, если зуб болит ночью?",
    answer:
      "При острой боли рекомендуем принять обезболивающее и записаться на приём к врачу как можно скорее. Мы принимаем пациентов с острой болью вне очереди.",
  },
];

export default function LechenieZubovPage() {
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
                <span>Лечение зубов</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Лечение зубов в Казани
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Терапевтическая стоматология в клинике Eva Dent — это современные методы лечения,
                качественные материалы и индивидуальный подход к каждому пациенту.
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
                alt="Лечение зубов в клинике Eva Dent Казань"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Направления терапевтической стоматологии
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {subServices.map((service) => (
              <Link key={service.title} href={service.href} className="group">
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <span className="flex-shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {service.price}
                      </span>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
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
              Современное лечение зубов
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Терапевтическая стоматология — основа здоровья полости рта. В клинике Eva Dent мы
                используем современные методы диагностики и лечения, позволяющие сохранить ваши
                зубы здоровыми на долгие годы.
              </p>
              <p>
                Наши врачи-терапевты имеют высшую квалификацию и регулярно повышают профессиональный
                уровень. Мы применяем только сертифицированные материалы ведущих мировых
                производителей.
              </p>
              <p>
                Благодаря современной анестезии лечение проходит абсолютно безболезненно. Мы
                понимаем, что многие пациенты испытывают страх перед стоматологом, поэтому создаём
                максимально комфортную атмосферу.
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
