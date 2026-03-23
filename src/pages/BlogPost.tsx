import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPostBySlug, blogPosts } from "@/lib/blog-data";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

const BlogPost = () => {
  const { t, lang } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug, lang) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(t('blog.dateLocale'), {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
            <LocalizedLink
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('blogPost.backToBlog')}
            </LocalizedLink>

            <span className="block w-fit border border-primary text-primary text-sm px-4 py-1.5 rounded-full mb-6 font-medium">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2 font-medium">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4" />
                {t('blog.readTime', { min: String(post.readTime) })}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="flex items-center gap-2 font-medium"
              >
                <Share2 className="w-4 h-4" />
                {t('blogPost.share')}
              </Button>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 mb-8 font-light">
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
            <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
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
            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-p:font-light prose-p:leading-relaxed prose-a:text-primary prose-strong:text-foreground prose-li:text-muted-foreground prose-li:font-light">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-12 mb-6 tracking-tight">$1</h2>')
                    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-8 mb-4 tracking-tight">$1</h3>')
                    .replace(/^#### (.+)$/gm, '<h4 class="text-lg font-semibold mt-6 mb-3 tracking-tight">$1</h4>')
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/^- (.+)$/gm, '<li class="ml-6 list-disc font-light">$1</li>')
                    .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-6 list-decimal font-light">$2</li>')
                    .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
                    .replace(/\[vc_[^\]]*\]/g, '')
                    .replace(/\[\/vc_[^\]]*\]/g, '')
                    .replace(/\[caption[^\]]*\]/g, '')
                    .replace(/\[\/caption\]/g, '')
                    .replace(/\[[a-z_]+[^\]]*\]/g, '')
                    .replace(/https?:\/\/new\.roomonitor\.com/g, 'https://roomonitor.com')
                    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:opacity-80">$1</a>')
                    .replace(/\n\n/g, '</p><p class="mb-6 leading-relaxed font-light">')
                    .replace(/\|(.+)\|/g, (match) => {
                      const cells = match.split('|').filter(Boolean);
                      return `<tr>${cells.map(cell => `<td class="border border-muted px-4 py-2">${cell.trim()}</td>`).join('')}</tr>`;
                    })
                }}
              />
            </article>

            {/* CTA Button */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="bg-muted/50 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                  {t('blogPost.readyTitle')}
                </h3>
                <p className="text-muted-foreground mb-6 font-light">
                  {t('blogPost.readyDescription')}
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <LocalizedLink to="/contact">
                    {t('blogPost.contact')}
                  </LocalizedLink>
                </Button>
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
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {t('blog.relatedArticles')}
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
                    <LocalizedLink
                      to={`/blog/${relatedPost.slug}`}
                      className="block mb-4"
                    >
                      <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </LocalizedLink>

                    <span className="inline-block border border-primary/50 text-primary text-xs px-3 py-1 rounded-full mb-3 font-medium">
                      {relatedPost.category}
                    </span>

                    <h3 className="text-lg font-bold text-foreground mb-2 leading-tight tracking-tight group-hover:text-primary transition-colors line-clamp-2">
                      <LocalizedLink to={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </LocalizedLink>
                    </h3>

                    <div className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {t('blog.readTimeShort', { min: String(relatedPost.readTime) })}
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
