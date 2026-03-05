import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  GitBranch, 
  Building2, 
  Clock, 
  CalendarCheck,
  Plug,
  Circle,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  User,
  Calendar,
  ArrowRight
} from "lucide-react";

import managerDevices from "@/assets/manager-devices.png";

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
    title: "Monitorización en tiempo real",
    description: "Monitoriza el estado de tus propiedades y señales in situ en tiempo real, con visibilidad clara en todo tu portfolio.",
  },
  {
    id: "protocols",
    icon: GitBranch,
    title: "Protocolos operativos",
    description: "Define cómo se gestionan las incidencias, quién actúa y cuándo — asegurando decisiones consistentes en todas tus operaciones.",
  },
  {
    id: "hierarchy",
    icon: Building2,
    title: "Jerarquía de activos",
    description: "Organiza tus activos por edificios, unidades o portfolios, y gestiona operaciones a escala con una estructura clara.",
  },
  {
    id: "history",
    icon: Clock,
    title: "Historial de incidencias",
    description: "Accede a un registro completo de alertas e incidencias para entender patrones, rendimiento y problemas recurrentes.",
  },
  {
    id: "tasks",
    icon: CalendarCheck,
    title: "Tareas y planificación",
    description: "Crea y haz seguimiento de tareas operativas vinculadas a incidencias, check-ins o intervenciones de campo.",
  },
  {
    id: "integrations",
    icon: Plug,
    title: "Integraciones PMS",
    description: "Conectamos con las herramientas que ya usas para sincronizar la información de tus reservas.",
  },
];

