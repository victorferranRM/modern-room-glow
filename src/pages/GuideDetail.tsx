import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  ChevronLeft,
  Clock,
  ChevronRight,
} from "lucide-react";
import { getAllGuides, guideCategories } from "@/lib/guides-data";
import { getGuideContent } from "@/lib/guide-content";
import { cn } from "@/lib/utils";

function CalloutBlock({ type, children }: { type: "tip" | "note" | "warning"; children: React.ReactNode }) {
  const colors = {
    tip: "border-l-[#8B9A7D]",
    note: "border-l-[#5C8A8A]", 
    warning: "border-l-amber-500",
  };
  
  const labels = {
    tip: "Tip:",
    note: "Note:",
    warning: "Warning:",
  };
  
  const labelColors = {
    tip: "text-[#8B9A7D]",
    note: "text-[#5C8A8A]",
    warning: "text-amber-600",
  };

  return (
    <div className={cn("border-l-4 pl-4 py-2 my-4", colors[type])}>
      <p className={cn("text-sm font-medium mb-1", labelColors[type])}>{labels[type]}</p>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

function MarkdownRenderer({ content }: { content: string }) {
  // Simple markdown parsing for headings, lists, tables, callouts, and code
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Callout blocks (> Tip: or > Note: or > Warning:)
    if (line.startsWith("> Tip:") || line.startsWith("> Note:") || line.startsWith("> Warning:")) {
      const calloutMatch = line.match(/^> (Tip|Note|Warning):\s*(.*)/i);
      if (calloutMatch) {
        const type = calloutMatch[1].toLowerCase() as "tip" | "note" | "warning";
        const calloutLines: string[] = [];
        
        // Get first line content
        if (calloutMatch[2]) {
          calloutLines.push(calloutMatch[2]);
        }
        i++;
        
        // Continue reading lines that start with > 
        while (i < lines.length && lines[i].startsWith("> ")) {
          calloutLines.push(lines[i].slice(2));
          i++;
        }
        
        elements.push(
          <CalloutBlock key={`callout-${i}`} type={type}>
            <span dangerouslySetInnerHTML={{ __html: parseInline(calloutLines.join(" ")) }} />
          </CalloutBlock>
        );
        continue;
      }
    }

    // Headers
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-lg font-semibold text-foreground mt-6 mb-3">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-base font-semibold text-foreground mt-5 mb-2">
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith("#### ")) {
      elements.push(
        <h4 key={i} className="text-sm font-semibold text-foreground mt-4 mb-2">
          {line.slice(5)}
        </h4>
      );
      i++;
      continue;
    }

    // Tables
    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      
      if (tableLines.length >= 2) {
        const headers = tableLines[0].split("|").filter(Boolean).map(s => s.trim());
        const rows = tableLines.slice(2).map(row => 
          row.split("|").filter(Boolean).map(s => s.trim())
        );

        elements.push(
          <div key={`table-${i}`} className="my-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {headers.map((header, idx) => (
                    <th key={idx} className="text-left py-2 px-3 font-medium text-foreground">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-border/50">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="py-2 px-3 text-muted-foreground">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // Unordered lists
    if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-3 space-y-1.5">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
              <span className="text-muted-foreground/50 mt-1.5">•</span>
              <span dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered lists
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="my-3 space-y-1.5">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
              <span className="text-muted-foreground/70 font-medium min-w-[1.25rem]">
                {idx + 1}.
              </span>
              <span dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Paragraphs
    if (line.trim()) {
      elements.push(
        <p
          key={i}
          className="text-sm text-muted-foreground leading-relaxed my-3"
          dangerouslySetInnerHTML={{ __html: parseInline(line) }}
        />
      );
    }

    i++;
  }

  return <div className="prose-neutral">{elements}</div>;
}

function parseInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-medium">$1</strong>')
    .replace(/`(.+?)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>');
}

export default function GuideDetail() {
  const { guideId } = useParams();
  const navigate = useNavigate();

  const allGuides = getAllGuides();
  const guide = allGuides.find((g) => g.id === guideId);
  const content = guideId ? getGuideContent(guideId) : null;

  if (!guide || !content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container max-w-3xl mx-auto px-4 text-center py-16">
            <h1 className="text-xl font-semibold text-foreground mb-2">Guide not found</h1>
            <p className="text-muted-foreground mb-6">
              The guide you're looking for doesn't exist.
            </p>
            <Button onClick={() => navigate("/resources/guides")}>
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Guides
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Find adjacent guides for navigation
  const currentIndex = allGuides.findIndex((g) => g.id === guideId);
  const prevGuide = currentIndex > 0 ? allGuides[currentIndex - 1] : null;
  const nextGuide = currentIndex < allGuides.length - 1 ? allGuides[currentIndex + 1] : null;

  // Find category
  const category = guideCategories.find((c) =>
    c.guides.some((g) => g.id === guideId)
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <article className="container max-w-3xl mx-auto px-4">
          {/* Breadcrumb */}
          <AnimatedSection className="mb-6">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link
                to="/resources/guides"
                className="hover:text-foreground transition-colors"
              >
                Guides
              </Link>
              <ChevronRight className="w-3 h-3" />
              {category && (
                <>
                  <span>{category.title}</span>
                  <ChevronRight className="w-3 h-3" />
                </>
              )}
              <span className="text-foreground truncate">{guide.title}</span>
            </nav>
          </AnimatedSection>

          {/* Header */}
          <AnimatedSection delay={0.05} className="mb-8">
            <div className="flex items-center gap-2 flex-wrap mb-4">
              <Badge variant="secondary" className="text-xs">
                {guide.type}
              </Badge>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {guide.readTime}
              </span>
              {guide.difficulty && (
                <span className="text-xs text-muted-foreground">
                  • {guide.difficulty}
                </span>
              )}
            </div>

            <h1 className="text-2xl font-semibold text-foreground mb-2">
              {guide.title}
            </h1>
            <p className="text-muted-foreground">{guide.description}</p>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.1} className="border-t border-border/50 pt-6">
            <MarkdownRenderer content={content} />
          </AnimatedSection>

          {/* Navigation */}
          <AnimatedSection delay={0.15} className="mt-12 pt-6 border-t border-border/50">
            <div className="flex items-center justify-between gap-4">
              {prevGuide ? (
                <Link
                  to={prevGuide.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">{prevGuide.title}</span>
                  <span className="sm:hidden">Previous</span>
                </Link>
              ) : (
                <div />
              )}

              <Link
                to="/resources/guides"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                All Guides
              </Link>

              {nextGuide ? (
                <Link
                  to={nextGuide.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="hidden sm:inline">{nextGuide.title}</span>
                  <span className="sm:hidden">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </AnimatedSection>
        </article>
      </main>

      <Footer />
    </div>
  );
}
