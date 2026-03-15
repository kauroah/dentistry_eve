import Image from "next/image";
import { notFound } from "next/navigation";
import { Doctor, doctors } from "@/data/doctors";
import { Button } from "@/components/ui/button";
import { AppointmentModal } from "@/components/appointment-modal";
import { ScrollToTop } from "@/components/ui/scroll-to-top"; // Import the new component
import type { Metadata } from "next";

// ... (rest of your imports and types remain the same)

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const doctor = doctors.find((d: Doctor) => d.slug === slug);
  const relatedDoctors = doctors
    .filter((d: Doctor) => d.slug !== slug && d.specialty === doctor?.specialty)
    .slice(0, 3);

  if (!doctor) {
    notFound();
  }

  // Extract years from experience string
  const experienceYears = doctor.experience.match(/\d+/)?.[0] || "10";

  // Enhanced Schema Markup
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `https://evadent.ru/doctors/${slug}`,
        name: `${doctor.name} ${doctor.surname}`,
        image: doctor.image,
        description: doctor.description?.replace(/\s+/g, ' ').trim(),
        medicalSpecialty: doctor.specialty,
        knowsAbout: doctor.services,
        jobTitle: doctor.role,
        email: "info@evadent.ru",
        telephone: "+78431234567",
        alumniOf: doctor.education?.map((edu: string) => ({
          "@type": "CollegeOrUniversity",
          name: edu,
        })),
        hasCredential: doctor.trainings?.map((training: string) => ({
          "@type": "EducationalOccupationalCredential",
          name: training,
        })),
        worksFor: {
          "@type": "MedicalClinic",
          name: "Eva Dent",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ул. Баумана, 123",
            addressLocality: "Казань",
            addressRegion: "Татарстан",
            postalCode: "420111",
            addressCountry: "RU",
          },
          telephone: "+78431234567",
          url: "https://evadent.ru",
          openingHours: "Mo-Fr 09:00-21:00, Sa-Su 10:00-20:00",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://evadent.ru/doctors/${slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: "https://evadent.ru",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Врачи",
            item: "https://evadent.ru/doctors",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${doctor.name} ${doctor.surname}`,
            item: `https://evadent.ru/doctors/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* ================= SCHEMA MARKUP ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ================= BREADCRUMBS ================= */}
      <nav className="container mx-auto px-4 py-4 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-muted-foreground flex-wrap">
          <li>
            <a href="/" className="hover:text-primary transition-colors">
              Главная
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/doctors" className="hover:text-primary transition-colors">
              Врачи
            </a>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium truncate max-w-50 md:max-w-none">
            {doctor.name} {doctor.surname}
          </li>
        </ol>
      </nav>

      {/* ================= STICKY NAVIGATION ================= */}
      <nav className="sticky top-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-10 border-b hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex gap-6 py-3 text-sm">
            <li>
              <a href="#about" className="hover:text-primary transition-colors">
                О враче
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-primary transition-colors">
                Образование
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary transition-colors">
                Услуги
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="border-b py-16" aria-labelledby="doctor-name">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 md:grid-cols-2">
              {/* PHOTO */}
              <div className="relative h-105 w-full max-w-sm mx-auto md:mx-0">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} ${doctor.surname} — стоматолог ${doctor.specialty} в клинике Eva Dent, Казань`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl shadow-lg"
                  priority
                  quality={75} // Changed from 90 to 75 to match config
                />
              </div>

              {/* BASIC INFO */}
              <div className="flex flex-col">
                <h1 id="doctor-name" className="text-3xl md:text-4xl font-bold mb-2">
                  {doctor.name} {doctor.surname}
                </h1>

                <p className="text-primary font-medium text-lg mb-2">
                  {doctor.specialty}
                </p>

                <p className="text-muted-foreground mb-4">
                  {doctor.role}
                </p>

                <p className="font-medium mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  {doctor.experience}
                </p>

                {/* CTA with Phone */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <AppointmentModal>
                    <Button size="lg" className="rounded-full px-8 w-full sm:w-auto">
                      Записаться на прием
                    </Button>
                  </AppointmentModal>
                  <a 
                    href="tel:+78431234567" 
                    className="text-primary font-medium hover:underline flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    +7 (843) 123-45-67
                  </a>
                </div>

                {/* STATS CARDS */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                    <p className="font-bold text-lg text-primary">{experienceYears}+</p>
                    <p className="text-sm text-muted-foreground">лет опыта</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                    <p className="font-bold text-lg text-primary">1000+</p>
                    <p className="text-sm text-muted-foreground">пациентов</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                    <p className="font-bold text-lg text-primary">4.9</p>
                    <p className="text-sm text-muted-foreground">рейтинг</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT DOCTOR ================= */}
        {doctor.description && (
          <section id="about" className="py-16 scroll-mt-16">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                О враче
              </h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {doctor.description}
              </p>
            </div>
          </section>
        )}

        {/* ================= EDUCATION ================= */}
        {doctor.education?.length > 0 && (
          <section id="education" className="py-10 bg-muted/20 scroll-mt-16">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                Образование
              </h2>
              <ul className="space-y-3">
                {doctor.education.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ================= COURSES ================= */}
        {doctor.trainings?.length > 0 && (
          <section className="py-10 scroll-mt-16">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full"></span>
                Курсы и повышение квалификации
              </h2>
              <ul className="space-y-3">
                {doctor.trainings.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ================= SERVICES ================= */}
        {doctor.services?.length > 0 && (
          <section id="services" className="py-16 bg-muted/30 scroll-mt-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Услуги врача
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {doctor.services.map((service: string, index: number) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-background"
                  >
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= RELATED DOCTORS ================= */}
        {relatedDoctors.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-semibold mb-6">
                Другие специалисты
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedDoctors.map((related: Doctor) => (
                  <a
                    href={`/doctors/${related.slug}`}
                    key={related.slug}
                    className="border rounded-lg p-4 hover:shadow-md transition-all hover:-translate-y-1"
                  >
                    <span className="font-medium block">
                      {related.name} {related.surname}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {related.specialty}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= CTA SECTION ================= */}
        <section className="border-t py-16 bg-linear-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 text-center max-w-xl">
            <h2 className="text-2xl font-semibold mb-4">
              Запишитесь на консультацию
            </h2>
            <p className="text-muted-foreground mb-6">
              Запишитесь на прием к врачу {doctor.name} {doctor.surname}
              в стоматологической клинике Eva Dent. Мы перезвоним вам в течение 15 минут.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AppointmentModal>
                <Button size="lg" className="rounded-full px-10">
                  Записаться онлайн
                </Button>
              </AppointmentModal>
              <a
                href="tel:+78431234567"
                className="inline-flex items-center justify-center gap-2 text-primary font-medium hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +7 (843) 123-45-67
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= MOBILE FLOATING CTA ================= */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-20">
        <AppointmentModal>
          <Button size="lg" className="w-full rounded-full shadow-lg bg-primary hover:bg-primary/90">
            Записаться на прием
          </Button>
        </AppointmentModal>
      </div>

      {/* ================= SCROLL TO TOP BUTTON ================= */}
      <ScrollToTop />
    </>
  );
}