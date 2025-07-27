import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Biomedica from "./pages/Biomedica";
import { getSiteUrl } from "./lib/siteUrl";

const queryClient = new QueryClient();

const App = () => {
  // La aplicación siempre vive en la raíz. El dominio varía según el entorno.
  const basename = "/";
  const siteUrl = getSiteUrl();
  console.log("Base URL:", siteUrl);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bio" element={<Biomedica />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
