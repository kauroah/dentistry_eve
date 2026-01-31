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
  title: "Протезирование зубов в Казани — Виниры, коронки | Eva Dent",
  description:
    "Протезирование зубов в Казани: виниры, коронки, съёмные протезы. Металлокерамика, цирконий, E-max. Качественная реставрация зубов в Eva Dent.",
};

const prostheticTypes = [
  {
    title: "Виниры",
    href: "/stomatologiya/protezirovanie/viniry",
    description: "Тонкие керамические накладки для идеальной улыбки.",
    price: "от 30 000 ₽",
  },
  {
    title: "Коронки",
    href: "/stomatologiya/protezirovanie/koronki",
    description: "Металлокерамические и циркониевые коронки.",
    price: "от 12 000 ₽",
  },
  {
    title: "Циркониевые коронки",
    href: "/stomatologiya/protezirovanie/tsirkonievaya-koronka",
    description: "Безметалловые коронки из диоксида циркония.",
    price: "от 25 000 ₽",
  },
  {
    title: "Съёмные протезы",
    href: "/stomatologiya/protezirovanie/semnyy-protez",
    description: "Полные и частичные съёмные протезы.",
    price: "от 35 000 ₽",
  },
];

const benefits = [
  "Собственная зуботехническая лаборатория",
  "Цифровое сканирование",
  "Гарантия на все работы",
  "Естественный вид",
  "Быстрые сроки изготовления",
  "Комфортная посадка",
];

const faqs = [
  {
    question: "Какие коронки лучше — металлокерамика или цирконий?",
    answer:
      "Циркониевые коронки более эстетичны и биосовместимы, идеальны для передних зубов. Металлокерамика прочнее и дешевле, хороший выбор для жевательных зубов. Врач поможет выбрать оптимальный вариант.",
  },
  {
    question: "Сколько служат виниры?",
    answer:
      "Качественные керамические виниры E-max служат 15-20 лет и более при правильном уходе. Мы даём гарантию 5 лет на виниры.",
  },
  {
    question: "Больно ли устанавливать коронку?",
    answer:
      "Нет, процедура проводится под анестезией и абсолютно безболезненна. Вы можете почувствовать небольшой дискомфорт при обточке зуба, но не боль.",
  },
  {
    question: "Можно ли есть твёрдую пищу с коронками?",
    answer:
      "Да, современные коронки выдерживают обычную жевательную нагрузку. Однако не рекомендуется грызть орехи, открывать бутылки зубами и т.д.",
  },
  {
    question: "Как ухаживать за протезами?",
    answer:
      "Коронки и виниры требуют такого же ухода, как родные зубы: чистка 2 раза в день, использование зубной нити. Съёмные протезы нужно снимать и очищать специальными средствами.",
  },
];

export default function ProtezirovaniePage() {
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
                <span>Протезирование</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Протезирование зубов в Казани
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Восстановление красоты и функции зубов в клинике Eva Dent. Виниры, коронки,
                мосты и съёмные протезы из современных материалов.
              </p>
              <div className="mb-6 grid gap-2 sm:grid-cols-2">
                {benefits.slice(0, 4).map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
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
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src="/images/dental-treatment.jpg"
                alt="Протезирование зубов в клинике Eva Dent Казань"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Виды протезирования
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {prostheticTypes.map((type) => (
              <Link key={type.title} href={type.href} className="group">
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                      <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
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
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Современное протезирование в Eva Dent
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Протезирование зубов — это восстановление частично или полностью разрушенных
                зубов с помощью искусственных конструкций. Современные материалы позволяют
                создавать протезы, неотличимые от естественных зубов.
              </p>
              <p>
                В клинике Eva Dent работает собственная цифровая зуботехническая лаборатория.
                Это позволяет изготавливать протезы быстро и с максимальной точностью. Мы
                используем 3D-сканирование вместо традиционных слепков — это комфортнее для
                пациента и точнее.
              </p>
              <p>
                Мы работаем с лучшими материалами: немецкая керамика E-max, диоксид циркония,
                качественные металлокерамические сплавы. На все работы предоставляется
                гарантия.
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
