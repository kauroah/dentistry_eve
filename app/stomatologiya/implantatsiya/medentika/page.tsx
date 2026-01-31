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
  title: "Имплантация Medentika в Казани — Немецкие импланты | Eva Dent",
  description:
    "Установка немецких имплантов Medentika в Казани. Отличное качество по доступной цене, гарантия. Клиника Eva Dent.",
};

const benefits = [
  "Немецкое качество",
  "Доступная цена",
  "Высокая приживаемость",
  "Гарантия производителя",
  "Широкий выбор размеров",
  "Совместимость с другими системами",
];

const faqs = [
  {
    question: "Что такое Medentika?",
    answer:
      "Medentika — немецкий производитель дентальных имплантов, входящий в группу Straumann. Компания специализируется на производстве качественных имплантов по доступной цене, используя технологии и стандарты качества Straumann.",
  },
  {
    question: "Чем Medentika отличается от Straumann?",
    answer:
      "Medentika — более доступная альтернатива премиальным имплантам Straumann. Основные отличия — в поверхности импланта и цене. Medentika использует классическую SLA-поверхность, в то время как Straumann — более продвинутую SLActive.",
  },
  {
    question: "Сколько стоит имплант Medentika?",
    answer:
      "Стоимость импланта Medentika в нашей клинике начинается от 35 000 рублей. Это включает имплант, операцию и контрольные осмотры. Коронка оплачивается отдельно.",
  },
  {
    question: "Какая гарантия на Medentika?",
    answer:
      "Производитель даёт пожизненную гарантию на импланты Medentika. Клиника предоставляет гарантию 5 лет на работу врача.",
  },
];

export default function MedentikaPage() {
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
                <Link href="/stomatologiya/implantatsiya" className="hover:text-primary">
                  Имплантация
                </Link>
                {" / "}
                <span>Medentika</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Импланты Medentika
              </h1>
              <p className="mb-2 text-lg font-medium text-primary">Германия | от 35 000 ₽</p>
              <p className="mb-6 text-lg text-muted-foreground">
                Medentika — немецкие импланты с оптимальным соотношением цены и качества.
                Производятся на заводах группы Straumann с соблюдением высочайших стандартов.
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
                  <Link href="/stomatologiya/tseny">Все цены</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/dental-implant.jpg"
                alt="Имплант Medentika"
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
              О системе Medentika
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Medentika — немецкий бренд дентальных имплантов, входящий в группу компаний
                Straumann с 2017 года. Импланты производятся в Германии с соблюдением
                строжайших стандартов качества.
              </p>
              <p>
                Главное преимущество Medentika — сочетание немецкого качества и доступной
                цены. Это отличный выбор для пациентов, которые хотят получить надёжный
                имплант без переплаты за премиальный бренд.
              </p>
              <h3>Преимущества Medentika</h3>
              <ul>
                <li><strong>Немецкое производство</strong> — строгий контроль качества на каждом этапе</li>
                <li><strong>Часть группы Straumann</strong> — доступ к передовым технологиям</li>
                <li><strong>Доступная цена</strong> — качество без переплаты за бренд</li>
                <li><strong>Широкая линейка</strong> — решения для любой клинической ситуации</li>
                <li><strong>Совместимость</strong> — подходят абатменты от других систем</li>
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
