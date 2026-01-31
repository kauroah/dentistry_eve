import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Building2, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Многопрофильная клиника",
    description:
      "Eva Dent — это забота о здоровье на каждом этапе жизни. Мы предлагаем широкий спектр стоматологических услуг, от профилактических осмотров до сложных операций.",
    href: "/o-klinike",
    image: "/images/clinic-interior.jpg",
  },
  {
    icon: Sparkles,
    title: "Современное оборудование",
    description:
      "Используем передовое оборудование и технологии для точной диагностики и безболезненного лечения. Качество и комфорт — наши приоритеты.",
    href: "/o-klinike",
    image: "/images/dental-treatment.jpg",
  },
  {
    icon: Heart,
    title: "Забота о пациенте",
    description:
      "Индивидуальный подход к каждому пациенту. Мы создаём комфортную атмосферу и обеспечиваем поддержку на всех этапах лечения.",
    href: "/kontakty",
    image: "/images/hero-dental.jpg",
  },
];

const stats = [
  { value: "24/7", label: "Поддержка пациентов", description: "Онлайн консультации круглосуточно" },
  { value: "100%", label: "Комфорт и забота", description: "Личный куратор на всех этапах" },
  { value: "15+", label: "Лет опыта", description: "Новейшие технологии и оборудование" },
  { value: "98%", label: "Довольных пациентов", description: "Конфиденциальность и безопасность" },
];

export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Eva Dent — это
          </h2>
        </div>

        {/* Feature cards */}
        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden border-0 bg-muted/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-foreground/20" />
              </div>
              <CardHeader className="absolute inset-x-0 bottom-0 text-primary-foreground">
                <CardTitle className="mb-2 text-2xl">{feature.title}</CardTitle>
                <p className="mb-4 text-sm text-primary-foreground/80">{feature.description}</p>
                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground transition-colors hover:text-primary"
                >
                  Подробнее
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="rounded-3xl bg-primary p-8 lg:p-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-primary-foreground">
            Комплексный подход к здоровью — это Eva Dent
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="mb-2 text-4xl font-bold text-primary-foreground lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mb-1 font-semibold text-primary-foreground">{stat.label}</p>
                <p className="text-sm text-primary-foreground/70">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
