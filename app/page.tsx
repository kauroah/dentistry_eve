import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { DoctorsSection } from "@/components/doctors-section";
import { WhyUsSection } from "@/components/why-us-section";
import { ReviewsSection } from "@/components/reviews-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
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
  );
}
