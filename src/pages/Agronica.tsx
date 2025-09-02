import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Tractor, Settings, Wrench, Clock, Award, ShieldCheck, Sprout, Combine, Factory, Microscope, Briefcase, Bot } from "lucide-react";

// Ruta corregida para el logo
import AgronicaLogo from '../assets/Nuevo Enzo.png';

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  delay: string;
  extraTitle: string;
}

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const infoCardsData: InfoCardProps[] = [
  { icon: Microscope, title: 'Diagnóstico', desc: 'Sensores y equipos de precisión agrícola.', delay: 'delay-100', extraTitle: 'MÁS DETALLE' },
  { icon: Tractor, title: 'Tratamiento', desc: 'Maquinaria y procesos de optimización.', delay: 'delay-200', extraTitle: 'VER EQUIPOS' },
  { icon: Bot, title: 'Prevención', desc: 'Sistemas de monitoreo predictivo.', delay: 'delay-350', extraTitle: 'VER PLANES' },
  { icon: Sprout, title: 'Rehabilitación', desc: 'Sostenibilidad de suelos y cultivos.', delay: 'delay-[550ms]', extraTitle: 'CONOCER MÁS' }
];

const servicesData: ServiceCardProps[] = [
  { icon: Wrench, title: 'Mantenimiento', desc: 'Programas especializados para maquinaria agrícola.' },
  { icon: Settings, title: 'Diseño Agrónico', desc: 'Desarrollo de soluciones mecánicas a medida.' },
  { icon: Factory, title: 'Manufactura', desc: 'Fabricación de componentes y prototipos.' },
  { icon: Briefcase, title: 'Asesorías', desc: 'Consultoría técnica en agrotecnología.' },
  { icon: Combine, title: 'Ventas de Equipo', desc: 'Maquinaria y drones de última generación.' },
  { icon: ShieldCheck, title: 'Certificación', desc: 'Cumplimiento de normas de agricultura sostenible.' }
];

