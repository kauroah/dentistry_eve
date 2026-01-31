"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Елена",
    surname: "Иванова",
    specialty: "Терапевтическая стоматология",
    role: "Главный врач, стоматолог-терапевт",
    image: "/images/doctor-1.jpg",
  },
  {
    id: 2,
    name: "Александр",
    surname: "Петров",
    specialty: "Имплантология, хирургия",
    role: "Врач-имплантолог, хирург-стоматолог",
    image: "/images/doctor-2.jpg",
  },
  {
    id: 3,
    name: "Мария",
    surname: "Козлова",
    specialty: "Ортодонтия",
    role: "Врач-ортодонт",
    image: "/images/doctor-3.jpg",
  },
];

export function DoctorsSection() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Найти специалиста
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground">
            Опытные врачи с многолетним стажем работы помогут решить любую проблему
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="group cursor-pointer overflow-hidden border-0 bg-card transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={doctor.image || "/placeholder.svg"}
                  alt={`${doctor.name} ${doctor.surname}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <p className="text-4xl font-bold">{doctor.name}</p>
                  <p className="text-3xl font-bold">{doctor.surname}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="mb-1 text-sm font-medium text-primary">{doctor.specialty}</p>
                <p className="text-sm text-muted-foreground">{doctor.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/o-klinike"
            className="inline-flex items-center gap-2 text-lg font-medium text-primary transition-colors hover:text-primary/80"
          >
            Все врачи
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
