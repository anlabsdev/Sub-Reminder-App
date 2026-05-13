import { AppPreviewGallery } from "@/components/AppPreviewGallery";
import { BenefitsSection } from "@/components/BenefitsSection";
import { DeveloperSection } from "@/components/DeveloperSection";
import { DownloadSection } from "@/components/DownloadSection";
import { FAQ } from "@/components/FAQ";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { VideoSection } from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollReveal>
          <ProblemSection />
        </ScrollReveal>
        <ScrollReveal>
          <FeaturesSection />
        </ScrollReveal>
        <ScrollReveal>
          <AppPreviewGallery />
        </ScrollReveal>
        <ScrollReveal>
          <VideoSection />
        </ScrollReveal>
        <ScrollReveal>
          <DownloadSection />
        </ScrollReveal>
        <ScrollReveal>
          <DeveloperSection />
        </ScrollReveal>
        <ScrollReveal>
          <BenefitsSection />
        </ScrollReveal>
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
