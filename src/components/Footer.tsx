import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xl">TM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">TechMedical</span>
                <span className="text-xs opacity-80">SOLUTIONS</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Líderes en servicios técnicos especializados para equipamiento médico. 
              Garantizamos precisión, confiabilidad y excelencia en cada proyecto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Venta de Equipos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reparación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Calibración</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mantenimiento</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+57 (1) 234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contacto@techmedical.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 TechMedical Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;