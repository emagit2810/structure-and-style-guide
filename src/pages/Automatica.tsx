import { useState, useEffect, useRef } from 'react';
import Header from "@/components/Header";
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
          <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold">
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

      {/* CTA Final */}
      <section className="bg-yellow-500 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-black mb-6">
            ¿Necesita Servicios de Automatización Industrial?
          </h3>
          <p className="text-xl text-gray-800 mb-8 opacity-90">
            Contamos con la experiencia y certificaciones necesarias para garantizar el óptimo funcionamiento de sus sistemas automatizados
          </p>
          <div className="space-x-4">
            <Button variant="outline" size="lg" className="bg-white text-black hover:bg-gray-100 border-gray-300">
              Ver Casos de Estudio
            </Button>
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-xl font-bold mb-2">AUTOTECH - Automatización Industrial</h4>
          <p className="text-gray-300 mb-4">
            Especialistas en automatización • Mantenimiento • Diseño • Implementación • Monitoreo • Optimización
          </p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AUTOTECH. Automatización para todos. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Automatica;