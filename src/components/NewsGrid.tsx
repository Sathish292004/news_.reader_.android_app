import NewsCard from "./NewsCard";
import techNews from "@/assets/tech-news.jpg";
import businessNews from "@/assets/business-news.jpg";
import sportsNews from "@/assets/sports-news.jpg";

const newsData = [
  {
    id: 1,
    title: "Revolutionary AI Chip Breaks Performance Records",
    excerpt: "A new semiconductor breakthrough promises to accelerate artificial intelligence computations by 10x while reducing power consumption significantly.",
    image: techNews,
    category: "Technology",
    author: "Alex Chen",
    timeAgo: "1 hour ago",
    views: "1.2K",
    featured: true,
  },
  {
    id: 2,
    title: "Market Surge as Tech Stocks Rally",
    excerpt: "Major technology companies see significant gains following positive earnings reports and increased investor confidence.",
    image: businessNews,
    category: "Business",
    author: "Maria Rodriguez",
    timeAgo: "3 hours ago",
    views: "890",
  },
  {
    id: 3,
    title: "Championship Finals Draw Record Viewership",
    excerpt: "The annual championship game attracts global audience with innovative broadcast technology and immersive viewing experience.",
    image: sportsNews,
    category: "Sports",
    author: "James Wilson",
    timeAgo: "4 hours ago",
    views: "2.1K",
  },
  {
    id: 4,
    title: "Breakthrough in Quantum Computing Research",
    excerpt: "Scientists achieve new milestone in quantum error correction, bringing practical quantum computers closer to reality.",
    image: techNews,
    category: "Technology",
    author: "Dr. Emily Zhang",
    timeAgo: "6 hours ago",
    views: "756",
  },
  {
    id: 5,
    title: "Sustainable Energy Investment Reaches New Heights",
    excerpt: "Global investment in renewable energy projects surpasses previous records as companies commit to carbon neutrality.",
    image: businessNews,
    category: "Business",
    author: "Michael Torres",
    timeAgo: "8 hours ago",
    views: "643",
  },
  {
    id: 6,
    title: "Olympic Training Center Adopts VR Technology",
    excerpt: "Athletes now use virtual reality systems for enhanced training experiences and performance analysis.",
    image: sportsNews,
    category: "Sports",
    author: "Lisa Park",
    timeAgo: "10 hours ago",
    views: "921",
  },
];

const NewsGrid = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold">Latest News</h2>
        <div className="text-sm text-muted-foreground">
          Updated 5 minutes ago
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
        {newsData.map((article, index) => (
          <div
            key={article.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <NewsCard {...article} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsGrid;