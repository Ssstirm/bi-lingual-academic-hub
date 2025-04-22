
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export function PublicationsSection() {
  const { t } = useLanguage();

  const publications = [
    {
      title: "Advancing Machine Learning Techniques for Natural Language Processing",
      authors: "Your Name, Co-author A, Co-author B",
      venue: "Journal of Artificial Intelligence Research",
      year: "2023",
      doi: "10.1234/jair.2023.123",
      url: "#"
    },
    {
      title: "Statistical Analysis of Big Data: Challenges and Opportunities",
      authors: "Your Name, Co-author C",
      venue: "International Conference on Data Science",
      year: "2022",
      doi: "10.5678/icds.2022.456",
      url: "#"
    },
    {
      title: "User Interface Design Principles for Academic Websites",
      authors: "Your Name, Co-author D, Co-author E",
      venue: "ACM Conference on Human Factors in Computing Systems",
      year: "2021",
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
            View All Publications
          </Button>
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
          <a href={publication.url} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
            {publication.title}
          </a>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">{publication.authors}</p>
        <div className="text-sm flex flex-wrap items-center gap-2">
          <span className="font-medium text-gray-800 dark:text-gray-200">{publication.venue}</span>
          <span className="text-gray-500 dark:text-gray-500">•</span>
          <span>{publication.year}</span>
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
