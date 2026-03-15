import type { Metadata } from "next";
import ReviewsClient from "./reviews-client";

export const metadata: Metadata = {
  title: "Отзывы пациентов — Eva Dent Казань",
  description:
    "Реальные отзывы пациентов о лечении зубов в стоматологии Eva Dent в Казани.",
};

export default function Page() {
  return <ReviewsClient />;
}
