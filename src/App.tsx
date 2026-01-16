import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

// Portal Pages
import { PortalLayout } from "./components/portal/PortalLayout";
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
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Customer Portal Routes */}
          <Route path="/portal" element={<PortalLayout />}>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
