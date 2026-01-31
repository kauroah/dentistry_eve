"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Stethoscope, Smile, Heart } from "lucide-react";

const categories = [
  {
    id: "treatment",
    label: "Лечение",
    icon: Stethoscope,
  },
  {
    id: "aesthetics",
    label: "Эстетика",
    icon: Smile,
  },
  {
    id: "surgery",
    label: "Хирургия",
    icon: Heart,
  },
];

const services = {
  treatment: [
    {
      title: "Лечение зубов",
      description: "Лечение кариеса, пульпита, периодонтита",
      href: "/stomatologiya/lechenie-zubov",
      image: "/images/dental-treatment.jpg",
    },
    {
      title: "Профессиональная гигиена",
      description: "Чистка, отбеливание, фторирование",
      href: "/stomatologiya/gigiena",
      image: "/images/dental-treatment.jpg",
    },
    {
      title: "Диагностика",
      description: "Рентген, КТ, комплексный осмотр",
      href: "/stomatologiya/lechenie-zubov",
      image: "/images/dental-treatment.jpg",
    },
  ],
  aesthetics: [
    {
      title: "Виниры и коронки",
      description: "Эстетическая реставрация зубов",
      href: "/stomatologiya/protezirovanie",
      image: "/images/dental-implant.jpg",
    },
    {
      title: "Брекеты",
      description: "Исправление прикуса, выравнивание",
      href: "/stomatologiya/brekety",
      image: "/images/dental-braces.jpg",
    },
    {
      title: "Отбеливание",
      description: "Профессиональное отбеливание зубов",
      href: "/stomatologiya/gigiena",
      image: "/images/dental-treatment.jpg",
    },
  ],
  surgery: [
    {
      title: "Имплантация",
      description: "Установка имплантов Straumann, Medentika",
      href: "/stomatologiya/implantatsiya",
      image: "/images/dental-implant.jpg",
    },
    {
      title: "Удаление зубов",
      description: "Простое и сложное удаление",
      href: "/stomatologiya/khirurgiya",
      image: "/images/dental-treatment.jpg",
    },
    {
      title: "Зубы мудрости",
      description: "Удаление зубов мудрости",
      href: "/stomatologiya/khirurgiya/udalenie-zuba-mudrosti",
      image: "/images/dental-treatment.jpg",
    },
  ],
};

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("treatment");

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Услуги
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              Полный спектр стоматологических услуг в Казани с использованием современного оборудования
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 rounded-full bg-muted p-1.5">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services[activeCategory as keyof typeof services].map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <Card className="h-full overflow-hidden border-0 bg-muted/50 transition-all duration-300 hover:bg-muted hover:shadow-lg">
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mb-4 text-muted-foreground">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                    Подробнее
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 text-center">
          <Link
            href="/stomatologiya/tseny"
            className="inline-flex items-center gap-2 text-lg font-medium text-primary transition-colors hover:text-primary/80"
          >
            Все услуги и цены
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
