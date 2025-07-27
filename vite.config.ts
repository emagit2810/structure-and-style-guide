import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const SITE_URL = process.env.VITE_SITE_URL || "https://www.bvslab.com/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Para los assets (CSS, JS, imágenes)
  base: '/',
  // Variables de entorno personalizadas
  define: {
    __APP_BASENAME__: '"/"',
    __SITE_URL__: mode === 'production' ? `"${SITE_URL}"` : '""'
  }
}));
