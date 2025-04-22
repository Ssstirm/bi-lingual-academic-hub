
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navbar() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
