import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { LanguageProvider } from "@/hooks/useLanguage";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LanguageRedirect } from "@/i18n/LanguageRedirect";
import { supportedLangs, routePaths } from "@/i18n/routes";
import type { SupportedLang } from "@/i18n/routes";

import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Auth from "./pages/Auth";
import SavingsCalculator from "./pages/SavingsCalculator";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Integrations from "./pages/Integrations";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Monitoring from "./pages/Monitoring";
import NoiseMonitoring from "./pages/monitoring/NoiseMonitoring";
import OccupancyDetection from "./pages/monitoring/OccupancyDetection";
import SmokeDetection from "./pages/monitoring/SmokeDetection";
import EnvironmentMonitoring from "./pages/monitoring/EnvironmentMonitoring";
import NotFound from "./pages/NotFound";
import GuestAssist from "./pages/services/GuestAssist";
import ControlCenter from "./pages/services/ControlCenter";
import FieldService from "./pages/services/FieldService";
import IncidentResponse from "./pages/services/IncidentResponse";
import EmergencyHandling from "./pages/services/EmergencyHandling";
import NightWatch from "./pages/services/NightWatch";
import PMSAccess from "./pages/services/PMSAccess";
import Protocols from "./pages/services/Protocols";
import Legal from "./pages/Legal";
import VacationRentals from "./pages/solutions/VacationRentals";
import Hotels from "./pages/solutions/Hotels";
import PropertyOwners from "./pages/solutions/PropertyOwners";
import About from "./pages/About";
import Cover from "./pages/Cover";
import { PortalLayout } from "./components/portal/PortalLayout";
import { ProtectedRoute } from "./components/portal/ProtectedRoute";
import Dashboard from "./pages/portal/Dashboard";
import Subscription from "./pages/portal/Subscription";
import Devices from "./pages/portal/Devices";
import Orders from "./pages/portal/Orders";
import Services from "./pages/portal/Services";
import Returns from "./pages/portal/Returns";
import Profile from "./pages/portal/Profile";

const queryClient = new QueryClient();

// Route configs: key → component mapping
const routeComponents: Record<string, React.ComponentType> = {
  contact: Contact,
  pricing: Pricing,
  howItWorks: HowItWorks,
  about: About,
  cover: Cover,
  blog: Blog,
  blogPost: BlogPost,
  monitoring: Monitoring,
  monitoringNoise: NoiseMonitoring,
  monitoringOccupancy: OccupancyDetection,
  monitoringSmoke: SmokeDetection,
  monitoringEnvironment: EnvironmentMonitoring,
  controlCenter: ControlCenter,
  fieldService: FieldService,
  guestAssist: GuestAssist,
  nightWatch: NightWatch,
  pmsAccess: PMSAccess,
  protocols: Protocols,
  incidentResponse: IncidentResponse,
  emergencyHandling: EmergencyHandling,
  vacationRentals: VacationRentals,
  hotels: Hotels,
  propertyOwners: PropertyOwners,
  caseStudies: CaseStudies,
  caseStudyDetail: CaseStudyDetail,
  savingsCalculator: SavingsCalculator,
  integrations: Integrations,
  legal: Legal,
  auth: Auth,
  login: Auth,
  checkout: Checkout,
  checkoutSuccess: CheckoutSuccess,
};

function LanguageLayout() {
  return <Outlet />;
}

function generateLangRoutes(lang: SupportedLang) {
  const routes: React.ReactNode[] = [];

  Object.entries(routeComponents).forEach(([key, Component]) => {
    const paths = routePaths[key];
    if (!paths) return;
    const path = paths[lang];
    if (path === undefined) return;
    routes.push(<Route key={`${lang}-${key}`} path={path} element={<Component />} />);
  });

  return routes;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AuthProvider>
            <Routes>
              {/* Root: detect browser language and redirect */}
              <Route path="/" element={<LanguageRedirect />} />

              {/* Language-prefixed routes */}
              {supportedLangs.map(lang => (
                <Route key={lang} path={`/${lang}`} element={<LanguageLayout />}>
                  <Route index element={<Index />} />
                  {generateLangRoutes(lang)}

                  {/* Portal routes */}
                  <Route
                    path="portal"
                    element={
                      <ProtectedRoute>
                        <PortalLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<Dashboard />} />
                    <Route path="subscription" element={<Subscription />} />
                    <Route path="devices" element={<Devices />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="services" element={<Services />} />
                    <Route path="returns" element={<Returns />} />
                    <Route path="profile" element={<Profile />} />
                  </Route>

                  <Route path="*" element={<NotFound />} />
                </Route>
              ))}

              {/* Catch-all for non-lang-prefixed paths */}
              <Route path="*" element={<LanguageRedirect />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
