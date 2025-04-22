
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  BookOpen, 
  Award, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin 
} from "lucide-react";

export function MainContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Academic Name</h1>
        <p className="text-lg text-muted-foreground">{t("hero.title")}</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:email@example.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <Mail className="h-4 w-4" />
            <span>email@example.com</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <MapPin className="h-4 w-4" />
            <span>Location</span>
          </a>
        </div>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Grid Layout for Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Education */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">{t("about.education")}</h2>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Ph.D. in [Field]</p>
                  <p className="text-sm text-muted-foreground">[University], 20XX-Present</p>
                </div>
                <div>
                  <p className="font-medium">M.Sc. in [Field]</p>
                  <p className="text-sm text-muted-foreground">[University], 20XX-20XX</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">{t("contact.title")}</h2>
              </div>
              <div className="space-y-2 text-sm">
                <p>Department Name</p>
                <p>Institution Name</p>
                <p>City, Country</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column (spans 2 columns) */}
        <div className="md:col-span-2 space-y-6">
          {/* Research Interests */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">{t("research.title")}</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Research Interest 1</li>
                <li>Research Interest 2</li>
                <li>Research Interest 3</li>
              </ul>
            </CardContent>
          </Card>

          {/* Selected Publications */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">{t("publications.title")}</h2>
              </div>
              <div className="space-y-3">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="border-l-2 border-primary/50 pl-3">
                    <p className="font-medium">Publication Title {index}</p>
                    <p className="text-sm text-muted-foreground">Authors, Journal Name, 20XX</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
