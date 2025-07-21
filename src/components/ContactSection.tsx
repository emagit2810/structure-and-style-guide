import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle 
} from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      info: "+57 (1) 234-5678",
      subtitle: "Línea directa 24/7"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "contacto@techmedical.com",
      subtitle: "Respuesta en 2 horas"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      info: "Bogotá, Colombia",
      subtitle: "Servicio nacional"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horarios",
      info: "Lun - Vie: 8AM - 6PM",
      subtitle: "Emergencias 24/7"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contacto Profesional
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos listos para atender sus necesidades técnicas. 
            Nuestro equipo de expertos está disponible para brindarle el mejor servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Información de Contacto
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <div className="text-primary">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-foreground font-medium">
                          {item.info}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <Card className="border-0 shadow-card bg-gradient-to-r from-primary-light to-secondary-light">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-4">
                  ¿Por qué elegirnos?
                </h4>
                <div className="space-y-3">
                  {[
                    "15+ años de experiencia comprobada",
                    "Técnicos certificados y especializados",
                    "Soporte técnico 24/7 para emergencias",
                    "Garantía completa en todos nuestros servicios",
                    "Cobertura nacional con respuesta rápida"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Solicitar Cotización
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre Completo
                      </label>
                      <Input 
                        placeholder="Su nombre completo"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Empresa
                      </label>
                      <Input 
                        placeholder="Nombre de la empresa"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input 
                        type="email"
                        placeholder="su.email@empresa.com"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Teléfono
                      </label>
                      <Input 
                        placeholder="+57 300 123 4567"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tipo de Servicio
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:border-primary bg-background">
                      <option>Seleccione un servicio</option>
                      <option>Venta de Equipos</option>
                      <option>Reparación y Mantenimiento</option>
                      <option>Calibración de Equipos</option>
                      <option>Consultoría Técnica</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Descripción del Proyecto
                    </label>
                    <Textarea 
                      placeholder="Describa brevemente sus necesidades y el tipo de equipamiento médico involucrado..."
                      className="min-h-[120px] border-border focus:border-primary"
                    />
                  </div>

                  <Button variant="cta" size="lg" className="w-full">
                    <Send className="w-5 h-5" />
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;