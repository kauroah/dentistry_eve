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
  title: "Имплантация Straumann в Казани — Швейцарские импланты | Eva Dent",
  description:
    "Установка швейцарских имплантов Straumann в Казани. Пожизненная гарантия, быстрое приживление, превосходная эстетика. Клиника Eva Dent.",
};

const benefits = [
  "Пожизненная гарантия производителя",
  "Приживаемость более 98%",
  "Протокол немедленной нагрузки",
  "Швейцарское качество",
  "Быстрое заживление",
  "Превосходная эстетика",
];

const faqs = [
  {
    question: "Почему стоит выбрать импланты Straumann?",
    answer:
      "Straumann — мировой лидер в производстве дентальных имплантов с более чем 60-летней историей. Их импланты имеют уникальную поверхность SLActive, обеспечивающую быстрое приживление и превосходные долгосрочные результаты.",
  },
  {
    question: "Сколько стоит имплант Straumann?",
    answer:
      "Стоимость импланта Straumann в нашей клинике начинается от 55 000 рублей. В цену входит сам имплант, операция по установке и все контрольные осмотры. Коронка оплачивается отдельно.",
  },
  {
    question: "Как быстро приживается Straumann?",
    answer:
      "Благодаря уникальной поверхности SLActive импланты Straumann приживаются быстрее аналогов — часто уже через 6-8 недель можно устанавливать постоянную коронку. В некоторых случаях возможна немедленная нагрузка.",
  },
  {
    question: "Какая гарантия на импланты Straumann?",
    answer:
      "Компания Straumann даёт пожизненную гарантию на свои импланты. Это означает, что в случае отторжения импланта он будет заменён бесплатно. Клиника даёт гарантию 5 лет на работу врача.",
  },
];

export default function StraumannPage() {
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
                <span>Straumann</span>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Импланты Straumann
              </h1>
              <p className="mb-2 text-lg font-medium text-primary">Швейцария | от 55 000 ₽</p>
              <p className="mb-6 text-lg text-muted-foreground">
                Straumann — премиальные швейцарские импланты с пожизненной гарантией.
                Золотой стандарт дентальной имплантации с более чем 60-летней историей.
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
                alt="Имплант Straumann"
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
              О системе Straumann
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Straumann — швейцарская компания, основанная в 1954 году, признанный мировой
                лидер в области дентальной имплантологии. Импланты Straumann используются
                в более чем 70 странах мира и имеют превосходную клиническую документацию.
              </p>
              <p>
                Уникальная поверхность SLActive обеспечивает быстрое приживление импланта
                благодаря гидрофильным свойствам. Это позволяет сократить период
                остеоинтеграции и в ряде случаев применять протокол немедленной нагрузки.
              </p>
              <h3>Преимущества Straumann</h3>
              <ul>
                <li><strong>Высокая приживаемость</strong> — более 98% успешных имплантаций</li>
                <li><strong>Быстрое заживление</strong> — поверхность SLActive ускоряет остеоинтеграцию</li>
                <li><strong>Пожизненная гарантия</strong> — производитель гарантирует качество навсегда</li>
                <li><strong>Эстетика</strong> — тонкие абатменты для идеального внешнего вида</li>
                <li><strong>Универсальность</strong> — решения для любой клинической ситуации</li>
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
