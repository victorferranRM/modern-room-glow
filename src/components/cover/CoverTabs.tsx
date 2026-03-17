import { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import {
  Plug, GitBranch, GraduationCap, Network, ClipboardList,
  CheckCircle2, Circle, ChevronRight, ArrowDown, User
} from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

const tabIcons = [Plug, GitBranch, GraduationCap, Network, ClipboardList];
const tabIds = ["tools", "protocols", "team", "hierarchy", "reports"];

function ToolsMockup({ m }: { m: any }) {
  const pmsTools = ["Guesty", "Avantio", "Hostaway", "Lodgify", "Hostify", "Smoobu"];
  return (
    <div className="space-y-4">
      <div className="text-xs text-slate-400 mb-2">{m.activeIntegrations}</div>
      <div className="grid grid-cols-3 gap-2">
        {pmsTools.map((name, i) => (
          <div key={name} className="bg-slate-700/50 border border-slate-600/50 rounded-lg p-3 text-center animate-in fade-in duration-300" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="w-8 h-8 rounded-full bg-primary/20 mx-auto mb-2 flex items-center justify-center">
              <Plug className="w-4 h-4 text-primary" />
            </div>
            <div className="text-xs text-slate-200">{name}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-xs text-emerald-400 mt-2">
        <CheckCircle2 className="w-3 h-3" /> {m.connectedRealtime}
      </div>
    </div>
  );
}

function ProtocolsMockup({ m }: { m: any }) {
  const nodes = [
    { label: m.noiseAlert, status: "trigger" },
    { label: m.exceedsDb, status: "decision" },
    { label: m.yesContact, status: "action" },
    { label: m.resolvedIn15, status: "decision" },
    { label: m.noEscalate, status: "action" },
  ];
  return (
    <div className="space-y-2">
      <div className="text-xs text-slate-400 mb-3">{m.decisionTree}</div>
      {nodes.map((node, i) => (
        <div key={i}>
          <div className={cn(
            "px-3 py-2 rounded-lg text-sm flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300",
            node.status === "trigger" && "bg-amber-400/20 border border-amber-400/30 text-amber-300",
            node.status === "decision" && "bg-blue-400/20 border border-blue-400/30 text-blue-300 ml-4",
            node.status === "action" && "bg-emerald-400/20 border border-emerald-400/30 text-emerald-300 ml-8",
          )} style={{ animationDelay: `${i * 100}ms` }}>
            {node.status === "decision" ? <Circle className="w-3 h-3 shrink-0" /> : <CheckCircle2 className="w-3 h-3 shrink-0" />}
            {node.label}
          </div>
          {i < nodes.length - 1 && (
            <div className="flex justify-center py-1 ml-4"><ArrowDown className="w-3 h-3 text-slate-500" /></div>
          )}
        </div>
      ))}
    </div>
  );
}

function TeamMockup({ m }: { m: any }) {
  return (
    <div className="space-y-3">
      <div className="text-xs text-slate-400 mb-2">{m.agentProfile}</div>
      <div className="bg-slate-700/50 border border-slate-600/50 rounded-lg p-4 animate-in fade-in duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-6 h-6 text-primary" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">Ana Martínez</div>
            <div className="text-xs text-slate-400">{m.nightShift}</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {["ES", "EN", "FR"].map(lang => (
            <div key={lang} className="bg-slate-600/50 rounded px-2 py-1 text-xs text-center text-slate-200">{lang}</div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-slate-600/50 rounded-lg p-2"><div className="text-lg font-bold text-white">98%</div><div className="text-[10px] text-slate-400">{m.resolution}</div></div>
          <div className="bg-slate-600/50 rounded-lg p-2"><div className="text-lg font-bold text-white">3,2m</div><div className="text-[10px] text-slate-400">AHT</div></div>
        </div>
      </div>
    </div>
  );
}

function HierarchyMockup({ m }: { m: any }) {
  const levels = [
    { title: "Agente CC", color: "bg-blue-400/20 border-blue-400/30 text-blue-300" },
    { title: "Lead Agent", color: "bg-emerald-400/20 border-emerald-400/30 text-emerald-300" },
    { title: "Shift Manager", color: "bg-amber-400/20 border-amber-400/30 text-amber-300" },
    { title: "Field Service", color: "bg-primary/20 border-primary/30 text-primary" },
  ];
  return (
    <div className="space-y-2">
      <div className="text-xs text-slate-400 mb-3">{m.escalationChain}</div>
      {levels.map((level, i) => (
        <div key={i}>
          <div className={cn("px-4 py-3 rounded-lg text-sm font-medium border flex items-center gap-2 animate-in fade-in duration-300", level.color)} style={{ animationDelay: `${i * 120}ms`, marginLeft: `${i * 16}px` }}>
            <ChevronRight className="w-4 h-4" />
            {level.title}
          </div>
          {i < levels.length - 1 && (
            <div className="flex py-1" style={{ marginLeft: `${i * 16 + 18}px` }}>
              <ArrowDown className="w-3 h-3 text-slate-500" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ReportsMockup({ m }: { m: any }) {
  const events = [
    { time: "22:14", label: m.alertReceived, status: "bg-amber-400" },
    { time: "22:15", label: m.agentAssigned, status: "bg-blue-400" },
    { time: "22:18", label: m.guestContacted, status: "bg-blue-400" },
    { time: "22:32", label: m.incidentResolved, status: "bg-emerald-400" },
  ];
  return (
    <div className="space-y-3">
      <div className="text-xs text-slate-400 mb-2">{m.incidentReport} #4821</div>
      <div className="bg-slate-700/50 border border-slate-600/50 rounded-lg p-4">
        <div className="space-y-3">
          {events.map((e, i) => (
            <div key={i} className="flex items-center gap-3 animate-in fade-in slide-in-from-left-2 duration-300" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-xs text-slate-500 w-12 shrink-0">{e.time}</div>
              <div className={cn("w-2 h-2 rounded-full shrink-0", e.status)} />
              <div className="text-sm text-slate-200">{e.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-slate-600/50 flex items-center justify-between">
          <span className="text-xs text-slate-400">{m.totalDuration}</span>
          <span className="text-sm font-medium text-emerald-400">18 min</span>
        </div>
      </div>
    </div>
  );
}

export function CoverTabs() {
  const { t, tObject } = useTranslation();
  const items = tObject<{ title: string; description: string }[]>('cover.tabs.items');
  const m = tObject<Record<string, string>>('cover.tabs.mockup');
  const [activeTab, setActiveTab] = useState("tools");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  const mockupMap: Record<string, React.ReactNode> = {
    tools: <ToolsMockup m={m} />,
    protocols: <ProtocolsMockup m={m} />,
    team: <TeamMockup m={m} />,
    hierarchy: <HierarchyMockup m={m} />,
    reports: <ReportsMockup m={m} />,
  };

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {t('cover.tabs.title')}<br />
              <span className="gradient-text">{t('cover.tabs.titleHighlight')}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-start">
              <div className="space-y-2">
                {items?.map((tab, idx) => {
                  const Icon = tabIcons[idx];
                  const tabId = tabIds[idx];
                  const isActive = activeTab === tabId;
                  return (
                    <button
                      key={tabId}
                      onClick={() => handleTabChange(tabId)}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border transition-all duration-300 group",
                        isActive ? "bg-card border-primary/30 shadow-soft" : "bg-transparent border-transparent hover:bg-card/50 hover:border-border"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center transition-colors shrink-0", isActive ? "bg-primary/10" : "bg-muted")}>
                          <Icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-muted-foreground")} />
                        </div>
                        <div>
                          <h3 className={cn("font-semibold text-sm", isActive ? "text-foreground" : "text-muted-foreground")}>{tab.title}</h3>
                          {isActive && (
                            <p className="text-sm text-muted-foreground mt-1 leading-relaxed animate-fade-in">{tab.description}</p>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="bg-slate-800 rounded-2xl border border-slate-700/50 p-6 min-h-[400px] shadow-soft-lg">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700/50">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
                  <span className="text-xs text-slate-500 ml-2">{m?.panelTitle}</span>
                </div>
                <div className={cn("transition-opacity duration-200", isTransitioning ? "opacity-0" : "opacity-100")}>
                  {mockupMap[activeTab]}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
