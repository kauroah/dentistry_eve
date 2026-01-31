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
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Отправить заявку
            </h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму и мы свяжемся с вами для записи на приём
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  placeholder="Ваше имя"
                  className="h-12 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Желаемая дата</Label>
                <Input
                  id="date"
                  type="date"
                  className="h-12 rounded-xl"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Номер телефона</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="h-12 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Электронная почта</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  className="h-12 rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment">Ваш комментарий</Label>
              <Textarea
                id="comment"
                placeholder="Опишите причину обращения или задайте вопрос"
                className="min-h-30 resize-none rounded-xl"
              />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="mt-0.5"
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed text-muted-foreground">
                Принимаю{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  условия обработки
                </a>{" "}
                персональных данных
              </Label>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-xl"
              disabled={!agreed}
            >
              Оставить заявку
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
