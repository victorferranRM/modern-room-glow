import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Clock } from "lucide-react";
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-0 w-64 h-64 opacity-20">
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-foreground rounded-full"
                style={{
                  left: `${(i % 10) * 24}px`,
                  top: `${Math.floor(i / 10) * 24}px`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))}
          </div>
          <div className="absolute top-20 right-0 w-64 h-64 opacity-20">
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-foreground rounded-full"
                style={{
                  right: `${(i % 10) * 24}px`,
                  top: `${Math.floor(i / 10) * 24}px`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
              Good reads for great
              <br />
              property operators
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything we know about staying ahead of issues, guests, and the
              market.
            </p>
          </AnimatedSection>

          {/* Featured Post */}
          {featuredPost && (
            <AnimatedSection animation="fade-up" delay={0.1}>
              <div className="relative bg-foreground rounded-2xl overflow-hidden max-w-5xl mx-auto">
                <div className="absolute top-6 left-6 bg-muted-foreground/30 text-background text-sm px-4 py-2 rounded-lg font-medium z-10">
                  Featured
                </div>
                <div className="grid md:grid-cols-2 gap-0">
                  <Link to={`/blog/${featuredPost.slug}`} className="block">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block border border-primary text-primary text-sm px-4 py-1.5 rounded-full mb-4 w-fit">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-6 text-muted-foreground text-sm mb-4">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.date)}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime} min read
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-background mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      By{" "}
                      <span className="text-background font-medium">
                        {featuredPost.author}
                      </span>{" "}
                      in{" "}
                      <span className="text-background">
                        {featuredPost.category}
                      </span>
                    </p>
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="text-background font-medium underline underline-offset-4 hover:text-primary transition-colors w-fit"
                    >
                      Read post
                    </Link>
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
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Blogs
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
                    ? "bg-foreground text-background"
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
                  <Link to={`/blog/${post.slug}`} className="block mb-4">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>

                  <span className="inline-block border border-primary/50 text-primary text-xs px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>

                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readTime} min read
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <p className="text-muted-foreground text-sm mb-3">
                    By{" "}
                    <span className="text-foreground font-medium">
                      {post.author}
                    </span>{" "}
                    in <span className="text-primary">{post.category}</span>
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors text-sm"
                  >
                    Read post
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
