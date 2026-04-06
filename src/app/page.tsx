import { HeroSection } from "@/components/organisms/HeroSection";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { HowItWorksSection } from "@/components/organisms/HowItWorksSection";
import { WhyChooseUsSection } from "@/components/organisms/WhyChooseUsSection";
import { StatsSection } from "@/components/organisms/StatsSection";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import { BlogSection } from "@/components/organisms/BlogSection";
import { FaqSection } from "@/components/organisms/FaqSection";
import { CtaSection } from "@/components/organisms/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
