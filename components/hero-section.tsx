"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CalendarDays, MessageCircle, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { AppointmentModal } from "@/components/appointment-modal";

const slides = [
  {
    id: 1,
    image: "/images/hero-dental.jpg",
    subtitle: "Современная стоматология в Казани",
    title: "Eva Dent",
    description: "Многопрофильная стоматологическая клиника с индивидуальным подходом к каждому пациенту",
  },
  {
    id: 2,
    image: "/images/clinic-interior.jpg",
    subtitle: "Комфорт и безопасность",
    title: "Eva Dent",
    description: "Современное оборудование и передовые технологии для вашего здоровья",
  },
  {
    id: 3,
    image: "/images/dental-treatment.jpg",
    subtitle: "Профессиональная помощь",
    title: "Eva Dent",
    description: "Опытные специалисты помогут сохранить здоровье ваших зубов на долгие годы",
  },
];

const quickActions = [
  {
    icon: MapPin,
    title: "Виртуальный",
    subtitle: "тур по клинике",
    description: "Казань, ул. Пушкина, 52",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-150 overflow-hidden bg-foreground lg:h-175">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-linear-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="container relative mx-auto h-full px-4">
        <div className="flex h-full items-center">
          <div className="grid h-full w-full grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Main content */}
            <div className="flex flex-col gap-6 lg:col-span-8">
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/80">
                  {slides[currentSlide].subtitle}
                </p>
                <h1 className="text-balance text-5xl font-bold tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
                  {slides[currentSlide].title}
                </h1>
                <p className="max-w-xl text-lg text-primary-foreground/80">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Slide navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                  aria-label="Предыдущий слайд"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                  aria-label="Следующий слайд"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="ml-4 flex items-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? "w-8 bg-primary"
                          : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
                      }`}
                      aria-label={`Перейти к слайду ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Quick actions sidebar */}
            <div className="hidden flex-col gap-3 lg:col-span-4 lg:flex">
              {/* Virtual tour card */}
              <div className="group cursor-pointer rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-5 backdrop-blur-sm transition-all hover:bg-primary-foreground/20">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">Виртуальный</p>
                    <p className="text-sm font-medium text-primary-foreground">тур по клинике</p>
                    <p className="mt-1 text-xs text-primary-foreground/70">Казань, ул. Назарбаева, 10</p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <AppointmentModal>
                <Button
                  size="lg"
                  className="h-auto justify-start gap-4 rounded-2xl px-5 py-4 text-left"
                >
                  <CalendarDays className="h-6 w-6 shrink-0" />
                  <div>
                    <p className="font-semibold">Записаться</p>
                    <p className="text-xs font-normal opacity-80">на приём</p>
                  </div>
                </Button>
              </AppointmentModal>

              <Button
                size="lg"
                variant="outline"
                className="h-auto justify-start gap-4 rounded-2xl border-primary-foreground/20 bg-primary-foreground/10 px-5 py-4 text-left text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              >
                <MessageCircle className="h-6 w-6 shrink-0" />
                <div>
                  <p className="font-semibold">Онлайн</p>
                  <p className="text-xs font-normal opacity-80">консультация</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile quick actions */}
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/90 to-transparent p-4 lg:hidden">
        <div className="container mx-auto flex gap-3">
          <AppointmentModal>
            <Button size="lg" className="flex-1 rounded-xl">
              Записаться на приём
            </Button>
          </AppointmentModal>
          <Button
            size="lg"
            variant="outline"
            className="rounded-xl border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
