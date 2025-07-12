import NewsHeader from "@/components/NewsHeader";
import CategoryNav from "@/components/CategoryNav";
import HeroSection from "@/components/HeroSection";
import NewsGrid from "@/components/NewsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />
      <CategoryNav />
      <HeroSection />
      <NewsGrid />
    </div>
  );
};

export default Index;
