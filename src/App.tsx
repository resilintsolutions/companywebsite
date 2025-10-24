import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServicesAI from "./pages/ServicesAI";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Resources from "./pages/Resources";
import SimplePage from "./pages/SimplePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ai" element={<ServicesAI />} />
          <Route path="/services/eshop" element={<SimplePage title="Resilient eShop" content="AI-powered e-commerce platform with intelligent inventory, pricing, and customer engagement. Coming soon with more details." />} />
          <Route path="/services/edutech" element={<SimplePage title="Resilient EduTech" content="Personalized learning experiences powered by AI tutors and adaptive curriculum systems. Coming soon with more details." />} />
          <Route path="/services/bpo" element={<SimplePage title="BPO Services" content="Business process outsourcing enhanced with AI agents for quality, speed, and scalability. Coming soon with more details." />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/careers" element={<SimplePage title="Careers" content="Join our mission to transform the future of work. Career opportunities coming soon." />} />
          <Route path="/privacy" element={<SimplePage title="Privacy Policy" content="Your privacy is important to us. Detailed privacy policy content will be available here." />} />
          <Route path="/terms" element={<SimplePage title="Terms of Service" content="Please read these terms carefully before using our services. Detailed terms content will be available here." />} />
          <Route path="/dpa" element={<SimplePage title="Data Processing Agreement" content="Information about our data processing practices and compliance. Detailed DPA content will be available here." />} />
          <Route path="/status" element={<SimplePage title="System Status" content="All systems operational. Real-time status monitoring coming soon." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
