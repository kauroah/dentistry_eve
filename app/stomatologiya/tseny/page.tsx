import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Цены на стоматологические услуги в Казани — Eva Dent",
  description:
    "Актуальные цены на лечение зубов, имплантацию, протезирование, брекеты в Казани. Прозрачное ценообразование, рассрочка. Стоматология Eva Dent.",
};

const priceCategories = [
  {
    title: "Имплантология",
    href: "/stomatologiya/implantatsiya",
    items: [
      { service: "Имплант Osstem", price: "55 000 ₽" },
      { service: "Имплант Straumann", price: "120 000 ₽" },
      { service: "Имплант Medentica", price: "75 000 ₽" },
      { service: "Имплант тонкий 3.0", price: "40 000 ₽" },
      { service: "Установка импланта ADIN", price: "15 000 ₽" },
      { service: "Установка импланта Dio / Osstem", price: "39 900 ₽" },
      { service: "Закрытый синус-лифтинг", price: "25 000 ₽" },
      { service: "Открытый синус-лифтинг", price: "50 000 ₽" },
      { service: "Операция имплантации", price: "от 55 000 ₽" },
    ],
  },

  {
    title: "Ортопедия и протезирование",
    href: "/stomatologiya/protezirovanie",
    items: [
      { service: "Металлокерамическая коронка на имплант DIO", price: "35 000 ₽" },
      { service: "Металлокерамическая коронка на имплант (винтовая фиксация)", price: "40 000 ₽" },
      { service: "Циркониевая коронка на имплант", price: "от 17 900 ₽" },
      { service: "Временный абатмент + коронка", price: "20 000 ₽" },
      { service: "Балка ортопедическая", price: "120 000 ₽" },
      { service: "Бюгельный протез", price: "90 000 ₽" },
    ],
  },

  {
    title: "Терапевтическая стоматология",
    href: "/stomatologiya/lechenie-zubov",
    items: [
      { service: "Лечение кариеса", price: "от 3 500 ₽" },
      { service: "Лечение пульпита", price: "от 5 500 ₽" },
      { service: "Лечение периодонтита", price: "от 7 000 ₽" },
      { service: "Художественная реставрация зуба", price: "от 6 000 ₽" },
    ],
  },

  {
    title: "Хирургическая стоматология",
    href: "/stomatologiya/khirurgiya",
    items: [
      { service: "Удаление зуба (простое)", price: "от 2 500 ₽" },
      { service: "Удаление зуба (сложное)", price: "от 5 000 ₽" },
      { service: "Удаление зуба мудрости", price: "от 7 500 ₽" },
      { service: "Резекция верхушки корня", price: "от 8 000 ₽" },
    ],
  },

  {
    title: "Ортодонтия",
    href: "/stomatologiya/brekety",
    items: [
      { service: "Консультация ортодонта", price: "1 500 ₽" },
      { service: "Металлические брекеты", price: "от 45 000 ₽" },
      { service: "Керамические брекеты", price: "от 65 000 ₽" },
      { service: "Сапфировые брекеты", price: "от 75 000 ₽" },
      { service: "Элайнеры", price: "от 180 000 ₽" },
    ],
  },

  {
    title: "Профилактика и гигиена",
    href: "/stomatologiya/gigiena",
    items: [
      { service: "Профессиональная чистка зубов", price: "от 4 000 ₽" },
      { service: "Air Flow", price: "от 3 500 ₽" },
      { service: "Фторирование зубов", price: "от 2 000 ₽" },
      { service: "Герметизация фиссур", price: "от 2 500 ₽" },
    ],
  },
];

export default function PricesPage() {
  return (
    <>
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Цены на стоматологические услуги
            </h1>
            <p className="text-lg text-muted-foreground">
              Прозрачное ценообразование без скрытых платежей. Возможна оплата в рассрочку.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {priceCategories.map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>
                    <Link href={category.href} className="text-primary hover:underline">
                      Подробнее об услуге
                    </Link>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="divide-y divide-border">
                    {category.items.map((item) => (
                      <div
                        key={item.service}
                        className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                      >
                        <span className="text-sm text-foreground">{item.service}</span>
                        <span className="shrink-0 font-medium text-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-muted/50 p-6 text-center">
            <p className="mb-4 text-muted-foreground">
              Указаны ориентировочные цены. Точную стоимость лечения врач определит после
              консультации и диагностики.
            </p>
            <Button size="lg">Записаться на бесплатную консультацию</Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
