
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="py-12 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-muted-foreground mb-2">{t("hero.greeting")}</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Academic Name
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">{t("hero.title")}</h2>
        <p className="text-lg text-muted-foreground mb-6">
          {t("hero.description")}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="#about"
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t("nav.about")}
          </a>
          <a 
            href="#research"
            className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            {t("nav.research")}
          </a>
        </div>
      </div>
    </section>
  );
}
