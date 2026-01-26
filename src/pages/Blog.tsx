import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import {
  blogPosts,
  categories,
  getFeaturedPost,
  getPostsByCategory,
  searchPosts,
} from "@/lib/blog-data";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = getFeaturedPost();

  const filteredPosts = useMemo(() => {
    let posts = getPostsByCategory(selectedCategory);
    if (searchQuery.trim()) {
      posts = searchPosts(searchQuery).filter(
        (post) =>
          selectedCategory === "All categories" ||
          post.category === selectedCategory
      );
    }
    // Exclude featured post from main grid
    return posts.filter((post) => !post.featured);
  }, [selectedCategory, searchQuery]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Clean gradient background */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Good reads for great
              <br />
              property operators
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Everything we know about staying ahead of issues, guests, and the
              market.
            </p>
          </AnimatedSection>

          {/* Featured Post */}
          {featuredPost && (
            <AnimatedSection animation="fade-up" delay={0.1}>
              <div className="relative bg-foreground rounded-2xl overflow-hidden max-w-5xl mx-auto shadow-xl">
                <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg font-medium z-10">
                  Featured
                </div>
              <div className="grid md:grid-cols-2 gap-0">
                  <Link to={`/blog/${featuredPost.slug}`} className="block relative">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Read Time Badge on Featured */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime} min read</span>
                    </div>
                  </Link>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block border border-primary text-primary text-sm px-4 py-1.5 rounded-full mb-4 w-fit font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-6 text-white/60 text-sm mb-4">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.date)}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime} min read
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/70 mb-6 line-clamp-3 font-light">
                      {featuredPost.excerpt}
                    </p>
                    <Button
                      asChild
                      className="w-fit bg-primary hover:bg-primary/90 text-white"
                    >
                      <Link to={`/blog/${featuredPost.slug}`}>
                        Read more
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
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
          {/* Section Title */}
          <AnimatedSection animation="fade-up" className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Latest Articles
            </h2>
          </AnimatedSection>

          {/* Categories */}
          <AnimatedSection
            animation="fade-up"
            delay={0.1}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((category) => (
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
                placeholder="Search articles..."
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
                  <Link to={`/blog/${post.slug}`} className="block mb-5">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Read Time Badge */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-foreground/80 backdrop-blur-sm text-background text-xs font-medium px-2.5 py-1.5 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime} min</span>
                      </div>
                    </div>
                  </Link>

                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight tracking-tight group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 font-light leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                  >
                    Read more
                  </Link>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No articles found matching your criteria.
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
