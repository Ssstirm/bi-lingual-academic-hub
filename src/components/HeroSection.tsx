
import { useLanguage } from "@/contexts/LanguageContext";
import { User, BookOpen, GraduationCap, Briefcase, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { t } = useLanguage();

  const experienceItems = [
    {
      year: "experience.current",
      position: "experience.position1",
      institution: "experience.institution1",
    },
    {
      year: "experience.previous1",
      position: "experience.position2",
      institution: "experience.institution2",
    },
    {
      year: "experience.previous2",
      position: "experience.position3",
      institution: "experience.institution3",
    }
  ];

  const educationItems = [
    {
      year: "education.phd",
      degree: "education.phdDegree",
      institution: "education.phdInstitution",
    },
    {
      year: "education.masters",
      degree: "education.mastersDegree",
      institution: "education.mastersInstitution",
    }
  ];

  const researchInterests = [
    "research.ai",
    "research.data",
    "research.hci"
  ];

  return (
    <section id="home" className="py-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column: Profile */}
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-full flex items-center justify-center mb-4">
                  <User size={64} className="text-blue-600 dark:text-blue-400" />
                </div>
                
                <h1 className="text-2xl font-bold text-center mb-1">Academic Name</h1>
                <h2 className="text-lg text-center text-gray-600 dark:text-gray-400 mb-4">{t("hero.title")}</h2>
                
                <div className="flex justify-center space-x-3 mb-6">
                  <a href="#contact" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                    <Mail size={20} />
                  </a>
                  <a href="#publications" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                    <FileText size={20} />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                    <BookOpen size={20} />
                  </a>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <Button asChild className="w-full">
                    <a href="#projects">
                      {t("nav.projects")}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="#publications">
                      {t("nav.publications")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column: Bio, Experience, and Research Interests */}
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md h-full">
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">{t("nav.about")}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {t("hero.biography")}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t("hero.currentPosition")}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Experience */}
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                      <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                      {t("hero.experience")}
                    </h3>
                    <div className="space-y-3">
                      {experienceItems.map((item, index) => (
                        <div key={index} className="border-l-2 border-blue-600 dark:border-blue-400 pl-4 py-1">
                          <p className="text-sm text-gray-500 dark:text-gray-400">{t(item.year)}</p>
                          <p className="font-medium">{t(item.position)}</p>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{t(item.institution)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Education */}
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                      <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />
                      {t("hero.education")}
                    </h3>
                    <div className="space-y-3">
                      {educationItems.map((item, index) => (
                        <div key={index} className="border-l-2 border-blue-600 dark:border-blue-400 pl-4 py-1">
                          <p className="text-sm text-gray-500 dark:text-gray-400">{t(item.year)}</p>
                          <p className="font-medium">{t(item.degree)}</p>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{t(item.institution)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Research Interests */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                    <BookOpen size={20} className="text-blue-600 dark:text-blue-400" />
                    {t("hero.research")}
                  </h3>
                  <ul className="space-y-2">
                    {researchInterests.map((interest, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2"></div>
                        <p className="text-gray-700 dark:text-gray-300">{t(interest)}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
