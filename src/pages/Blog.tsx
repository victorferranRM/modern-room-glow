import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import {
  getCategoriesForLang,
  getBlogPostsByLang,
  getFeaturedPost,
  getPostsByCategory,
  searchPosts,
} from "@/lib/blog-data";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

const Blog = () => {
  const { t, lang } = useTranslation();

  const localizedCategories = getCategoriesForLang(lang).length > 0
    ? getCategoriesForLang(lang)
    : getCategoriesForLang('es');

  const [selectedCategory, setSelectedCategory] = useState(localizedCategories[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = getFeaturedPost(lang) ?? getFeaturedPost('es');

  const filteredPosts = useMemo(() => {
    const allCategoriesLabel = localizedCategories[0];

    const currentLangPosts = getBlogPostsByLang(lang);
    const effectiveLang = currentLangPosts.length > 0 ? lang : 'es';

    let posts = selectedCategory === allCategoriesLabel
      ? (currentLangPosts.length > 0 ? currentLangPosts : getBlogPostsByLang('es'))
      : getPostsByCategory(selectedCategory, effectiveLang);
    if (searchQuery.trim()) {
      posts = searchPosts(searchQuery, effectiveLang).filter(
        (post) =>
          selectedCategory === allCategoriesLabel ||
          post.category === selectedCategory
      );
    }
    return posts.filter((post) => !post.featured);
  }, [selectedCategory, searchQuery, lang, localizedCategories]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(t('blog.dateLocale'), {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance leading-tight">
              {t('blog.heroTitle')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              {t('blog.heroSubtitle')}
            </p>
          </AnimatedSection>

          {/* Featured Post */}
          {featuredPost && (
            <AnimatedSection animation="fade-up" delay={0.1}>
              <div className="relative bg-white rounded-2xl overflow-hidden max-w-5xl mx-auto shadow-lg border border-border/40">
              <div className="grid md:grid-cols-2 gap-0">
                  <LocalizedLink to={`/blog/${featuredPost.slug}`} className="block relative">
                    <div className="aspect-[4/3] overflow-hidden bg-muted h-full">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-foreground/70 backdrop-blur-sm text-background text-sm font-medium px-3 py-1.5 rounded-full">
                      <Clock className="w-4 h-4" />
                      <span>{t('blog.readTime', { min: String(featuredPost.readTime) })}</span>
                    </div>
                  </LocalizedLink>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block border border-primary text-primary text-sm px-4 py-1.5 rounded-full mb-4 w-fit font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-6 text-muted-foreground text-sm mb-4">
                      <span className="flex items-center gap-2 font-medium">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.date)}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight tracking-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 line-clamp-3 font-light">
                      {featuredPost.excerpt}
                    </p>
                    <Button
                      asChild
                      className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <LocalizedLink to={`/blog/${featuredPost.slug}`}>
                        {t('blog.readMore')}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </LocalizedLink>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Blog Listing Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {t('blog.latestArticles')}
            </h2>
          </AnimatedSection>

          {/* Categories */}
          <AnimatedSection
            animation="fade-up"
            delay={0.1}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {localizedCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-transparent border border-muted-foreground/30 text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </AnimatedSection>

          {/* Search Bar */}
          <AnimatedSection
            animation="fade-up"
            delay={0.2}
            className="max-w-md mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t('blog.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 rounded-full border-muted-foreground/30 focus:border-primary"
              />
            </div>
          </AnimatedSection>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <AnimatedSection
                key={post.id}
                animation="fade-up"
                delay={0.1 * (index % 3)}
              >
                <article className="group">
                  <LocalizedLink to={`/blog/${post.slug}`} className="block mb-5">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-foreground/80 backdrop-blur-sm text-background text-xs font-medium px-2.5 py-1.5 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{t('blog.readTimeShort', { min: String(post.readTime) })}</span>
                      </div>
                    </div>
                  </LocalizedLink>

                  <span className="flex items-center gap-2 text-muted-foreground text-xs font-medium mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.date)}
                  </span>

                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight tracking-tight group-hover:text-primary transition-colors">
                    <LocalizedLink to={`/blog/${post.slug}`}>{post.title}</LocalizedLink>
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 font-light leading-relaxed">
                    {post.excerpt}
                  </p>

                  <LocalizedLink
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                  >
                    {t('blog.readMore')}
                  </LocalizedLink>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                {t('blog.noResults')}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
