import { LocalizedLink as Link } from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Radio, Headphones, ShoppingCart, MessageSquare, ArrowRight, BarChart3, Bell, CheckCircle, FileText, Phone, Star } from "lucide-react";

function FloatingBadge({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute hidden lg:flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm border border-border/40 rounded-xl shadow-md z-10 ${className}`}
      style={{
        animation: `floating 3.5s ease-in-out ${delay}s infinite`,
      }}
    >
      {children}
    </div>
  );
}

export function ControlLevelSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              {t("home.controlLevel.eyebrow")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {t("home.controlLevel.title")}{" "}
              <span className="text-primary">{t("home.controlLevel.titleHighlight")}</span>?
            </h2>
          </AnimatedSection>

          {/* Two cards */}
          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 1: Monitoring */}
              <div className="relative">
                <FloatingBadge className="top-4 right-4 rotate-[-2deg]" delay={0}>
                  <BarChart3 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">{t("home.controlLevel.badges.dashboard")}</span>
                </FloatingBadge>

                <FloatingBadge className="-right-8 top-1/2 -translate-y-1/2 rotate-[1deg]" delay={0.8}>
                  <div className="relative">
                    <Bell className="w-4 h-4 text-amber-500 shrink-0" />
                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  </div>
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">{t("home.controlLevel.badges.alert")}</span>
                </FloatingBadge>

                <FloatingBadge className="-bottom-4 -left-4 rotate-[2deg]" delay={1.5}>
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">{t("home.controlLevel.badges.resolved")}</span>
                </FloatingBadge>

                <div className="bg-card rounded-2xl border-2 border-border p-8 lg:p-10 flex flex-col h-full hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Radio className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">{t("home.controlLevel.monitoring.title")}</h3>
                  <p className="text-muted-foreground mb-8">
                    {t("home.controlLevel.monitoring.description")}
                  </p>

                  <div className="space-y-4 mb-8 flex-1">
                    <div className="border-l-2 border-primary/30 pl-4">
                      <p className="font-semibold text-foreground">{t("home.controlLevel.monitoring.noiseAlarm")}</p>
                      <p className="text-sm text-muted-foreground">{t("home.controlLevel.monitoring.noiseAlarmDesc")}</p>
                    </div>
                    <div className="border-l-2 border-primary/30 pl-4">
                      <p className="font-semibold text-foreground">{t("home.controlLevel.monitoring.alarmAssistant")}</p>
                      <p className="text-sm text-muted-foreground">{t("home.controlLevel.monitoring.alarmAssistantDesc")}</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                      {t("home.controlLevel.monitoring.buyOnline")}
                    </p>
                    <Button className="w-full gap-2" size="lg" asChild>
                      <Link to="/pricing">
                        <ShoppingCart className="w-4 h-4" />
                        {t("home.controlLevel.monitoring.viewPlans")}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Card 2: Delegated Operations */}
              <div className="relative">
                <FloatingBadge className="top-4 right-4 rotate-[2deg]" delay={0.4}>
                  <FileText className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">{t("home.controlLevel.badges.incident")}</span>
                </FloatingBadge>

                <FloatingBadge className="-right-8 top-1/3 -translate-y-1/2 rotate-[-1deg]" delay={1.2}>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-foreground/70 shrink-0" />
                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-foreground block">{t("home.controlLevel.badges.callAnswered")}</span>
                    <span className="text-[10px] text-muted-foreground">{t("home.controlLevel.badges.guestCall")}</span>
                  </div>
                </FloatingBadge>

                <FloatingBadge className="-bottom-4 -right-6 rotate-[-2deg]" delay={2}>
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                  <div>
                    <span className="text-xs font-medium text-foreground block">{t("home.controlLevel.badges.guestReview")}</span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />)}
                      <span className="text-[10px] text-muted-foreground ml-1">Exceptional!</span>
                    </div>
                  </div>
                </FloatingBadge>

                <div className="bg-foreground rounded-2xl p-8 lg:p-10 flex flex-col h-full text-background">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center">
                      <Headphones className="w-6 h-6 text-background" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{t("home.controlLevel.delegated.title")}</h3>
                  <p className="text-background/70 mb-8">
                    {t("home.controlLevel.delegated.description")}
                  </p>

                  <div className="space-y-4 mb-8 flex-1">
                    <div className="border-l-2 border-background/30 pl-4">
                      <p className="font-semibold">{t("home.controlLevel.delegated.cover")}</p>
                      <p className="text-sm text-background/60">{t("home.controlLevel.delegated.coverDesc")}</p>
                    </div>
                    <div className="border-l-2 border-background/30 pl-4">
                      <p className="font-semibold">{t("home.controlLevel.delegated.onlyServices")}</p>
                      <p className="text-sm text-background/60">{t("home.controlLevel.delegated.onlyServicesDesc")}</p>
                    </div>
                  </div>

                  <div className="border-t border-background/20 pt-6">
                    <p className="text-xs font-medium text-background/50 uppercase tracking-wider mb-4">
                      {t("home.controlLevel.delegated.consultative")}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground"
                      size="lg"
                      asChild
                    >
                      <Link to="/contact">
                        <MessageSquare className="w-4 h-4" />
                        {t("home.controlLevel.delegated.talkExpert")}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Bottom note */}
          <AnimatedSection delay={400}>
            <p className="text-center text-muted-foreground text-sm mt-8 max-w-2xl mx-auto">
              {t("home.controlLevel.bottomNote")}
            </p>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0) rotate(var(--tw-rotate, 0)); }
          50% { transform: translateY(-5px) rotate(var(--tw-rotate, 0)); }
        }
      `}</style>
    </section>
  );
}
