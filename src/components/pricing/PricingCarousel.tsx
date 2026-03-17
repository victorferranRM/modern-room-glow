import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Bell, Smartphone, Mail, Zap, PhoneCall, Headphones, Clock, Check, Users, BarChart3, Moon, MapPin, FileText, AlertCircle, KeyRound } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";

interface PricingCarouselProps {
  properties: number;
  isEnterprise: boolean;
  basicDeviceTotal: number;
  basicMonthlyTotal: number;
  proMonthlyTotal: number;
}

const planIcons = {
  basic: [Bell, Zap, Smartphone, Mail],
  pro: [Check, PhoneCall, Headphones, Clock],
  enterprise: [Check, BarChart3, PhoneCall, Moon, MapPin, FileText, AlertCircle, KeyRound, Users],
};

export function PricingCarousel({ properties, isEnterprise, basicDeviceTotal, basicMonthlyTotal, proMonthlyTotal }: PricingCarouselProps) {
  const { t, tObject } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", containScroll: "trimSnaps", loop: false });
  const [selectedIndex, setSelectedIndex] = useState(1);
  const navigate = useNavigate();

  const plans = tObject<Record<string, { name: string; subtitle: string; features: string[] }>>('pricing.plans');
  const basic = plans?.basic;
  const pro = plans?.pro;
  const enterprise = plans?.enterprise;

  const goToCheckout = (plan: "basic" | "pro") => {
    navigate(`/checkout?plan=${plan}&properties=${properties}`);
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.scrollTo(1, false);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const planList = [
    { key: "basic" as const, data: basic, icons: planIcons.basic, popular: false },
    { key: "pro" as const, data: pro, icons: planIcons.pro, popular: true },
    { key: "enterprise" as const, data: enterprise, icons: planIcons.enterprise, popular: false },
  ];

  const renderPrice = (planKey: string) => {
    if (planKey === "basic") {
      if (isEnterprise) return <div className="text-2xl font-bold text-foreground">{t('pricing.contactSales')}</div>;
      return (
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-lg text-muted-foreground line-through">€90</span>
              <span className="text-3xl font-bold text-foreground">€45</span>
              <span className="text-sm text-muted-foreground">{t('pricing.oneTimePayment')}</span>
            </div>
            <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded">{t('pricing.webExclusive')}</div>
          </div>
          <div className="pt-2 border-t border-border">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">€13</span>
              <span className="text-muted-foreground text-sm">{t('pricing.perMonth')}</span>
            </div>
          </div>
          {properties > 1 && (
            <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
              {t('pricing.propertiesLabel', { n: String(properties), device: String(basicDeviceTotal), monthly: String(basicMonthlyTotal) })}
            </p>
          )}
        </div>
      );
    }
    if (planKey === "pro") {
      if (isEnterprise) return <div className="text-2xl font-bold text-foreground">{t('pricing.contactSales')}</div>;
      return (
        <div className="space-y-3">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-foreground">€29,90</span>
            <span className="text-muted-foreground text-sm">{t('pricing.perMonth')}</span>
          </div>
          <p className="text-sm text-muted-foreground">{t('pricing.carousel.plusDevice')}</p>
          {properties > 1 && (
            <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
              {t('pricing.propertiesLabel', { n: String(properties), device: String(basicDeviceTotal), monthly: proMonthlyTotal.toFixed(2).replace('.00', '') })}
            </p>
          )}
        </div>
      );
    }
    return (
      <div className="space-y-2">
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-muted-foreground">{t('pricing.from')}</span>
          <span className="text-3xl font-bold text-foreground">€79,90</span>
          <span className="text-muted-foreground text-sm">{t('pricing.perProperty')}</span>
        </div>
        <p className="text-sm text-muted-foreground">{t('pricing.variablePrice')}</p>
      </div>
    );
  };

  const renderCTA = (planKey: string) => {
    if (planKey === "enterprise" || isEnterprise) {
      return (
        <Button className="w-full" size="lg" variant="outline" asChild>
          <LocalizedLink to="/contact?inquiry=enterprise">
            <MessageSquare className="w-4 h-4 mr-2" />
            {t('pricing.talkToSpecialist')}
          </LocalizedLink>
        </Button>
      );
    }
    return (
      <Button className={`w-full ${planKey === "pro" ? "shadow-soft" : ""}`} size="lg" onClick={() => goToCheckout(planKey as "basic" | "pro")}>
        {t('pricing.buyNow')}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    );
  };

  return (
    <div className="lg:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {planList.map((plan, index) => (
            <div key={plan.key} className="flex-[0_0_85%] min-w-0 pl-4 first:pl-4">
              <div className={`relative bg-card border rounded-2xl p-6 shadow-soft h-full transition-all duration-300
                ${plan.popular ? "border-2 border-primary" : ""}
                ${plan.key === "enterprise" ? "bg-gradient-to-br from-secondary to-muted" : ""}
                ${selectedIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-70"}
              `}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">{t('pricing.mostPopular')}</span>
                  </div>
                )}
                <div className="space-y-6">
                  <div className={plan.popular ? "pt-2" : ""}>
                    <h3 className="text-xl font-bold text-foreground">{plan.data?.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{plan.data?.subtitle}</p>
                  </div>
                  {renderPrice(plan.key)}
                  <ul className="space-y-3">
                    {plan.data?.features.map((feature, fi) => {
                      const Icon = plan.icons[fi] || Check;
                      return (
                        <li key={fi} className="flex items-start gap-3">
                          <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                  {renderCTA(plan.key)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {planList.map((plan, index) => (
          <button key={plan.key} onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${selectedIndex === index ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
            aria-label={`${t('pricing.carousel.goToPlan')} ${plan.data?.name}`}
          />
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground mt-3">{t('pricing.carousel.swipeToCompare')}</p>
    </div>
  );
}
