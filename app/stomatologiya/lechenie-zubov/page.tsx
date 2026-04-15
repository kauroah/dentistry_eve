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
  title: "Лечение зубов в Казани — Терапевтическая стоматология | Eva Dent",
  description:
    "Лечение кариеса, пульпита, периодонтита в Казани. Современные методы терапии, эстетическая реставрация зубов. Безболезненно и качественно в клинике Eva Dent.",
};

// Group therapy services by category
const therapyServices = {
 /* anesthesia: [
    {
      title: "Анестезия аппликационная",
      description: "Поверхностная анестезия для обезболивания места инъекции",
      price: "1 500 ₽",
    },
    {
      title: "Анестезия инфильтрационная",
      description: "Местная анестезия для обезболивания области лечения",
      price: "1 300 ₽",
    },
    {
      title: "Анестезия проводниковая",
      description: "Глубокая проводниковая анестезия для обезболивания группы зубов",
      price: "2 500 ₽",
    },
  ],*/
  cariesTreatment: [
    {
      title: "Лечение среднего кариеса (без эстетико-функционального восстановления)",
      description: "Лечение кариеса средней глубины с последующим пломбированием",
      price: "4 000 ₽",
    },
    {
      title: "Лечение глубокого кариеса (без эстетико-функционального восстановления)",
      description: "Лечение глубокого кариеса с наложением лечебной подкладки",
      price: "7 000 ₽",
    },
    {
      title: "Эстетико-функциональное восстановление при среднем кариесе",
      description: "Художественная реставрация зуба после лечения среднего кариеса",
      price: "4 000 ₽",
    },
    {
      title: "Эстетико-функциональное восстановление при глубоком кариесе",
      description: "Художественная реставрация зуба после лечения глубокого кариеса",
      price: "7 000 ₽",
    },
    {
      title: "Реставрация",
      description: "Художественная реставрация зуба с восстановлением анатомической формы",
      price: "15 000 ₽",
    },
    /*{
      title: "Реставрация ранее депульпированного зуба",
      description: "Восстановление зуба после удаления нерва",
      price: "7 000 ₽",
    },
    {
      title: "Формирование культи зуба",
      description: "Создание культи зуба под коронку",
      price: "4 500 ₽",
    },
    {
      title: "Препарирование твёрдых тканей зуба",
      description: "Обработка твёрдых тканей зуба перед пломбированием",
      price: "1 750 ₽",
    },
  ],
  endodontics: [
    {
      title: "Мед. обработка десны (карман)",
      description: "Медикаментозная обработка десневого кармана",
      price: "700 ₽",
    },
    {
      title: "Мед.обработка 1 к/к",
      description: "Медикаментозная обработка одного корневого канала",
      price: "400 ₽",
    },
    {
      title: "Мед./мех.обработка 1 канала при гнойном пульпите",
      description: "Медикаментозная и механическая обработка канала при гнойном пульпите",
      price: "1 500 ₽",
    },
    {
      title: "Временное пломбирование 1 к/к",
      description: "Временное пломбирование корневого канала",
      price: "2 500 ₽",
    },
    {
      title: "Пломбирование 1 к/к гуттаперчивыми штифтами",
      description: "Постоянное пломбирование корневого канала гуттаперчей",
      price: "2 000 ₽",
    },
    {
      title: "Пломбирование 1 к/к гуттаперчивыми штифтами под ортопедическую конструкцию",
      description: "Пломбирование канала под коронку или мост",
      price: "3 500 ₽",
    },
    {
      title: "Пломбирование 1 к/к эвгеноловой пастой",
      description: "Пломбирование канала эвгеноловой пастой",
      price: "2 500 ₽",
    },
    {
      title: "Пломбирование 1к/к пастой \"Форфенан\"",
      description: "Пломбирование канала пастой Форфенан",
      price: "2 500 ₽",
    },
    {
      title: "Распломбирование 1 к/к ранее пломбированного гуттаперчей",
      description: "Удаление гуттаперчи из канала для повторного лечения",
      price: "2 500 ₽",
    },
    {
      title: "Распломбирование 1 к/к ранее пломбированного пастой (у/з)",
      description: "Удаление пасты из канала с использованием ультразвука",
      price: "3 500 ₽",
    },
    {
      title: "Распломбирование 1 к/к ранее пломбированного цементом +РФ пастой (у/з)",
      description: "Удаление цемента и пасты из канала с ультразвуком",
      price: "3 500 ₽",
    },
    {
      title: "Использование ПРОтейперов, Профайлов",
      description: "Инструментальная обработка каналов современными Ni-Ti инструментами",
      price: "3 500 ₽",
    },
    {
      title: "Оказание экстренной помощи при пульпите, периодонтите",
      description: "Срочная помощь при острой зубной боли",
      price: "3 000 ₽",
    },
  ],
  postsAndPins: [
    {
      title: "Стекловолоконный штифт",
      description: "Установка стекловолоконного штифта для укрепления зуба",
      price: "2 000 ₽",
    },
    {
      title: "Титановый штифт",
      description: "Установка титанового штифта для укрепления зуба",
      price: "2 500 ₽",
    },
    {
      title: "Фиксация штифта",
      description: "Фиксация штифта в корневом канале",
      price: "2 000 ₽",
    },
    {
      title: "Фиксация штифта на композитный цемент",
      description: "Фиксация штифта на композитный цемент для надёжной фиксации",
      price: "3 000 ₽",
    },
    {
      title: "Извлечение штифта (стекловолоконного) из канала",
      description: "Удаление стекловолоконного штифта из канала",
      price: "3 500 ₽",
    },
    {
      title: "Извлечение штифта (титанового) из канала",
      description: "Удаление титанового штифта из канала",
      price: "3 500 ₽",
    },
  ],
  fillings: [
    {
      title: "Временная пломба",
      description: "Установка временной пломбы на период лечения",
      price: "1 500 ₽",
    },
    {
      title: "Световая временная пломба (CLIP)",
      description: "Временная светоотверждаемая пломба CLIP",
      price: "2 500 ₽",
    },
    {
      title: "Пломба из материала Витремер",
      description: "Пломба из стеклоиномерного материала Витремер",
      price: "3 000 ₽",
    },
    {
      title: "Полировка пломбы при повторном посещении",
      description: "Полировка и шлифовка пломбы",
      price: "1 000 ₽",
    },
    {
      title: "Шлифование и полирование пломбы",
      description: "Финишная обработка пломбы",
      price: "2 000 ₽",
    },
    {
      title: "Интраоральная починка пломбы",
      description: "Ремонт пломбы непосредственно в полости рта",
      price: "2 000 ₽",
    },
    {
      title: "Снятие пломбы",
      description: "Удаление старой пломбы",
      price: "1 500 ₽",
    },
  ],
  aesthetic: [
    {
      title: "Винир",
      description: "Керамический винир для эстетической реставрации передних зубов",
      price: "15 000 ₽",
    },
    {
      title: "Люминиры",
      description: "Тончайшие керамические накладки для идеальной улыбки",
      price: "95 000 ₽",
    },
    {
      title: "Вкладка композитная",
      description: "Композитная вкладка для восстановления зуба",
      price: "6 000 ₽",
    },
    {
      title: "Макет зуба",
      description: "Создание воскового макета будущей реставрации",
      price: "1 200 ₽",
    },
    {
      title: "Силиконовый ключ",
      description: "Силиконовый шаблон для моделирования реставрации",
      price: "1 500 ₽",
    },
  ],
  preventive: [
    {
      title: "Герметизация фиссур (1 зуб)",
      description: "Закрытие фиссур для профилактики кариеса у детей и взрослых",
      price: "1 200 ₽",
    },
    {
      title: "Снятие налета пастой",
      description: "Удаление мягкого зубного налета полировочной пастой",
      price: "2 500 ₽",
    },
  ],
  additional: [
    {
      title: "Диатермокоагуляция десневого сосочка",
      description: "Прижигание десневого сосочка для остановки кровотечения",
      price: "1 500 ₽",
    },
    {
      title: "Наложение девитализирующей пасты",
      description: "Наложение пасты для девитализации пульпы",
      price: "900 ₽",
    },
    {
      title: "Наложение коффердама",
      description: "Изоляция рабочего поля с помощью коффердама",
      price: "1 300 ₽",
    },
    {
      title: "Наложение матричной системы",
      description: "Установка матрицы для восстановления контактного пункта",
      price: "1 300 ₽",
    },
    {
      title: "Лечебная, изолирующая подкладка",
      description: "Наложение лечебной подкладки под пломбу",
      price: "1 500 ₽",
    },
    {
      title: "Использование ретракционной нити",
      description: "Ретракция десны для снятия слепков",
      price: "1 500 ₽",
    },*/
  ],
};

