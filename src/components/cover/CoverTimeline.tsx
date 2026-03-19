import { Bell, Eye, Phone, ArrowUpCircle, MapPin, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

import imgAlerta from "@/assets/monitoring-noise.webp";
import imgAgente from "@/assets/cover-control-center.jpg";
import imgResolucion from "@/assets/cover-phone-assist.jpg";
import imgEscalacion from "@/assets/cover-protocols.jpg";
import imgField from "@/assets/cover-field-service.jpg";
import imgInforme from "@/assets/intervention-documentation.webp";

const icons = [Bell, Eye, Phone, ArrowUpCircle, MapPin, FileText];
const images = [imgAlerta, imgAgente, imgResolucion, imgEscalacion, imgField, imgInforme];
const linkHrefs = [
  null,
  "/services/control-center",
  "/services/guest-assist",
  "/services/protocols",
  "/services/field-service",
  null,
];

interface StepData {
  title: string;
  desc: string;
  role: string;
  highlight?: string;
  linkText?: string;
}

function StepCard({ step, index, img, linkHref }: { step: StepData; index: number; img: string; linkHref: string | null }) {
  const Icon = icons[index];
  return (
    <div className="bg-card border rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow duration-300 group relative overflow-hidden">
      <div className="aspect-[16/9] overflow-hidden">
        <img src={img} alt={step.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="p-4 lg:p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-muted-foreground/30 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
          <Badge variant="secondary" className="text-xs">{step.role}</Badge>
        </div>
        <h3 className="font-bold text-base text-foreground mb-1">{step.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2">{step.desc}</p>
        {step.highlight && (
          <Badge className="mb-1.5 bg-primary/10 text-primary border-primary/20 text-xs">{step.highlight}</Badge>
        )}
        {step.linkText && linkHref && (
          <LocalizedLink to={linkHref} className="text-sm text-primary font-medium hover:underline block">
            {step.linkText}
          </LocalizedLink>
        )}
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary/60 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export function CoverTimeline() {
  const { t, tObject } = useTranslation();
  const steps = tObject<StepData[]>('cover.timeline.steps');

  return (
    <section id="como-funciona" className="py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection className="text-center mb-32 lg:mb-40">
          <Badge variant="outline" className="mb-4">{t('cover.timeline.badge')}</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t('cover.timeline.title')}<br />
            <span className="gradient-text">{t('cover.timeline.titleHighlight')}</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-0">
            {steps?.map((step, i) => {
              const Icon = icons[i];
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection key={i} animation={isLeft ? "fade-right" : "fade-left"} delay={i * 80} className="relative">
                  <div className="md:hidden flex gap-4 pb-8">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center z-10 relative">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      {i < steps.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                    </div>
                    <div className="pt-1 flex-1">
                      <StepCard step={step} index={i} img={images[i]} linkHref={linkHrefs[i]} />
                    </div>
                  </div>

                  <div className="hidden md:grid md:grid-cols-[1fr_40px_1fr] lg:grid-cols-[1fr_48px_1fr] items-start -my-16 lg:-my-20">
                    <div className={cn("flex", isLeft ? "justify-end pr-6" : "")}>
                      {isLeft ? <div className="max-w-sm w-full"><StepCard step={step} index={i} img={images[i]} linkHref={linkHrefs[i]} /></div> : <div />}
                    </div>
                    <div className="flex justify-center relative z-10">
                      <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center shadow-[0_0_12px_hsl(var(--primary)/0.1)]">
                        <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                      </div>
                    </div>
                    <div className={cn("flex", !isLeft ? "pl-6" : "")}>
                      {!isLeft ? <div className="max-w-sm w-full"><StepCard step={step} index={i} img={images[i]} linkHref={linkHrefs[i]} /></div> : <div />}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
