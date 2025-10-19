import { useState, useEffect, useRef, type CSSProperties } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCarousel from "@/components/ServiceCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Settings, Wrench, Clock, Award, Cog, Cpu, Zap, MonitorSpeaker, Gauge } from "lucide-react";
import automationHero from "@/assets/HeroAutomat.jpg";

const diagnosticCards = [
  { icon: Gauge, title: 'Diagnóstico', desc: 'Sensores inteligentes', delay: 'delay-100', extraTitle: 'MÁS DETALLE', extraDesc: 'Análisis y calibración de sistemas de medición automatizados.' },
  { icon: Cog, title: 'Optimización', desc: 'Procesos eficientes', delay: 'delay-200', extraTitle: 'INFO EXTRA', extraDesc: 'Mejora continua de procesos industriales automatizados.' },
  { icon: Settings, title: 'Mantenimiento', desc: 'Predictivo', delay: 'delay-350', extraTitle: 'VER PLANES', extraDesc: 'Sistemas de mantenimiento predictivo para maquinaria industrial.' },
  { icon: Zap, title: 'Control', desc: 'Automatización total', delay: 'delay-[550ms]', extraTitle: 'CONOCER MÁS', extraDesc: 'Sistemas de control y supervisión SCADA avanzados.' }
];

const automationCarouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1581091870622-7c61a1a2fe6a?q=80&w=1600&auto=format&fit=crop',
    alt: 'Brazos robóticos ensamblando componentes industriales',
  },
  {
    src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop',
    alt: 'Panel de control con monitoreo SCADA en planta industrial',
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
    alt: 'Operador supervisando tableros electrónicos en sala de control',
  },
  {
    src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
    alt: 'Ingeniera revisando robot colaborativo en línea de producción',
  },
];

const automationHeroButtonStyles: CSSProperties = {
  '--btn-bg': '#facc15',
  '--btn-bg-hover': '#fbbf24',
  '--btn-fg': '#1f2937',
  '--btn-fg-hover': '#111827',
  '--btn-shadow-rest': '0 16px 32px rgba(234, 179, 8, 0.28)',
  '--btn-shadow-hover': '0 20px 40px rgba(217, 119, 6, 0.35)',
};

const automationSecondaryCtaStyles: CSSProperties = {
  '--btn-bg': 'rgba(255, 255, 255, 0.95)',
  '--btn-bg-hover': 'rgba(255, 250, 235, 0.98)',
  '--btn-fg': '#92400e',
  '--btn-fg-hover': '#7c2d12',
  '--btn-shadow-rest': '0 14px 30px rgba(234, 179, 8, 0.22)',
  '--btn-shadow-hover': '0 18px 36px rgba(180, 83, 9, 0.28)',
  '--btn-secondary-border': 'rgba(250, 204, 21, 0.55)',
};

const automationPrimaryCtaStyles: CSSProperties = {
  '--btn-bg': '#ea580c',
  '--btn-bg-hover': '#c2410c',
  '--btn-fg': '#f8fafc',
  '--btn-fg-hover': '#ffffff',
  '--btn-shadow-rest': '0 16px 34px rgba(234, 88, 12, 0.34)',
  '--btn-shadow-hover': '0 22px 42px rgba(194, 65, 12, 0.42)',
};

