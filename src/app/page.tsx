import { AboutSection } from "@/components/home/AboutSection";
import { CollectionYardSection } from "@/components/home/CollectionYardSection";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";
import { EmploymentSection } from "@/components/home/EmploymentSection";
import { FuneralSection } from "@/components/home/FuneralSection";
import { HeroSection } from "@/components/home/HeroSection";
import { NoticesSection } from "@/components/home/NoticesSection";
import { PublicDocumentsSection } from "@/components/home/PublicDocumentsSection";
import { QuickAccessSection } from "@/components/home/QuickAccessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WasteFeatureSection } from "@/components/home/WasteFeatureSection";

export default function HomePage() {
  return (
    <main id="main-content" className="flex-1">
      <HeroSection />
      <QuickAccessSection />
      <NoticesSection />
      <AboutSection />
      <ServicesSection />
      <WasteFeatureSection />
      <CollectionYardSection />
      <FuneralSection />
      <PublicDocumentsSection />
      <EmploymentSection />
      <ContactCtaSection />
    </main>
  );
}
