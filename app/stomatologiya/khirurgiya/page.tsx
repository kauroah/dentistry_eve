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
  title: "Хирургическая стоматология в Казани — Удаление зубов | Eva Dent",
  description:
    "Хирургическая стоматология в Казани: удаление зубов, зубов мудрости, резекция корня. Безболезненно и безопасно в клинике Eva Dent.",
};

// Group surgery services by category
const surgeryServices = {
  toothExtraction: [
    {
      title: "Удаление зуба",
      description: "Простое удаление зуба с использованием современной анестезии",
      price: "4 000 ₽",
    },
    {
      title: "Удаление зуба сложное",
      description: "Сложное удаление зуба при аномалиях корней или разрушенной коронке",
      price: "7 500 ₽",
    },
    {
      title: "Удаление зуба атипическое",
      description: "Атипичное удаление зуба при нестандартном расположении или патологиях",
      price: "10 000 ₽",
    },
    {
      title: "Удаление молочного зуба",
      description: "Безболезненное удаление молочного зуба у детей",
      price: "2 500 ₽",
    },
    {
      title: "Удаление осколка зуба",
      description: "Удаление осколка зуба после травмы или неполного удаления",
      price: "2 000 ₽",
    },
    {
      title: "Удаление клинической коронки зуба",
      description: "Удаление разрушенной коронковой части зуба",
      price: "3 000 ₽",
    },
    /*{
      title: "Удаление части коронки зуба",
      description: "Удаление части коронки зуба по медицинским показаниям",
      price: "3 000 ₽",
    },
    {
      title: "Ультразвуковое удаление зуба",
      description: "Удаление зуба с использованием ультразвукового оборудования для меньшей травматичности",
      price: "25 000 ₽",
    },
    {
      title: "Кюретаж постэкстракционной лунки",
      description: "Очистка лунки после удаления зуба от остатков тканей",
      price: "2 000 ₽",
    },
    {
      title: "Лечение альвеолита",
      description: "Лечение воспаления лунки после удаления зуба",
      price: "4 500 ₽",
    },
    {
      title: "Лечение с использованием альвожила",
      description: "Обработка лунки противовоспалительным препаратом Альвожил",
      price: "3 500 ₽",
    },
    {
      title: "Остановка кровотечения лунки",
      description: "Процедура по остановке кровотечения из лунки после удаления",
      price: "500 ₽",
    },
  ],
  wisdomTeeth: [
    {
      title: "Удаление ретинированных \"зубов мудрости\"",
      description: "Удаление непрорезавшихся зубов мудрости",
      price: "15 000 ₽",
    },
    {
      title: "Удаление полуретинированных \"зубов мудрости\"",
      description: "Удаление частично прорезавшихся зубов мудрости",
      price: "10 000 ₽",
    },
  ],
  softTissue: [
    {
      title: "Вестибулопластика",
      description: "Операция по углублению преддверия полости рта",
      price: "15 000 ₽",
    },
    {
      title: "Френулопластика",
      description: "Пластика уздечки губы или языка для коррекции прикуса и дикции",
      price: "18 000 ₽",
    },
    {
      title: "Удаление уздечки языка у новорожденных",
      description: "Подрезание уздечки языка у новорожденных для нормального вскармливания",
      price: "7 500 ₽",
    },
    {
      title: "Гингивопластика в области одного сегмента (без стоимости материала)",
      description: "Коррекция контура десны в области одного сегмента",
      price: "15 000 ₽",
    },
    {
      title: "Закрытие рецессии методом коронарного смещения лоскута в области 1 зуба",
      description: "Хирургическое закрытие оголённой шейки зуба",
      price: "15 000 ₽",
    },
    {
      title: "Рассечение тяжа слизистой оболочки",
      description: "Иссечение соединительнотканного тяжа слизистой",
      price: "10 000 ₽",
    },
    {
      title: "Удлинение клинической коронки зуба",
      description: "Операция по увеличению видимой части коронки зуба",
      price: "3 000 ₽",
    },
    {
      title: "Коагуляция десневого сосочка, наложение гемостатической губки",
      description: "Прижигание десневого сосочка с остановкой кровотечения",
      price: "1 500 ₽",
    },
    {
      title: "Наложение пародонтологической повязки",
      description: "Защитная повязка на десну после хирургического вмешательства",
      price: "1 500 ₽",
    },
  ],
  boneGrafting: [
    {
      title: "пересадка костного блока",
      description: "Трансплантация костного блока для наращивания костной ткани",
      price: "100 000 ₽",
    },
    {
      title: "Пластика альвеолярного отростка с использованием остеопластических материалов",
      description: "Восстановление объёма альвеолярного отростка с использованием остеопластических материалов",
      price: "75 000 ₽",
    },
    {
      title: "Применение костной пластики",
      description: "Процедура костной пластики для подготовки к имплантации",
      price: "65 000 ₽",
    },
    {
      title: "Использование препарата Неоконес при удалении зуба",
      description: "Применение остеопластического препарата для сохранения объёма кости после удаления",
      price: "2 500 ₽",
    },
    {
      title: "Использование винта для фиксации мембран и костных блоков(*1 шт)",
      description: "Винт для фиксации мембран и костных блоков",
      price: "7 500 ₽",
    },
  ],
  guidedBoneRegeneration: [
    {
      title: "Направленная костная регенерация с использованием Emdogain 0,3",
      description: "НКР с применением препарата Emdogain 0,3 мл для стимуляции регенерации",
      price: "35 000 ₽",
    },
    {
      title: "Направленная костная регенерация с использованием Emdogain 0,5",
      description: "НКР с применением препарата Emdogain 0,5 мл",
      price: "38 000 ₽",
    },
    {
      title: "Направленная костная регенерация с использованием Emdogain 1гр",
      description: "НКР с применением препарата Emdogain 1 грамм",
      price: "40 000 ₽",
    },
    {
      title: "Направленная костная регенерация с использованием Мембраны Goretex без титанового усилителя",
      description: "НКР с использованием мембраны Goretex для направленной регенерации",
      price: "35 000 ₽",
    },
  ],
  cystAndTumor: [
    {
      title: "Удаление доброкачественной опухоли (фибромы, ретенционной кисты, фиброматоз десен)",
      description: "Иссечение доброкачественных новообразований полости рта",
      price: "10 000 ₽",
    },
    {
      title: "Удаление папилломы",
      description: "Удаление папилломы на слизистой полости рта",
      price: "2 500 ₽",
    },
    {
      title: "Цистэктомия губы",
      description: "Удаление кисты на губе",
      price: "15 000 ₽",
    },
    {
      title: "Резекция верхушки корня (включая все процедуры) однокорневого зуба",
      description: "Хирургическое удаление верхушки корня с кистой или воспалением",
      price: "15 000 ₽",
    },
  ],
  extractionProcedures: [
    {
      title: "Удаление импланта",
      description: "Хирургическое удаление ранее установленного импланта",
      price: "15 000 ₽",
    },
    {
      title: "Удаление экзостоза",
      description: "Удаление костного выступа (экзостоза) на челюсти",
      price: "12 000 ₽",
    },
    {
      title: "Извлечение инородного тела",
      description: "Извлечение инородного тела из мягких или костных тканей полости рта",
      price: "20 000 ₽",
    },
    {
      title: "Компактостеотомия",
      description: "Хирургическое рассечение компактного слоя кости",
      price: "9 500 ₽",
    },
  ],
  abscessAndIncision: [
    {
      title: "Вскрытие абсцесса",
      description: "Вскрытие и дренирование гнойного абсцесса в полости рта",
      price: "9 500 ₽",
    },
    {
      title: "Внутриротовые разрезы с дренированием",
      description: "Разрез мягких тканей с установкой дренажа для оттока гноя",
      price: "9 500 ₽",
    },
  ],
  sinusAndPerforation: [
    {
      title: "Пластика перфорации верхнечелюстной пазухи",
      description: "Закрытие перфорации (отверстия) гайморовой пазухи",
      price: "25 000 ₽",
    },
    {
      title: "Ушивание соустья гайморовой пазухи",
      description: "Закрытие патологического соустья с гайморовой пазухой",
      price: "25 000 ₽",
    },
  ],
  suturesAndDressings: [
    {
      title: "Наложение швов викрилом (1 уп)",
      description: "Наложение швов рассасывающимся материалом Викрил",
      price: "3 500 ₽",
    },
    {
      title: "Наложение швов кетгутом",
      description: "Наложение швов рассасывающимся материалом Кетгут",
      price: "2 500 ₽",
    },
    {
      title: "Наложение швов ПГА",
      description: "Наложение швов рассасывающимся материалом ПГА",
      price: "3 500 ₽",
    },
    {
      title: "Снятие швов",
      description: "Снятие послеоперационных швов",
      price: "500 ₽",
    },
    {
      title: "Перевязка после удаления (без анестезии)",
      description: "Послеоперационная перевязка после удаления зуба",
      price: "1 000 ₽",
    },
    {
      title: "Перевязка раны в полости рта",
      description: "Обработка и перевязка послеоперационной раны",
      price: "1 000 ₽",
    },
  ],
  anesthesiaAndSplinting: [
    {
      title: "Анестезия проводниковая",
      description: "Проводниковая анестезия для обезболивания области лечения",
      price: "2 000 ₽",
    },
    {
      title: "Шинирование при переломе альвеолярного отростка в области 2х зубов",
      description: "Фиксация отломков при переломе альвеолярного отростка",
      price: "30 000 ₽",
    },
    {
      title: "Снятие шины 1 челюсть",
      description: "Снятие шинирующей конструкции с одной челюсти",
      price: "7 000 ₽",
    },*/
  ],
};

