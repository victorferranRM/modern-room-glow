import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Calendar, Clock, ArrowLeft, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPostBySlug, blogPosts } from "@/lib/blog-data";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category */}
            <span className="inline-block border border-primary text-primary text-sm px-4 py-1.5 rounded-full mb-6">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 mb-8">
              {post.excerpt}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <AnimatedSection
            animation="fade-up"
            delay={0.1}
            className="max-w-5xl mx-auto"
          >
            <div className="aspect-[21/9] rounded-2xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection
            animation="fade-up"
            delay={0.2}
            className="max-w-3xl mx-auto"
          >
            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-li:text-muted-foreground">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-serif mt-12 mb-6">$1</h2>')
                    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
                    .replace(/^#### (.+)$/gm, '<h4 class="text-lg font-semibold mt-6 mb-3">$1</h4>')
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/^- (.+)$/gm, '<li class="ml-6 list-disc">$1</li>')
                    .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-6 list-decimal">$2</li>')
                    .replace(/\n\n/g, '</p><p class="mb-6 leading-relaxed">')
                    .replace(/\|(.+)\|/g, (match) => {
                      const cells = match.split('|').filter(Boolean);
                      return `<tr>${cells.map(cell => `<td class="border border-muted px-4 py-2">${cell.trim()}</td>`).join('')}</tr>`;
                    })
                }}
              />
            </article>
          </AnimatedSection>
        </div>
      </section>

      {/* Author Box */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection
            animation="fade-up"
            className="max-w-3xl mx-auto"
          >
            <div className="bg-muted/50 rounded-2xl p-8 flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <User className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {post.author}
                </h3>
                <p className="text-muted-foreground">
                  Contributing writer specializing in property management,
                  vacation rentals, and hospitality technology.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <h2 className="text-3xl font-serif text-foreground">
                Related Articles
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <AnimatedSection
                  key={relatedPost.id}
                  animation="fade-up"
                  delay={0.1 * index}
                >
                  <article className="group">
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="block mb-4"
                    >
                      <div className="aspect-[16/10] rounded-xl overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>

                    <span className="inline-block border border-primary/50 text-primary text-xs px-3 py-1 rounded-full mb-3">
                      {relatedPost.category}
                    </span>

                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      <Link to={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>

                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {relatedPost.readTime} min
                      </span>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
