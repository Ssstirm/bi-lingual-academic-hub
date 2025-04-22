
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="py-4 px-4">
      <div className="container">
        <p className="text-sm text-center text-muted-foreground">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
