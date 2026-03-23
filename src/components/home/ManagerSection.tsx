import { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Activity, GitBranch, Building2, Clock, CalendarCheck, Plug,
  Circle, CheckCircle2, AlertCircle, ChevronRight, User, Calendar, ArrowRight
} from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import managerDevices from "@/assets/manager-devices.webp";

const tabMeta = [
  { id: "monitoring", icon: Activity },
  { id: "protocols", icon: GitBranch },
  { id: "hierarchy", icon: Building2 },
  { id: "history", icon: Clock },
  { id: "tasks", icon: CalendarCheck },
  { id: "integrations", icon: Plug },
];

// --- Mockup Components (decorative UI demos) ---

function MonitoringMockup({ m }: { m: any }) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: m.active, value: "247", status: "good" },
          { label: m.alerts, value: "3", status: "alert" },
          { label: m.offline, value: "2", status: "neutral" },
        ].map((item, i) => (
          <div key={i} className={cn("bg-slate-700/50 rounded-lg p-3 border border-slate-600/50", `animate-in fade-in duration-500 delay-${i * 100}`)}>
            <div className="text-slate-400 text-xs mb-1">{item.label}</div>
            <div className="text-2xl font-bold text-white">{item.value}</div>
            <div className={cn("w-2 h-2 rounded-full mt-2", item.status === "good" && "bg-emerald-400", item.status === "alert" && "bg-amber-400", item.status === "neutral" && "bg-slate-500")} />
          </div>
        ))}
      </div>
      <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 overflow-hidden">
        <div className="px-3 py-2 border-b border-slate-600/50 flex items-center justify-between">
          <span className="text-xs text-slate-400">{m.portfolioView}</span>
          <span className="text-[10px] text-primary">{m.inProgress ? "" : ""}</span>
        </div>
        {[
          { name: "Marina Bay Residence", status: "good", value: "42 dB" },
          { name: "Downtown Loft #12", status: "alert", value: "78 dB" },
          { name: "Beach House Villa", status: "good", value: "35 dB" },
          { name: "Central Park Suite", status: "good", value: "38 dB" },
        ].map((property, i) => (
          <div key={i} className="px-3 py-2 flex items-center justify-between border-b border-slate-600/30 last:border-0 hover:bg-slate-600/30 transition-colors animate-in slide-in-from-left-2 duration-300" style={{ animationDelay: `${i * 75}ms` }}>
            <div className="flex items-center gap-2">
              <div className={cn("w-1.5 h-1.5 rounded-full", property.status === "good" ? "bg-emerald-400" : "bg-amber-400")} />
              <span className="text-sm text-slate-200">{property.name}</span>
            </div>
            <span className={cn("text-xs", property.status === "good" ? "text-slate-400" : "text-amber-400")}>{property.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProtocolsMockup({ m }: { m: any }) {
  const steps = [
    { step: "1", label: m.alertDetected, status: "complete" },
    { step: "2", label: m.notifyManager, status: "complete" },
    { step: "3", label: m.wait15, status: "active" },
    { step: "4", label: m.escalateField, status: "pending" },
  ];
  return (
    <div className="space-y-3">
      <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-4">
        <div className="text-xs text-slate-400 mb-3">{m.noiseProtocol}</div>
        <div className="space-y-2">
          {steps.map((item, i) => (
            <div key={i} className={cn("flex items-center gap-3 p-2 rounded-lg transition-colors", item.status === "active" && "bg-primary/20 border border-primary/30", item.status === "complete" && "opacity-70", "animate-in fade-in slide-in-from-left-2 duration-300")} style={{ animationDelay: `${i * 100}ms` }}>
              {item.status === "complete" && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
              {item.status === "active" && <Circle className="w-4 h-4 text-primary animate-pulse" />}
              {item.status === "pending" && <Circle className="w-4 h-4 text-slate-500" />}
              <span className={cn("text-sm", item.status === "active" ? "text-white font-medium" : "text-slate-300")}>{item.label}</span>
              {item.status === "active" && <span className="ml-auto text-xs text-primary">{m.inProgress}</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-3 animate-in fade-in duration-500 delay-300">
          <div className="text-xs text-slate-400 mb-2">{m.escalationRules}</div>
          <div className="text-2xl font-bold text-white">12</div>
          <div className="text-xs text-emerald-400 mt-1">{m.activeLabel}</div>
        </div>
        <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-3 animate-in fade-in duration-500 delay-400">
          <div className="text-xs text-slate-400 mb-2">{m.responseTime}</div>
          <div className="text-2xl font-bold text-white">4,2m</div>
          <div className="text-xs text-slate-400 mt-1">{m.average}</div>
        </div>
      </div>
    </div>
  );
}

function HierarchyMockup({ m }: { m: any }) {
  return (
    <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-4 space-y-2">
      <div className="text-xs text-slate-400 mb-3">{m.portfolioStructure}</div>
      <div className="space-y-1">
        <div className="flex items-center gap-2 p-2 bg-primary/20 rounded-lg border border-primary/30 animate-in fade-in duration-300">
          <Building2 className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-white">Portfolio Barcelona</span>
          <span className="ml-auto text-xs text-slate-400">124 {m.units}</span>
        </div>
        <div className="pl-4 space-y-1">
          {[{ name: "Distrito Eixample", units: 45 }, { name: "Barrio Gótico", units: 38 }, { name: "Barceloneta", units: 41 }].map((building, i) => (
            <div key={i} className="flex items-center gap-2 p-2 hover:bg-slate-600/30 rounded-lg transition-colors animate-in slide-in-from-left-4 duration-300" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
              <ChevronRight className="w-3 h-3 text-slate-500" />
              <span className="text-sm text-slate-200">{building.name}</span>
              <span className="ml-auto text-xs text-slate-500">{building.units}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 p-2 hover:bg-slate-600/30 rounded-lg transition-colors animate-in fade-in duration-300 delay-500">
          <Building2 className="w-4 h-4 text-slate-500" />
          <span className="text-sm text-slate-300">Portfolio Madrid</span>
          <span className="ml-auto text-xs text-slate-500">87 {m.units}</span>
        </div>
        <div className="flex items-center gap-2 p-2 hover:bg-slate-600/30 rounded-lg transition-colors animate-in fade-in duration-300 delay-600">
          <Building2 className="w-4 h-4 text-slate-500" />
          <span className="text-sm text-slate-300">Portfolio Valencia</span>
          <span className="ml-auto text-xs text-slate-500">36 {m.units}</span>
        </div>
      </div>
    </div>
  );
}

function HistoryMockup({ m }: { m: any }) {
  const filters = [m.allFilter, m.noiseFilter, m.occupancyFilter, m.smokeFilter];
  const incidents = [
    { time: m.hoursAgo.replace("{n}", "2"), type: "noise", property: "Downtown Loft #12", alertLabel: m.noiseAlert },
    { time: m.hoursAgo.replace("{n}", "5"), type: "occupancy", property: "Marina Bay Residence", alertLabel: m.occupancyAlert },
    { time: m.daysAgo.replace("{n}", "1"), type: "noise", property: "Beach House Villa", alertLabel: m.noiseAlert },
    { time: m.daysAgo.replace("{n}", "2"), type: "smoke", property: "Central Park Suite", alertLabel: m.smokeAlert },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {filters.map((filter, i) => (
            <button key={i} className={cn("px-2 py-1 rounded text-xs transition-colors", i === 0 ? "bg-primary text-white" : "bg-slate-600/50 text-slate-300 hover:bg-slate-600")}>{filter}</button>
          ))}
        </div>
        <span className="text-xs text-slate-400">{m.last7days}</span>
      </div>
      <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 overflow-hidden">
        {incidents.map((incident, i) => (
          <div key={i} className="px-3 py-3 flex items-center gap-3 border-b border-slate-600/30 last:border-0 hover:bg-slate-600/30 transition-colors animate-in fade-in slide-in-from-right-2 duration-300" style={{ animationDelay: `${i * 75}ms` }}>
            <AlertCircle className={cn("w-4 h-4", incident.type === "noise" && "text-amber-400", incident.type === "occupancy" && "text-blue-400", incident.type === "smoke" && "text-red-400")} />
            <div className="flex-1 min-w-0">
              <div className="text-sm text-slate-200 truncate">{incident.property}</div>
              <div className="text-xs text-slate-500">{incident.alertLabel}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-emerald-400">{m.resolved}</div>
              <div className="text-[10px] text-slate-500">{incident.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TasksMockup({ m }: { m: any }) {
  const tasks = [
    { title: m.deviceInspection, property: "Marina Bay", assignee: m.fieldTeamA, time: "10:00" },
    { title: m.guestCheckin, property: "Beach House", assignee: m.operationsTeam, time: "15:00" },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-slate-400" />
          <span className="text-sm font-medium text-white">2026</span>
        </div>
        <div className="flex gap-1">
          <button className="w-6 h-6 rounded bg-slate-600/50 flex items-center justify-center hover:bg-slate-600 transition-colors"><ChevronRight className="w-3 h-3 text-slate-400 rotate-180" /></button>
          <button className="w-6 h-6 rounded bg-slate-600/50 flex items-center justify-center hover:bg-slate-600 transition-colors"><ChevronRight className="w-3 h-3 text-slate-400" /></button>
        </div>
      </div>
      <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-3">
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {["L", "M", "X", "J", "V", "S", "D"].map((day, i) => (
            <div key={i} className="text-[10px] text-slate-500">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
            <div key={day} className={cn("w-6 h-6 rounded text-xs flex items-center justify-center transition-colors", day === 15 && "bg-primary text-white", day === 18 && "bg-amber-400/20 text-amber-400 border border-amber-400/30", day === 22 && "bg-slate-600/50 text-slate-200", day !== 15 && day !== 18 && day !== 22 && "text-slate-400 hover:bg-slate-600/50")}>{day}</div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        {tasks.map((task, i) => (
          <div key={i} className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-3 flex items-center gap-3 hover:bg-slate-600/50 transition-colors animate-in fade-in slide-in-from-bottom-2 duration-300" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0"><User className="w-4 h-4 text-primary" /></div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-slate-100 font-medium">{task.title}</div>
              <div className="text-xs text-slate-400">{task.property} • {task.assignee}</div>
            </div>
            <div className="text-xs text-slate-500">{task.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IntegrationsMockup({ m }: { m: any }) {
  const integrations = [
    { name: "Guesty", type: "PMS" }, { name: "Kross Booking", type: "PMS" },
    { name: "Nuki", type: "Access" }, { name: "Avantio", type: "PMS" }, { name: "Hostify", type: "PMS" },
  ];
  return (
    <div className="space-y-3">
      <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-4">
        <div className="text-xs text-slate-400 mb-3">{m.activeIntegrations}</div>
        <div className="space-y-2">
          {integrations.map((integration, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-600/30 animate-in fade-in slide-in-from-left-2 duration-300" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-500/50 flex items-center justify-center"><Plug className="w-4 h-4 text-slate-300" /></div>
                <div>
                  <div className="text-sm text-slate-200 font-medium">{integration.name}</div>
                  <div className="text-xs text-slate-500">{integration.type}</div>
                </div>
              </div>
              <span className="text-xs text-emerald-400">{m.connected}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mockupMap: Record<string, React.ComponentType<{ m: any }>> = {
  monitoring: MonitoringMockup,
  protocols: ProtocolsMockup,
  hierarchy: HierarchyMockup,
  history: HistoryMockup,
  tasks: TasksMockup,
  integrations: IntegrationsMockup,
};

export function ManagerSection() {
  const { t, tObject } = useTranslation();
  const tabs = tObject("home.manager.tabs") as Array<{ title: string; description: string }>;
  const pills = tObject("home.manager.pills") as Record<string, string[]>;
  const features = tObject("home.manager.features") as Record<string, string[]>;
  const mockupLabels = tObject("home.manager.mockup") as any;

  const [activeTab, setActiveTab] = useState("monitoring");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeTabIndex = tabMeta.findIndex(t => t.id === activeTab);
  const activeTabData = tabs[activeTabIndex];
  const MockupComponent = mockupMap[activeTab];

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Image */}
          <AnimatedSection className="mb-12 lg:mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  {t("home.manager.headerEyebrow")}
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
                  {t("home.manager.headerTitle")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("home.manager.headerDescription")}
                </p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <img
                  src={managerDevices}
                  alt={t("home.manager.devicesAlt")}
                  className="w-full max-w-md lg:max-w-none lg:w-[110%] h-auto object-contain drop-shadow-2xl animate-in fade-in slide-in-from-right-8 duration-700"
                />
                <Button size="lg" className="gap-2 group" asChild>
                  <LocalizedLink to="/contact">
                    {t("home.manager.requestDemo")}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </LocalizedLink>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Tab Navigation */}
          <AnimatedSection delay={200} className="mb-8 lg:mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-3 max-w-4xl mx-auto">
              {tabMeta.map((meta, index) => {
                const Icon = meta.icon;
                return (
                  <button
                    key={meta.id}
                    onClick={() => handleTabChange(meta.id)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-3 lg:px-5 lg:py-3.5 text-sm font-medium transition-all duration-300 rounded-xl border",
                      activeTab === meta.id
                        ? "bg-card border-primary/30 text-foreground shadow-sm"
                        : "bg-secondary border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                    )}
                  >
                    <Icon className={cn("w-4 h-4 shrink-0", activeTab === meta.id ? "text-primary" : "text-muted-foreground")} />
                    <span className="text-left leading-tight">{tabs[index].title}</span>
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Content Area */}
          <AnimatedSection delay={400}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className={cn("bg-card rounded-2xl border p-6 lg:p-8 shadow-soft transition-all duration-300", isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0")}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    {(() => { const Icon = tabMeta[activeTabIndex].icon; return <Icon className="w-6 h-6 text-primary" />; })()}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">{activeTabData.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">{activeTabData.description}</p>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {(pills[activeTab] || []).map((pill, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">{pill}</span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {(features[activeTab] || []).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-foreground/80">
                      <ChevronRight className="w-4 h-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={cn("bg-slate-800 rounded-2xl border border-slate-700 p-4 lg:p-6 min-h-[400px] transition-all duration-300 shadow-soft-lg", isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100")}>
                <MockupComponent m={mockupLabels} />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600} className="mt-12 lg:mt-16">
            <div className="text-center">
              <p className="text-muted-foreground text-sm lg:text-base max-w-2xl mx-auto">
                {t("home.manager.closingText")}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
