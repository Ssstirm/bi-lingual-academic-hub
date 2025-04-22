
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  const { t } = useLanguage();

  const educationItems = [
    {
      year: "20XX - 20XX",
      degree: "Ph.D. in [Field]",
      institution: "[University Name]",
    },
    {
      year: "20XX - 20XX",
      degree: "M.Sc. in [Field]",
      institution: "[University Name]",
    },
    {
      year: "20XX - 20XX",
      degree: "B.Sc. in [Field]",
      institution: "[University Name]",
    }
  ];

  const experienceItems = [
    {
      year: "20XX - Present",
      position: "[Current Position]",
      institution: "[Current Institution]",
    },
    {
      year: "20XX - 20XX",
      position: "[Previous Position]",
      institution: "[Previous Institution]",
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("about.title")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="aspect-square rounded-xl overflow-hidden bg-muted">
              {/* Placeholder for profile image */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <p className="text-lg mb-4">
              {t("about.bio")}
            </p>
            <p className="text-lg mb-6">
              {t("about.currentPosition")}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{t("about.education")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {educationItems.map((item, index) => (
                      <li key={index} className="border-l-2 border-primary/50 pl-4 py-1">
                        <p className="text-sm text-muted-foreground">{item.year}</p>
                        <p className="font-medium">{item.degree}</p>
                        <p className="text-sm">{item.institution}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{t("about.experience")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {experienceItems.map((item, index) => (
                      <li key={index} className="border-l-2 border-primary/50 pl-4 py-1">
                        <p className="text-sm text-muted-foreground">{item.year}</p>
                        <p className="font-medium">{item.position}</p>
                        <p className="text-sm">{item.institution}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
