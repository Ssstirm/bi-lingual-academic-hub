
import { useLanguage } from "@/contexts/LanguageContext";

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
    <section id="home" className="py-16 px-4 sm:px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left column: Profile and Experience */}
          <div className="md:col-span-1 space-y-8">
            <div className="aspect-square rounded-xl overflow-hidden bg-muted mb-6">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{t("about.experience")}</h3>
              <ul className="space-y-3">
                {experienceItems.map((item, index) => (
                  <li key={index} className="border-l-2 border-primary/50 pl-4 py-1">
                    <p className="text-sm text-muted-foreground">{item.year}</p>
                    <p className="font-medium">{item.position}</p>
                    <p className="text-sm">{item.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column: Introduction and Research Interests */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              <div>
                <p className="text-lg text-muted-foreground mb-2">{t("hero.greeting")}</p>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    Academic Name
                  </span>
                </h1>
                <h2 className="text-2xl font-semibold mb-6">{t("hero.title")}</h2>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg mb-4">{t("about.bio")}</p>
                <p className="text-lg mb-6">{t("about.currentPosition")}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Research Interests</h3>
                <ul className="space-y-2">
                  {researchInterests.map((interest, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <p className="text-muted-foreground">{interest}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects"
                  className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {t("nav.projects")}
                </a>
                <a 
                  href="#publications"
                  className="px-5 py-2.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  {t("nav.publications")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
