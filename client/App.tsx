import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OfferModalWrapper } from "./components/OfferModalWrapper";
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import ContactUs from "./pages/ContactUs";
import DestinationDetail from "./pages/DestinationDetail";
import PackageDetail from "./pages/PackageDetail";
import CulinaryDetail from "./pages/CulinaryDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/destination/:id" element={<DestinationDetail />} />
            <Route path="/package/:id" element={<PackageDetail />} />
            <Route path="/culinary/:id" element={<CulinaryDetail />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* Offer Modal - triggers on scroll/exit intent across all pages */}
          <OfferModalWrapper />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
