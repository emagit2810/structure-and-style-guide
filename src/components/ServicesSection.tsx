import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Importación de las nuevas imágenes para los servicios
import logoBio from '@/assets/logobio1.png';
import logoAgro from '@/assets/logoagro.png';
import logoAuto from '@/assets/logoautomat1.png';
import logoMeca from '@/assets/logomeca1.png';

const ServicesSection = () => {
  const services = [
    {
      imgSrc: logoBio,
      title: "Ingeniería Biomédica",
      description: "Soluciones de alta precisión y mantenimiento para equipos médicos y de laboratorio, garantizando normatividad y seguridad del paciente.",
      items: [
        "Mantenimiento de equipos hospitalarios",
        "Calibración certificada de dispositivos",
        "Diseño de prótesis y órtesis a medida",
        "Reparación de equipos de diagnóstico",
        "Consultoría en regulación sanitaria"
      ],
      color: "from-blue-500 to-blue-600" // Azul
    },
    {
      imgSrc: logoAgro,
      title: "Agrónica y Agricultura de Precisión",
      description: "Optimice sus cultivos con tecnología de punta. Implementamos sistemas de monitoreo y automatización para una agricultura eficiente y sostenible.",
      items: [
        "Sensores de humedad y nutrientes",
        "Drones para monitoreo de cultivos",
        "Sistemas de riego automatizado",
        "Análisis de datos agrícolas (Big Data)",
        "Maquinaria agrícola inteligente"
      ],
      color: "from-green-500 to-green-600" // Verde
    },
    {
      imgSrc: logoAuto,
      title: "Automatización Industrial",
      description: "Modernice sus procesos de producción con sistemas de control y automatización industrial (PLC, HMI) para máxima eficiencia y productividad.",
      items: [
        "Programación de PLC y HMI",
        "Diseño de tableros de control",
        "Integración de sistemas robóticos",
        "Optimización de líneas de producción",
        "Mantenimiento de sistemas automáticos"
      ],
      color: "from-yellow-400 to-yellow-500" // Amarillo
    },
    {
      imgSrc: logoMeca,
      title: "Mecanizados de Precisión",
      description: "Fabricación de piezas y componentes con tolerancias exactas mediante CNC. Prototipado rápido y producción en serie para diversas industrias.",
      items: [
        "Torneado y fresado CNC",
        "Corte por láser y chorro de agua",
        "Fabricación de prototipos funcionales",
        "Producción de piezas en serie",
        "Diseño y modelado CAD/CAM"
      ],
      color: "from-amber-600 to-amber-700" // Marrón (usando amber)
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones integrales de biomecánica y maquinado de precisión adaptadas 
            a las necesidades específicas de su equipamiento médico
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="group">
              <CardContent className="p-6">
                {/* Imagen cuadrada en lugar de icono circular */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 p-2`}>
                  <img src={service.imgSrc} alt={`Logo para servicio de ${service.title}`} className="w-full h-full object-contain" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Service Items */}
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA Link: usar `Link` para navegar a las rutas definidas en App.tsx */}
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                >
                  {/* Seleccionar la ruta según el título del servicio */}
                  {service.title === "Ingeniería Biomédica" ? (
                    <Link to="/bio">
                      Ver Detalles
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : service.title.includes("Agrónica") || service.title.includes("Agrónica") || service.title === "Agrónica y Agricultura de Precisión" || service.title === "Agrónica" ? (
                    <Link to="/agro">
                      Ver Detalles
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : service.title.includes("Automatización") || service.title === "Automatización Industrial" || service.title === "Automatización" ? (
                    <Link to="/auto">
                      Ver Detalles
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link to="#">
                      Ver Detalles
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Solicitar Consulta Técnica
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;