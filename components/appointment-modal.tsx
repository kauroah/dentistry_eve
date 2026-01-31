"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppointmentModalProps {
  children: React.ReactNode;
  className?: string;
}

export function AppointmentModal({ children, className }: AppointmentModalProps) {
  const [open, setOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    phone: "+7",
    email: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset after showing success
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setFormData({ name: "", date: "", phone: "+7", email: "", comment: "" });
      setAgreed(false);
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className={className}>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[560px] gap-0 overflow-hidden rounded-2xl border-0 p-0 shadow-2xl">
        <DialogHeader className="relative px-8 pb-6 pt-8">
          <DialogTitle className="text-2xl font-semibold text-foreground">
            Отправить заявку
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center justify-center px-8 pb-10 pt-4">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-center text-lg font-medium text-foreground">
              Заявка отправлена!
            </p>
            <p className="mt-2 text-center text-muted-foreground">
              Мы свяжемся с вами в ближайшее время
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 pb-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Name */}
              <div className="group relative rounded-xl border border-border bg-background px-4 pb-3 pt-5 transition-colors focus-within:border-primary">
                <label className="absolute left-4 top-2 text-xs font-medium text-primary">
                  Имя
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Александра"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                  required
                />
              </div>

              {/* Date */}
              <div className="group relative rounded-xl border border-border bg-background px-4 pb-3 pt-5 transition-colors focus-within:border-primary">
                <label className="absolute left-4 top-2 text-xs font-medium text-primary">
                  Желаемая дата
                </label>
                <div className="flex items-center justify-between">
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none [&::-webkit-calendar-picker-indicator]:opacity-0"
                    style={{ colorScheme: "light" }}
                  />
                  <Calendar className="pointer-events-none absolute right-4 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              {/* Phone */}
              <div className="group relative rounded-xl border border-border bg-background px-4 pb-3 pt-5 transition-colors focus-within:border-primary">
                <label className="absolute left-4 top-2 text-xs font-medium text-primary">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+7"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {/* Email */}
              <div className="group relative rounded-xl border border-border bg-background px-4 pb-3 pt-5 transition-colors focus-within:border-primary">
                <label className="absolute left-4 top-2 text-xs font-medium text-primary">
                  Электронная почта
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="name@mail.com"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                />
              </div>

              {/* Comment */}
              <div className="group relative rounded-xl border border-border bg-background px-4 pb-3 pt-5 transition-colors focus-within:border-primary">
                <label className="absolute left-4 top-2 text-xs font-medium text-primary">
                  Ваш комментарий
                </label>
                <input
                  type="text"
                  value={formData.comment}
                  onChange={(e) => handleChange("comment", e.target.value)}
                  placeholder="Важно..."
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="submit"
                disabled={!agreed || isSubmitting}
                className="group h-12 gap-2 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms-modal"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  className="mt-0.5 h-5 w-5 rounded border-2"
                />
                <label
                  htmlFor="terms-modal"
                  className="text-xs leading-relaxed text-muted-foreground"
                >
                  Я даю{" "}
                  <a href="/privacy" className="text-foreground underline hover:text-primary">
                    согласие на обработку персональных данных
                  </a>{" "}
                  и принимаю{" "}
                  <a href="/terms" className="text-foreground underline hover:text-primary">
                    условия публичной оферты
                  </a>
                </label>
              </div>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
