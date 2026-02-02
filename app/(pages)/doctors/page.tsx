import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

/* ================= DATA ================= */

const doctors = [
  {
    id: 1,
    slug: "allush-adnan",
    name: "Аллуш",
    surname: "Аднан Бурхан",
    specialty: "Ортодонтия",
    role: "Директор, врач-ортодонт",
    image: "https://eva-dent.com/wp-content/uploads/2021/03/allush1.jpg",
  },
  {
    id: 2,
    slug: "allush-natalya",
    name: "Аллуш",
    surname: "Наталья Сергеевна",
    specialty: "Хирургия, имплантология",
    role: "Главный врач, хирург, имплантолог",
    image: "https://eva-dent.com/wp-content/uploads/2021/03/allush2.jpg",
  },
  {
    id: 3,
    slug: "vafa-tarek",
    name: "Вафа",
    surname: "Тарек Ахмедович",
    specialty: "Ортопедия, терапия",
    role: "Стоматолог ортопед-терапевт",
    image: "https://eva-dent.com/wp-content/uploads/2021/03/15_vafa-min.jpg",
  },
  {
    id: 4,
    slug: "vafina-evgeniya",
    name: "Вафина",
    surname: "Евгения Сергеевна",
    specialty: "Терапевтическая стоматология",
    role: "Стоматолог-терапевт",
    image:
      "https://eva-dent.com/wp-content/uploads/2021/03/16040893_maruseva-evgeniya-sergeevna-_result__-min-min.jpg",
  },
  {
    id: 5,
    slug: "halimzoda-mohinav",
    name: "Халимзода",
    surname: "Мохинав Исо",
    specialty: "Терапевтическая стоматология",
    role: "Стоматолог-терапевт",
    image: "https://eva-dent.com/wp-content/uploads/2025/04/iso.webp",
  },
  {
    id: 6,
    slug: "nuriev-ravil",
    name: "Нуриев",
    surname: "Равиль Фаритович",
    specialty: "Стоматология",
    role: "Врач-стоматолог",
    image:
      "https://eva-dent.com/wp-content/uploads/2025/08/Ravil-Faritovich-Nuriev.webp",
  },
  {
    id: 7,
    slug: "khazaaleh-tamer",
    name: "Хазаалех",
    surname: "Тамер Хасан",
    specialty: "Ортопедия",
    role: "Стоматолог-ортопед",
    image: "https://eva-dent.com/wp-content/uploads/2021/01/tamer.webp",
  },
];

/* ================= PAGE ================= */

export default function DoctorsPage() {
  return (
    <main className="bg-background">
      {/* HEADER */}
      <section className="border-b py-16">
        <div className="container mx-auto px-4">
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Наши врачи
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            Врачи стоматологии Eva Dent — опытные специалисты, которым доверяют
            здоровье и улыбку
          </p>
        </div>
      </section>

      {/* DOCTORS GRID */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {doctors.map((doctor) => (
              <Link
                key={doctor.id}
                href={`/doctors/${doctor.slug}`}
                className="group"
              >
                <Card className="overflow-hidden border border-border bg-card transition-shadow duration-200 hover:shadow-md">
                  {/* IMAGE */}
                  <div className="relative aspect-3/4 overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={`${doctor.name} ${doctor.surname}`}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 px-3 py-3 text-white">
                      <p className="text-base font-semibold leading-tight">
                        {doctor.name}
                      </p>
                      <p className="text-sm font-medium leading-tight opacity-90">
                        {doctor.surname}
                      </p>
                    </div>
                  </div>

                  {/* INFO */}
                  <CardContent className="px-3 py-3">
                    <p className="mb-0.5 text-xs font-medium text-primary">
                      {doctor.specialty}
                    </p>
                    <p className="text-xs leading-snug text-muted-foreground">
                      {doctor.role}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
