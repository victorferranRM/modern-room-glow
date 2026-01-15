import { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  GitBranch, 
  Building2, 
  Clock, 
  CalendarCheck,
  Circle,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  User,
  Calendar,
  ArrowRight
} from "lucide-react";

interface ManagerTab {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const managerTabs: ManagerTab[] = [
  {
    id: "monitoring",
    icon: Activity,
    title: "Real-time monitoring",
    description: "Monitor the status of your properties and on-site signals in real time, with clear visibility across your portfolio.",
  },
  {
    id: "protocols",
    icon: GitBranch,
    title: "Operational protocols",
    description: "Define how incidents are handled, who acts and when — ensuring consistent decision-making across your operations.",
  },
  {
    id: "hierarchy",
    icon: Building2,
    title: "Asset hierarchy",
    description: "Organize your assets by buildings, units or portfolios, and manage operations at scale with clear structure.",
  },
  {
    id: "history",
    icon: Clock,
    title: "Incident history",
    description: "Access a complete record of alerts and incidents to understand patterns, performance and recurring issues.",
  },
  {
    id: "tasks",
    icon: CalendarCheck,
    title: "Tasks & scheduling",
    description: "Create and track operational tasks linked to incidents, check-ins or field interventions.",
  },
];

// Abstract UI Mockups for each tab (dark themed for contrast on light bg)
function MonitoringMockup() {
  return (
    <div className="space-y-3">
      {/* Status cards grid */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Active", value: "247", status: "good" },
          { label: "Alerts", value: "3", status: "alert" },
          { label: "Offline", value: "2", status: "neutral" },
        ].map((item, i) => (
          <div 
            key={i}
            className={cn(
              "bg-slate-700/50 rounded-lg p-3 border border-slate-600/50",
              i === 0 && "animate-in fade-in duration-500",
              i === 1 && "animate-in fade-in duration-500 delay-100",
              i === 2 && "animate-in fade-in duration-500 delay-200"
            )}
          >
            <div className="text-slate-400 text-xs mb-1">{item.label}</div>
            <div className="text-2xl font-bold text-white">{item.value}</div>
            <div className={cn(
              "w-2 h-2 rounded-full mt-2",
              item.status === "good" && "bg-emerald-400",
              item.status === "alert" && "bg-amber-400",
              item.status === "neutral" && "bg-slate-500"
            )} />
          </div>
        ))}
      </div>
      
      {/* Property list */}
      <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 overflow-hidden">
        <div className="px-3 py-2 border-b border-slate-600/50 flex items-center justify-between">
          <span className="text-xs text-slate-400">Portfolio overview</span>
          <span className="text-[10px] text-primary">Live</span>
        </div>
        {[
          { name: "Marina Bay Residence", status: "good", value: "42 dB" },
          { name: "Downtown Loft #12", status: "alert", value: "78 dB" },
          { name: "Beach House Villa", status: "good", value: "35 dB" },
          { name: "Central Park Suite", status: "good", value: "38 dB" },
        ].map((property, i) => (
          <div 
            key={i}
            className={cn(
              "px-3 py-2 flex items-center justify-between border-b border-slate-600/30 last:border-0 hover:bg-slate-600/30 transition-colors",
              "animate-in slide-in-from-left-2 duration-300",
            )}
            style={{ animationDelay: `${i * 75}ms` }}
          >
            <div className="flex items-center gap-2">
              <div className={cn(
                "w-1.5 h-1.5 rounded-full",
                property.status === "good" ? "bg-emerald-400" : "bg-amber-400"
              )} />
              <span className="text-sm text-slate-200">{property.name}</span>
            </div>
            <span className={cn(
              "text-xs",
              property.status === "good" ? "text-slate-400" : "text-amber-400"
            )}>{property.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProtocolsMockup() {
  return (
    <div className="space-y-3">
      {/* Protocol flow */}
      <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-4">
        <div className="text-xs text-slate-400 mb-3">Noise incident protocol</div>
        <div className="space-y-2">
          {[
            { step: "1", label: "Alert detected", status: "complete" },
            { step: "2", label: "Notify property manager", status: "complete" },
            { step: "3", label: "Wait 15 minutes", status: "active" },
            { step: "4", label: "Escalate to field team", status: "pending" },
          ].map((item, i) => (
            <div 
              key={i}
              className={cn(
                "flex items-center gap-3 p-2 rounded-lg transition-colors",
                item.status === "active" && "bg-primary/20 border border-primary/30",
                item.status === "complete" && "opacity-70",
                "animate-in fade-in slide-in-from-left-2 duration-300"
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {item.status === "complete" && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
              {item.status === "active" && <Circle className="w-4 h-4 text-primary animate-pulse" />}
              {item.status === "pending" && <Circle className="w-4 h-4 text-slate-500" />}
              <span className={cn(
                "text-sm",
                item.status === "active" ? "text-white font-medium" : "text-slate-300"
              )}>{item.label}</span>
              {item.status === "active" && (
                <span className="ml-auto text-xs text-primary">In progress</span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Escalation rules */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-3 animate-in fade-in duration-500 delay-300">
          <div className="text-xs text-slate-400 mb-2">Escalation rules</div>
          <div className="text-2xl font-bold text-white">12</div>
          <div className="text-xs text-emerald-400 mt-1">Active</div>
        </div>
        <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-3 animate-in fade-in duration-500 delay-400">
          <div className="text-xs text-slate-400 mb-2">Response time</div>
          <div className="text-2xl font-bold text-white">4.2m</div>
          <div className="text-xs text-slate-400 mt-1">Average</div>
        </div>
      </div>
    </div>
  );
}

function HierarchyMockup() {
  return (
    <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-4 space-y-2">
      <div className="text-xs text-slate-400 mb-3">Portfolio structure</div>
      
      {/* Tree structure */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 p-2 bg-primary/20 rounded-lg border border-primary/30 animate-in fade-in duration-300">
          <Building2 className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-white">Barcelona Portfolio</span>
          <span className="ml-auto text-xs text-slate-400">124 units</span>
        </div>
        
        <div className="pl-4 space-y-1">
          {[
            { name: "Eixample District", units: 45 },
            { name: "Gothic Quarter", units: 38 },
            { name: "Barceloneta Beach", units: 41 },
          ].map((building, i) => (
            <div 
              key={i}
              className="flex items-center gap-2 p-2 hover:bg-slate-600/30 rounded-lg transition-colors animate-in slide-in-from-left-4 duration-300"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <ChevronRight className="w-3 h-3 text-slate-500" />
              <span className="text-sm text-slate-200">{building.name}</span>
              <span className="ml-auto text-xs text-slate-500">{building.units}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center gap-2 p-2 hover:bg-slate-600/30 rounded-lg transition-colors animate-in fade-in duration-300 delay-500">
          <Building2 className="w-4 h-4 text-slate-500" />
          <span className="text-sm text-slate-300">Madrid Portfolio</span>
          <span className="ml-auto text-xs text-slate-500">87 units</span>
        </div>
        
        <div className="flex items-center gap-2 p-2 hover:bg-slate-600/30 rounded-lg transition-colors animate-in fade-in duration-300 delay-600">
          <Building2 className="w-4 h-4 text-slate-500" />
          <span className="text-sm text-slate-300">Valencia Collection</span>
          <span className="ml-auto text-xs text-slate-500">36 units</span>
        </div>
      </div>
    </div>
  );
}

function HistoryMockup() {
  return (
    <div className="space-y-3">
      {/* Timeline header */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {["All", "Noise", "Occupancy", "Smoking"].map((filter, i) => (
            <button 
              key={i}
              className={cn(
                "px-2 py-1 rounded text-xs transition-colors",
                i === 0 ? "bg-primary text-white" : "bg-slate-600/50 text-slate-300 hover:bg-slate-600"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
        <span className="text-xs text-slate-400">Last 7 days</span>
      </div>
      
      {/* Timeline */}
      <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 overflow-hidden">
        {[
          { time: "2h ago", type: "noise", property: "Downtown Loft #12", status: "resolved" },
          { time: "5h ago", type: "occupancy", property: "Marina Bay Residence", status: "resolved" },
          { time: "1d ago", type: "noise", property: "Beach House Villa", status: "resolved" },
          { time: "2d ago", type: "smoking", property: "Central Park Suite", status: "resolved" },
        ].map((incident, i) => (
          <div 
            key={i}
            className={cn(
              "px-3 py-3 flex items-center gap-3 border-b border-slate-600/30 last:border-0 hover:bg-slate-600/30 transition-colors",
              "animate-in fade-in slide-in-from-right-2 duration-300"
            )}
            style={{ animationDelay: `${i * 75}ms` }}
          >
            <div className="relative">
              <AlertCircle className={cn(
                "w-4 h-4",
                incident.type === "noise" && "text-amber-400",
                incident.type === "occupancy" && "text-blue-400",
                incident.type === "smoking" && "text-red-400"
              )} />
              {i < 3 && (
                <div className="absolute top-5 left-1/2 w-px h-6 bg-slate-600/50 -translate-x-1/2" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-slate-200 truncate">{incident.property}</div>
              <div className="text-xs text-slate-500 capitalize">{incident.type} alert</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-emerald-400">Resolved</div>
              <div className="text-[10px] text-slate-500">{incident.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TasksMockup() {
  return (
    <div className="space-y-3">
      {/* Calendar header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-slate-400" />
          <span className="text-sm font-medium text-white">January 2026</span>
        </div>
        <div className="flex gap-1">
          <button className="w-6 h-6 rounded bg-slate-600/50 flex items-center justify-center hover:bg-slate-600 transition-colors">
            <ChevronRight className="w-3 h-3 text-slate-400 rotate-180" />
          </button>
          <button className="w-6 h-6 rounded bg-slate-600/50 flex items-center justify-center hover:bg-slate-600 transition-colors">
            <ChevronRight className="w-3 h-3 text-slate-400" />
          </button>
        </div>
      </div>
      
      {/* Mini calendar */}
      <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-3">
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <div key={i} className="text-[10px] text-slate-500">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 31 }, (_, i) => i + 1).slice(0, 28).map((day, i) => (
            <div 
              key={i}
              className={cn(
                "w-6 h-6 rounded text-xs flex items-center justify-center transition-colors",
                day === 15 && "bg-primary text-white",
                day === 18 && "bg-amber-400/20 text-amber-400 border border-amber-400/30",
                day === 22 && "bg-slate-600/50 text-slate-200",
                day !== 15 && day !== 18 && day !== 22 && "text-slate-400 hover:bg-slate-600/50"
              )}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      
      {/* Task list */}
      <div className="space-y-2">
        {[
          { title: "Device inspection", property: "Marina Bay", assignee: "Field Team A", time: "10:00" },
          { title: "Guest check-in", property: "Beach House", assignee: "Operations", time: "15:00" },
        ].map((task, i) => (
          <div 
            key={i}
            className={cn(
              "bg-slate-700/50 rounded-lg border border-slate-600/50 p-3 flex items-center gap-3 hover:bg-slate-600/50 transition-colors",
              "animate-in fade-in slide-in-from-bottom-2 duration-300"
            )}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <User className="w-4 h-4 text-primary" />
            </div>
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

const mockupComponents: Record<string, React.ComponentType> = {
  monitoring: MonitoringMockup,
  protocols: ProtocolsMockup,
  hierarchy: HierarchyMockup,
  history: HistoryMockup,
  tasks: TasksMockup,
};

export function ManagerSection() {
  const [activeTab, setActiveTab] = useState("monitoring");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeTabData = managerTabs.find(t => t.id === activeTab)!;
  const MockupComponent = mockupComponents[activeTab];

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  return (
    <section className="py-20 lg:py-28 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              The control layer
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Meet Manager — your operational control center
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Manager gives you real-time visibility, structured control and the tools needed to run both monitoring and operations from a single place.
            </p>
          </AnimatedSection>

          {/* Tab Navigation */}
          <AnimatedSection delay={200} className="mb-8 lg:mb-12">
            <div className="flex flex-wrap justify-center gap-2 lg:gap-1">
              {managerTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "px-4 py-2 lg:px-6 lg:py-3 text-sm font-medium transition-all duration-300 border-b-2",
                    activeTab === tab.id
                      ? "text-foreground border-primary"
                      : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"
                  )}
                >
                  {tab.title.toUpperCase()}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Content Area */}
          <AnimatedSection delay={400}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left: Text content */}
              <div 
                className={cn(
                  "bg-card rounded-2xl border p-6 lg:p-8 shadow-soft transition-all duration-300",
                  isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                )}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    {(() => {
                      const Icon = activeTabData.icon;
                      return <Icon className="w-6 h-6 text-primary" />;
                    })()}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                    {activeTabData.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {activeTabData.description}
                </p>

                {/* Feature pills based on tab */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeTab === "monitoring" && (
                    <>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Live status</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Device states</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Portfolio view</span>
                    </>
                  )}
                  {activeTab === "protocols" && (
                    <>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Decision rules</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Escalation logic</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Automation</span>
                    </>
                  )}
                  {activeTab === "hierarchy" && (
                    <>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Portfolio grouping</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Multi-asset control</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Scalable structure</span>
                    </>
                  )}
                  {activeTab === "history" && (
                    <>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Timeline view</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Incident logs</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Pattern analysis</span>
                    </>
                  )}
                  {activeTab === "tasks" && (
                    <>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Calendar view</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Task cards</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Assignments</span>
                    </>
                  )}
                </div>

                {/* Feature list */}
                <div className="space-y-3">
                  {activeTab === "monitoring" && (
                    <>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Real-time property status across your portfolio</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Instant alerts when thresholds are exceeded</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Device health monitoring and connectivity</span>
                      </div>
                    </>
                  )}
                  {activeTab === "protocols" && (
                    <>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Define response workflows for each incident type</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Set escalation timers and notification rules</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Consistent handling across your entire team</span>
                      </div>
                    </>
                  )}
                  {activeTab === "hierarchy" && (
                    <>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Group properties by building, region or portfolio</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Apply settings and rules at any level</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Scale operations without losing control</span>
                      </div>
                    </>
                  )}
                  {activeTab === "history" && (
                    <>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Complete audit trail for every incident</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Filter by type, property or time period</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Identify recurring issues and patterns</span>
                      </div>
                    </>
                  )}
                  {activeTab === "tasks" && (
                    <>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Create tasks from incidents automatically</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Assign to team members with deadlines</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Track field interventions and check-ins</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Right: UI Mockup (keeps dark theme for visual contrast) */}
              <div 
                className={cn(
                  "bg-slate-800 rounded-2xl border border-slate-700 p-4 lg:p-6 min-h-[400px] transition-all duration-300 shadow-soft-lg",
                  isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
                )}
              >
                <MockupComponent />
              </div>
            </div>
          </AnimatedSection>

          {/* Closing line + CTA */}
          <AnimatedSection delay={600} className="mt-12 lg:mt-16">
            <div className="text-center space-y-6">
              <p className="text-muted-foreground text-sm lg:text-base max-w-2xl mx-auto">
                Manager connects monitoring with our Control Center and Field Service teams, enabling faster, structured and consistent operations.
              </p>
              <Button size="lg" className="gap-2 group">
                Request a Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
