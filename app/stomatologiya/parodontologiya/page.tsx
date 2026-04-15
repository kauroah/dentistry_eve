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
  title: "Пародонтология в Казани — Лечение дёсен | Eva Dent",
  description:
    "Лечение заболеваний дёсен в Казани: кюретаж, шинирование, плазмалифтинг. Лечение пародонтита, гингивита, пародонтоза в клинике Eva Dent.",
};

// Group periodontology services by category
const periodontologyServices = {
  curettage: [
    {
      title: "Закрытый кюретаж пародонтального кармана в области 2 зубов",
      description: "Закрытое выскабливание патологических грануляций и зубных отложений из пародонтальных карманов",
      price: "7 500 ₽",
    },
    {
      title: "Открытый кюретаж пародонтального кармана в области 2 зубов (аппарат Piezon Master)",
      description: "Открытое выскабливание с отслаиванием лоскута, удалением поддесневых отложений аппаратом Piezon Master",
      price: "9 500 ₽",
    },
  ],
  splinting: [
    {
      title: "Шинирование (3-4 зубов) с использованием стекловолоконных материалов (Гласспан, Армсплинт)",
      description: "Шинирование подвижных зубов стекловолоконной лентой для укрепления и предотвращения дальнейшего расшатывания",
      price: "18 000 ₽",
    },
  ],
  surgical: [
    {
      title: "Иссечение гипертрофированной десны",
      description: "Хирургическое иссечение разросшейся ткани десны при гипертрофическом гингивите",
      price: "7 500 ₽",
    },
  ],
  therapeutic: [
    {
      title: "Медикаментозная обработка",
      description: "Антисептическая обработка пародонтальных карманов и десневого края",
      price: "800 ₽",
    },
    /*{
      title: "Курс инъекций Линкомецина (10 амп.), Траумель С",
      description: "Курс внутримышечных инъекций антибиотика Линкомецин и гомеопатического препарата Траумель С",
      price: "18 000 ₽",
    },
    {
      title: "Плазмалифтинг",
      description: "Инъекции собственной плазмы крови пациента для стимуляции регенерации тканей пародонта",
      price: "2 500 ₽",
    },
  ],
  dressings: [
    {
      title: "Наложение пародонтальной повязки Септопак",
      description: "Наложение лечебной защитной повязки Септопак на десну после хирургического вмешательства",
      price: "2 000 ₽",
    },
    {
      title: "Пародонтальная повязка Ora-aid",
      description: "Наложение защитной повязки Ora-aid для защиты десны и улучшения заживления",
      price: "2 500 ₽",
    },
    {
      title: "Наложение аппликационной повязки Диплен",
      description: "Наложение аппликационной плёнки Диплен с лекарственным препаратом на десну",
      price: "2 500 ₽",
    },
  ],
  preventive: [
    {
      title: "Избирательная пришлифовка в области 3-4 зубов",
      description: "Избирательное пришлифовывание зубов для устранения травматической окклюзии",
      price: "1 500 ₽",
    },
    {
      title: "Обучение гигиене полости рта",
      description: "Обучение правильной технике чистки зубов и подбор индивидуальных средств гигиены",
      price: "500 ₽",
    },
    {
      title: "Покрытие зуба с применением \"Глума\"",
      description: "Нанесение десенситайзера Глума для снижения чувствительности зубов",
      price: "2 000 ₽",
    },
    {
      title: "Фторирование зубов с использованием препарата InnoDent",
      description: "Глубокое фторирование эмали препаратом InnoDent для укрепления зубов",
      price: "10 000 ₽",
    },
  ],
  postoperative: [
    {
      title: "Снятие 1 шва, антисептическая оболочка",
      description: "Снятие послеоперационного шва и антисептическая обработка области вмешательства",
      price: "350 ₽",
    },*/
  ],
};

// Category titles in Russian
const categoryTitles = {
  curettage: "Кюретаж пародонтальных карманов",
  splinting: "Шинирование зубов",
  surgical: "Хирургические методы",
  therapeutic: "Терапевтическое лечение",
  dressings: "Лечебные повязки",
  preventive: "Профилактика",
  postoperative: "Послеоперационный уход",
};

const benefits = [
  "Лечение заболеваний дёсен",
  "Устранение кровоточивости",
  "Укрепление подвижных зубов",
  "Современные методы",
  "Опытные пародонтологи",
  "Профилактика рецидивов",
];

const faqs = [
  {
    question: "Что такое пародонтит и как его лечить?",
    answer:
      "Пародонтит — воспаление тканей, окружающих зуб, которое приводит к разрушению связочного аппарата и подвижности зубов. Лечение включает профессиональную гигиену, кюретаж, противовоспалительную терапию и при необходимости шинирование.",
  },
  {
    question: "Больно ли делать кюретаж?",
    answer:
      "Процедура проводится под местной анестезией, поэтому болезненные ощущения отсутствуют. После окончания действия анестезии возможен небольшой дискомфорт, который проходит через 1-2 дня.",
  },
  {
    question: "Что такое шинирование зубов?",
    answer:
      "Шинирование — это укрепление подвижных зубов с помощью стекловолоконной ленты или шины. Процедура позволяет зафиксировать зубы в правильном положении и предотвратить их дальнейшее расшатывание.",
  },
  {
    question: "Как часто нужно посещать пародонтолога?",
    answer:
      "При хронических заболеваниях пародонта рекомендуется посещать врача каждые 3-4 месяца для контроля состояния и поддерживающей терапии. Для профилактики достаточно профосмотра раз в полгода.",
  },
  {
    question: "Что такое плазмалифтинг и эффективен ли он?",
    answer:
      "Плазмалифтинг — метод лечения собственной плазмой крови пациента. Плазма содержит факторы роста и стимулирует регенерацию тканей. Это эффективный вспомогательный метод лечения пародонтита.",
  },
];

export default function ParodontologiyaPage() {
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
                <span>Пародонтология</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Пародонтология в Казани
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Лечение заболеваний дёсен: гингивита, пародонтита, пародонтоза в клинике Eva Dent.
                Современные методы, безболезненно, с гарантией результата.
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
                src="/images/dental-treatment.jpg"
                alt="Пародонтология в клинике Eva Dent Казань"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Periodontology Services by Category */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Пародонтология 
          </h2>
          
          {Object.entries(periodontologyServices).map(([categoryKey, services]) => (
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
            <p>Точную стоимость лечения можно узнать на консультации у пародонтолога</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Лечение заболеваний дёсен в Eva Dent
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Пародонтология занимается лечением заболеваний тканей, окружающих зуб: дёсен,
                связочного аппарата и костной ткани. Кровоточивость дёсен, неприятный запах,
                подвижность зубов — всё это признаки заболеваний пародонта.
              </p>
              <p>
                В клинике Eva Dent мы используем современные методы лечения: закрытый и открытый
                кюретаж, шинирование подвижных зубов стекловолокном, плазмалифтинг,
                противовоспалительную терапию. Все процедуры проводятся под местной анестезией
                и абсолютно безболезненны.
              </p>
              <p>
                Важно понимать, что заболевания пародонта требуют комплексного подхода и
                регулярного наблюдения. Мы составляем индивидуальный план лечения и даём
                рекомендации по домашнему уходу для достижения стойкого результата.
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