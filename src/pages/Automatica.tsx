import { useState, useEffect, useRef } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Settings, Wrench, Clock, Award, Cog, Cpu, Zap, Radio, Wifi, Activity, Gauge, ChevronLeft, ChevronRight, Plug } from "lucide-react";
import automationHero from "@/assets/HeroAutomat.jpg";
import camaraAnecoica from "@/assets/camara-anecoica.jpg";
import emcStimulator from "@/assets/emc-stimulator.png";
import emcAntennaTest from "@/assets/emc-antenna-test.png";
import emcDeviceTest from "@/assets/emc-device-test.png";
import emcFieldTest from "@/assets/emc-field-test.png";

// Imágenes para el carrusel actualizadas
const carouselImages = [
  { src: camaraAnecoica, alt: "Cámara anecoica para ensayos de EMC", title: "Laboratorio Especializado" },
  { src: emcAntennaTest, alt: "Pruebas de antena y espectro", title: "Análisis de Espectro" },
  { src: emcStimulator, alt: "Ensayos de inmunidad conducida", title: "Pruebas de Inmunidad" },
  { src: emcDeviceTest, alt: "Verificación de dispositivos", title: "Validación de Equipos" },
  { src: emcFieldTest, alt: "Mediciones en campo", title: "Ensayos In-Situ" },
];

const diagnosticCards = [
  { icon: Radio, title: 'Emisión Radiada', desc: 'Medición de campo electromagnético', delay: 'delay-100', extraTitle: 'MÁS DETALLE', extraDesc: 'Análisis de emisiones electromagnéticas radiadas.' },
  { icon: Wifi, title: 'Emisión Conducida', desc: 'Análisis de corrientes parásitas', delay: 'delay-200', extraTitle: 'INFO EXTRA', extraDesc: 'Medición de perturbaciones conducidas en cables.' },
  { icon: Activity, title: 'Inmunidad Radiada', desc: 'Pruebas de susceptibilidad', delay: 'delay-350', extraTitle: 'VER PLANES', extraDesc: 'Verificación de robustez ante campos electromagnéticos.' },
  { icon: Zap, title: 'Inmunidad Conducida', desc: 'Resistencia a perturbaciones', delay: 'delay-[550ms]', extraTitle: 'CONOCER MÁS', extraDesc: 'Ensayos de inmunidad a transitorios y ESD.' }
];

