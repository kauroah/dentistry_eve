"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";

export function DoctorsSection() {
  const previewDoctors = doctors.slice(0, 3);

  return (
    <section className="bg-muted/30 py-20 lg:py-24">
      <div className="container mx-auto px-4">

        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Наши специалисты
          </h2>

          <p className="mx-auto max-w-xl text-base text-muted-foreground">
            Команда опытных врачей Eva Dent с многолетней клинической практикой
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">

            {previewDoctors.map((doctor) => (
              <Link
                key={doctor.id}
                href={`/doctors/${doctor.slug}`}
                className="group w-full max-w-xs"
              >
                <Card className="overflow-hidden border border-border bg-card transition-shadow duration-200 hover:shadow-md">

                  <div className="relative aspect-3/4 overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={`${doctor.name} ${doctor.surname}`}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 px-3 py-3 text-white">
                      <p className="text-base font-semibold">
                        {doctor.name}
                      </p>

                      <p className="text-sm opacity-90">
                        {doctor.surname}
                      </p>
                    </div>
                  </div>

                  <CardContent className="px-3 py-3">
                    <p className="mb-0.5 text-xs font-medium text-primary">
                      {doctor.specialty}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {doctor.role}
                    </p>
                  </CardContent>

                </Card>
              </Link>
            ))}

          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-base font-medium text-primary"
          >
            Все врачи
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
