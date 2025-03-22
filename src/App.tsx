
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FinancialAssistant from "./pages/FinancialAssistant";
import TeacherAssistant from "./pages/TeacherAssistant";
import HRAssistant from "./pages/HRAssistant";
import LegalAssistant from "./pages/LegalAssistant";
import SalesAssistant from "./pages/SalesAssistant";
import ProcurementAssistant from "./pages/ProcurementAssistant";
import MarketingAssistant from "./pages/MarketingAssistant";
import SupportAssistant from "./pages/SupportAssistant";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Assistant Routes */}
          <Route path="/assistant/financial" element={<FinancialAssistant />} />
          <Route path="/assistant/teacher" element={<TeacherAssistant />} />
          <Route path="/assistant/hr" element={<HRAssistant />} />
          <Route path="/assistant/legal" element={<LegalAssistant />} />
          <Route path="/assistant/sales" element={<SalesAssistant />} />
          <Route path="/assistant/procurement" element={<ProcurementAssistant />} />
          <Route path="/assistant/marketing" element={<MarketingAssistant />} />
          <Route path="/assistant/support" element={<SupportAssistant />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
