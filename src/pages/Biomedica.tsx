import { useState, useEffect, useRef } from 'react';
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Stethoscope, Settings, Wrench, Clock, Award, Heart, Microscope, MonitorSpeaker, Zap } from "lucide-react";
import biomedHero1 from "@/assets/biomedHero1.png";

const diagnosticCards = [
  { icon: Stethoscope, title: 'Diagnóstico', desc: 'Equipos de precisión', delay: 'delay-100', extraTitle: 'MÁS DETALLE', extraDesc: 'Análisis y calibración de equipos de diagnóstico por imagen.' },
  { icon: Heart, title: 'Tratamiento', desc: 'Tecnología avanzada', delay: 'delay-200', extraTitle: 'INFO EXTRA', extraDesc: 'Reparación y optimización de equipos terapéuticos.' },
  { icon: Settings, title: 'Prevención', desc: 'Mantenimiento', delay: 'delay-350', extraTitle: 'VER PLANES', extraDesc: 'Programas de mantenimiento preventivo para evitar fallos.' },
  { icon: Zap, title: 'Rehabilitación', desc: 'Recuperación', delay: 'delay-[550ms]', extraTitle: 'CONOCER MÁS', extraDesc: 'Tecnología de apoyo para la recuperación funcional del paciente.' }
];

const Biomedica = () => {
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Activa la animación si el elemento es visible, y la desactiva si no lo es.
        // Esto permite que la animación se repita cada vez que entra en pantalla.
        setIsCardsVisible(entry.isIntersecting);
      },
      { threshold: 0.33 } // Se activa cuando el 20% del elemento es visible
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
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-28 px-6 text-white flex items-center justify-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <img
            src={biomedHero1}    
            alt="Hero de Ingeniería Biomédica"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ingeniería <span className="text-primary">Biomédica</span><br />
            <span className="text-accent">Especializada</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Tecnologías sanitarias fundamentales para sistemas de salud operativos. 
            Especialistas en dispositivos médicos para prevención, diagnóstico, tratamiento y rehabilitación.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-trust-blue">
            Solicitar Consulta Técnica
          </Button>
        </div>
      </section>

      {/* Qué es la Biomédica */}
      <section id="biomedica" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              ¿Qué es la Biomédica?
            </h3>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-tech-gray mb-6 text-lg leading-relaxed">
                Las tecnologías sanitarias son fundamentales en un sistema de salud operativo. Los dispositivos médicos son cruciales para la prevención, el diagnóstico, el tratamiento y la rehabilitación de enfermedades.
              </p>
              <p className="text-tech-gray mb-6 text-lg leading-relaxed">
                La evaluación de estas necesidades es un proceso mediante el cual se determinan y subsanan las diferencias entre la situación actual y la deseada. Es una actividad estratégica que forma parte de un proceso de planificación.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <span className="text-foreground font-semibold">Normas de la OMS</span>
              </div>
              <div className="flex items-center space-x-4">
                <Award className="w-6 h-6 text-accent" />
                <span className="text-foreground font-semibold">Experiencia BVS Lab</span>
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
                    hover:bg-blue-200
                    ${index < 2 ? 'group-hover:rounded-t-none' : 'group-hover:rounded-b-none'}
                  `}
                >
                  {/* Pestaña de información extra en hover */}
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

      {/* Tipos de Mantenimiento */}
      <section className="bg-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-foreground mb-4">
              Tipos de Mantenimiento
            </h3>
            <p className="text-tech-gray max-w-3xl mx-auto">
              El mantenimiento de equipos médicos se divide en dos principales categorías que aseguran la funcionalidad y previenen averías.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle className="text-xl">Inspección y Mantenimiento Preventivo (IMP)</CardTitle>
                    <Badge variant="outline" className="mt-2">Programado</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['Inspecciones de funcionamiento', 'Verificaciones de seguridad', 'Procedimientos sencillos'].map(item => (
                    <li key={item} className="flex items-center text-sm text-tech-gray">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Wrench className="w-8 h-8 text-accent" />
                  <div>
                    <CardTitle className="text-xl">Mantenimiento Correctivo (MC)</CardTitle>
                    <Badge variant="outline" className="mt-2">Reactivo</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['Diagnóstico de averías', 'Reparación especializada', 'Reemplazo de componentes'].map(item => (
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

      {/* Servicios en Biomédica */}
      <section id="servicios" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Productos y Servicios en Biomédica
            </h3>
            <p className="text-tech-gray max-w-4xl mx-auto">
              La ingeniería Biomédica recurre a métodos científicos para resolver problemas en diversos campos de aplicación médica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Wrench, title: 'Mantenimiento', desc: 'Programas especializados de mantenimiento' },
              { icon: Settings, title: 'Diseño', desc: 'Desarrollo de soluciones personalizadas' },
              { icon: Microscope, title: 'Manufactura', desc: 'Fabricación de componentes especializados' },
              { icon: MonitorSpeaker, title: 'Asesorías', desc: 'Consultoría técnica especializada' },
              { icon: Heart, title: 'Ventas', desc: 'Equipamiento médico certificado' },
              { icon: ShieldCheck, title: 'Certificación', desc: 'Cumplimiento de normas internacionales' }
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-tech-gray">
                    {/* Puedes detallar más items si lo deseas */}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-6">
            ¿Necesita Servicios de Ingeniería Biomédica?
          </h3>
          <p className="text-xl text-primary-foreground mb-8 opacity-90">
            Contamos con la experiencia y certificaciones necesarias para garantizar el óptimo funcionamiento de sus equipos médicos
          </p>
          <div className="space-x-4">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Ver Casos de Estudio
            </Button>
            <Button variant="outline" size="lg" className="bg-accent text-accent-foreground hover:bg-trust-blue">
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-xl font-bold mb-2">BVS Lab - Ingeniería Biomédica</h4>
          <p className="text-muted-foreground mb-4">
            Especialistas en tecnologías sanitarias • Mantenimiento • Diseño • Manufactura • Asesorías • Ventas
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BVS Lab. Ingeniería para todos. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Biomedica;
