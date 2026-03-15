"use client";

import { useEffect, useState } from "react";
import { Star, Quote, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { ReviewForm } from "@/components/review-form";
import { doctors } from "@/data/doctors";

import { FaMapMarkedAlt } from "react-icons/fa";
import { SiGooglemaps, SiYandexcloud } from "react-icons/si";

const AppointmentModal = dynamic(
  () => import("@/components/appointment-modal").then((m) => m.AppointmentModal),
  { ssr: false }
);

type Review = {
  id: number;
  name: string;
  doctor: string;
  rating: number;
  text: string;
  date: string;
  helpful: number;
};

const externalReviews = [
  {
    name: "Яндекс",
    url: "https://yandex.ru/maps/org/eva_dent/1101197912/?ll=49.115703%2C55.788692&z=14",
    icon: SiYandexcloud,
  },
  {
    name: "Zoon",
    url: "https://zoon.ru/kazan/medical/stomatologiya_eva_dent_na_ulitse_ostrovskogo_21_8/reviews/",
    icon: FaMapMarkedAlt,
  },
  {
    name: "ProDoctorov",
    url: "https://prodoctorov.ru/kazan/lpu/64758-stomatologiya-eva-dent-na-ostrovskogo/",
    icon: SiGooglemaps,
  },
  {
    name: "СПР",
    url: "https://pfo.spr.ru/kazan/stomatologii-stomatologicheskie-kliniki/reviews/eva-dent-4449336.html",
    icon: FaMapMarkedAlt,
  },
  {
    name: "2ГИС",
    url: "https://2gis.ru/kazan/firm/2956015537013681?m=49.10891%2C55.79111%2F17.87",
    icon: SiGooglemaps,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-amber-400 text-amber-400"
              : "text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsClient() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  async function handleSubmit(review: any) {
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });

    if (res.ok) {
      const updated = await fetch("/api/reviews").then((r) => r.json());
      setReviews(updated);
    }
  }

  return (
    <main>

      {/* External review platforms */}

      <section className="py-12 border-b bg-muted/20">
        <div className="container mx-auto px-4">

          <h2 className="text-center text-2xl font-bold mb-8">
            Отзывы на независимых площадках
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            {externalReviews.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border px-6 py-3 hover:bg-muted transition"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  {item.name}
                </a>
              );
            })}

          </div>

        </div>
      </section>

      {/* Leave review */}

      <section className="py-16 border-b">
        <div className="container mx-auto px-4 max-w-xl">

          <h2 className="text-2xl font-bold text-center mb-8">
            Оставить отзыв
          </h2>

          <ReviewForm doctors={doctors} onSubmit={handleSubmit} />

        </div>
      </section>

      {/* Reviews */}

      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">

          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">

                <div className="flex justify-between mb-3">

                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {review.date}
                    </p>
                  </div>

                  <StarRating rating={review.rating} />

                </div>

                <Badge variant="outline" className="mb-3">
                  Врач: {review.doctor}
                </Badge>

                <div className="relative">

                  <Quote className="absolute -left-1 -top-1 h-6 w-6 text-primary/20" />

                  <p className="pl-5 text-muted-foreground">
                    {review.text}
                  </p>

                </div>

                <div className="flex items-center gap-3 mt-4 text-sm text-muted-foreground">
                  <ThumbsUp className="h-4 w-4" />
                  Полезно ({review.helpful})
                </div>

              </CardContent>
            </Card>
          ))}

        </div>
      </section>

      {/* CTA */}

      <section className="border-t py-16 bg-muted/30 text-center">

        <h2 className="text-2xl font-bold mb-4">
          Станьте нашим пациентом
        </h2>

        <AppointmentModal>
          <Button size="lg" className="rounded-full px-8">
            Записаться на приём
          </Button>
        </AppointmentModal>

      </section>

    </main>
  );
}
