
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { t } = useLanguage();
  
  const navItems = [
    { key: "nav.home", href: "#home" },
    { key: "nav.about", href: "#about" },
    { key: "nav.research", href: "#research" },
    { key: "nav.publications", href: "#publications" },
    { key: "nav.contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-semibold">
          <span className="hidden sm:inline-block">Academic Homepage</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <a 
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          
          {/* Mobile menu (can be expanded in the future) */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
