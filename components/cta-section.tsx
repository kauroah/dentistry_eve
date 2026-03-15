"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export function CTASection() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">

          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Отправить заявку
            </h2>
          </div>

          <form
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const formData = new FormData(form);

              const data = {
                name: formData.get("name"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                date: formData.get("date"),
                comment: formData.get("comment"),
              };

              const res = await fetch("/api/appointments", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });

              if (res.ok) {
                alert("Заявка отправлена!");
                form.reset();
              }
            }}
          >

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <Label htmlFor="name">Имя</Label>
                <Input name="name" id="name" required />
              </div>

              <div>
                <Label htmlFor="date">Желаемая дата</Label>
                <Input name="date" id="date" type="date" />
              </div>

            </div>

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input name="phone" id="phone" required />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input name="email" id="email" type="email" />
              </div>

            </div>

            <div>
              <Label htmlFor="comment">Комментарий</Label>
              <Textarea name="comment" id="comment" />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
              />
              <Label htmlFor="terms">
                Принимаю условия обработки персональных данных
              </Label>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={!agreed}
            >
              Отправить заявку
            </Button>

          </form>

        </div>
      </div>
    </section>
  );
}
