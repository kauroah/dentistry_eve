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
  title: "Брекеты в Казани — Исправление прикуса | Eva Dent",
  description:
    "Установка брекетов в Казани: металлические, керамические, сапфировые. Исправление прикуса у взрослых и детей. Консультация ортодонта в Eva Dent.",
};

const bracketTypes = [
  {
    title: "Металлические брекеты",
    description: "Классические надёжные брекеты. Оптимальный вариант по соотношению цена/качество.",
    price: "от 45 000 ₽",
  },
  {
    title: "Керамические брекеты",
    description: "Эстетичные брекеты из керамики, практически незаметны на зубах.",
    price: "от 65 000 ₽",
  },
  {
    title: "Сапфировые брекеты",
    description: "Прозрачные брекеты из искусственного сапфира. Максимальная эстетика.",
    price: "от 75 000 ₽",
  },
  {
    title: "Элайнеры",
    description: "Невидимые съёмные капы для выравнивания зубов. Современная альтернатива брекетам.",
    price: "от 180 000 ₽",
  },
];

const benefits = [
  "Бесплатная консультация ортодонта",
  "3D-моделирование результата",
  "Рассрочка на лечение",
  "Опытные ортодонты",
  "Гарантия результата",
  "Комфортное лечение",
];

const faqs = [
  {
    question: "В каком возрасте лучше ставить брекеты?",
    answer:
      "Оптимальный возраст для установки брекетов — 12-14 лет, когда молочные зубы полностью сменились постоянными. Однако ортодонтическое лечение эффективно в любом возрасте — среди наших пациентов много взрослых.",
  },
  {
    question: "Сколько времени носить брекеты?",
    answer:
      "Средний срок лечения составляет 1,5-2 года. Точную продолжительность определяет ортодонт после диагностики. Сложные случаи могут требовать более длительного лечения.",
  },
  {
    question: "Больно ли носить брекеты?",
    answer:
      "В первые дни после установки и активации возможен дискомфорт, который проходит через 3-5 дней. Современные брекеты разработаны для максимального комфорта пациента.",
  },
  {
    question: "Какие брекеты лучше — металлические или керамические?",
    answer:
      "С точки зрения эффективности оба типа одинаковы. Керамические более эстетичны, но требуют бережного отношения. Металлические — более прочные и доступные по цене. Выбор зависит от ваших приоритетов.",
  },
  {
    question: "Можно ли поставить брекеты только на одну челюсть?",
    answer:
      "Технически это возможно, но чаще всего для достижения правильного прикуса требуется лечение обеих челюстей. Ортодонт порекомендует оптимальный вариант после диагностики.",
  },
];

export default function BreketyPage() {
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
                <span>Брекеты и ортодонтия</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Брекеты в Казани
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Исправление прикуса и выравнивание зубов в клинике Eva Dent. Предлагаем все виды
                брекет-систем: от классических металлических до невидимых элайнеров.
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
                  Записаться к ортодонту
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/stomatologiya/tseny">Узнать цены</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/dental-braces.jpg"
                alt="Брекеты и ортодонтия в клинике Eva Dent Казань"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bracket types */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Виды брекет-систем
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {bracketTypes.map((bracket) => (
              <Card key={bracket.title} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{bracket.title}</CardTitle>
                    <span className="flex-shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {bracket.price}
                    </span>
                  </div>
                  <CardDescription>{bracket.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Исправление прикуса в Eva Dent
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Ортодонтическое лечение — это не только красивая улыбка, но и здоровье всей
                зубочелюстной системы. Неправильный прикус может приводить к проблемам с
                пищеварением, головным болям, заболеваниям дёсен и преждевременному стиранию зубов.
              </p>
              <p>
                В клинике Eva Dent работают опытные врачи-ортодонты, которые помогут подобрать
                оптимальную брекет-систему и составят индивидуальный план лечения. Перед началом
                лечения проводится полная диагностика и 3D-моделирование результата.
              </p>
              <p>
                Мы предлагаем гибкие условия оплаты: рассрочку без процентов на весь срок лечения.
                Это делает ортодонтическое лечение доступным для всех.
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
