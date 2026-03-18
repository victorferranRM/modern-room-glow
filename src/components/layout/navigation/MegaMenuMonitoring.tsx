import { LocalizedLink as Link } from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import { monitoringHrefs } from "./navigation-data";
import { Volume2, Users, Flame, Thermometer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import sensorRoomonitor from "@/assets/sensor-roomonitor.webp";

const icons = [Volume2, Users, Flame, Thermometer];

export function MegaMenuMonitoring() {
  const { tObject, t } = useTranslation();
  const monitoringItems = tObject<{ title: string; description: string }[]>("megaMenu.monitoring");

  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      <div className="grid grid-cols-5 gap-8">
        {/* Left - Device showcase */}
        <div className="col-span-2 flex flex-col items-center justify-center">
          <img 
            src={roomonitorDevice}
            alt="Roomonitor"
            className="w-full max-w-[220px] rounded-2xl shadow-lg object-cover mb-6"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
          <Button size="default" variant="default" asChild className="group">
            <Link to="/monitoring">
              {t("nav.discoverDevice")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Right - Monitoring options */}
        <div className="col-span-3">
          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-6">
            {t("nav.monitoringCapabilities")}
          </h3>
          <ul className="grid grid-cols-2 gap-3">
            {monitoringItems.map((item, index) => {
              const Icon = icons[index];
              const href = monitoringHrefs[index];
              return (
                <li key={href}>
                  <Link
                    to={href}
                    className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-200 ease-out hover:bg-muted/80"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-200 group-hover:bg-primary/20 group-hover:scale-105">
                      <Icon className="w-5 h-5 text-primary transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                        {item.title}
                      </span>
                      <span className="block text-sm text-muted-foreground mt-0.5 leading-relaxed transition-colors duration-200 group-hover:text-muted-foreground/80">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
