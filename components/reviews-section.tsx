"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Татьяна",
    service: "Имплантация зубов",
    text: "Была на приёме у имплантолога. Очень грамотный специалист. Ответил на все мои вопросы, всё чётко объяснил, рассказал про подготовку и проведение операции. Очень рада, что попала к такому доктору!",
  },
  {
    id: 2,
    name: "Елена",
    service: "Профессиональная гигиена",
    text: "Eva Dent — современная клиника. Всё предусмотрено для удобства пациентов. Очень доброжелательный персонал, чистота, уют. Огромная благодарность врачам за профессионализм и внимательное отношение!",
  },
  {
    id: 3,
    name: "Оксана",
    service: "Лечение зубов",
    text: "Очень благодарна профессионализму замечательного врача! Я очень тщательно выбирала клинику. Качество и профессионализм всегда на высоте. Рекомендую всем, кто ищет действительно хорошую стоматологию!",
  },
  {
    id: 4,
    name: "Владислав",
    service: "Консультация",
    text: "Хочу отблагодарить врачей за качественный приём и рекомендации. Не первый раз в данной клинике, качество и профессионализм всегда на высоте. Очень доволен результатом лечения!",
  },
];

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleReviews = 2;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + visibleReviews >= reviews.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, reviews.length - visibleReviews) : prev - 1
    );
  };

  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Отзывы о клинике
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              Что говорят наши пациенты о лечении в Eva Dent
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.slice(currentIndex, currentIndex + visibleReviews).map((review) => (
            <Card key={review.id} className="border-0 bg-card shadow-sm">
              <CardContent className="p-8">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <p className="text-lg font-semibold text-foreground">Пациент {review.name}</p>
                    <p className="text-sm text-primary">{review.service}</p>
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                <p className="leading-relaxed text-muted-foreground">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