const benefits = [
  "Безболезненные операции",
  "Опытные хирурги",
  "Современное оборудование",
  "Быстрое заживление",
  "Минимальная травматичность",
  "Срочный приём при боли",
];

const faqs = [
  {
    question: "Больно ли удалять зуб?",
    answer:
      "Нет, удаление проводится под местной анестезией. Вы не почувствуете боли во время операции. После окончания действия анестезии возможен умеренный дискомфорт, который снимается обезболивающими.",
  },
  {
    question: "Обязательно ли удалять зубы мудрости?",
    answer:
      "Не всегда. Если зуб мудрости прорезался правильно и не мешает, его можно оставить. Удаление рекомендуется при неправильном положении, воспалениях, кариесе или давлении на соседние зубы.",
  },
  {
    question: "Что делать после удаления зуба?",
    answer:
      "После удаления рекомендуется не есть 2-3 часа, не полоскать рот в первые сутки, прикладывать холод, принимать назначенные препараты. Врач даст подробные рекомендации.",
  },
  {
    question: "Сколько заживает десна после удаления?",
    answer:
      "Первичное заживление занимает 7-10 дней. Полное восстановление костной ткани — 3-6 месяцев. Скорость заживления зависит от сложности удаления и индивидуальных особенностей.",
  },
  {
    question: "Можно ли удалить зуб при беременности?",
    answer:
      "Плановое удаление лучше отложить. При острой необходимости удаление возможно во втором триместре с использованием безопасных анестетиков. Обязательно сообщите врачу о беременности.",
  },
];

