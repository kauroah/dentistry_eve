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
  title: "Имплантация зубов в Казани — Straumann, Medentika | Eva Dent",
  description:
    "Имплантация зубов в Казани: импланты Straumann, Medentika. Опытные имплантологи, гарантия качества, доступные цены. Запишитесь на консультацию в Eva Dent.",
};

// Group implant services by category
const implantServices = {
  implants: [
    {
      title: "Имплант medentica",
      description: "Установка импланта системы Medentika",
      price: "75 000 ₽",
    },
    {
      title: "Имплант Osstem",
      description: "Установка импланта корейской системы Osstem",
      price: "55 000 ₽",
    },
    {
      title: "Имплант Straumann",
      description: "Установка импланта швейцарской системы Straumann (премиум-класс)",
      price: "120 000 ₽",
    },
    {
      title: "Имплант Антожир (Франция)",
      description: "Установка импланта французской системы Антожир",
      price: "75 000 ₽",
    },
    {
      title: "Имплант Астра тех/нобель/штрауман",
      description: "Установка импланта премиум-класса Astra Tech / Nobel / Straumann",
      price: "60 000 ₽",
    },
    {
      title: "Имплант тонкий 3,0",
      description: "Установка тонкого импланта диаметром 3.0 мм для узких промежутков",
      price: "40 000 ₽",
    },
    {
      title: "Установка 1 импланта системы SGS (Швейцария)",
      description: "Установка одного импланта швейцарской системы SGS",
      price: "20 000 ₽",
    },
    {
      title: "Установка импланта системы ADIN",
      description: "Установка импланта израильской системы ADIN",
      price: "15 000 ₽",
    },
  ],
  abutments: [
    {
      title: "Абатмент Straumann",
      description: "Соединительный элемент между имплантом и коронкой, система Straumann",
      price: "19 500 ₽",
    },
    {
      title: "Абатмент стандартный цементируемый Dio",
      description: "Стандартный абатмент для цементной фиксации коронки, система Dio",
      price: "10 000 ₽",
    },
  ],
  boneMaterials: [
    {
      title: "Biogen Cancellous Granules BGS-09 (0,5 гр)",
      description: "Костный гранулят для наращивания костной ткани, 0.5 грамма",
      price: "15 000 ₽",
    },
    {
      title: "Biogen Cancellous Granules BGS-09 (1 гр)",
      description: "Костный гранулят для наращивания костной ткани, 1 грамм",
      price: "20 000 ₽",
    },
    {
      title: "Biogen Cancellous Granules BGS-09 (2 гр)",
      description: "Костный гранулят для наращивания костной ткани, 2 грамма",
      price: "25 000 ₽",
    },
    {
      title: "Био Гайд мембрана",
      description: "Коллагеновая мембрана для направленной костной регенерации",
      price: "25 000 ₽",
    },
    {
      title: "Био Осс",
      description: "Костнопластический материал для замещения костных дефектов",
      price: "25 000 ₽",
    },
    {
      title: "Гель BGM-GEL 0.5ml",
      description: "Гель для стимуляции костеобразования, 0.5 мл",
      price: "15 000 ₽",
    },
    {
      title: "Гель BGM-GEL 1 ml",
      description: "Гель для стимуляции костеобразования, 1 мл",
      price: "18 000 ₽",
    },
    {
      title: "Использование титановой мембраны",
      description: "Титановая мембрана для направленной костной регенерации",
      price: "20 000 ₽",
    },
    {
      title: "Мембрана Evolution (толстая) 20*20",
      description: "Толстая коллагеновая мембрана Evolution, размер 20x20 мм",
      price: "17 000 ₽",
    },
    {
      title: "Мембрана Evolution (толстая) 20*30",
      description: "Толстая коллагеновая мембрана Evolution, размер 20x30 мм",
      price: "25 000 ₽",
    },
    {
      title: "Мембрана Evolution (толстая) 25*25",
      description: "Толстая коллагеновая мембрана Evolution, размер 25x25 мм",
      price: "23 000 ₽",
    },
    {
      title: "Мембрана Heart HRT-001",
      description: "Мембрана Heart для направленной костной регенерации",
      price: "30 000 ₽",
    },
  ],
  surgicalProcedures: [
    {
      title: "Операция закрытый синус лифтинг",
      description: "Закрытая операция по поднятию дна гайморовой пазухи для увеличения объема кости",
      price: "25 000 ₽",
    },
    {
      title: "Операция открытый синус лифтинг",
      description: "Открытая операция по поднятию дна гайморовой пазухи с костной пластикой",
      price: "50 000 ₽",
    },
    {
      title: "Операция имплантации одного цилиндрического имплантанта системой \"Dio\" и \"Osstem\"",
      description: "Хирургический этап установки одного импланта Dio или Osstem",
      price: "55 000 ₽",
    },
    {
      title: "Операция имплантации одного цилиндрического имплантанта системой \"Антожир\"",
      description: "Хирургический этап установки одного импланта Антожир",
      price: "75 000 ₽",
    },
    {
      title: "Операция имплантации одного цилиндрического имплантанта системой \"Нобель Реплейс\"",
      description: "Хирургический этап установки одного импланта Нобель Реплейс",
      price: "25 000 ₽",
    },
    {
      title: "Установка импланта корея Dio/Osstem акция",
      description: "Установка импланта Dio или Osstem по специальной акционной цене",
      price: "39 900 ₽",
    },
    {
      title: "Установка импланта системы Dio c цементной фиксацией коронки",
      description: "Установка импланта Dio с последующей цементной фиксацией коронки",
      price: "39 900 ₽",
    },
    {
      title: "Хирургический этап установки импланта",
      description: "Хирургическая процедура установки импланта (без стоимости импланта)",
      price: "18 000 ₽",
    },
    {
      title: "Установка формирователя десны",
      description: "Установка формирователя десны для создания естественного контура",
      price: "8 000 ₽",
    },
    {
      title: "Извлечение внутреннего винта из имплантата",
      description: "Хирургическая процедура по извлечению сломанного винта из импланта",
      price: "10 000 ₽",
    },
  ],
  instruments: [
    {
      title: "Винт самосверлящий",
      description: "Винт для фиксации костных блоков и мембран",
      price: "5 000 ₽",
    },
    {
      title: "Использование винтов для фиксации (КонМет)",
      description: "Винты для фиксации костных блоков, система КонМет",
      price: "7 000 ₽",
    },
    {
      title: "Использование костного скребка",
      description: "Применение костного скребка для сбора аутогенной костной стружки",
      price: "15 000 ₽",
    },
    {
      title: "Использование Пина для фиксации мембраны",
      description: "Пины для надежной фиксации мембраны при костной пластике",
      price: "4 000 ₽",
    },
    {
      title: "Формирователь десны astra tech",
      description: "Формирователь десны для системы Astra Tech",
      price: "10 000 ₽",
    },
    {
      title: "Формирователь десны нобель",
      description: "Формирователь десны для системы Nobel",
      price: "8 000 ₽",
    },
  ],
};

