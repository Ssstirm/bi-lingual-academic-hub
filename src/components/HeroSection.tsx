
import { useLanguage } from "@/contexts/LanguageContext";
import { User, GraduationCap } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  const experienceItems = [
    {
      year: "20XX - 20XX",
      position: "Position Title",
      institution: "[Institution Name]",
    },
    {
      year: "20XX - 20XX",
      position: "Position Title",
      institution: "[Institution Name]",
    },
    {
      year: "20XX - 20XX",
      position: "Position Title",
      institution: "[Institution Name]",
    }
  ];

  const researchInterests = [
    "Research Interest 1: Brief description of the research area",
    "Research Interest 2: Brief description of the research area",
    "Research Interest 3: Brief description of the research area"
  ];

  return (
    <section id="home" className="py-12 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {/* Left column: Profile and Experience */}
          <div className="md:col-span-1 space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-muted mb-4">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                <User size={48} className="text-blue-600" />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <GraduationCap size={18} className="text-primary" />
                {t("about.experience")}
              </h3>
              <ul className="space-y-2">
                {experienceItems.map((item, index) => (
                  <li key={index} className="border-l-2 border-primary/50 pl-3 py-1">
                    <p className="text-xs text-muted-foreground">{item.year}</p>
                    <p className="text-sm font-medium">{item.position}</p>
                    <p className="text-xs">{item.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column: Introduction and Research Interests */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <p className="text-base text-muted-foreground mb-2">{t("hero.greeting")}</p>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Academic Name
                </span>
              </h1>
              <h2 className="text-xl font-semibold mb-3">{t("hero.title")}</h2>
            </div>

            <div className="prose prose-sm max-w-none">
              <p className="text-base mb-3">{t("about.bio")}</p>
              <p className="text-base mb-4">{t("about.currentPosition")}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-semibold">Research Interests</h3>
              <ul className="space-y-1">
                {researchInterests.map((interest, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <p className="text-sm text-muted-foreground">{interest}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <a 
                href="#projects"
                className="px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {t("nav.projects")}
              </a>
              <a 
                href="#publications"
                className="px-4 py-2 text-sm rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                {t("nav.publications")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
