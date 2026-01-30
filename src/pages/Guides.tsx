import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Search, HelpCircle, ChevronRight, Bookmark } from "lucide-react";
import { guideCategories, searchGuides, getAllGuides, type Guide } from "@/lib/guides-data";
import { useGuideBookmarks } from "@/hooks/useGuideBookmarks";
import { GuideCard } from "@/components/guides/GuideCard";
import { GuideTOC } from "@/components/guides/GuideTOC";
import { CategorySection } from "@/components/guides/CategorySection";

function SearchResults({
  guides,
  query,
  isBookmarked,
  onToggleBookmark,
}: {
  guides: Guide[];
  query: string;
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
}) {
  if (guides.length === 0) {
    return (
      <div className="text-center py-12">
        <Search className="w-8 h-8 text-muted-foreground/50 mx-auto mb-3" />
        <p className="text-sm text-muted-foreground">
          No results for "{query}"
        </p>
      </div>
    );
  }

  return (
    <AnimatedSection>
      <p className="text-sm text-muted-foreground mb-4">
        {guides.length} result{guides.length !== 1 ? "s" : ""} for "{query}"
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {guides.map((guide) => (
          <GuideCard
            key={guide.id}
            guide={guide}
            isBookmarked={isBookmarked(guide.id)}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}

function BookmarkedGuides({
  bookmarks,
  isBookmarked,
  onToggleBookmark,
}: {
  bookmarks: string[];
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
}) {
  const allGuides = getAllGuides();
  const bookmarkedGuides = allGuides.filter((g) => bookmarks.includes(g.id));

  if (bookmarkedGuides.length === 0) {
    return (
      <div className="text-center py-12">
        <Bookmark className="w-8 h-8 text-muted-foreground/50 mx-auto mb-3" />
        <p className="text-sm text-muted-foreground">No saved guides yet</p>
        <p className="text-xs text-muted-foreground mt-1">
          Click the bookmark icon on any guide to save it
        </p>
      </div>
    );
  }

  return (
    <AnimatedSection>
      <div className="flex items-center gap-2 mb-4">
        <Bookmark className="w-4 h-4 text-muted-foreground" />
        <h2 className="text-base font-semibold text-foreground">Saved Guides</h2>
        <span className="text-xs text-muted-foreground">{bookmarkedGuides.length}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {bookmarkedGuides.map((guide) => (
          <GuideCard
            key={guide.id}
            guide={guide}
            isBookmarked={isBookmarked(guide.id)}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}

export default function Guides() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | undefined>();
  const { bookmarks, isBookmarked, toggleBookmark } = useGuideBookmarks();

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    return searchGuides(searchQuery);
  }, [searchQuery]);

  // Track active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const categories = guideCategories.map((c) => ({
        id: c.id,
        el: document.getElementById(c.id),
      }));

      for (const cat of categories) {
        if (cat.el) {
          const rect = cat.el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleBookmarks = () => {
    setShowBookmarksOnly(!showBookmarksOnly);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section className="py-10 md:py-12 border-b border-border/50">
          <div className="container max-w-6xl mx-auto px-4">
            <AnimatedSection className="max-w-2xl">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-2">
                Guides & Documentation
              </h1>
              <p className="text-muted-foreground">
                Step-by-step guides to install, configure, and get the most out of the platform
              </p>
            </AnimatedSection>

            {/* Search */}
            <AnimatedSection delay={0.05} className="mt-6 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search guides..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowBookmarksOnly(false);
                  }}
                  className="pl-9 h-10 bg-card border-border/60"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-8 md:py-10">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex gap-8">
              {/* Sidebar - Desktop only */}
              <aside className="hidden lg:block w-56 shrink-0">
                <GuideTOC
                  categories={guideCategories}
                  activeCategory={activeCategory}
                  bookmarkCount={bookmarks.length}
                  showBookmarksOnly={showBookmarksOnly}
                  onToggleBookmarks={handleToggleBookmarks}
                />
              </aside>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                {searchResults ? (
                  <SearchResults
                    guides={searchResults}
                    query={searchQuery}
                    isBookmarked={isBookmarked}
                    onToggleBookmark={toggleBookmark}
                  />
                ) : showBookmarksOnly ? (
                  <BookmarkedGuides
                    bookmarks={bookmarks}
                    isBookmarked={isBookmarked}
                    onToggleBookmark={toggleBookmark}
                  />
                ) : (
                  guideCategories.map((category) => (
                    <div key={category.id} id={category.id}>
                      <CategorySection
                        category={category}
                        isBookmarked={isBookmarked}
                        onToggleBookmark={toggleBookmark}
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Help CTA */}
        <section className="py-8 md:py-10">
          <div className="container max-w-6xl mx-auto px-4">
            <AnimatedSection>
              <div className="bg-muted/30 border border-border/50 rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-muted-foreground shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">
                        Can't find what you're looking for?
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Our support team is here to help
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors md:ml-auto"
                  >
                    Contact Support
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
