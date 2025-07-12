import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Eye, Share2 } from "lucide-react";
import heroImage from "@/assets/hero-news.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Featured News"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <Badge className="mb-4 bg-news-breaking text-white border-0">
            Breaking News
          </Badge>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Global Tech Summit Announces Revolutionary AI Breakthrough
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Industry leaders reveal groundbreaking artificial intelligence technology that could reshape how we interact with digital systems across all sectors.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-8 text-white/80">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">2 hours ago</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span className="text-sm">2.3K views</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">By Sarah Johnson</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-feature">
              Read Full Story
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;