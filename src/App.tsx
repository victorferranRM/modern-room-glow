import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { LanguageProvider } from "@/hooks/useLanguage";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import SavingsCalculator from "./pages/SavingsCalculator";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Integrations from "./pages/Integrations";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Guides from "./pages/Guides";
import GuideDetail from "./pages/GuideDetail";
import Monitoring from "./pages/Monitoring";
import NoiseMonitoring from "./pages/monitoring/NoiseMonitoring";
import OccupancyDetection from "./pages/monitoring/OccupancyDetection";
import SmokeDetection from "./pages/monitoring/SmokeDetection";
import EnvironmentMonitoring from "./pages/monitoring/EnvironmentMonitoring";
import NotFound from "./pages/NotFound";

// Service Pages
import GuestAssist from "./pages/services/GuestAssist";
import ControlCenter from "./pages/services/ControlCenter";
import FieldService from "./pages/services/FieldService";
import IncidentResponse from "./pages/services/IncidentResponse";
import EmergencyHandling from "./pages/services/EmergencyHandling";
import NightWatch from "./pages/services/NightWatch";
import PMSAccess from "./pages/services/PMSAccess";
import Protocols from "./pages/services/Protocols";

// Legal Page
import Legal from "./pages/Legal";

// Solution Pages
import VacationRentals from "./pages/solutions/VacationRentals";
import Hotels from "./pages/solutions/Hotels";
import PropertyOwners from "./pages/solutions/PropertyOwners";

// About Page
import About from "./pages/About";

// Portal Pages
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
              <Route path="/" element={<Index />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/resources/savings-calculator" element={<SavingsCalculator />} />
              <Route path="/resources/case-studies" element={<CaseStudies />} />
              <Route path="/resources/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/monitoring" element={<Monitoring />} />
              <Route path="/monitoring/noise" element={<NoiseMonitoring />} />
              <Route path="/monitoring/occupancy" element={<OccupancyDetection />} />
              <Route path="/monitoring/smoke" element={<SmokeDetection />} />
              <Route path="/monitoring/environment" element={<EnvironmentMonitoring />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/resources/guides" element={<Guides />} />
              <Route path="/resources/guides/guide/:guideId" element={<GuideDetail />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/login" element={<Auth />} />

              {/* Service Routes */}
              <Route path="/services/guest-assist" element={<GuestAssist />} />
              <Route path="/services/control-center" element={<ControlCenter />} />
              <Route path="/services/field-service" element={<FieldService />} />
              <Route path="/services/incident-response" element={<IncidentResponse />} />
              <Route path="/services/emergency-handling" element={<EmergencyHandling />} />
              <Route path="/services/night-watch" element={<NightWatch />} />
              <Route path="/services/pms-access" element={<PMSAccess />} />
              <Route path="/services/protocols" element={<Protocols />} />

              {/* Legal Route */}
              <Route path="/legal" element={<Legal />} />

              {/* Solution Routes */}
              <Route path="/solutions/vacation-rentals" element={<VacationRentals />} />
              <Route path="/solutions/hotels" element={<Hotels />} />
              <Route path="/solutions/property-owners" element={<PropertyOwners />} />

              {/* About Route */}
              <Route path="/about" element={<About />} />
              
              {/* Customer Portal Routes - Protected */}
              <Route
                path="/portal"
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
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