const Automatica = () => {
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const cardsRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

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
            alt="Laboratorio de Compatibilidad Electromagnética"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-yellow-400">Compatibilidad Electromagnética</span><br />
            <span className="text-orange-400">y Electrónica</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            BVSLab SAS brinda Servicio de Ensayos en Compatibilidad Electromagnética y Seguridad Eléctrica
            bajo normativas Internacionales IEC, EN, JIS entre otras para verificar y validar
            comportamientos de los equipos eléctricos o electrónicos.
          </p>
          <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold">
            Solicitar Consulta Técnica
          </Button>
        </div>
      </section>

      {/* Qué es la EMC */}
      <section id="automatizacion" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Qué es la Compatibilidad Electromagnética (EMC)?
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                La CEM se ocupa de dos aspectos fundamentales para garantizar la coexistencia de equipos electrónicos:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 bg-yellow-500 rounded-full mr-3 shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Garantizar que otros usuarios</strong> del espectro radioeléctrico y el suministro eléctrico público no se vean afectados por el funcionamiento del equipo.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full mr-3 shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Asegurar que el funcionamiento</strong> de dicho equipo no se vea afectado de forma inaceptable por interferencias externas de otros equipos cercanos.
                  </p>
                </li>
              </ul>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <Award className="w-5 h-5 text-yellow-600 mr-2" />
                  Clasificación de Fenómenos
                </h4>
                <p className="text-gray-600 text-sm">
                  Para efectos prácticos, clasificamos los posibles fenómenos en dos grandes grupos: <strong>Emisiones</strong> (lo que el equipo genera) e <strong>Inmunidad</strong> (lo que el equipo soporta).
                </p>
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

      {/* Image Carousel Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nuestro Laboratorio
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Instalaciones equipadas con tecnología de punta para ensayos de compatibilidad electromagnética y seguridad eléctrica
            </p>
          </div>

          {/* Custom Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-black">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((image, index) => (
                  <div key={index} className="min-w-full relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[500px] object-contain bg-black"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                      <p className="text-gray-200">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-6">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                      ? 'bg-yellow-500 w-8'
                      : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Ensayos Detallados */}
      <section className="bg-yellow-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Clasificación de Ensayos EMC
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Realizamos ensayos completos cubriendo tanto emisiones como inmunidad en diferentes rangos de frecuencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* EMISIONES */}
            <Card className="border-t-4 border-t-yellow-500 bg-white shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Radio className="w-8 h-8 text-yellow-500" />
                  <CardTitle className="text-2xl text-gray-800">EMISIONES</CardTitle>
                </div>
                <CardDescription>Fenómenos generados por el equipo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Wifi className="w-4 h-4 mr-2 text-yellow-600" />
                      En Frecuencias de Radio
                    </h4>
                    <ul className="space-y-1 ml-6 list-disc text-gray-600 text-sm">
                      <li>RF radiado</li>
                      <li>RF conducido, en el puerto de potencia</li>
                      <li>RF conducido, en otros puertos (ej. comunicaciones)</li>
                      <li>Transitorios (electrodomésticos)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Activity className="w-4 h-4 mr-2 text-yellow-600" />
                      En Baja Frecuencia
                    </h4>
                    <ul className="space-y-1 ml-6 list-disc text-gray-600 text-sm">
                      <li>Campos magnéticos radiados</li>
                      <li>Campos eléctricos radiados</li>
                      <li>Disturbios conducidos en frecuencia de audio</li>
                      <li>Perturbaciones en suministro: armónicos y parpadeo</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* INMUNIDAD */}
            <Card className="border-t-4 border-t-orange-500 bg-white shadow-md hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <ShieldCheck className="w-8 h-8 text-orange-500" />
                  <CardTitle className="text-2xl text-gray-800">INMUNIDAD</CardTitle>
                </div>
                <CardDescription>Capacidad de soportar perturbaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Radio className="w-4 h-4 mr-2 text-orange-600" />
                      Ante Frecuencias de Radio
                    </h4>
                    <ul className="space-y-1 ml-6 list-disc text-gray-600 text-sm">
                      <li>Inmunidad conducida (IEC 61000-4-6)</li>
                      <li>Inmunidad Radiada (IEC 61000-4-3)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-orange-600" />
                      Ante Eventos Transitorios
                    </h4>
                    <ul className="space-y-1 ml-6 list-disc text-gray-600 text-sm">
                      <li>Descargas electrostáticas (ESD) - IEC 61000-4-2</li>
                      <li>Variaciones en fuente de potencia - IEC 61000-4-11</li>
                      <li>Aumento de fuente de potencia (SURGE) - IEC 61000-4-5</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Activity className="w-4 h-4 mr-2 text-orange-600" />
                      Ante Bajas Frecuencias
                    </h4>
                    <ul className="space-y-1 ml-6 list-disc text-gray-600 text-sm">
                      <li>Inmunidad a frecuencias de 60 Hz (IEC 61000-4-8)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seguridad Eléctrica */}
      <section id="seguridad-electrica" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Plug className="w-8 h-8 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Ensayos en Seguridad Eléctrica
                </h2>
              </div>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Para evaluar la seguridad eléctrica en equipos médicos, se debe realizar una serie de pruebas usando un analizador de seguridad eléctrica, cumpliendo con normativas como la <strong>IEC 60601</strong> o la <strong>IEC 62353</strong>.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Las pruebas incluyen la inspección visual, la medición de la resistencia de tierra de protección, la resistencia de aislamiento y las corrientes de fuga (tanto al paciente como a chasis), y los resultados deben ser documentados detalladamente para asegurar que están dentro de los límites permitidos.
              </p>

              <Button className="bg-gray-900 text-white hover:bg-gray-800">
                Solicitar Ensayo de Seguridad
              </Button>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4 border-gray-200">
                Ensayos que se realizan:
              </h3>
              <ul className="space-y-4">
                {[
                  'Inspección Visual y Resistencia de Tierra',
                  'Pruebas de corrientes de fuga',
                  'Corrientes de fuga del equipo',
                  'Corrientes de fuga a partes aplicadas al paciente',
                  'Pruebas aplicando altas tensiones'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <ShieldCheck className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-yellow-500 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            ¿Necesita Servicios de Compatibilidad Electromagnética?
          </h2>
          <p className="text-xl text-gray-800 mb-8 opacity-90">
            Contamos con la experiencia y certificaciones necesarias para garantizar que sus equipos cumplan con las normativas internacionales
          </p>
          <div className="space-x-4">
            <Button variant="outline" size="lg" className="bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 border-gray-300 font-semibold">
              Ver Casos de Estudio
            </Button>
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Automatica;