import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ExploreGrid } from "@/components/ExploreGrid";
import { GettingHerePreview } from "@/components/GettingHerePreview";
import { CuratedEscapes } from "@/components/CuratedEscapes";
import { CulinaryTours } from "@/components/CulinaryTours";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { PromoSection } from "@/components/PromoSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyChooseUs />
      <ExploreGrid />
      <GettingHerePreview />
      <CuratedEscapes />
      <CulinaryTours />
      <HowItWorks />
      <Testimonials />
      <PromoSection />
      <FAQ />
      <Footer />
    </div>
  );
}
