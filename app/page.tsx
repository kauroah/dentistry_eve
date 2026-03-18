import { Metadata } from "next";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { DoctorsSection } from "@/components/doctors-section";
import { WhyUsSection } from "@/components/why-us-section";
import { ReviewsSection } from "@/components/reviews-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from "@/components/seo-schemas";

export const metadata: Metadata = {
  title: "Eva Dent — Стоматологическая клиника в Казани | Лечение зубов, имплантация, протезирование",
  description: "Стоматология Eva Dent в Казани: лечение зубов, имплантация, протезирование, ортодонтия. Современное оборудование, опытные врачи. Запись онлайн +7 (843) 277-07-77",
  keywords: "стоматология Казань, лечение зубов, имплантация зубов, протезирование, брекеты, виниры, Eva Dent",
  openGraph: {
    title: "Eva Dent — Стоматологическая клиника в Казани",
    description: "Современная стоматология с индивидуальным подходом. Лечение, имплантация, протезирование.",
    url: "https://evadent.ru",
    siteName: "Eva Dent",
    images: [
      {
        url: "https://evadent.ru/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eva Dent Стоматология в Казани",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eva Dent — Стоматологическая клиника в Казани",
    description: "Современная стоматология с индивидуальным подходом",
    images: ["https://evadent.ru/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://evadent.ru",
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <BreadcrumbJsonLd />
      <LocalBusinessJsonLd />
      
      <div className="flex min-h-screen flex-col">
        <Header />
        
        {/* Hidden H1 for SEO (visible only to screen readers) */}
        <h1 className="sr-only">Eva Dent - Стоматологическая клиника в Казани</h1>
        
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <DoctorsSection />
          <WhyUsSection />
          <ReviewsSection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}