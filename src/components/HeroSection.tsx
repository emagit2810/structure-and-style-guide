import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Clock, Shield } from 'lucide-react';

// --- IMÁGENES DEL CARRUSEL ---
import heroImage from '@/assets/hero-technician.jpg';
import agronicaImage from '@/assets/agronamica-redim.jpg';    
import mecanizadosImage from '@/assets/automatica_redim.jpg'; 
import automatizacionImage from '@/assets/mecanizado-redim.jpg'; 
import whatsappLogo from '@/assets/logoWhatsappTra.png';

const carouselItems = [
  { text: "Equipos Médicos", colorClass: "text-secondary", image: heroImage },
  { text: "Ágronica", colorClass: "text-green-600", image: agronicaImage },
  { text: "Mecanizados", colorClass: "text-amber-700", image: mecanizadosImage }, // Usando un tono ámbar para "marrón"
  { text: "Automatización", colorClass: "text-yellow-500", image: automatizacionImage }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % carouselItems.length);
    }, 3000); // Cambia el texto cada 3 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-primary-light to-secondary-light overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {carouselItems.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={`Fondo para ${item.text}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentIndex ? 1 : 0, // 1 = totalmente visible
            }}
          />
        ))}

        {/* Capa sutil que no blanquea ni apaga tanto la imagen */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary-light/70 to-secondary-light/10 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Servicios Profesionales de
            {/* Contenedor del carrusel de texto */}
            <span className="block h-[1.2em] relative overflow-hidden">
              {carouselItems.map((item, index) => (
                <span
                  key={index}
                  className={`absolute w-full h-full left-0 transition-transform duration-700 ease-in-out ${item.colorClass}`}
                  style={{
                    transform: `translateY(${(index - currentIndex) * 100}%)`,
                  }}
                >
                  {item.text}
                </span>
              ))}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Líderes en biomecánica y maquinado de precisión para equipos médicos. 
            Garantizamos la máxima confiabilidad y rendimiento de su tecnología médica.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Solicitar Cotización
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/90 hover:bg-secondary   ">
              Conocer Servicios
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-card">
              <Award className="w-8 h-8 text-primary" />
              <div>
                <div className="font-semibold text-foreground">15+ Años</div>
                <div className="text-sm text-muted-foreground">de Experiencia</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-card">
              <Clock className="w-8 h-8 text-secondary" />
              <div>
                <div className="font-semibold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Soporte Técnico</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-card">
              <Shield className="w-8 h-8 text-success" />
              <div>
                <div className="font-semibold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Garantía Certificada</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed bottom-8 right-8 hidden lg:block z-50">
        <a
          href="https://wa.me/573134627810"
          target="_blank"
          rel="noreferrer"
          className="block w-12 h-12 rounded-full overflow-hidden shadow-lg transition-transform duration-200 transform hover:scale-110"
          aria-label="Contactar por Whatsapp"
        >
          <img src={whatsappLogo} alt="Whatsapp" className="w-full h-full object-cover object-center" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;