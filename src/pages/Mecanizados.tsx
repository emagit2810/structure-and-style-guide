import { useState, useEffect, useRef, type CSSProperties } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Cog, Ruler, Wrench, Clock, Award, Zap, Cpu, ShieldCheck, Factory } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCarousel from "@/components/ServiceCarousel";

const processingCards = [
  { icon: Ruler, title: 'Diseño', desc: 'CAD/CAM avanzado', delay: 'delay-100', extraTitle: 'MÁS DETALLE', extraDesc: 'Modelado 3D y programación CNC de precisión.' },
  { icon: Cog, title: 'Fabricación', desc: 'Tecnología CNC', delay: 'delay-200', extraTitle: 'INFO EXTRA', extraDesc: 'Torneado y fresado de alta precisión.' },
  { icon: Settings, title: 'Control', desc: 'Tolerancias exactas', delay: 'delay-350', extraTitle: 'VER PLANES', extraDesc: 'Verificación dimensional con equipos certificados.' },
  { icon: Zap, title: 'Producción', desc: 'Serie y prototipo', delay: 'delay-[550ms]', extraTitle: 'CONOCER MÁS', extraDesc: 'Fabricación rápida desde prototipos hasta serie.' }
];

const mecanizadosCarouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1580894894513-541e068a673f?q=80&w=1600&auto=format&fit=crop',
    alt: 'Torno CNC mecanizando un componente metálico',
  },
  {
    src: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1600&auto=format&fit=crop',
    alt: 'Soldador trabajando en taller con chispas de metal',
  },
  {
    src: 'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1600&auto=format&fit=crop',
    alt: 'Fresadora de precisión cortando bloque de aluminio',
  },
  {
    src: 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?q=80&w=1600&auto=format&fit=crop',
    alt: 'Proceso de corte por láser en lámina metálica',
  },
];

const mecanizadosHeroButtonStyles: CSSProperties = {
  '--btn-bg': '#f97316',
  '--btn-bg-hover': '#ea580c',
  '--btn-fg': '#0f172a',
  '--btn-fg-hover': '#0f172a',
  '--btn-shadow-rest': '0 16px 34px rgba(249, 115, 22, 0.28)',
  '--btn-shadow-hover': '0 22px 44px rgba(234, 88, 12, 0.35)',
};

const mecanizadosSecondaryCtaStyles: CSSProperties = {
  '--btn-bg': 'rgba(255, 255, 255, 0.94)',
  '--btn-bg-hover': 'rgba(241, 245, 249, 0.98)',
  '--btn-fg': '#0f172a',
  '--btn-fg-hover': '#0f172a',
  '--btn-shadow-rest': '0 14px 30px rgba(15, 23, 42, 0.22)',
  '--btn-shadow-hover': '0 18px 36px rgba(15, 23, 42, 0.3)',
  '--btn-secondary-border': 'rgba(148, 163, 184, 0.55)',
};

const mecanizadosPrimaryCtaStyles: CSSProperties = {
  '--btn-bg': '#f97316',
  '--btn-bg-hover': '#ea580c',
  '--btn-fg': '#0f172a',
  '--btn-fg-hover': '#0f172a',
  '--btn-shadow-rest': '0 16px 34px rgba(249, 115, 22, 0.32)',
  '--btn-shadow-hover': '0 22px 44px rgba(234, 88, 12, 0.4)',
};