const Agronica = () => {
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsCardsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
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
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="bg-white backdrop-blur-sm sticky top-0 z-50 border-b border-green-200 shadow-sm">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <img src={AgronicaLogo} alt="Logo Agrónica Lab" className="h-10 w-10" />
            <span className="text-xl font-bold text-green-800">Agrónica Lab</span>
          </a>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#agronica" className="text-green-700 hover:text-green-500 transition-colors">¿Qué es la Agrónica?</a>
            <a href="#mantenimiento" className="text-green-700 hover:text-green-500 transition-colors">Mantenimiento</a>
            <a href="#servicios" className="text-green-700 hover:text-green-500 transition-colors">Servicios</a>
            <Button className="bg-green-600 hover:bg-green-700 text-white">Contacto</Button>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative py-28 px-6 text-white flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2532&auto=format&fit=crop"
              alt="Campo agrícola con tecnología"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green-900/80"></div>
          </div>
          <div className="relative max-w-6xl mx-auto text-center z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ingeniería <span className="text-green-300">Agrónica</span> Especializada
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto">
              Tecnologías para potenciar la agricultura con innovación mecánica y sostenibilidad.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
              Solicitar Consulta Técnica
            </Button>
          </div>
        </section>

        {/* ¿QUÉ ES LA AGRÓNICA? SECTION */}
        <section id="agronica" className="py-20 px-6 bg-green-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                ¿Qué es la Agrónica?
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-green-700 leading-relaxed">
                <p>
                  Las tecnologías agrónicas son fundamentales para un sistema productivo sostenible. Los dispositivos de precisión y maquinaria avanzada son cruciales para la prevención de plagas, el diagnóstico de cultivos, el tratamiento de suelos y la rehabilitación de ecosistemas agrícolas.
                </p>
                <p>
                  La evaluación de estas necesidades es un proceso mediante el cual se determinan y subsanan las diferencias entre la situación actual y la deseada, formando parte de una planificación estratégica integral.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                  <span className="text-green-800 font-semibold">Prácticas Sostenibles</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="w-6 h-6 text-green-500" />
                  <span className="text-green-800 font-semibold">Tecnología de Vanguardia</span>
                </div>
              </div>
              
              <div ref={cardsRef} className="grid grid-cols-2 gap-4">
                {infoCardsData.map(({ icon: Icon, title, desc, delay, extraTitle }, index) => (
                  <Card 
                    key={title} 
                    className={`relative group text-center overflow-visible transition-all duration-700 ease-out ${delay} ${isCardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:shadow-green-600/20 hover:shadow-lg hover:-translate-y-2 border-green-200`}
                  >
                    <div className={`absolute left-0 right-0 py-2 px-3 bg-green-700 text-white shadow-lg z-10 transform transition-all duration-300 ease-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 ${index < 2 ? 'bottom-full rounded-t-lg' : 'top-full rounded-b-lg'}`}>
                      <h5 className="font-bold uppercase text-xs tracking-wider">{extraTitle}</h5>
                    </div>
                    <CardContent className="pt-6">
                      <Icon className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-green-800 mb-2">{title}</h4>
                      <p className="text-sm text-green-600">{desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MANTENIMIENTO SECTION */}
        <section id="mantenimiento" className="bg-green-100 py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Tipos de Mantenimiento Agrónico
              </h2>
              <p className="text-green-700 max-w-3xl mx-auto">
                Aseguramos la funcionalidad y prevenimos averías en toda la maquinaria y sistemas tecnológicos del campo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-green-600 bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-8 h-8 text-green-600" />
                    <div>
                      <CardTitle className="text-xl text-green-800">Mantenimiento Preventivo</CardTitle>
                      <Badge variant="outline" className="mt-2 border-green-600 text-green-600 bg-green-100">Programado</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {['Inspecciones de funcionamiento', 'Verificaciones de seguridad y calibración', 'Optimización de rendimiento y consumo'].map(item => (
                      <li key={item} className="flex items-center text-green-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Wrench className="w-8 h-8 text-green-500" />
                    <div>
                      <CardTitle className="text-xl text-green-800">Mantenimiento Correctivo</CardTitle>
                      <Badge variant="outline" className="mt-2 border-green-500 text-green-500 bg-green-100">Reactivo</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {['Diagnóstico avanzado de averías', 'Reparación especializada en campo', 'Reemplazo de componentes con piezas OEM'].map(item => (
                      <li key={item} className="flex items-center text-green-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SERVICIOS SECTION */}
        <section id="servicios" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Productos y Servicios en Agrónica
              </h2>
              <p className="text-green-700 max-w-4xl mx-auto">
                Aplicamos métodos científicos y mecánicos para resolver los desafíos de la agricultura moderna.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="group hover:shadow-lg hover:border-green-600 transition-all duration-300 border-green-200">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                      <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-green-800">{title}</CardTitle>
                    <CardDescription className="text-green-600">{desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA SECTION */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 py-16 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                    ¿Listo para optimizar su producción agrícola?
                </h2>
                <p className="text-xl text-green-100 mb-8">
                    Contamos con la experiencia y la tecnología para llevar su operación al siguiente nivel.
                </p>
                <div className="space-x-4">
                    <Button variant="secondary" size="lg" className="bg-white text-green-700 hover:bg-green-50">
                        Ver Casos de Éxito
                    </Button>
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-700">
                        Solicitar Cotización
                    </Button>
                </div>
            </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-green-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <img src={AgronicaLogo} alt="Logo Agrónica Lab" className="h-8 w-8" />
            <h4 className="text-xl font-bold">Agrónica Lab</h4>
          </div>
          <p className="text-green-100 mb-4 max-w-2xl mx-auto">
            Innovación y mecánica para una agricultura sostenible y eficiente.
          </p>
          <p className="text-sm text-green-200">
            © {new Date().getFullYear()} Agrónica Lab. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Agronica;