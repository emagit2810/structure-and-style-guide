import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Clock, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-technician.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-primary-light to-secondary-light overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional medical equipment technician"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-light/80 to-secondary-light/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Servicios Profesionales de
            <span className="text-secondary block">Equipos Médicos</span>
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
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/90 hover:bg-white">
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
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="bg-white rounded-full p-4 shadow-lg animate-pulse">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;