// Abstract UI Mockups for each tab (dark themed for contrast on light bg)
function MonitoringMockup() {
  return (
    <div className="space-y-3">
      {/* Status cards grid */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Activos", value: "247", status: "good" },
          { label: "Alertas", value: "3", status: "alert" },
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
          <span className="text-xs text-slate-400">Vista del portfolio</span>
          <span className="text-[10px] text-primary">En vivo</span>
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
        <div className="text-xs text-slate-400 mb-3">Protocolo de incidencia de ruido</div>
        <div className="space-y-2">
          {[
            { step: "1", label: "Alerta detectada", status: "complete" },
            { step: "2", label: "Notificar al gestor", status: "complete" },
            { step: "3", label: "Esperar 15 minutos", status: "active" },
            { step: "4", label: "Escalar al equipo de campo", status: "pending" },
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
                <span className="ml-auto text-xs text-primary">En curso</span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Escalation rules */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-3 animate-in fade-in duration-500 delay-300">
          <div className="text-xs text-slate-400 mb-2">Reglas de escalado</div>
          <div className="text-2xl font-bold text-white">12</div>
          <div className="text-xs text-emerald-400 mt-1">Activas</div>
        </div>
        <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-3 animate-in fade-in duration-500 delay-400">
          <div className="text-xs text-slate-400 mb-2">Tiempo respuesta</div>
          <div className="text-2xl font-bold text-white">4,2m</div>
          <div className="text-xs text-slate-400 mt-1">Media</div>
        </div>
      </div>
    </div>
  );
}

function HierarchyMockup() {
  return (
    <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-4 space-y-2">
      <div className="text-xs text-slate-400 mb-3">Estructura del portfolio</div>
      
      {/* Tree structure */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 p-2 bg-primary/20 rounded-lg border border-primary/30 animate-in fade-in duration-300">
          <Building2 className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-white">Portfolio Barcelona</span>
          <span className="ml-auto text-xs text-slate-400">124 unidades</span>
        </div>
        
        <div className="pl-4 space-y-1">
          {[
            { name: "Distrito Eixample", units: 45 },
            { name: "Barrio Gótico", units: 38 },
            { name: "Barceloneta", units: 41 },
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
          <span className="text-sm text-slate-300">Portfolio Madrid</span>
          <span className="ml-auto text-xs text-slate-500">87 unidades</span>
        </div>
        
        <div className="flex items-center gap-2 p-2 hover:bg-slate-600/30 rounded-lg transition-colors animate-in fade-in duration-300 delay-600">
          <Building2 className="w-4 h-4 text-slate-500" />
          <span className="text-sm text-slate-300">Colección Valencia</span>
          <span className="ml-auto text-xs text-slate-500">36 unidades</span>
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
          {["Todos", "Ruido", "Ocupación", "Humo"].map((filter, i) => (
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
        <span className="text-xs text-slate-400">Últimos 7 días</span>
      </div>
      
      {/* Timeline */}
      <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 overflow-hidden">
        {[
          { time: "hace 2h", type: "ruido", property: "Downtown Loft #12", status: "resuelto" },
          { time: "hace 5h", type: "ocupación", property: "Marina Bay Residence", status: "resuelto" },
          { time: "hace 1d", type: "ruido", property: "Beach House Villa", status: "resuelto" },
          { time: "hace 2d", type: "humo", property: "Central Park Suite", status: "resuelto" },
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
                incident.type === "ruido" && "text-amber-400",
                incident.type === "ocupación" && "text-blue-400",
                incident.type === "humo" && "text-red-400"
              )} />
              {i < 3 && (
                <div className="absolute top-5 left-1/2 w-px h-6 bg-slate-600/50 -translate-x-1/2" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-slate-200 truncate">{incident.property}</div>
              <div className="text-xs text-slate-500 capitalize">Alerta de {incident.type}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-emerald-400">Resuelto</div>
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
          <span className="text-sm font-medium text-white">Enero 2026</span>
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
          {["L", "M", "X", "J", "V", "S", "D"].map((day, i) => (
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
          { title: "Inspección de dispositivo", property: "Marina Bay", assignee: "Equipo Campo A", time: "10:00" },
          { title: "Check-in huéspedes", property: "Beach House", assignee: "Operaciones", time: "15:00" },
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

function IntegrationsMockup() {
  return (
    <div className="space-y-3">
      <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-4">
        <div className="text-xs text-slate-400 mb-3">Integraciones activas</div>
        <div className="space-y-2">
          {[
            { name: "Guesty", type: "PMS", status: "Conectado" },
            { name: "Booking.com", type: "Channel Manager", status: "Conectado" },
            { name: "Nuki", type: "Acceso", status: "Conectado" },
            { name: "Airbnb", type: "Channel Manager", status: "Conectado" },
          ].map((integration, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-2 rounded-lg bg-slate-600/30 animate-in fade-in slide-in-from-left-2 duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-500/50 flex items-center justify-center">
                  <Plug className="w-4 h-4 text-slate-300" />
                </div>
                <div>
                  <div className="text-sm text-slate-200 font-medium">{integration.name}</div>
                  <div className="text-xs text-slate-500">{integration.type}</div>
                </div>
              </div>
              <span className="text-xs text-emerald-400">{integration.status}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-3 animate-in fade-in duration-500 delay-300">
          <div className="text-xs text-slate-400 mb-2">Sincronizaciones</div>
          <div className="text-2xl font-bold text-white">1.247</div>
          <div className="text-xs text-emerald-400 mt-1">Últimas 24h</div>
        </div>
        <div className="bg-slate-700/50 rounded-lg border border-slate-600/50 p-3 animate-in fade-in duration-500 delay-400">
          <div className="text-xs text-slate-400 mb-2">Conectores</div>
          <div className="text-2xl font-bold text-white">4</div>
          <div className="text-xs text-slate-400 mt-1">Activos</div>
        </div>
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
  integrations: IntegrationsMockup,
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
          {/* Header with Image */}
          <AnimatedSection className="mb-12 lg:mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Text */}
              <div className="text-center lg:text-left">
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  La capa de control
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
                  Conoce Manager — tu centro de control operativo
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Manager te da visibilidad en tiempo real, control estructurado y las herramientas necesarias para gestionar monitorización y operaciones desde un solo lugar.
                </p>
              </div>
              
              {/* Right: Devices Image */}
              <div className="flex justify-center lg:justify-end">
                <img 
                  src={managerDevices} 
                  alt="Plataforma Manager en portátil y móvil" 
                  className="max-w-full h-auto max-h-[400px] object-contain drop-shadow-2xl animate-in fade-in slide-in-from-right-8 duration-700"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Tab Navigation */}
          <AnimatedSection delay={200} className="mb-8 lg:mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-3 max-w-4xl mx-auto">
              {managerTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-3 lg:px-5 lg:py-3.5 text-sm font-medium transition-all duration-300 rounded-xl border",
                      activeTab === tab.id
                        ? "bg-primary/10 border-primary/30 text-foreground"
                        : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/20"
                    )}
                  >
                    <Icon className={cn(
                      "w-4 h-4 shrink-0",
                      activeTab === tab.id ? "text-primary" : "text-muted-foreground"
                    )} />
                    <span className="text-left leading-tight">{tab.title}</span>
                  </button>
                );
              })}
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
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Estado en vivo</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Estado dispositivos</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Vista portfolio</span>
                    </>
                  )}
                  {activeTab === "protocols" && (
                    <>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Reglas de decisión</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Lógica de escalado</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Automatización</span>
                    </>
                  )}
                  {activeTab === "hierarchy" && (
                    <>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Agrupación portfolio</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Control multi-activo</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Estructura escalable</span>
                    </>
                  )}
                  {activeTab === "history" && (
                    <>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Vista cronológica</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Registro incidencias</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Análisis de patrones</span>
                    </>
                  )}
                  {activeTab === "tasks" && (
                    <>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Vista calendario</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Tarjetas de tareas</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Asignaciones</span>
                    </>
                  )}
                  {activeTab === "integrations" && (
                    <>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">PMS y Channel Managers</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Acceso inteligente</span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">API abierta</span>
                    </>
                  )}
                </div>

                {/* Feature list */}
                <div className="space-y-3">
                  {activeTab === "monitoring" && (
                    <>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Estado en tiempo real de propiedades en todo tu portfolio</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Alertas instantáneas cuando se superan los umbrales</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Monitorización del estado de dispositivos y conectividad</span>
                      </div>
                    </>
                  )}
                  {activeTab === "protocols" && (
                    <>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Define flujos de respuesta para cada tipo de incidencia</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Configura temporizadores de escalado y reglas de notificación</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Gestión consistente en todo tu equipo</span>
                      </div>
                    </>
                  )}
                  {activeTab === "hierarchy" && (
                    <>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Agrupa propiedades por edificio, región o portfolio</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Aplica configuraciones y reglas a cualquier nivel</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Escala operaciones sin perder el control</span>
                      </div>
                    </>
                  )}
                  {activeTab === "history" && (
                    <>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Registro de auditoría completo para cada incidencia</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Filtra por tipo, propiedad o periodo de tiempo</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Identifica problemas recurrentes y patrones</span>
                      </div>
                    </>
                  )}
                  {activeTab === "tasks" && (
                    <>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Crea tareas automáticamente desde incidencias</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Asigna a miembros del equipo con plazos</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Haz seguimiento de intervenciones de campo y check-ins</span>
                      </div>
                    </>
                  )}
                  {activeTab === "integrations" && (
                    <>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Conexión nativa con los principales PMS y channel managers</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">Integración con cerraduras inteligentes y sistemas de acceso</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        <span className="text-sm">API abierta para conectar cualquier herramienta personalizada</span>
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
                Manager conecta la monitorización con nuestro Centro de Control y equipos de Field Service, permitiendo operaciones más rápidas, estructuradas y consistentes.
              </p>
              <Button size="lg" className="gap-2 group" asChild>
                <Link to="/contact">
                  Solicitar una Demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