const Mecanizados = () => {
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsCardsVisible(entry.isIntersecting);
      },
      { threshold: 0.33 }
    );

    const currentRef = cardsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-28 px-6 text-white flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroMecanizados}    
            alt="Hero de Mecanizados de Precisión"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mecanizados de <span className="text-primary">Precisión</span><br />
            <span className="text-accent">Especializados</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Fabricación de piezas y componentes con tolerancias exactas mediante CNC. 
            Prototipado rápido y producción en serie para diversas industrias.
          </p>
          <Button size="lg" style={mecanizadosHeroButtonStyles} className="px-8 text-lg">
            Solicitar Consulta Técnica
          </Button>
        </div>
      </section>

      {/* Qué son los Mecanizados */}
      <section id="mecanizados" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              ¿Qué son los Mecanizados de Precisión?
            </h3>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-tech-gray mb-6 text-lg leading-relaxed">
                Los mecanizados de precisión son fundamentales en un sistema productivo industrial. 
                Los dispositivos CNC y maquinaria avanzada son cruciales para la fabricación de piezas 
                con tolerancias exactas, componentes funcionales y prototipos de alta calidad.
              </p>
              <p className="text-tech-gray mb-6 text-lg leading-relaxed">
                La evaluación de estas necesidades es un proceso mediante el cual se determinan 
                especificaciones técnicas precisas. Desde el diseño CAD/CAM hasta la fabricación 
                final, cada etapa garantiza la máxima precisión y calidad.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <span className="text-foreground font-semibold">Normas ISO 9001</span>
              </div>
              <div className="flex items-center space-x-4">
                <Award className="w-6 h-6 text-accent" />
                <span className="text-foreground font-semibold">Certificación de Calidad</span>
              </div>
            </div>
            
            <div ref={cardsRef} className="grid grid-cols-2 gap-4">
              {processingCards.map(({ icon: Icon, title, desc, delay, extraTitle, extraDesc }, index) => (
                <Card 
                  key={title} 
                  className={`
                    relative group text-center overflow-visible
                    transition-all duration-700 ease-out ${delay}
                    ${isCardsVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                    hover:bg-secondary
                    ${index < 2 ? 'group-hover:rounded-t-none' : 'group-hover:rounded-b-none'}
                  `}
                >
                  <div className={`
                    absolute left-0 right-0 py-2 px-3 bg-foreground text-primary-foreground shadow-lg z-10
                    transform transition-all duration-300 ease-out
                    opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                    ${index < 2 
                      ? 'bottom-full rounded-t-lg' 
                      : 'top-full rounded-b-lg'
                    }
                  `}>
                    <h5 className="font-bold uppercase text-xs tracking-wider">{extraTitle}</h5>
                  </div>
                  <CardContent className="pt-6">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-card-foreground mb-2">{title}</h4>
                    <p className="text-sm text-tech-gray">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Mecanizado */}
      <section className="bg-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-foreground mb-4">
              Tipos de Mecanizado
            </h3>
            <p className="text-tech-gray max-w-3xl mx-auto">
              Los procesos de mecanizado se dividen en diversas categorías que aseguran precisión y calidad en cada pieza fabricada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Cog className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle className="text-xl">Torneado y Fresado CNC</CardTitle>
                    <Badge variant="outline" className="mt-2">Alta Precisión</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['Torneado de piezas cilíndricas', 'Fresado de geometrías complejas', 'Tolerancias de micrómetros'].map(item => (
                    <li key={item} className="flex items-center text-sm text-tech-gray">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Zap className="w-8 h-8 text-accent" />
                  <div>
                    <CardTitle className="text-xl">Corte Avanzado</CardTitle>
                    <Badge variant="outline" className="mt-2">Tecnología Láser</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['Corte por láser de alta potencia', 'Corte por chorro de agua', 'Acabados de precisión'].map(item => (
                    <li key={item} className="flex items-center text-sm text-tech-gray">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios en Mecanizados */}
      <section id="servicios" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Productos y Servicios en Mecanizados
            </h3>
            <p className="text-tech-gray max-w-4xl mx-auto">
              La ingeniería de mecanizados recurre a métodos científicos para resolver problemas en diversos campos de aplicación industrial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Wrench, title: 'Torneado y fresado CNC', desc: 'Fabricación precisa con control numérico' },
              { icon: Zap, title: 'Corte por láser y chorro de agua', desc: 'Tecnología de corte avanzada' },
              { icon: Cpu, title: 'Fabricación de prototipos funcionales', desc: 'Desarrollo rápido de piezas' },
              { icon: Factory, title: 'Producción de piezas en serie', desc: 'Manufactura escalable y eficiente' },
              { icon: Ruler, title: 'Diseño y modelado CAD/CAM', desc: 'Ingeniería de precisión digital' },
              { icon: ShieldCheck, title: 'Control de calidad', desc: 'Verificación dimensional certificada' }
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="group hover:shadow-lg hover:border-primary transition-all">
                <CardHeader className="text-center">
                  <Icon className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <CardDescription>{desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServiceCarousel
        images={mecanizadosCarouselImages}
        ariaLabel="Galería de mecanizados de precisión"
      />

      {/* CTA Final */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-6">
            ¿Necesita Servicios de Mecanizados de Precisión?
          </h3>
          <p className="text-xl text-primary-foreground mb-8 opacity-90">
            Contamos con la experiencia y tecnología necesarias para garantizar la máxima precisión en cada pieza fabricada
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="secondary" size="lg" style={mecanizadosSecondaryCtaStyles}>
              Ver Casos de Estudio
            </Button>
            <Button variant="default" size="lg" style={mecanizadosPrimaryCtaStyles}>
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Mecanizados;
