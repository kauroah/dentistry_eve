"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Review = {
  name: string;
  doctor: string;
  rating: number;
  text: string;
};

export function ReviewForm({
  doctors,
  onSubmit,
}: {
  doctors: any[];
  onSubmit: (review: Review) => void;
}) {

  const [name, setName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onSubmit({
      name,
      doctor,
      rating,
      text,
    });

    setName("");
    setDoctor("");
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <Input
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <select
        className="w-full border rounded-md p-2"
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
        required
      >
        <option value="">Выберите врача</option>

        {doctors.map((doc) => (
          <option
            key={doc.slug}
            value={`${doc.name} ${doc.surname}`}
          >
            {doc.name} {doc.surname}
          </option>
        ))}

      </select>

      <div className="flex gap-2">
        {[1,2,3,4,5].map((star) => (
          <Star
            key={star}
            onClick={() => setRating(star)}
            className={`cursor-pointer h-6 w-6 ${
              star <= rating
                ? "fill-amber-400 text-amber-400"
                : "text-muted"
            }`}
          />
        ))}
      </div>

      <Textarea
        placeholder="Напишите ваш отзыв..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      <Button type="submit" className="rounded-full">
        Отправить отзыв
      </Button>

    </form>
  );
}
