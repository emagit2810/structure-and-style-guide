import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Users, Target, Lightbulb, Award, BrainCircuit, Cpu, HeartPulse } from "lucide-react";

// Imágenes
import blancaImg from '@/assets/nosotros/blanca-villegas.png';
import virgilioImg from '@/assets/nosotros/virgilio-silvera.png';
import andresImg from '@/assets/nosotros/andres-silvera.png';
import equipoImg from '@/assets/nosotros/equipo-completo.png';
import techBg from '@/assets/nosotros/tech-background.jpg';

const Nosotros = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative py-32 px-6 text-white flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={techBg}
                        alt="Tecnología de precisión"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 border-primary/50 backdrop-blur-sm">
                        Sobre Nosotros
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Ingeniería y Precisión <span className="text-primary">Al Servicio de la Industria</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Somos un equipo multidisciplinario dedicado a brindar soluciones tecnológicas integrales en biomedicina, electrónica y automatización.
                    </p>
                </div>
            </section>

            {/* Beneficios y Soluciones */}
            <section className="py-20 px-6 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Beneficios y Soluciones <span className="text-primary">Que Su Empresa Necesita</span>
                                </h2>
                                <div className="w-20 h-1.5 bg-primary rounded-full"></div>
                            </div>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">DVS Mecanizados de Precisión</strong> es la empresa con talento humano y herramientas para ejecutar los trabajos solicitados con requerimientos brindados por el cliente.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-primary/10 p-3 rounded-lg h-fit">
                                        <ShieldCheck className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Confidencialidad Garantizada</h3>
                                        <p className="text-muted-foreground">
                                            Todos los trabajos se ejecutan bajo documentos de una gran confianza con nuestros clientes. Con nosotros se tiene la ventaja de contar con la disposición de nuestro equipo de ingenieros y una constante retroalimentación para lograr mejorar el producto final.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="mt-1 bg-primary/10 p-3 rounded-lg h-fit">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Diseño y Precisión</h3>
                                        <p className="text-muted-foreground">
                                            Se realizan diseños, modelados y fabricación de elementos y/o sistemas utilizando Software CAD y Programación de Control Automatizado, con los mejores estándares de calidad.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
                            <img
                                src={equipoImg}
                                alt="Equipo DVS Mecanizados"
                                className="relative rounded-2xl shadow-2xl w-full object-cover border border-border/50"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border hidden md:block">
                                <div className="flex items-center gap-4">
                                    <Users className="w-10 h-10 text-primary" />
                                    <div>
                                        <p className="font-bold text-2xl text-foreground">10+</p>
                                        <p className="text-sm text-muted-foreground">Años de Experiencia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misión y Visión */}
            <section className="py-20 px-6 bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-card border-primary/10 hover:border-primary/30 transition-colors">
                            <CardHeader>
                                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                                <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    Proveer soluciones tecnológicas de vanguardia en ingeniería biomédica, electrónica y mecatrónica, impulsando el desarrollo de la industria y el sector salud mediante servicios de alta precisión, innovación constante y un compromiso inquebrantable con la calidad y la satisfacción del cliente.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card border-primary/10 hover:border-primary/30 transition-colors">
                            <CardHeader>
                                <Award className="w-12 h-12 text-primary mb-4" />
                                <CardTitle className="text-2xl">Nuestra Visión</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    Consolidarnos como líderes regionales en soluciones de ingeniería de precisión y tecnología sanitaria, reconocidos por nuestra capacidad de innovación, excelencia técnica y contribución al avance tecnológico de nuestros clientes y aliados estratégicos.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Equipo Directivo */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Nuestro Equipo Directivo
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Profesionales altamente calificados liderando la innovación tecnológica
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Ing. Blanca Villegas */}
                        <Card className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="aspect-[4/5] overflow-hidden bg-muted">
                                <img
                                    src={blancaImg}
                                    alt="Ing. Blanca Villegas"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                                    <HeartPulse className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl">Ing. Blanca Villegas</CardTitle>
                                <CardDescription className="text-primary font-medium">Ingeniera Biomédica</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center text-sm text-muted-foreground">
                                Especialista en tecnologías sanitarias y gestión de equipos médicos.
                            </CardContent>
                        </Card>

                        {/* Ing. Virgilio Silvera */}
                        <Card className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="aspect-[4/5] overflow-hidden bg-muted">
                                <img
                                    src={virgilioImg}
                                    alt="Ing. Virgilio Silvera"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                                    <Cpu className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl">Ing. Virgilio Silvera</CardTitle>
                                <CardDescription className="text-primary font-medium">Ingeniero Electrónico</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center text-sm text-muted-foreground">
                                Experto en sistemas electrónicos, automatización y control industrial.
                            </CardContent>
                        </Card>

                        {/* Ing. Andrés Silvera */}
                        <Card className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="aspect-[4/5] overflow-hidden bg-muted">
                                <img
                                    src={andresImg}
                                    alt="Ing. Andrés Silvera"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
                                    <BrainCircuit className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl">Ing. Andrés Silvera</CardTitle>
                                <CardDescription className="text-primary font-medium">Ingeniero Mecatrónico</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center text-sm text-muted-foreground">
                                Especialista en integración de sistemas mecánicos, electrónicos y de control.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 px-6 bg-primary text-primary-foreground">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">¿Listo para trabajar con expertos?</h2>
                    <p className="text-xl opacity-90 mb-8">
                        Contáctenos hoy mismo para discutir cómo podemos ayudarle a alcanzar sus objetivos con precisión y calidad.
                    </p>
                    <Button variant="secondary" size="lg" className="font-semibold">
                        Contactar Ahora
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Nosotros;