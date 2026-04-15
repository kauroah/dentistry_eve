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

// Group services by category
const orthodonticServices = {
 /* consultation: [
    {
      title: "Консультация ортодонта",
      description: "Первичный осмотр врача-ортодонта, диагностика прикуса и составление плана лечения.",
      price: "1 500 ₽",
    },
    {
      title: "Осмотр, установка диагноза, составление плана лечения",
      description: "Комплексная диагностика и составление индивидуального плана лечения",
      price: "3 000 ₽"
    },
    {
      title: "Определение центральной окклюзии",
      description: "Диагностика и определение центрального соотношения челюстей",
      price: "2 500 ₽"
    },
    {
      title: "Слепок силикон модель контрольная, клинические фотографии 1 снимок",
      description: "Снятие силиконового слепка и диагностическая фотосъемка",
      price: "4 000 ₽"
    },
  ],*/
  bracketSystems: [
    {
      title: "Металлическая брекет-система",
      description: "Классические ортодонтические брекеты. Надёжное и эффективное исправление прикуса.",
      price: "от 45 000 ₽",
    },
    {
      title: "Керамическая брекет-система",
      description: "Эстетичные брекеты, цвет которых максимально приближен к цвету зубов.",
      price: "от 65 000 ₽",
    },
    {
      title: "Сапфировые брекеты",
      description: "Прозрачные брекеты из искусственного сапфира — практически незаметны на зубах.",
      price: "от 75 000 ₽",
    },
    {
      title: "Установка металлических брекет систем Damon Q (1 челюсть)",
      description: "Установка самолигирующих металлических брекетов премиум-класса на одну челюсть",
      price: "150 000 ₽"
    },
    {
      title: "Установка металлических брекет систем In-Ovation-R (1 челюсть)",
      description: "Установка металлических самолигирующих брекетов на одну челюсть",
      price: "150 000 ₽"
    },
    {
      title: "Безлигатурные керамич. брекеты \"In-Ovation-C\" техники Roth",
      description: "Керамические самолигирующие брекеты по технике Roth",
      price: "150 000 ₽"
    },
  /*  {
      title: "Безлигатурные метал. брекеты \"In-Ovation-R\" техники Roth",
      description: "Металлические самолигирующие брекеты по технике Roth",
      price: "150 000 ₽"
    },
    {
      title: "Установка брекет-системы \"BioQuick\", металлические, саморегулирующиеся брекеты",
      description: "Установка саморегулирующихся металлических брекетов BioQuick",
      price: "150 000 ₽"
    },
    {
      title: "Установка брекет-системы \"DamonClear\", керамические, саморегулирующиеся",
      description: "Установка эстетичных керамических брекетов DamonClear",
      price: "150 000 ₽"
    },
    {
      title: "Установка брекет-системы \"Empower\" (Америка), саморегулирующиеся",
      description: "Установка американских саморегулирующихся брекетов Empower",
      price: "150 000 ₽"
    },
    {
      title: "Установка брекет-системы \"Qucklear\", керамические саморегулирующиеся брекеты (Германия)",
      description: "Установка премиальных немецких керамических брекетов Qucklear",
      price: "300 000 ₽"
    },
  ],
  orthodonticElements: [
    {
      title: "Брекет кнопка",
      description: "Дополнительный ортодонтический элемент для фиксации эластиков",
      price: "3 000 ₽"
    },
    {
      title: "Крючок ортодонтический",
      description: "Установка ортодонтического крючка для фиксации эластиков",
      price: "2 500 ₽"
    },
    {
      title: "Установка замка на 1 зуб",
      description: "Фиксация ортодонтического замка на зуб",
      price: "3 500 ₽"
    },
    {
      title: "Установка саморегулирующихся замков (1 шт)",
      description: "Установка саморегулирующегося ортодонтического замка",
      price: "3 500 ₽"
    },
    {
      title: "Установка металлических колец (1 зуб)",
      description: "Фиксация ортодонтического кольца на зуб",
      price: "3 500 ₽"
    },
    {
      title: "Установка сепарационных колец",
      description: "Установка колец для создания пространства между зубами",
      price: "1 000 ₽"
    },
    {
      title: "Повторная фиксация 1 кольца",
      description: "Повторная установка ортодонтического кольца",
      price: "2 000 ₽"
    },
    {
      title: "Снятие колец",
      description: "Снятие ортодонтических колец",
      price: "1 500 ₽"
    },
  ],
  archesAndSprings: [
    {
      title: "Установка дуги \"Spektra\" (Ni-Ti) квадратная, эстетическая",
      description: "Установка эстетической никель-титановой дуги квадратного сечения",
      price: "7 500 ₽"
    },
    {
      title: "Установка дуги \"Spektra\" (Ni-Ti) круглая, эстетическая, прозрачная",
      description: "Установка прозрачной эстетической никель-титановой дуги круглого сечения",
      price: "3 500 ₽"
    },
    {
      title: "Установка дуги Суперэластичная термоактивная (Ni-Ti)",
      description: "Установка термоактивной никель-титановой дуги",
      price: "3 500 ₽"
    },
    {
      title: "Установка дуги ТМА",
      description: "Установка титан-молибденовой дуги для завершающего этапа лечения",
      price: "3 000 ₽"
    },
    {
      title: "Установка пружины на сжатие (с ушками)",
      description: "Установка пружины для создания пространства между зубами",
      price: "2 500 ₽"
    },
    {
      title: "Установка пружины стальной открывающейся",
      description: "Установка открывающейся стальной пружины",
      price: "2 000 ₽"
    },
    {
      title: "Установка цепочки для соединения щелей",
      description: "Установка эластичной цепочки для закрытия промежутков",
      price: "2 500 ₽"
    },
    {
      title: "Установка цепочки эластичной (прозрачная серия)",
      description: "Установка прозрачной эластичной цепочки",
      price: "500 ₽"
    },
    {
      title: "Установка эластичных клиньев для разворота зубов",
      description: "Установка эластичных элементов для коррекции положения зубов",
      price: "1 500 ₽"
    },
    {
      title: "Коррекция тяги",
      description: "Корректировка эластичной тяги для перемещения зубов",
      price: "2 500 ₽"
    },
  ],
  retainersAndPlates: [
    {
      title: "Ретейнер после брекетов",
      description: "Фиксирующая конструкция для сохранения результата после ортодонтического лечения.",
      price: "от 5 000 ₽",
    },
    {
      title: "Установка ретенционного аппарата несъемный",
      description: "Фиксация несъемного ретейнера для сохранения результата",
      price: "10 000 ₽"
    },
    {
      title: "Снятие ретейнера",
      description: "Снятие несъемного ретенционного аппарата",
      price: "2 000 ₽"
    },
    {
      title: "Каппа фиксирующая по шейкам (ретенционный аппарат)",
      description: "Съемная каппа для фиксации результата после ортодонтического лечения",
      price: "7 000 ₽"
    },
    {
      title: "Редактирование ретенционного аппарата на 1 зуб",
      description: "Корректировка ретейнера для одного зуба",
      price: "2 000 ₽"
    },
    {
      title: "Пластинка детская для исправления прикуса",
      description: "Съемный ортодонтический аппарат для детей",
      price: "30 000 ₽"
    },
    {
      title: "Коррекция пластинки",
      description: "Регулировка и подгонка ортодонтической пластинки",
      price: "3 500 ₽"
    },
    {
      title: "Починка пластинки",
      description: "Ремонт ортодонтической пластинки",
      price: "7 500 ₽"
    },
    {
      title: "Осмотр пластинок",
      description: "Контрольный осмотр ортодонтической пластинки",
      price: "500 ₽"
    },
  ],
  trainersAndAligners: [
    {
      title: "Элайнеры",
      description: "Современные прозрачные капы для выравнивания зубов без брекетов.",
      price: "от 180 000 ₽",
    },
    {
      title: "Элайнеры на одну челюсть",
      description: "Комплект прозрачных кап (элайнеров) для выравнивания зубов на одной челюсти",
      price: "300 000 ₽"
    },
    {
      title: "Трейнер взрослый",
      description: "Ортодонтический трейнер для взрослых пациентов",
      price: "25 000 ₽"
    },
    {
      title: "Трейнер детский",
      description: "Ортодонтический трейнер для детей",
      price: "25 000 ₽"
    },
    {
      title: "Трейнер для брекетов",
      description: "Специальный трейнер для использования с брекет-системой",
      price: "25 000 ₽"
    },
    {
      title: "Трейнер для нижне-челюстного сустава",
      description: "Трейнер для коррекции дисфункции ВНЧС",
      price: "25 000 ₽"
    },
    {
      title: "Трейнер пре-ортодонтический",
      description: "Предортодонтический трейнер для подготовки к лечению",
      price: "25 000 ₽"
    },
  ],
  proceduresAndCorrections: [
    {
      title: "Повторное приклеивание 1 металлического брекета (при потере)",
      description: "Повторная фиксация отклеившегося металлического брекета",
      price: "10 000 ₽"
    },
    {
      title: "Повторное приклеивание 1 керамического брекета (при потере)",
      description: "Повторная фиксация отклеившегося керамического брекета",
      price: "15 000 ₽"
    },
    {
      title: "Приклеивание 1 зуба",
      description: "Фиксация отклеившегося элемента на одном зубе",
      price: "2 500 ₽"
    },
    {
      title: "Снятие брекетов и установка Ретенционного аппарата (несъемный)",
      description: "Комплексная процедура снятия брекетов и фиксации несъемного ретейнера",
      price: "15 000 ₽"
    },
    {
      title: "Избирательное пришлифовывание 1 зуба",
      description: "Коррекция формы зуба путем избирательного сошлифовывания эмали",
      price: "2 000 ₽"
    },
    {
      title: "Полировка, пришлифовка после снятия брекетов (1 зуб)",
      description: "Финишная обработка эмали после снятия брекет-системы",
      price: "1 000 ₽"
    },
    {
      title: "Сепарация 1 зуба",
      description: "Создание пространства между зубами путем сошлифовывания эмали",
      price: "1 000 ₽"
    },
    {
      title: "Фторирование (глубокое) после снятия брекетов",
      description: "Процедура глубокого фторирования для укрепления эмали после брекетов",
      price: "2 000 ₽"
    },
    {
      title: "Пломба, завышающая прикус",
      description: "Временная пломба для коррекции высоты прикуса",
      price: "2 500 ₽"
    },
  ],
  accessories: [
    {
      title: "Воск ортодонтический",
      description: "Защитный воск для предотвращения натирания брекетами",
      price: "1 500 ₽"
    },
    {
      title: "Skyse (украшение на зуб, кристалл Сваровски)",
      description: "Декоративный кристалл Swarovski для украшения зуба",
      price: "10 000 ₽"
    },
    {
      title: "Ортодонтический набор",
      description: "Набор средств гигиены для ухода за брекетами",
      price: "1 500 ₽"
    },
    {
      title: "Средство личной гигиены (зубная щетка)",
      description: "Специализированная зубная щетка для ухода за брекетами",
      price: "1 000 ₽"
    },*/
  ],
};

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

// Category titles in Russian
const categoryTitles = {
  consultation: "Диагностика и консультация",
  bracketSystems: "Брекет-системы",
  orthodonticElements: "Ортодонтические элементы",
  archesAndSprings: "Дуги и пружины",
  retainersAndPlates: "Ретейнеры и пластинки",
  trainersAndAligners: "Трейнеры и элайнеры",
  proceduresAndCorrections: "Процедуры и коррекция",
  accessories: "Аксессуары и гигиена",
};

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
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
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
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src="/images/bracespage.JPG"
                alt="Брекеты и ортодонтия в клинике Eva Dent Казань"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Orthodontic Services by Category */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Ортодонтия 
          </h2>
          
          {Object.entries(orthodonticServices).map(([categoryKey, services]) => (
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
            <p>Точную стоимость лечения можно узнать на консультации у ортодонта</p>
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