const Automatica = () => {
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
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-28 px-6 text-white flex items-center justify-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <img
            src={automationHero}    
            alt="Hero de Automatización Industrial"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-yellow-400">Automatización</span> Industrial<br />
            <span className="text-orange-400">Especializada</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Tecnologías de automatización fundamentales para sistemas industriales eficientes. 
            Especialistas en herramientas mecánicas y control de procesos automatizados.
          </p>
          <Button size="lg" style={automationHeroButtonStyles} className="px-8 text-lg">
            Solicitar Consulta Técnica
          </Button>
        </div>
      </section>

      {/* Qué es la Automatización */}
      <section id="automatizacion" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Qué es la Automatización Industrial?
            </h3>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Las tecnologías de automatización son fundamentales en un sistema industrial operativo. Las herramientas mecánicas automatizadas son cruciales para la optimización, el control, el diagnóstico y el mantenimiento de procesos industriales.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                La evaluación de estas necesidades es un proceso mediante el cual se determinan y subsanan las diferencias entre la situación actual y la deseada. Es una actividad estratégica que forma parte de un proceso de planificación industrial.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <ShieldCheck className="w-6 h-6 text-yellow-500" />
                <span className="text-gray-800 font-semibold">Normas ISO 9001</span>
              </div>
              <div className="flex items-center space-x-4">
                <Award className="w-6 h-6 text-orange-500" />
                <span className="text-gray-800 font-semibold">Experiencia Industrial</span>
              </div>
            </div>
            
            <div ref={cardsRef} className="grid grid-cols-2 gap-4">
              {diagnosticCards.map(({ icon: Icon, title, desc, delay, extraTitle, extraDesc }, index) => (
                <Card 
                  key={title} 
                  className={`
                    relative group text-center overflow-visible
                    transition-all duration-700 ease-out ${delay}
                    ${isCardsVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                    hover:bg-yellow-100 border border-gray-200
                    ${index < 2 ? 'group-hover:rounded-t-none' : 'group-hover:rounded-b-none'}
                  `}
                >
                  {/* Pestaña de información extra en hover */}
                  <div className={`
                    absolute left-0 right-0 py-2 px-3 bg-gray-800 text-white shadow-lg z-10
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
                    <Icon className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Mantenimiento */}
      <section className="bg-yellow-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Tipos de Mantenimiento Industrial
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              El mantenimiento de equipos industriales se divide en dos principales categorías que aseguran la funcionalidad y previenen averías.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-yellow-500 bg-white">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-yellow-500" />
                  <div>
                    <CardTitle className="text-xl text-gray-800">Mantenimiento Preventivo (MP)</CardTitle>
                    <Badge className="mt-2 bg-yellow-100 text-yellow-800 border-yellow-300">Programado</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['Inspecciones de funcionamiento', 'Verificaciones de seguridad', 'Calibración de sensores'].map(item => (
                    <li key={item} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 bg-white">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Wrench className="w-8 h-8 text-orange-500" />
                  <div>
                    <CardTitle className="text-xl text-gray-800">Mantenimiento Correctivo (MC)</CardTitle>
                    <Badge className="mt-2 bg-orange-100 text-orange-800 border-orange-300">Reactivo</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['Diagnóstico de averías', 'Reparación especializada', 'Reemplazo de componentes'].map(item => (
                    <li key={item} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios en Automatización */}
      <section id="servicios" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Productos y Servicios en Automatización
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto">
              La ingeniería de automatización recurre a métodos científicos para resolver problemas en diversos campos de aplicación industrial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Wrench, title: 'Mantenimiento', desc: 'Programas especializados de mantenimiento industrial' },
              { icon: Settings, title: 'Diseño', desc: 'Desarrollo de sistemas de control personalizados' },
              { icon: Cpu, title: 'Implementación', desc: 'Instalación de sistemas automatizados' },
              { icon: MonitorSpeaker, title: 'Monitoreo', desc: 'Sistemas SCADA y supervisión remota' },
              { icon: Cog, title: 'Optimización', desc: 'Mejora continua de procesos industriales' },
              { icon: ShieldCheck, title: 'Certificación', desc: 'Cumplimiento de normas industriales' }
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="group hover:shadow-lg transition-shadow bg-white border border-gray-200 hover:border-yellow-300">
                <CardHeader className="text-center">
                  <Icon className="w-16 h-16 text-yellow-500 mx-auto mb-4 group-hover:text-orange-500 transition-colors" />
                  <CardTitle className="text-gray-800">{title}</CardTitle>
                  <CardDescription className="text-gray-600">{desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {/* Puedes detallar más items si lo deseas */}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ServiceCarousel
        images={automationCarouselImages}
        ariaLabel="Galería de automatización industrial"
      />

      {/* CTA Final */}
      <section className="bg-yellow-500 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-black mb-6">
            ¿Necesita Servicios de Automatización Industrial?
          </h3>
          <p className="text-xl text-gray-800 mb-8 opacity-90">
            Contamos con la experiencia y certificaciones necesarias para garantizar el óptimo funcionamiento de sus sistemas automatizados
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="secondary" size="lg" style={automationSecondaryCtaStyles}>
              Ver Casos de Estudio
            </Button>
            <Button variant="default" size="lg" style={automationPrimaryCtaStyles}>
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

export default Automatica;