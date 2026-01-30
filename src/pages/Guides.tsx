import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  Search,
  Rocket,
  Wrench,
  Settings,
  Target,
  HelpCircle,
  Clock,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { guideCategories, searchGuides, type Guide, type GuideCategory } from "@/lib/guides-data";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Wrench,
  Settings,
  Target,
  HelpCircle,
};

const typeColors: Record<string, string> = {
  'Setup': 'bg-blue-100 text-blue-700 border-blue-200',
  'Installation': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'How-to': 'bg-purple-100 text-purple-700 border-purple-200',
  'FAQ': 'bg-amber-100 text-amber-700 border-amber-200',
  'Best Practice': 'bg-teal-100 text-teal-700 border-teal-200',
};

const difficultyColors: Record<string, string> = {
  'Beginner': 'text-emerald-600',
  'Intermediate': 'text-amber-600',
  'Advanced': 'text-rose-600',
};

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link to={guide.href} className="block group">
      <Card className="h-full border border-border/60 bg-card hover:border-primary/30 hover:shadow-soft transition-all duration-300 group-hover:-translate-y-0.5">
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <Badge 
              variant="outline" 
              className={`text-xs font-medium px-2 py-0.5 ${typeColors[guide.type] || 'bg-muted text-muted-foreground'}`}
            >
              {guide.type}
            </Badge>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
              <Clock className="w-3.5 h-3.5" />
              <span>{guide.readTime}</span>
            </div>
          </div>
          
          <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {guide.title}
          </h3>
          
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
            {guide.description}
          </p>
          
          <div className="flex items-center justify-between">
            {guide.difficulty && (
              <span className={`text-xs font-medium ${difficultyColors[guide.difficulty]}`}>
                {guide.difficulty}
              </span>
            )}
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all ml-auto" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function CategorySection({ category }: { category: GuideCategory }) {
  const Icon = iconMap[category.icon] || BookOpen;
  
  return (
    <AnimatedSection className="mb-12 last:mb-0">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">{category.title}</h2>
          <p className="text-sm text-muted-foreground">{category.description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.guides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </AnimatedSection>
  );
}

function SearchResults({ guides, query }: { guides: Guide[]; query: string }) {
  if (guides.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
          <Search className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">No guides found</h3>
        <p className="text-muted-foreground">
          No results for "{query}". Try a different search term.
        </p>
      </div>
    );
  }
  
  return (
    <AnimatedSection>
      <div className="flex items-center gap-2 mb-6">
        <Search className="w-5 h-5 text-muted-foreground" />
        <p className="text-muted-foreground">
          {guides.length} result{guides.length !== 1 ? 's' : ''} for "{query}"
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default function Guides() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    return searchGuides(searchQuery);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container max-w-5xl mx-auto px-4">
            <AnimatedSection className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                <span>Documentation Hub</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
                Guides & Documentation
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Step-by-step guides to install, configure, and get the most out of the platform
              </p>
            </AnimatedSection>
            
            {/* Search Bar */}
            <AnimatedSection delay={0.1} className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-12 text-base bg-card border-border/60 shadow-soft focus:border-primary/40 rounded-xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Category Quick Links */}
        {!searchQuery && (
          <section className="py-8 border-b border-border/40">
            <div className="container max-w-5xl mx-auto px-4">
              <AnimatedSection delay={0.15}>
                <div className="flex flex-wrap justify-center gap-3">
                  {guideCategories.map((category) => {
                    const Icon = iconMap[category.icon] || BookOpen;
                    return (
                      <a
                        key={category.id}
                        href={`#${category.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/60 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-muted/50 transition-all"
                      >
                        <Icon className="w-4 h-4" />
                        {category.title}
                      </a>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}
        
        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container max-w-5xl mx-auto px-4">
            {searchResults ? (
              <SearchResults guides={searchResults} query={searchQuery} />
            ) : (
              guideCategories.map((category) => (
                <div key={category.id} id={category.id}>
                  <CategorySection category={category} />
                </div>
              ))
            )}
          </div>
        </section>
        
        {/* Help CTA */}
        <section className="py-12 md:py-16">
          <div className="container max-w-5xl mx-auto px-4">
            <AnimatedSection>
              <div className="bg-muted/40 border border-border/60 rounded-2xl p-8 md:p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <HelpCircle className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                  Can't find what you're looking for?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Our support team is here to help. Reach out and we'll get back to you as soon as possible.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Support
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