const benefits = [
  "Безболезненное лечение",
  "Современные материалы",
  "Опытные терапевты",
  "Эстетические реставрации",
  "Комфортная атмосфера",
  "Гарантия на все работы",
];

const faqs = [
  {
    question: "Больно ли лечить зубы?",
    answer:
      "Нет, современная стоматология позволяет проводить лечение абсолютно безболезненно. Мы используем эффективные местные анестетики, которые полностью блокируют чувствительность в зоне лечения.",
  },
  {
    question: "Сколько по времени лечить кариес?",
    answer:
      "Лечение неглубокого кариеса занимает 30-40 минут. При глубоком кариесе или лечении каналов может потребоваться 1-2 посещения. Точное время зависит от сложности случая.",
  },
  {
    question: "Что делать, если зуб болит ночью?",
    answer:
      "При острой зубной боли мы принимаем пациентов вне очереди. Позвоните нам, и мы найдём время для экстренного приёма в ближайшие часы.",
  },
  {
    question: "Как долго служит пломба?",
    answer:
      "При правильном уходе современные светоотверждаемые пломбы служат 5-7 лет и более. Срок службы зависит от размера пломбы, гигиены и жевательной нагрузки.",
  },
  {
    question: "Можно ли лечить зубы при беременности?",
    answer:
      "Да, во втором триместре возможно лечение с использованием безопасных анестетиков. В первом и третьем триместре проводят только экстренное лечение. Обязательно сообщите врачу о беременности.",
  },
];

// Category titles in Russian
const categoryTitles = {
  anesthesia: "Анестезия",
  cariesTreatment: "Лечение кариеса и реставрация",
  endodontics: "Эндодонтия (лечение каналов)",
  postsAndPins: "Штифты",
  fillings: "Пломбы",
  aesthetic: "Эстетическая стоматология",
  preventive: "Профилактика",
  additional: "Дополнительные процедуры",
};

export default function TerapiyaPage() {
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
                <span>Лечение зубов</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Лечение зубов в Казани
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Качественное лечение кариеса, пульпита и других заболеваний зубов в клинике Eva Dent.
                Современные материалы, безболезненно, с гарантией.
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
                src="/images/pageteeth.JPG"
                alt="Лечение зубов в клинике Eva Dent Казань"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Services by Category */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Терапия
          </h2>
          
          {Object.entries(therapyServices).map(([categoryKey, services]) => (
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
            <p>Точную стоимость лечения можно узнать на консультации у терапевта</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Современная терапия в Eva Dent
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Терапевтическая стоматология занимается лечением кариеса, пульпита, периодонтита
                и других заболеваний зубов. В Eva Dent мы используем современные материалы и
                методики, чтобы сохранить ваши зубы здоровыми на долгие годы.
              </p>
              <p>
                Лечение проводится под микроскопом, что позволяет контролировать качество обработки
                каналов и пломбирования. Мы применяем безопасные анестетики и работаем максимально
                атравматично, чтобы сохранить здоровые ткани зуба.
              </p>
              <p>
                Особое внимание уделяем эстетическим реставрациям — восстанавливаем не только
                функцию, но и естественный вид зуба. Пломбы из современных материалов неотличимы
                от натуральных тканей и служат долгие годы.
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