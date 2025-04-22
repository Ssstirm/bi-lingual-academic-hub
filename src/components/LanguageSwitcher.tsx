
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "cn" : "en");
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-sm"
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">{language === "en" ? "中文" : "English"}</span>
      <span className="sm:hidden">{language === "en" ? "CN" : "EN"}</span>
    </Button>
  );
}