const benefits = [
  "Пожизненная гарантия на импланты",
  "3D-планирование операции",
  "Безболезненная установка",
  "Опытные имплантологи",
  "Импланты ведущих производителей",
  "Быстрое приживление",
];

const faqs = [
  {
    question: "Сколько стоит имплантация одного зуба?",
    answer:
      "Стоимость имплантации начинается от 35 000 рублей за имплант Medentika и от 55 000 рублей за Straumann. В стоимость входит имплант, операция и контрольные осмотры. Коронка оплачивается отдельно.",
  },
  {
    question: "Больно ли ставить имплант?",
    answer:
      "Нет, операция проводится под местной анестезией и абсолютно безболезненна. После операции возможен небольшой дискомфорт, который легко снимается обезболивающими препаратами.",
  },
  {
    question: "Как долго приживается имплант?",
    answer:
      "Период приживления (остеоинтеграции) занимает от 3 до 6 месяцев в зависимости от индивидуальных особенностей организма и расположения импланта. Современные импланты Straumann могут устанавливаться по протоколу немедленной нагрузки.",
  },
  {
    question: "Какой имплант лучше выбрать?",
    answer:
      "Выбор импланта зависит от клинической ситуации, ваших пожеланий и бюджета. Straumann — премиальное решение с максимальной надёжностью. Medentika — отличный выбор с оптимальным соотношением цена/качество.",
  },
  {
    question: "Есть ли гарантия на импланты?",
    answer:
      "Да, мы даём пожизненную гарантию на импланты Straumann и Medentika. На работу врача (установку) гарантия составляет 5 лет.",
  },
];

// Category titles in Russian
const categoryTitles = {
  implants: "Импланты",
  abutments: "Абатменты",
  boneMaterials: "Костные материалы и мембраны",
  surgicalProcedures: "Хирургические процедуры",
  instruments: "Инструменты и формирователи",
};

export default function ImplantatsiyaPage() {
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
                <span>Имплантация зубов</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Имплантация зубов в Казани
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Восстановите утраченные зубы с помощью имплантации в клинике Eva Dent. Мы
                устанавливаем импланты Straumann и Medentika с пожизненной гарантией.
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
                src="/images/dental-implant.jpg"
                alt="Имплантация зубов в клинике Eva Dent Казань"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Implant Services by Category */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Имплантология 
          </h2>
          
          {Object.entries(implantServices).map(([categoryKey, services]) => (
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
            <p>Точную стоимость лечения можно узнать на консультации у имплантолога</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Имплантация — лучший способ восстановления зубов
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Дентальная имплантация — современный и надёжный метод восстановления утраченных
                зубов. Имплант полностью заменяет корень зуба и служит опорой для коронки,
                моста или съёмного протеза.
              </p>
              <p>
                В клинике Eva Dent мы используем импланты ведущих мировых производителей:
                швейцарские Straumann и немецкие Medentika. Оба бренда имеют превосходную
                статистику приживаемости (более 98%) и многолетнюю клиническую историю.
              </p>
              <p>
                Перед имплантацией проводится тщательная диагностика: компьютерная томография,
                3D-планирование операции. Это позволяет точно спланировать положение импланта
                и избежать осложнений.
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