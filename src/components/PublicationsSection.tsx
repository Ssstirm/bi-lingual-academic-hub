
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export function PublicationsSection() {
  const { t } = useLanguage();

  const publications = [
    {
      titleKey: "publications.pub1.title",
      authorsKey: "publications.pub1.authors",
      venueKey: "publications.pub1.venue",
      yearKey: "publications.pub1.year",
      doi: "10.1234/jair.2023.123",
      url: "#"
    },
    {
      titleKey: "publications.pub2.title",
      authorsKey: "publications.pub2.authors",
      venueKey: "publications.pub2.venue",
      yearKey: "publications.pub2.year",
      doi: "10.5678/icds.2022.456",
      url: "#"
    },
    {
      titleKey: "publications.pub3.title",
      authorsKey: "publications.pub3.authors",
      venueKey: "publications.pub3.venue",
      yearKey: "publications.pub3.year",
      url: "#"
    }
  ];

  return (
    <section id="publications" className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t("publications.title")}
        </h2>
        
        <div className="space-y-4 max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <PublicationCard key={index} publication={publication} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="gap-2">
            <FileText size={18} />
            {t("publications.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}

interface Publication {
  titleKey: string;
  authorsKey: string;
  venueKey: string;
  yearKey: string;
  doi?: string;
  url: string;
}

interface PublicationCardProps {
  publication: Publication;
}

function PublicationCard({ publication }: PublicationCardProps) {
  const { t } = useLanguage();
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">
          <a href={publication.url} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
            {t(publication.titleKey)}
          </a>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">{t(publication.authorsKey)}</p>
        <div className="text-sm flex flex-wrap items-center gap-2">
          <span className="font-medium text-gray-800 dark:text-gray-200">{t(publication.venueKey)}</span>
          <span className="text-gray-500 dark:text-gray-500">•</span>
          <span>{t(publication.yearKey)}</span>
          {publication.doi && (
            <>
              <span className="text-gray-500 dark:text-gray-500">•</span>
              <span>DOI: <a href={`https://doi.org/${publication.doi}`} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{publication.doi}</a></span>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
