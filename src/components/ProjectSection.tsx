
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

export function ProjectSection() {
  const { t } = useLanguage();

  const projects = [
    {
      key: "projects.project1",
      titleKey: "projects.project1.title",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2Z"/><rect x="7" y="13" width="2" height="2"/><rect x="15" y="13" width="2" height="2"/></svg>
      ),
      descriptionKey: "projects.project1.description"
    },
    {
      key: "projects.project2",
      titleKey: "projects.project2.title",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
      ),
      descriptionKey: "projects.project2.description"
    },
    {
      key: "projects.project3",
      titleKey: "projects.project3.title",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><line x1="2" x2="22" y1="20" y2="20"/></svg>
      ),
      descriptionKey: "projects.project3.description"
    }
  ];

  return (
    <section id="projects" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          {t("projects.title")}
        </h2>
        
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          {t("projects.description")}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  {t(project.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {t(project.descriptionKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
