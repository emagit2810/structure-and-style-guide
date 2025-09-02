import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Biomedica from "./pages/Biomedica";
<<<<<<< HEAD
import { getSiteUrl } from "./lib/siteUrl";
=======
import Agronica from "./pages/Agronica";
import Automatica from "./pages/Automatica";
>>>>>>> 4a60151 (feat: cambios en header, hero, services y páginas (WIP))

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
            <Route path="/agro" element={<Agronica />} />
            <Route path="/auto" element={<Automatica />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
