import { ArrowRight, Volume2, Phone, Clock, Key, ShieldAlert } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

const serviceMeta = [
  { icon: Volume2, href: "/services/noise-monitoring", color: "primary" },
  { icon: Clock, href: "/services/emergency-support", color: "success" },
  { icon: Phone, href: "/services/guest-support", color: "accent" },
  { icon: Key, href: "/services/check-in", color: "warning" },
  { icon: ShieldAlert, href: "/services/party-prevention", color: "destructive" },
];

export function ServicesSection() {
  const { t, tObject } = useTranslation();
  const items = tObject("home.servicesGrid.items") as Array<{ title: string; description: string }>;

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t("home.servicesGrid.title")}{" "}
            <span className="gradient-text">{t("home.servicesGrid.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t("home.servicesGrid.description")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((service, index) => {
            const meta = serviceMeta[index];
            return (
              <LocalizedLink
                key={index}
                to={meta.href}
                className="group relative bg-card rounded-2xl p-8 border shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-${meta.color}/10`}>
                  <meta.icon className={`w-7 h-7 text-${meta.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>{t("common.learnMore")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </LocalizedLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
