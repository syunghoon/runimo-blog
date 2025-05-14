import HeroSection from "@/app/_components/landing/hero-section";
import AppPreviewSection from "@/app/_components/landing/app-preview";
import FeaturesSection from "@/app/_components/landing/features";
import TestimonialSection from "@/app/_components/landing/testimonials";
import CallToActionSection from "@/app/_components/landing/cta";

export default function Index() {
  return (
    <main>
      <HeroSection />
      <AppPreviewSection />
      <FeaturesSection />
      <TestimonialSection />
      <CallToActionSection />
    </main>
  );
}
