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
    title: "Терапевтическая стоматология",
    href: "/stomatologiya/lechenie-zubov",
    items: [
      { service: "Консультация стоматолога", price: "Бесплатно" },
      { service: "Лечение кариеса", price: "от 3 500 ₽" },
      { service: "Лечение пульпита (1 канал)", price: "от 5 500 ₽" },
      { service: "Лечение периодонтита", price: "от 7 000 ₽" },
      { service: "Художественная реставрация", price: "от 6 000 ₽" },
    ],
  },
  {
    title: "Имплантация",
    href: "/stomatologiya/implantatsiya",
    items: [
      { service: "Имплант Medentika (Германия)", price: "от 35 000 ₽" },
      { service: "Имплант Straumann (Швейцария)", price: "от 55 000 ₽" },
      { service: "Коронка на имплант", price: "от 25 000 ₽" },
      { service: "Синус-лифтинг", price: "от 35 000 ₽" },
      { service: "Костная пластика", price: "от 25 000 ₽" },
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
    title: "Протезирование",
    href: "/stomatologiya/protezirovanie",
    items: [
      { service: "Металлокерамическая коронка", price: "от 12 000 ₽" },
      { service: "Циркониевая коронка", price: "от 25 000 ₽" },
      { service: "Винир E-max", price: "от 30 000 ₽" },
      { service: "Съёмный протез (полный)", price: "от 35 000 ₽" },
      { service: "Бюгельный протез", price: "от 55 000 ₽" },
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
    title: "Профессиональная гигиена",
    href: "/stomatologiya/gigiena",
    items: [
      { service: "Профессиональная чистка", price: "от 4 000 ₽" },
      { service: "Air Flow", price: "от 3 500 ₽" },
      { service: "Фторирование", price: "от 2 000 ₽" },
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
                        <span className="flex-shrink-0 font-medium text-primary">{item.price}</span>
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
