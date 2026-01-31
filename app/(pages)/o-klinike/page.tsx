import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import { Award, Users, Clock, Shield, GraduationCap, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "О клинике Eva Dent — Стоматология в Казани",
  description:
    "Узнайте больше о стоматологической клинике Eva Dent в Казани. Наша команда, оборудование, ценности и подход к лечению.",
};

const stats = [
  { value: "15+", label: "лет опыта" },
  { value: "10 000+", label: "довольных пациентов" },
  { value: "12", label: "специалистов" },
  { value: "98%", label: "положительных отзывов" },
];

const values = [
  {
    icon: Heart,
    title: "Забота о пациенте",
    description: "Каждый пациент для нас — особенный. Мы создаём комфортную атмосферу и внимательно относимся к пожеланиям.",
  },
  {
    icon: Shield,
    title: "Безопасность",
    description: "Строгое соблюдение стандартов стерилизации, использование одноразовых материалов и современных протоколов.",
  },
  {
    icon: Award,
    title: "Качество",
    description: "Используем только сертифицированные материалы ведущих мировых производителей и даём гарантию на все работы.",
  },
  {
    icon: GraduationCap,
    title: "Профессионализм",
    description: "Наши врачи регулярно проходят обучение и внедряют новейшие методики лечения.",
  },
  {
    icon: Users,
    title: "Командная работа",
    description: "Сложные случаи обсуждаем коллегиально, привлекая специалистов разных профилей для лучшего результата.",
  },
  {
    icon: Clock,
    title: "Уважение времени",
    description: "Ценим ваше время: работаем по записи, минимизируем ожидание, соблюдаем график.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                О клинике Eva Dent
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Eva Dent — современная стоматологическая клиника в Казани, где забота о пациенте
                и качество лечения стоят на первом месте. Мы работаем с 2009 года и за это время
                помогли тысячам пациентов обрести здоровую и красивую улыбку.
              </p>
              <p className="text-muted-foreground">
                Наша миссия — сделать качественную стоматологию доступной и комфортной. Мы
                используем современное оборудование, передовые методики и индивидуальный подход
                к каждому пациенту.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/hero-dental.jpg"
                alt="Интерьер клиники Eva Dent"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Наши ценности
            </h2>
            <p className="text-muted-foreground">
              Принципы, которыми мы руководствуемся в работе каждый день
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="flex gap-4 pt-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Современное оборудование
            </h2>
            <div className="prose prose-lg mx-auto max-w-none text-muted-foreground">
              <p>
                Клиника Eva Dent оснащена современным диагностическим и лечебным оборудованием
                ведущих мировых производителей. Это позволяет нам проводить точную диагностику
                и качественное лечение.
              </p>
              <ul>
                <li>Цифровая рентгенография с минимальным облучением</li>
                <li>Компьютерная томография для 3D-диагностики</li>
                <li>Дентальный микроскоп для эндодонтического лечения</li>
                <li>Внутриротовой сканер для цифровых оттисков</li>
                <li>Современные стоматологические установки</li>
                <li>Лазерное оборудование для мягких тканей</li>
              </ul>
              <p>
                Мы постоянно обновляем оборудование и внедряем новые технологии, чтобы
                предоставлять пациентам лечение на уровне лучших мировых клиник.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
