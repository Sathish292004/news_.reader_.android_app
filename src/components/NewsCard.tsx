import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Eye, Bookmark, Share2 } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  timeAgo: string;
  views: string;
  featured?: boolean;
}

const NewsCard = ({ 
  title, 
  excerpt, 
  image, 
  category, 
  author, 
  timeAgo, 
  views, 
  featured = false 
}: NewsCardProps) => {
  return (
    <Card className={`group overflow-hidden shadow-card hover:shadow-feature transition-all duration-300 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className={`relative ${featured ? 'h-64 md:h-80' : 'h-48'}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur text-foreground">
            {category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="icon" className="bg-background/90 backdrop-blur hover:bg-background">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className={`font-heading font-semibold line-clamp-2 mb-3 group-hover:text-primary transition-colors ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          {title}
        </h3>
        
        <p className={`text-muted-foreground line-clamp-3 mb-4 ${featured ? 'text-base' : 'text-sm'}`}>
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="font-medium text-foreground">{author}</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{timeAgo}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{views}</span>
            </div>
          </div>
          
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Share2 className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;