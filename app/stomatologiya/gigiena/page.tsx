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
  title: "Профессиональная гигиена и отбеливание зубов в Казани | Eva Dent",
  description:
    "Профессиональная гигиена полости рта, отбеливание ZOOM 4, Air Flow, фторирование в Казани. Комплексная чистка зубов и профилактика кариеса в Eva Dent.",
};

// Group hygiene services by category
const hygieneServices = {
 /* professionalHygiene: [
    {
      title: "проведение проф гигиены ультразвук + Air Flow",
      description: "Комплексная профессиональная гигиена: удаление зубного камня ультразвуком и очищение налёта Air Flow",
      price: "5 000 ₽",
    },
    {
      title: "Проведение проф. гигиены УЗ в области 1 челюсти",
      description: "Ультразвуковая чистка одной челюсти для удаления зубного камня и налёта",
      price: "2 500 ₽",
    },
    {
      title: "Удаление пигментированного зубного налета с помощью аппарата Air Flow (1 челюсть)",
      description: "Очищение одной челюсти от пигментированного налёта методом Air Flow",
      price: "3 500 ₽",
    },
    {
      title: "Снятие налета пастой",
      description: "Удаление мягкого зубного налета с помощью полировочной пасты",
      price: "2 000 ₽",
    },
  ],
  fluoridation: [
    {
      title: "Покрытие фторосодержащей пастой на 1 чел",
      description: "Нанесение фторсодержащего состава на все зубы для укрепления эмали",
      price: "2 500 ₽",
    },
  ],*/
  whitening: [
    {
      title: "Отбеливание системой ZOOM 4 (1 этап)",
      description: "Профессиональное фотоотбеливание зубов системой ZOOM 4",
      price: "13 000 ₽",
    },
    {
      title: "Химическое отбеливание",
      description: "Отбеливание зубов химическим методом без использования света",
      price: "10 000 ₽",
    },
    {
      title: "Эндоканальное отбеливание",
      description: "Внутриканальное отбеливание депульпированных зубов",
      price: "4 500 ₽",
    },
    {
      title: "Набор для домашнего отбеливания",
      description: "Индивидуальный набор кап и геля для домашнего отбеливания под контролем врача",
      price: "10 000 ₽",
    },
    {
      title: "Карандаш для отбеливания",
      description: "Отбеливающий карандаш для локального применения",
      price: "4 000 ₽",
    },
    {
      title: "Шприц для отбеливания",
      description: "Отбеливающий гель в шприце для домашнего использования",
      price: "7 000 ₽",
    },
  ],
};

const benefits = [
  "Профилактика кариеса",
  "Здоровые дёсны",
  "Белоснежная улыбка",
  "Свежее дыхание",
  "Безболезненные процедуры",
  "Современное оборудование",
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
  {
    question: "Какое отбеливание эффективнее — ZOOM или домашнее?",
    answer:
      "ZOOM 4 даёт мгновенный результат за одно посещение — зубы светлеют на 8-10 тонов. Домашнее отбеливание более щадящее, результат достигается за 2-3 недели. Врач поможет выбрать оптимальный вариант.",
  },
];

// Category titles in Russian
const categoryTitles = {
  professionalHygiene: "Профессиональная гигиена",
  fluoridation: "Фторирование и укрепление",
  whitening: "Отбеливание зубов",
};

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
                Профессиональная гигиена и отбеливание зубов
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Комплексная гигиена полости рта и профессиональное отбеливание ZOOM 4 в клинике Eva Dent. 
                Удаление зубного камня, налёта, профилактика кариеса.
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
                  Записаться на чистку
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/stomatologiya/tseny">Все цены</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src="/images/dental-treatment.jpg"
                alt="Профессиональная гигиена и отбеливание зубов в клинике Eva Dent Казань"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene Services by Category */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Услуги гигиены и отбеливания
          </h2>
          
          {Object.entries(hygieneServices).map(([categoryKey, services]) => (
            <div key={categoryKey} className="mb-12 last:mb-0">
              <h3 className="mb-6 text-xl font-semibold text-foreground border-b pb-2">
                {categoryTitles[categoryKey as keyof typeof categoryTitles]}
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <div key={service.title} className="group">
                    <Card className="h-full transition-all hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base line-clamp-2">{service.title}</CardTitle>
                          <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ml-2 whitespace-nowrap">
                            {service.price}
                          </span>
                        </div>
                        <CardDescription className="line-clamp-3 text-sm">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Точную стоимость процедур можно узнать на консультации у гигиениста</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Зачем нужна профессиональная гигиена
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Даже при тщательной домашней гигиене на зубах образуется налёт, который
                невозможно удалить обычной щёткой. Со временем налёт минерализуется в зубной
                камень — основную причину заболеваний дёсен и неприятного запаха изо рта.
              </p>
              <p>
                Профессиональная чистка включает удаление зубного камня ультразвуком,
                очищение налёта методом Air Flow, полировку поверхности зубов и укрепление
                эмали фторсодержащими препаратами. Это не только эстетично, но и полезно для
                здоровья полости рта.
              </p>
              <p>
                Для тех, кто хочет более светлую улыбку, мы предлагаем профессиональное
                отбеливание ZOOM 4 — безопасную и эффективную процедуру, которая осветляет
                зубы на 8-10 тонов за одно посещение.
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