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
  title: "Удаление зуба мудрости в Казани — Безболезненно | Eva Dent",
  description:
    "Удаление зубов мудрости в Казани: ретинированные, дистопированные. Безболезненно, быстрое заживление, опытные хирурги. Стоматология Eva Dent.",
};

const benefits = [
  "Опытные хирурги",
  "3D-диагностика",
  "Атравматичное удаление",
  "Быстрое заживление",
  "Седация при необходимости",
  "Срочный приём",
];

const faqs = [
  {
    question: "Обязательно ли удалять зубы мудрости?",
    answer:
      "Не всегда. Удаление рекомендуется, если зуб: растёт неправильно (в щёку или в соседний зуб), не прорезался полностью и воспаляется, поражён кариесом и не поддаётся лечению, давит на соседние зубы и вызывает скученность.",
  },
  {
    question: "Больно ли удалять зуб мудрости?",
    answer:
      "Сама операция проходит под местной анестезией и абсолютно безболезненна. После операции возможна умеренная боль в течение 3-5 дней, которая хорошо снимается обезболивающими препаратами.",
  },
  {
    question: "Сколько длится удаление зуба мудрости?",
    answer:
      "Простое удаление занимает 15-20 минут. Сложное удаление ретинированного зуба может длиться 40-60 минут. Время зависит от положения зуба и сложности случая.",
  },
  {
    question: "Что такое ретинированный зуб мудрости?",
    answer:
      "Ретинированный зуб — это зуб, который не прорезался полностью или вообще не вышел из кости. Такие зубы часто растут под углом, упираясь в соседние зубы, и требуют хирургического удаления.",
  },
  {
    question: "Сколько стоит удаление зуба мудрости?",
    answer:
      "Стоимость зависит от сложности. Простое удаление — от 5 000 рублей, сложное удаление ретинированного зуба — от 7 500 рублей. Точную цену врач назовёт после осмотра и рентгена.",
  },
  {
    question: "Можно ли удалить все 4 зуба мудрости за раз?",
    answer:
      "Технически это возможно, но обычно мы рекомендуем удалять по 1-2 зуба за визит. Это снижает нагрузку на организм и упрощает восстановление. При желании можно удалить все сразу под седацией.",
  },
];

export default function UdalenieZubaMudrostiPage() {
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
                <span>Удаление зуба мудрости</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Удаление зубов мудрости в Казани
              </h1>
              <p className="mb-2 text-lg font-medium text-primary">от 7 500 ₽</p>
              <p className="mb-6 text-lg text-muted-foreground">
                Безболезненное удаление зубов мудрости любой сложности. Используем 3D-диагностику
                для точного планирования и атравматичные методы для быстрого заживления.
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
                  Записаться на удаление
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
                alt="Удаление зуба мудрости в клинике Eva Dent"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Особенности удаления зубов мудрости
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Зубы мудрости (восьмёрки) — самые проблемные зубы в полости рта. Они
                прорезываются последними, когда места в челюсти уже недостаточно, поэтому
                часто растут неправильно.
              </p>
              <p>
                Перед удалением мы обязательно делаем компьютерную томографию (3D-снимок).
                Это позволяет точно определить положение зуба, его корней и близлежащих
                анатомических структур — нерва и гайморовой пазухи.
              </p>
              <h3>Показания к удалению</h3>
              <ul>
                <li>Неправильное положение (дистопия)</li>
                <li>Неполное прорезывание (ретенция) с воспалением</li>
                <li>Кариес, не поддающийся лечению</li>
                <li>Давление на соседние зубы</li>
                <li>Периодические воспаления капюшона</li>
                <li>Подготовка к ортодонтическому лечению</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-12 lg:py-16">
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
