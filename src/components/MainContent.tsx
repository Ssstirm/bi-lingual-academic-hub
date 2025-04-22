
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  BookOpen, 
  Award, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin,
  Briefcase 
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

      {/* About Me Section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <User className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">About Me</h2>
          </div>
          <div className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              作为一名[领域]研究者，我专注于[具体研究方向]。我的研究旨在[研究目标]，
              通过[方法/途径]来解决[具体问题]。在过去的研究中，我成功[重要成果]，
              这些工作为[领域]带来了新的见解。
            </p>
            <p className="text-muted-foreground">
              目前，我正在探索[新研究方向]，期望能够[研究愿景]。我热衷于与其他研究者
              合作，共同推动[领域]的发展。
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Education Card */}
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

        {/* Right Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Projects Section */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Featured Projects</h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/50 pl-3">
                  <h3 className="font-medium">项目一：[项目名称]</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    [简要描述项目的目标和影响。讨论使用的方法和取得的成果。]
                  </p>
                </div>
                <div className="border-l-2 border-primary/50 pl-3">
                  <h3 className="font-medium">项目二：[项目名称]</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    [描述项目的创新点和应用场景。分享项目过程中的关键发现。]
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Publications Section */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">{t("publications.title")}</h2>
              </div>
              <div className="space-y-3">
                {[1, 2].map((index) => (
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
