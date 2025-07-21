import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Stethoscope, 
  Activity, 
  Eye, 
  Zap,
  ArrowRight 
} from 'lucide-react';
import workshopImage from '@/assets/workshop-overview.jpg';

const EquipmentSection = () => {
  const equipmentCategories = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Equipos Hospitalarios",
      description: "Tecnología médica para hospitales y clínicas",
      equipment: [
        "Equipos de Rayos X",
        "Monitores de Signos Vitales",
        "Ventiladores Mecánicos",
        "Desfibriladores",
        "Ultrasonido"
      ],
      color: "bg-blue-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Equipos Estéticos",
      description: "Tecnología avanzada para medicina estética",
      equipment: [
        "Láser de CO2",
        "Radiofrecuencia",
        "IPL (Luz Pulsada)",
        "Cavitación",
        "Criolipolisis"
      ],
      color: "bg-purple-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Equipos Ópticos",
      description: "Instrumentos de precisión para optometría",
      equipment: [
        "Autorefractómetros",
        "Forópteros",
        "Tonómetros",
        "Lámparas de Hendidura",
        "Campímetros"
      ],
      color: "bg-green-500"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Equipos de Laboratorio",
      description: "Instrumentos analíticos y de diagnóstico",
      equipment: [
        "Analizadores Bioquímicos",
        "Microscopios",
        "Centrífugas",
        "Espectrofotómetros",
        "Contadores Celulares"
      ],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Especialidades por Equipo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra experiencia abarca múltiples sectores de la tecnología médica, 
            garantizando servicios especializados para cada tipo de equipamiento
          </p>
        </div>

        {/* Workshop Image */}
        <div className="mb-16 rounded-xl overflow-hidden shadow-elegant">
          <img
            src={workshopImage}
            alt="Modern medical equipment workshop"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {equipmentCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className={`${category.color} w-16 h-16 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>

                  <div className="flex-1">
                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {category.description}
                    </p>

                    {/* Equipment List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {category.equipment.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-sm text-foreground">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors duration-300"
                    >
                      Ver Catálogo
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-light to-secondary-light rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿No encuentra su equipo en la lista?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contamos con experiencia en una amplia variedad de equipos médicos. 
              Contáctenos para consultar sobre su equipamiento específico.
            </p>
            <Button variant="hero" size="lg">
              Consultar Equipamiento
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;