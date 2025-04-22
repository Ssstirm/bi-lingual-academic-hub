
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

export function PublicationsSection() {
  const { t } = useLanguage();

  const publications = [
    {
      title: "Title of Publication 1",
      authors: "Your Name, Co-author A, Co-author B",
      venue: "Journal/Conference Name",
      year: "20XX",
      doi: "10.XXXX/XXXXX",
      url: "#"
    },
    {
      title: "Title of Publication 2",
      authors: "Your Name, Co-author C",
      venue: "Journal/Conference Name",
      year: "20XX",
      doi: "10.XXXX/XXXXX",
      url: "#"
    },
    {
      title: "Title of Publication 3",
      authors: "Your Name, Co-author D, Co-author E",
      venue: "Journal/Conference Name",
      year: "20XX",
      url: "#"
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("publications.title")}
        </h2>
        
        <div className="space-y-4">
          {publications.map((publication, index) => (
            <PublicationCard key={index} publication={publication} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi?: string;
  url: string;
}

interface PublicationCardProps {
  publication: Publication;
}

function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">
          <a href={publication.url} className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
            {publication.title}
          </a>
        </h3>
        <p className="text-muted-foreground mb-3">{publication.authors}</p>
        <div className="text-sm">
          <p>
            <span className="font-medium">{publication.venue}</span>, {publication.year}
            {publication.doi && <span> | DOI: {publication.doi}</span>}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

