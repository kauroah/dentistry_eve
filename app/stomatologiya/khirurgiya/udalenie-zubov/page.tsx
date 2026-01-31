import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/cta-section";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Удаление зубов в Казани — Безболезненно | Eva Dent",
  description:
    "Безболезненное удаление зубов в Казани. Простое и сложное удаление, современная анестезия, быстрое заживление. Стоматология Eva Dent.",
};

const benefits = [
  "Безболезненная процедура",
  "Современная анестезия",
  "Атравматичные методы",
  "Быстрое заживление",
  "Срочный приём при боли",
  "Доступные цены",
];

const prices = [
  { service: "Простое удаление зуба", price: "от 2 500 ₽" },
  { service: "Сложное удаление зуба", price: "от 5 000 ₽" },
  { service: "Удаление зуба мудрости", price: "от 7 500 ₽" },
  { service: "Удаление ретинированного зуба", price: "от 10 000 ₽" },
];

const faqs = [
  {
    question: "Когда необходимо удалять зуб?",
    answer:
      "Удаление показано при: сильном разрушении зуба, когда восстановление невозможно; периодонтите с кистой; переломе корня; неправильном положении зуба; подготовке к ортодонтическому лечению. Мы всегда стараемся сохранить зуб и прибегаем к удалению только когда это необходимо.",
  },
  {
    question: "Больно ли удалять зуб?",
    answer:
      "Нет. Мы используем современные анестетики, которые полностью блокируют боль. Вы почувствуете только давление во время процедуры. После окончания анестезии возможен умеренный дискомфорт, который снимается обезболивающими.",
  },
  {
    question: "Что делать после удаления зуба?",
    answer:
      "После удаления рекомендуем: не есть 2-3 часа, не полоскать рот в первые сутки, прикладывать холод к щеке, не курить минимум сутки, принимать назначенные препараты. Подробные рекомендации врач даст после процедуры.",
  },
  {
    question: "Сколько заживает лунка после удаления?",
    answer:
      "Первичное заживление занимает 7-10 дней. За это время формируется кровяной сгусток, который постепенно замещается костной тканью. Полное восстановление кости происходит за 3-6 месяцев.",
  },
  {
    question: "Можно ли сразу поставить имплант после удаления?",
    answer:
      "В некоторых случаях — да. Это называется одномоментная имплантация. Решение принимает врач на основе состояния костной ткани и других факторов. Такой подход сокращает сроки лечения.",
  },
];

export default function UdalenieZubovPage() {
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
                <Link href="/stomatologiya/khirurgiya" className="hover:text-primary">
                  Хирургия
                </Link>
                {" / "}
                <span>Удаление зубов</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Удаление зубов в Казани
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Безболезненное удаление зубов в клинике Eva Dent. Современная анестезия,
                атравматичные методики, быстрое восстановление.
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
                  <Link href="/stomatologiya/tseny">Все цены</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/dental-treatment.jpg"
                alt="Удаление зубов в клинике Eva Dent"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Стоимость удаления зубов
            </h2>
            <div className="divide-y divide-border rounded-lg border border-border">
              {prices.map((item) => (
                <div key={item.service} className="flex items-center justify-between p-4">
                  <span className="text-foreground">{item.service}</span>
                  <span className="font-medium text-primary">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Точная стоимость определяется после осмотра
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Как проходит удаление зуба
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Удаление зуба — одна из самых частых стоматологических операций. Современные
                методы позволяют провести её быстро, безболезненно и с минимальной травматизацией.
              </p>
              <ol>
                <li><strong>Диагностика</strong> — осмотр, при необходимости рентген-снимок</li>
                <li><strong>Анестезия</strong> — подбираем анестетик индивидуально</li>
                <li><strong>Удаление</strong> — применяем атравматичные методы</li>
                <li><strong>Обработка лунки</strong> — закладываем лекарство при необходимости</li>
                <li><strong>Рекомендации</strong> — подробно объясняем уход после удаления</li>
              </ol>
              <p>
                При острой боли принимаем пациентов вне очереди. Если у вас болит зуб — позвоните,
                и мы примем вас в ближайшее время.
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
