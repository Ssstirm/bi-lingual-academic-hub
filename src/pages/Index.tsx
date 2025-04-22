
import { Navbar } from "@/components/Navbar";
import { MainContent } from "@/components/MainContent";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <MainContent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
