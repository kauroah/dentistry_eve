import type { Metadata } from "next";
import { Star, Quote, ThumbsUp, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AppointmentModal } from "@/components/appointment-modal";

export const metadata: Metadata = {
  title: "Отзывы пациентов — Eva Dent Казань",
  description:
    "Реальные отзывы пациентов о лечении зубов в стоматологии Eva Dent в Казани. Мнения о врачах, качестве услуг и сервисе клиники.",
};

const reviews = [
  {
    id: 1,
    name: "Елена Петрова",
    date: "15 января 2026",
    rating: 5,
    service: "Имплантация",
    doctor: "Иванов А.С.",
    text: "Прекрасная клиника! Делала имплантацию у доктора Иванова — всё прошло быстро и безболезненно. Очень внимательный персонал, всё объяснили, показали на снимках. Результатом довольна на 100%. Рекомендую всем, кто боится стоматологов — здесь вас точно успокоят и сделают всё на высшем уровне.",
    helpful: 24,
  },
  {
    id: 2,
    name: "Алексей Смирнов",
    date: "12 января 2026",
    rating: 5,
    service: "Лечение кариеса",
    doctor: "Козлова М.В.",
    text: "Обратился с острой болью, приняли без записи. Доктор Козлова очень аккуратно и профессионально провела лечение. Никакого дискомфорта во время процедуры не испытывал. Цены адекватные, качество на высоте. Теперь только в Eva Dent!",
    helpful: 18,
  },
  {
    id: 3,
    name: "Марина Волкова",
    date: "8 января 2026",
    rating: 5,
    service: "Брекеты",
    doctor: "Сидорова О.Н.",
    text: "Установила керамические брекеты у ортодонта Сидоровой. Очень довольна выбором клиники. Врач подробно объяснила план лечения, сроки и стоимость. Уже через 8 месяцев вижу отличный результат. Спасибо большое!",
    helpful: 31,
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    date: "5 января 2026",
    rating: 4,
    service: "Удаление зуба мудрости",
    doctor: "Иванов А.С.",
    text: "Удаляли сложный зуб мудрости. Операция прошла хорошо, хотя немного нервничал. Доктор всё время успокаивал и объяснял свои действия. Восстановление прошло быстро. Единственное — пришлось подождать в очереди минут 15.",
    helpful: 12,
  },
  {
    id: 5,
    name: "Анна Николаева",
    date: "28 декабря 2025",
    rating: 5,
    service: "Профессиональная чистка",
    doctor: "Козлова М.В.",
    text: "Регулярно делаю профессиональную чистку в Eva Dent. Всегда отличный результат, зубы как новые! Гигиенист работает очень бережно, никакого дискомфорта. После процедуры дают полезные рекомендации по уходу. Советую!",
    helpful: 27,
  },
  {
    id: 6,
    name: "Ольга Федорова",
    date: "20 декабря 2025",
    rating: 5,
    service: "Виниры",
    doctor: "Сидорова О.Н.",
    text: "Установила 8 виниров на передние зубы. Результат превзошёл все ожидания! Улыбка стала идеальной, очень естественно смотрится. Весь процесс занял около 2 недель. Доктор Сидорова — настоящий профессионал своего дела!",
    helpful: 45,
  },
  {
    id: 7,
    name: "Сергей Морозов",
    date: "15 декабря 2025",
    rating: 5,
    service: "Протезирование",
    doctor: "Иванов А.С.",
    text: "Делал металлокерамические коронки на жевательные зубы. Качество отличное, сидят идеально, никакого дискомфорта при еде. Врач очень внимательный, всё делает на совесть. Цены приятно удивили — дешевле, чем в других клиниках города.",
    helpful: 19,
  },
  {
    id: 8,
    name: "Татьяна Лебедева",
    date: "10 декабря 2025",
    rating: 5,
    service: "Лечение пульпита",
    doctor: "Козлова М.В.",
    text: "Пришла с сильной зубной болью, оказался пульпит. Доктор Козлова провела лечение за два визита. Всё прошло абсолютно безболезненно благодаря современной анестезии. Зуб сохранили, теперь не беспокоит. Очень благодарна!",
    helpful: 22,
  },
];

const stats = [
  { value: "4.9", label: "Средний рейтинг" },
  { value: "500+", label: "Отзывов" },
  { value: "98%", label: "Рекомендуют" },
  { value: "15+", label: "Лет опыта" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Отзывы наших пациентов
            </h1>
            <p className="text-lg text-muted-foreground">
              Мы гордимся доверием наших пациентов. Читайте реальные отзывы о работе наших специалистов
              и качестве услуг в клинике Eva Dent.
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((review) => (
              <Card key={review.id} className="overflow-hidden border-border/50">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-lg font-semibold text-primary">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{review.name}</h3>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {review.service}
                    </Badge>
                    <Badge variant="outline" className="text-muted-foreground">
                      Врач: {review.doctor}
                    </Badge>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -left-1 -top-1 h-6 w-6 text-primary/20" />
                    <p className="pl-5 text-muted-foreground">{review.text}</p>
                  </div>

                  <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
                    <button className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <ThumbsUp className="h-4 w-4" />
                      Полезно ({review.helpful})
                    </button>
                    <button className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <MessageCircle className="h-4 w-4" />
                      Ответить
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load more */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-full bg-transparent">
              Загрузить ещё отзывы
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Станьте нашим пациентом
            </h2>
            <p className="mb-8 text-muted-foreground">
              Присоединяйтесь к тысячам довольных пациентов Eva Dent. Запишитесь на приём и убедитесь
              в качестве нашего сервиса лично.
            </p>
            <AppointmentModal>
              <Button size="lg" className="rounded-full px-8">
                Записаться на приём
              </Button>
            </AppointmentModal>
          </div>
        </div>
      </section>
    </main>
  );
}
