import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

export function ResearchSection() {
  const { t } = useLanguage();

  const researchInterests = [
    {
      key: "research.interest1",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
      ),
      description: "Description of research interest 1 goes here. Explain some key aspects and significance."
    },
    {
      key: "research.interest2",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
      ),
      description: "Description of research interest 2 goes here. Explain some key aspects and significance."
    },
    {
      key: "research.interest3",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.6.4-4.9-.3-1.2-.6-2-1.9-2.4-3.6.3-.2.5-.4.8-.6 1.2-.7 2.6-.9 4.2-.2z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-1.7.1-3.4.8-4.9 2z"/></svg>
      ),
      description: "Description of research interest 3 goes here. Explain some key aspects and significance."
    }
  ];

  return (
    <section id="research" className="py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          {t("research.title")}
        </h2>
        
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          {t("research.description")}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchInterests.map((interest, index) => (
            <Card key={index} className="overflow-hidden border border-border/50 transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  {t(interest.key)}
                </h3>
                <p className="text-muted-foreground text-center">
                  {interest.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
