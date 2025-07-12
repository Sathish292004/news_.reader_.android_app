import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "All", active: true, count: null },
  { name: "Breaking", active: false, count: 5, color: "bg-news-breaking" },
  { name: "Technology", active: false, count: 12, color: "bg-primary" },
  { name: "Business", active: false, count: 8, color: "bg-accent" },
  { name: "Sports", active: false, count: 15, color: "bg-news-trending" },
  { name: "Health", active: false, count: 6, color: "bg-secondary-foreground" },
  { name: "Science", active: false, count: 4, color: "bg-primary-light" },
];

const CategoryNav = () => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <div key={category.name} className="flex-shrink-0">
              {category.active ? (
                <Badge variant="default" className="px-4 py-2 text-sm font-medium">
                  {category.name}
                  {category.count && (
                    <span className="ml-2 bg-primary-foreground text-primary rounded-full px-2 py-0.5 text-xs">
                      {category.count}
                    </span>
                  )}
                </Badge>
              ) : (
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium hover:bg-muted transition-colors cursor-pointer">
                  {category.name}
                  {category.count && (
                    <span className="ml-2 bg-news-category text-background rounded-full px-2 py-0.5 text-xs">
                      {category.count}
                    </span>
                  )}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;