// Category titles in Russian
const categoryTitles = {
  toothExtraction: "Удаление зубов",
  wisdomTeeth: "Удаление зубов мудрости",
  softTissue: "Пластика мягких тканей",
  boneGrafting: "Костная пластика",
  guidedBoneRegeneration: "Направленная костная регенерация",
  cystAndTumor: "Удаление кист и новообразований",
  extractionProcedures: "Удаление имплантов и экзостозов",
  abscessAndIncision: "Вскрытие абсцессов и разрезов",
  sinusAndPerforation: "Операции на пазухах",
  suturesAndDressings: "Швы и перевязки",
  anesthesiaAndSplinting: "Анестезия и шинирование",
};

export default function KhirurgiyaPage() {
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
                <span>Хирургическая стоматология</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Хирургическая стоматология в Казани
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Безболезненное удаление зубов и другие хирургические операции в клинике Eva Dent.
                Опытные хирурги, современное оборудование, быстрое восстановление.
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
                src="/images/sez.JPG"
                alt="Хирургическая стоматология в клинике Eva Dent Казань"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Surgery Services by Category */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Хирургия 
          </h2>
          
          {Object.entries(surgeryServices).map(([categoryKey, services]) => (
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
            <p>Точную стоимость лечения можно узнать на консультации у хирурга</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Хирургия в клинике Eva Dent
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Хирургическая стоматология в Eva Dent — это современные методы, минимальная
                травматичность и максимальный комфорт для пациента. Наши хирурги имеют
                многолетний опыт и регулярно совершенствуют навыки.
              </p>
              <p>
                Мы проводим все виды стоматологических операций: от простого удаления зубов
                до сложных вмешательств. Используем атравматичные методики, которые ускоряют
                заживление и уменьшают послеоперационный дискомфорт.
              </p>
              <p>
                При острой боли принимаем пациентов вне очереди. Если у вас болит зуб —
                не терпите, позвоните нам, и мы поможем в ближайшее время.
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