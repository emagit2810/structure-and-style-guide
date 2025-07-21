import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wrench, 
  ShoppingCart, 
  Shield, 
  Zap,
  ArrowRight,
  Settings,
  Stethoscope,
  Activity
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "VENTA DE EQUIPOS",
      description: "Equipos médicos de última generación",
      items: [
        "Equipos de Diagnóstico",
        "Tecnología Láser",
        "Sistemas de Monitoreo",
        "Equipos de Radiología",
        "Instrumentos Ópticos"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "REPARACIÓN",
      description: "Servicio técnico especializado",
      items: [
        "Diagnóstico Avanzado",
        "Reparación de Componentes",
        "Reemplazo de Partes",
        "Actualización de Software",
        "Pruebas de Funcionamiento"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "CALIBRACIÓN",
      description: "Precisión y exactitud garantizada",
      items: [
        "Calibración de Precisión",
        "Certificación Metrológica",
        "Ajustes de Parámetros",
        "Validación de Medidas",
        "Documentación Técnica"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "MANTENIMIENTO",
      description: "Contratos de mantenimiento preventivo",
      items: [
        "Mantenimiento Preventivo",
        "Inspecciones Regulares",
        "Limpieza Especializada",
        "Actualización de Componentes",
        "Soporte 24/7"
      ],
      color: "from-orange-500 to-orange-600"
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
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
              <CardContent className="p-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
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

                {/* CTA Link */}
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                >
                  Ver Detalles
                  <ArrowRight className="w-4 h-4" />
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