import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PublicationsSection() {
  const { t } = useLanguage();

  const journalArticles = [
    {
      title: "Title of Journal Article 1",
      authors: "Your Name, Co-author A, Co-author B",
      journal: "Journal Name",
      year: "20XX",
      doi: "10.XXXX/XXXXX",
      url: "#"
    },
    {
      title: "Title of Journal Article 2",
      authors: "Your Name, Co-author C",
      journal: "Journal Name",
      year: "20XX",
      doi: "10.XXXX/XXXXX",
      url: "#"
    }
  ];

  const conferenceProceedings = [
    {
      title: "Title of Conference Paper 1",
      authors: "Your Name, Co-author D",
      conference: "Conference Name",
      location: "Location",
      year: "20XX",
      url: "#"
    },
    {
      title: "Title of Conference Paper 2",
      authors: "Your Name, Co-author E, Co-author F",
      conference: "Conference Name",
      location: "Location",
      year: "20XX",
      url: "#"
    }
  ];

  const books = [
    {
      title: "Title of Book or Chapter",
      authors: "Your Name, Co-author G",
      publisher: "Publisher Name",
      year: "20XX",
      isbn: "978-X-XX-XXXXXX-X",
      url: "#"
    }
  ];

  return (
    <section id="publications" className="py-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        {t("publications.title")}
      </h2>
      
      <Tabs defaultValue="journal" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="journal">{t("publications.journal")}</TabsTrigger>
          <TabsTrigger value="conference">{t("publications.conference")}</TabsTrigger>
          <TabsTrigger value="book">{t("publications.book")}</TabsTrigger>
        </TabsList>
          
        <TabsContent value="journal">
          <div className="space-y-4">
            {journalArticles.map((article, index) => (
              <PublicationCard key={index} publication={article} type="journal" />
            ))}
          </div>
        </TabsContent>
          
        <TabsContent value="conference">
          <div className="space-y-4">
            {conferenceProceedings.map((paper, index) => (
              <PublicationCard key={index} publication={paper} type="conference" />
            ))}
          </div>
        </TabsContent>
          
        <TabsContent value="book">
          <div className="space-y-4">
            {books.map((book, index) => (
              <PublicationCard key={index} publication={book} type="book" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

interface Publication {
  title: string;
  authors: string;
  journal?: string;
  conference?: string;
  location?: string;
  publisher?: string;
  year: string;
  doi?: string;
  isbn?: string;
  url: string;
}

interface PublicationCardProps {
  publication: Publication;
  type: "journal" | "conference" | "book";
}

function PublicationCard({ publication, type }: PublicationCardProps) {
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
          {type === "journal" && (
            <p>
              <span className="font-medium">{publication.journal}</span>, {publication.year}
              {publication.doi && <span> | DOI: {publication.doi}</span>}
            </p>
          )}
          
          {type === "conference" && (
            <p>
              <span className="font-medium">{publication.conference}</span>, {publication.location}, {publication.year}
            </p>
          )}
          
          {type === "book" && (
            <p>
              <span className="font-medium">{publication.publisher}</span>, {publication.year}
              {publication.isbn && <span> | ISBN: {publication.isbn}</span>}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
