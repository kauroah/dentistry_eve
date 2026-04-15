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
import { AppointmentModal } from "@/components/appointment-modal";

export const metadata: Metadata = {
  title: "Протезирование зубов в Казани — Виниры, коронки | Eva Dent",
  description:
    "Протезирование зубов в Казани: виниры, коронки, съёмные протезы. Металлокерамика, цирконий, E-max. Качественная реставрация зубов в Eva Dent.",
};

const prostheticTypes = [
  {
    title: "Имплант Антожир (Франция) коронка + имплант - цементная фиксация",
    description: "Комплексное восстановление зуба: имплант Антожир + коронка с цементной фиксацией",
    price: "75 000 ₽",
    category: "Комплексные работы"
  },
  {
    title: "Имплант системы astra tech с циркониевой коронкой (цементная фиксация)",
    description: "Комплекс: имплант Astra Tech + циркониевая коронка на цементной фиксации",
    price: "85 000 ₽",
    category: "Комплексные работы"
  },
  {
    title: "Коронка мет/керам на имплант DIO (винтовая фиксация)",
    description: "Металлокерамическая коронка на имплант DIO с винтовой фиксацией",
    price: "40 000 ₽",  
    category: "Коронки на имплантах"
  },
  {
    title: "Коронка мет/керам на имплант DIO (стандартный абатмент, цементная фиксация)",
    description: "Металлокерамическая коронка на имплант DIO со стандартным абатментом, цементная фиксация",
    price: "35 000 ₽",
    category: "Коронки на имплантах"
  },
  {
    title: "Установка импланта системы Dio c цементной фиксацией коронки",
    description: "Комплекс: имплант Dio + коронка с цементной фиксацией",
    price: "39 900 ₽",
    category: "Комплексные работы"
  },
  /*{
    title: "Цирконевая коронка на имплантате (доплата за материал)",
    description: "Доплата за циркониевый материал при изготовлении коронки на импланте",
    price: "12 900 ₽",
    category: "Коронки на имплантах"
  },
  {
    title: "Цирконевая коронка на имплантате (доплата за материал) - премиум",
    description: "Доплата за циркониевый материал премиум-класса",
    price: "17 900 ₽",
    category: "Коронки на имплантах"
  }*/
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
              <AppointmentModal>
                <Button 
                  size="lg" 
                  className="hidden sm:inline-flex rounded-full px-6 bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                >
                  Записаться на приём
                </Button>
              </AppointmentModal>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/stomatologiya/tseny">Узнать цены</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src="/images/proteeth.JPG"
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
              <div key={type.title} className="group">
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
                </Card>
              </div>
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