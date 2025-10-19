import { useState, type CSSProperties } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus, Trash2, Eye, Zap, Cog, Microscope, MessageCircle } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  // Mechanized
  { id: 1, name: "Montura Mecánica de Precisión", category: "mechanized", price: 250000, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3", description: "Montura ajustable para equipos ópticos" },
  { id: 2, name: "Engranajes de Alta Precisión", category: "mechanized", price: 180000, image: "https://images.unsplash.com/photo-1542376770-6b9a3b176b63?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b9c3f2f3e7f4b1ad8e2d6b9a1c2b3d4", description: "Engranajes para sistemas láser" },
  { id: 3, name: "Brazo Articulado Mecánico", category: "mechanized", price: 320000, image: "https://images.unsplash.com/photo-1581094644950-6f5d1b1f1c6f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9c3e4d2a6b7e1d8f2c4b5a6d7e8f9a0b", description: "Brazo para posicionamiento de equipos" },

  // Electronic
  { id: 4, name: "Controlador Electrónico Láser", category: "electronic", price: 450000, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=a1b2c3d4e5f67890123456789abcdef0", description: "Controlador para diodos láser" },
  { id: 5, name: "Fuente de Alimentación Estabilizada", category: "electronic", price: 280000, image: "https://images.unsplash.com/photo-1605902711622-cfb43c44367e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4a5b6c7d8e9f0123456789abcdef0123", description: "Fuente para equipos médicos" },
  { id: 6, name: "Módulo de Control Rayos X", category: "electronic", price: 550000, image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef1234567890abcdef1234567890", description: "Controlador para máquinas de rayos X" },

  // Optics
  { id: 7, name: "Lentes Ópticas de Precisión", category: "optics", price: 150000, image: "https://images.unsplash.com/photo-1541534401786-5c6c6dcc0b7e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=11223344556677889900aabbccddeeff", description: "Lentes para microscopios y equipos" },
  { id: 8, name: "Espejos Reflectantes Láser", category: "optics", price: 200000, image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=33445566778899aabbccddeeff001122", description: "Espejos para sistemas láser" },
  { id: 9, name: "Prismas Ópticos", category: "optics", price: 120000, image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3", description: "Prismas para equipos ópticos" },

  // Aesthetics (additional)
  { id: 10, name: "Láser de Depilación", category: "aesthetics", price: 1200000, image: "https://images.unsplash.com/photo-1536305030012-6a1f4b6a5d2b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=66778899aabbccddeeff001122334455", description: "Equipo láser para estética" },
  { id: 11, name: "Máquina de Radiofrecuencia", category: "aesthetics", price: 800000, image: "https://images.unsplash.com/photo-1582719478147-5f5f5f5f5f5f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=77889900aabbccddeeff001122334455", description: "Equipo de radiofrecuencia estética" },

  // Ray Machines (additional)
  { id: 12, name: "Generador de Rayos X", category: "ray-machines", price: 2500000, image: "https://images.unsplash.com/photo-1582719478147-8a8a8a8a8a8a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=889900aabbccddeeff00112233445566", description: "Generador para equipos de rayos X" },
  { id: 13, name: "Detector de Rayos X", category: "ray-machines", price: 900000, image: "https://images.unsplash.com/photo-1582719478147-9b9b9b9b9b9b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9900aabbccddeeff0011223344556677", description: "Detector digital para rayos X" },
];

const categories = [
  { key: 'all', label: 'Todos', icon: Eye },
  { key: 'mechanized', label: 'Mecánicos', icon: Cog },
  { key: 'electronic', label: 'Electrónicos', icon: Zap },
  { key: 'optics', label: 'Ópticos', icon: Microscope },
  { key: 'aesthetics', label: 'Estéticos', icon: Eye },
  { key: 'ray-machines', label: 'Rayos X', icon: Zap },
];

const heroButtonStyles: CSSProperties = {
  '--btn-bg': '#2563eb',
  '--btn-bg-hover': '#1d4ed8',
  '--btn-fg': '#f8fafc',
  '--btn-fg-hover': '#ffffff',
  '--btn-shadow-rest': '0 16px 32px rgba(37, 99, 235, 0.28)',
  '--btn-shadow-hover': '0 22px 40px rgba(29, 78, 216, 0.36)',
};

const categorySelectedStyles: CSSProperties = {
  '--btn-bg': '#1d4ed8',
  '--btn-bg-hover': '#1e40af',
  '--btn-fg': '#f8fafc',
  '--btn-fg-hover': '#ffffff',
  '--btn-shadow-rest': '0 12px 28px rgba(30, 64, 175, 0.32)',
  '--btn-shadow-hover': '0 18px 36px rgba(30, 64, 175, 0.38)',
};

const categoryUnselectedStyles: CSSProperties = {
  '--btn-bg': 'rgba(255, 255, 255, 0.92)',
  '--btn-bg-hover': 'rgba(226, 232, 240, 0.96)',
  '--btn-fg': '#1d4ed8',
  '--btn-fg-hover': '#1e3a8a',
  '--btn-secondary-border': 'rgba(148, 163, 184, 0.6)',
  '--btn-shadow-rest': '0 10px 24px rgba(30, 64, 175, 0.15)',
  '--btn-shadow-hover': '0 14px 30px rgba(30, 64, 175, 0.22)',
};

const addToCartButtonStyles: CSSProperties = {
  '--btn-bg': '#2563eb',
  '--btn-bg-hover': '#1d4ed8',
  '--btn-fg': '#f8fafc',
  '--btn-fg-hover': '#ffffff',
  '--btn-shadow-rest': '0 14px 30px rgba(37, 99, 235, 0.28)',
  '--btn-shadow-hover': '0 18px 38px rgba(29, 78, 216, 0.36)',
};

const Equipos = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Abre WhatsApp con un mensaje prellenado sobre el producto
  const enviarWhatsApp = (product: Product, numeroWhatsApp = "573134627810") => {
    const mensaje = `🛒 *Solicitud de Información*\n\n` +
                    `📦 *Producto:* ${product.name}\n` +
                    `💰 *Precio:* $${product.price.toLocaleString()}\n` +
                    `🏷️ *Categoría:* ${product.category}\n` +
                    `📝 *Descripción:* ${product.description}\n\n` +
                    `Me interesa este producto. ¿Podrían darme más información?`;

    const mensajeCodificado = encodeURIComponent(mensaje);
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-28 px-6 text-white flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tienda de Equipos <span className="text-blue-200">Ópticos y Médicos</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Productos especializados en óptica, estética, láseres y máquinas de rayos. 
            Tecnología de vanguardia para profesionales de la salud y la ciencia.
          </p>
          <Button size="lg" style={heroButtonStyles} className="px-8 text-lg">
            Explorar Productos
          </Button>
        </div>
      </section>

      <section aria-labelledby="equipos-intro" className="px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-card p-8">
          <h2 id="equipos-intro" className="text-3xl font-bold text-blue-900 mb-4 text-center">Equipos</h2>
          <p className="text-lg text-blue-700 leading-relaxed text-center">
            En <strong>Equipos</strong> encontrarás nuestra tienda de soluciones electrónicas para laboratorio e industria:
            analizadores, fuentes de poder, sensores, módulos de control y más. Todos los productos incluyen garantía y soporte
            técnico especializado.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Categorías de Productos</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(({ key, label, icon: Icon }) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "default" : "secondary"}
                onClick={() => setSelectedCategory(key)}
                style={selectedCategory === key ? categorySelectedStyles : categoryUnselectedStyles}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Nuestros Productos</h2>
            <p className="text-blue-600 max-w-3xl mx-auto">
              Selección premium de equipos y componentes para aplicaciones médicas, ópticas y científicas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow border-blue-200">
                <CardHeader className="p-0">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2 border-blue-300 text-blue-700">
                    {categories.find(c => c.key === product.category)?.label}
                  </Badge>
                  <CardTitle className="text-blue-800 mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-blue-600 mb-4">{product.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-700">${product.price.toLocaleString()}</span>
                    <Button
                      onClick={() => { addToCart(product); enviarWhatsApp(product); }}
                      variant="default"
                      style={addToCartButtonStyles}
                      className="flex items-center"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Agregar
                      <MessageCircle className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Cart Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4 flex items-center justify-center gap-2">
              <ShoppingCart className="w-8 h-8" />
              Carrito de Compras
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-blue-300 mx-auto mb-4" />
              <p className="text-blue-600 text-lg">Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {cart.map(item => (
                  <Card key={item.id} className="border-blue-200">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-blue-800">{item.name}</h3>
                          <p className="text-blue-600">${item.price.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="border-blue-300 text-blue-700"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="border-blue-300 text-blue-700"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="bg-white p-6 rounded-lg shadow border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Resumen del Pedido</h3>
                <div className="space-y-2 mb-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between text-blue-700">
                      <span>{item.name} x{item.quantity}</span>
                      <span>${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-blue-200 pt-4">
                  <div className="flex justify-between text-xl font-bold text-blue-800">
                    <span>Total:</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white">
                  Proceder al Pago
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipos;