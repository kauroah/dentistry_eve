import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты — Стоматология Eva Dent в Казани",
  description:
    "Контактная информация стоматологии Eva Dent в Казани. Адрес, телефон, часы работы, форма записи на приём.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Адрес (филиал 1)",
    content: "г. Казань, ул. Назарбаева, 10",
    description: "Рядом с парком Чёрное Озеро",
  },
  {
    icon: MapPin,
    title: "Адрес (филиал 2)",
    content: "г. Казань, ул. Островского, 21",
    description: "Центр города",
  },
  {
    icon: Phone,
    title: "Телефон",
    content: "+7 (843) 277-07-77",
    href: "tel:+78432770777",
    description: "Звоните, мы всегда на связи",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@eva-dent.ru",
    href: "mailto:info@eva-dent.ru",
    description: "Ответим в течение дня",
  },
  {
    icon: Clock,
    title: "Часы работы",
    content: "Пн-Сб: 9:00 - 20:00",
    description: "Воскресенье — выходной",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-muted/30 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Контакты
            </h1>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами любым удобным способом или запишитесь на приём онлайн
            </p>
          </div>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact info */}
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <Card key={item.title}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block font-medium text-foreground hover:text-primary"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.content}</p>
                    )}
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Записаться на приём
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="service">Услуга</Label>
                    <Input id="service" placeholder="Например, лечение кариеса" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите вашу проблему или пожелания"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить заявку
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="/privacy" className="underline hover:text-primary">
                      политикой конфиденциальности
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <h2 className="mb-6 text-center text-2xl font-bold tracking-tight text-foreground">
            Как нас найти
          </h2>
          <div className="aspect-[16/9] overflow-hidden rounded-xl bg-muted lg:aspect-[21/9]">
            <div className="flex h-full items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-12 w-12" />
                <p className="font-medium">Филиал 1: г. Казань, ул. Назарбаева, 10</p>
                <p className="font-medium">Филиал 2: г. Казань, ул. Островского, 21</p>
                <p className="mt-2 text-sm">Центр города</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick contact */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-primary-foreground">
                Нужна срочная консультация?
              </h2>
              <p className="text-primary-foreground/80">
                Позвоните нам прямо сейчас, мы примем вас в ближайшее время
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+78432770777" className="gap-2">
                <Phone className="h-4 w-4" />
                +7 (843) 277-07-77
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
