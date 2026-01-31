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
  title: "Профессиональная чистка зубов в Казани — Гигиена | Eva Dent",
  description:
    "Профессиональная гигиена полости рта в Казани: чистка зубов, Air Flow, фторирование. Профилактика кариеса и заболеваний дёсен в Eva Dent.",
};

const hygieneTypes = [
  {
    title: "Профессиональная чистка",
    description: "Комплексная чистка зубов: ультразвук + Air Flow + полировка + фторирование.",
    price: "от 4 000 ₽",
  },
  {
    title: "Air Flow",
    description: "Удаление мягкого налёта и пигментации струёй воды с содой.",
    price: "от 3 500 ₽",
  },
  {
    title: "Фторирование",
    href: "/stomatologiya/gigiena/ftorirovanie",
    description: "Укрепление эмали фторсодержащими препаратами.",
    price: "от 2 000 ₽",
  },
  {
    title: "Герметизация фиссур",
    description: "Защита жевательных поверхностей зубов от кариеса.",
    price: "от 2 500 ₽",
  },
];

const benefits = [
  "Профилактика кариеса",
  "Здоровые дёсны",
  "Белоснежная улыбка",
  "Свежее дыхание",
  "Безболезненная процедура",
  "Быстро — около 1 часа",
];

const faqs = [
  {
    question: "Как часто нужно делать профессиональную чистку?",
    answer:
      "Рекомендуется проводить профессиональную гигиену каждые 6 месяцев. При заболеваниях дёсен или ношении брекетов — каждые 3-4 месяца.",
  },
  {
    question: "Больно ли делать чистку зубов?",
    answer:
      "Нет, процедура практически безболезненна. При повышенной чувствительности можно использовать местную анестезию. После чистки возможна временная чувствительность.",
  },
  {
    question: "Можно ли чистить зубы Air Flow при чувствительных дёснах?",
    answer:
      "Да, Air Flow — щадящая процедура, подходящая для чувствительных зубов. Врач подберёт оптимальный режим и специальный порошок для вашей ситуации.",
  },
  {
    question: "Отбеливает ли профессиональная чистка зубы?",
    answer:
      "Чистка удаляет налёт и возвращает зубам естественный цвет. Это не отбеливание, но зубы становятся заметно светлее за счёт удаления пигментированного налёта.",
  },
  {
    question: "Что такое фторирование и зачем оно нужно?",
    answer:
      "Фторирование — нанесение на зубы препаратов с фтором. Это укрепляет эмаль, снижает чувствительность и предотвращает развитие кариеса. Особенно полезно после чистки.",
  },
];

export default function GigienaPage() {
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
                <span>Профессиональная гигиена</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Профессиональная чистка зубов в Казани
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Комплексная гигиена полости рта в клинике Eva Dent. Удаление зубного камня,
                налёта, профилактика кариеса и заболеваний дёсен.
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
                  Записаться на чистку
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
                alt="Профессиональная чистка зубов в клинике Eva Dent Казань"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene types */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Услуги профессиональной гигиены
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {hygieneTypes.map((type) =>
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
              Зачем нужна профессиональная чистка
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Даже при тщательной домашней гигиене на зубах образуется налёт, который
                невозможно удалить обычной щёткой. Со временем налёт минерализуется в зубной
                камень — основную причину заболеваний дёсен.
              </p>
              <p>
                Профессиональная чистка включает удаление зубного камня ультразвуком,
                очищение налёта методом Air Flow, полировку поверхности зубов и укрепление
                эмали фторсодержащими препаратами.
              </p>
              <p>
                Регулярная профессиональная гигиена — лучшая профилактика кариеса и
                заболеваний дёсен. Она также помогает сохранить естественную белизну зубов
                и свежесть дыхания.
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
