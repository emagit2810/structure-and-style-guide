import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '@/assets/Nuevo Enzo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isPinned, setIsPinned] = useState(false);
    
    const headerRef = useRef(null);
    const navRef = useRef(null);
    
    // --- INICIO DE MODIFICACIONES ---

    // Usaremos un temporizador para gestionar el hover entre elementos adyacentes
    const hoverTimeoutRef = useRef(null);

    // Función para activar el hover. Se usará en las "zonas calientes".
    const handleMouseEnter = () => {
        // Si hay un temporizador para cerrar, lo cancelamos.
        clearTimeout(hoverTimeoutRef.current);
        setIsHovering(true);
    };
    
    // Función para desactivar el hover con un pequeño retardo.
    const handleMouseLeave = () => {
        // Creamos un temporizador para dar tiempo al usuario a moverse al panel.
        hoverTimeoutRef.current = setTimeout(() => {
            setIsHovering(false);
        }, 100); // 100ms de retardo
    };
    
    // --- FIN DE MODIFICACIONES ---

    const isContactPanelVisible = isHovering || isPinned;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                if (isPinned) {
                    setIsPinned(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPinned]);

    const handleHeaderClick = (e) => {
        if (navRef.current && navRef.current.contains(e.target)) {
            return;
        }
        setIsPinned(prev => !prev);
    }
    
    // El componente DropdownMenu se mantiene intacto para preservar sus animaciones y funcionalidad.
    const DropdownMenu = ({ label, items }) => {
        const [open, setOpen] = useState(false);
        const menuRef = useRef(null);

        useEffect(() => {
            const handleClickOutside = (event) => {
                if (headerRef.current && headerRef.current.contains(event.target)) {
                    // Si el clic fue en el header pero fuera de este menú, cerrar.
                    if (menuRef.current && !menuRef.current.contains(event.target)) {
                         setOpen(false);
                    }
                } else {
                    // Si el clic fue totalmente fuera del header, cerrar.
                    setOpen(false);
                }
            };
            if (open) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [open]);

        return (
            <div className="relative" ref={menuRef}>
                <button
                    className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300 font-medium focus:outline-none"
                    onClick={(e) => {
                        e.stopPropagation(); 
                        setOpen((prev) => !prev);
                    }}
                    aria-haspopup="true"
                    aria-expanded={open}
                >
                    <span>{label}</span>
                    <svg className={`w-4 h-4 ml-1 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {open && (
                    <div className="fixed left-0 top-[64px] w-full bg-white border-t border-border shadow-lg z-[60] animate-fade-in flex justify-center">
                        <ul className="flex flex-row w-full max-w-6xl mx-auto divide-x divide-border">
                            {items.map((item) => (
                                <li key={item.label} className="flex-1 min-w-0 group">
                                    <a
                                        href={item.href}
                                        className="block px-8 py-6 text-foreground h-full relative overflow-hidden transition-colors duration-200"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span
                                            className="absolute inset-0 left-0 w-0 group-hover:w-full h-full transition-all duration-300 bg-blue-100"
                                            style={{ zIndex: -1 }}
                                        ></span>
                                        <span className="relative z-10 block font-semibold text-lg mb-2">{item.label}</span>
                                        <span className="relative z-10 block text-sm text-muted-foreground leading-snug">
                                            {item.label === 'Agrónica' && 'Soluciones innovadoras para la agricultura moderna y sostenible.'}
                                            {item.label === 'Automatización' && 'Implementación de sistemas automáticos para optimizar procesos industriales.'}
                                            {item.label === 'Biomédica' && 'Tecnología avanzada para el sector salud y equipos médicos.'}
                                            {item.label === 'Mecanizado' && 'Servicios de manufactura y mecanizado de alta precisión.'}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    const navItems = [
        { label: 'Consulta', href: '#consultation' },
        { label: 'Servicios', href: '#services' },
        { label: 'Equipos', href: '#equipment' },
        { label: 'Nosotros', href: '#about' },
        { label: 'Blog', href: '#blog' },
    ];

    return (
        <header
            ref={headerRef}
            className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50"
        >
            <div className="container mx-auto px-4">
                <div
                    className="flex items-center justify-between h-16"
                    onClick={handleHeaderClick}
                >
                    {/* ZONA CALIENTE 1: LOGO */}
                    <div 
                        className="flex items-center space-x-2"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                            <img src={logoImg} alt="bvs lab logo" className="w-10 h-10" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg text-foreground">BVS LAB</span>
                            <span className="text-xs text-muted-foreground">ingenieria para todos</span>
                        </div>
                    </div>

                    {/* ZONA EXCLUIDA: NAVEGACIÓN */}
                    <nav ref={navRef} className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) =>
                            item.label === 'Servicios' ? (
                                <DropdownMenu
                                    key={item.label}
                                    label={item.label}
                                    items={[
                                        { label: 'Agrónica', href: '#agronica' },
                                        { label: 'Automatización', href: '#automatizacion' },
                                        { label: 'Biomédica', href: '/bio' },
                                        { label: 'Mecanizado', href: '#mecanizado' },
                                    ]}
                                />
                            ) : (
                                <a key={item.label} href={item.href} className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
                                    {item.label}
                                </a>
                            )
                        )}
                    </nav>

                    {/* ZONA CALIENTE 2: BOTONES CTA */}
                    <div 
                        className="hidden md:flex items-center space-x-4"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Button variant="outline" size="sm" className=" bg-white/90 hover:bg-secondary "  >
                            <Phone className="w-4 h-4 mr-2" />
                            Contacto
                        </Button>
                        <Button variant="cta" size="sm">
                            Solicitar Cotización
                        </Button>
                    </div>

                    {/* Menú Móvil (sin cambios) */}
                    <button
                        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                        onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && ( <div className="md:hidden"> {/* ... Menú móvil ... */} </div> )}
            </div>
            
            {/* PANEL DE CONTACTO */}
            {isContactPanelVisible && (
                <div
                    className="absolute top-full left-0 w-full bg-slate-50 border-t border-border shadow-md transition-opacity duration-300 animate-fade-in-down"
                    // Estas líneas son clave para que el panel no se cierre al mover el mouse sobre él.
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="container mx-auto px-4 py-3 flex items-center justify-center space-x-6 text-sm text-slate-700">
                        <div className="flex items-center space-x-2">
                            <Phone size={16} className="text-primary" />
                            <a href="tel:+573107760659" className="hover:underline">+57 310 776 0659</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail size={16} className="text-primary" />
                            <a href="mailto:contactobvs@bvslab.com" className="hover:underline">contactobvs@bvslab.com</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin size={16} className="text-primary" />
                            <span>K56 N 174B 65 Villa del Prado, Bogotá DC, COL</span>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;