
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ResearchSection } from "@/components/ResearchSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4">
          <HeroSection />
          <div className="space-y-12">
            <AboutSection />
            <ResearchSection />
            <PublicationsSection />
            <ContactSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
