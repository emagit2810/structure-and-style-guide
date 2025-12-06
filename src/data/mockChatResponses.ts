export interface MockResponse {
    keywords: string[];
    answer: string;
    context?: string;
}

export const mockResponses: MockResponse[] = [
    {
        keywords: ["biomédica", "biomedica", "médico", "medico", "salud", "hospital"],
        answer: "La **Ingeniería Biomédica** en BVS Lab se enfoca en tecnologías sanitarias fundamentales. Ofrecemos servicios de:\n\n*   **Mantenimiento Preventivo y Correctivo** de equipos médicos.\n*   **Calibración y Metrología**.\n*   **Venta de repuestos y accesorios**.\n*   **Asesoría en adquisición de tecnología**.\n\nCumplimos con normativas internacionales y estándares de la OMS para garantizar la seguridad del paciente.",
        context: "Fuente: Página de Biomédica (BVS Lab)"
    },
    {
        keywords: ["electrónica", "electronica", "circuito", "pcb", "diseño"],
        answer: "Nuestro departamento de **Electrónica** se especializa en el diseño y reparación de sistemas electrónicos complejos.\n\nRealizamos:\n*   Diseño de PCBs multicapa.\n*   Programación de microcontroladores.\n*   Reparación de tarjetas industriales.\n*   Ingeniería inversa para sistemas obsoletos.",
        context: "Fuente: Servicios de Electrónica"
    },
    {
        keywords: ["producto", "tienda", "precio", "costo", "comprar", "venta", "equipo"],
        answer: "Contamos con una amplia gama de productos especializados. Algunos de nuestros destacados son:\n\n1.  **Montura Mecánica de Precisión** - $250,000\n2.  **Controlador Electrónico Láser** - $450,000\n3.  **Lentes Ópticas de Precisión** - $150,000\n4.  **Generador de Rayos X** - $2,500,000\n\nPuedes ver el catálogo completo en nuestra sección de **Equipos**.",
        context: "Fuente: Catálogo de Productos (Equipos.tsx)"
    },
    {
        keywords: ["agrónica", "agronica", "agro", "campo", "cultivo"],
        answer: "La **Agrónica** combina la agricultura con la electrónica y la automatización. Ofrecemos:\n\n*   Sistemas de riego automatizado.\n*   Monitoreo de cultivos con drones.\n*   Sensores de humedad y pH del suelo.\n*   Control climático para invernaderos.",
        context: "Fuente: Página de Agrónica"
    },
    {
        keywords: ["automatización", "automatizacion", "industrial", "plc", "control"],
        answer: "En **Automatización Industrial**, optimizamos tus procesos productivos mediante:\n\n*   Programación de PLCs y HMIs.\n*   Sistemas SCADA.\n*   Robótica industrial.\n*   Control de movimiento y variadores de frecuencia.",
        context: "Fuente: Página de Automática"
    },
    {
        keywords: ["mecanizado", "cnc", "pieza", "torno", "fresa"],
        answer: "Ofrecemos servicios de **Mecanizado de Precisión**:\n\n*   Torneado y Fresado CNC.\n*   Fabricación de piezas a medida.\n*   Prototipado rápido.\n*   Rectificado y acabados superficiales.",
        context: "Fuente: Página de Mecanizados"
    },
    {
        keywords: ["contacto", "telefono", "teléfono", "correo", "email", "ubicacion", "ubicación", "donde"],
        answer: "Puedes contactarnos a través de:\n\n*   📞 **Teléfono/WhatsApp:** +57 310 776 0659\n*   📧 **Email:** contactobvs@bvslab.com\n*   📍 **Ubicación:** K56 N 174B 65 Villa del Prado, Bogotá DC, COL\n\nEstamos atentos a tus requerimientos.",
        context: "Fuente: Footer y Header"
    }
];

export const getDefaultResponse = (): MockResponse => ({
    keywords: [],
    answer: "Gracias por tu consulta. Soy el asistente virtual de **BVS Lab**. \n\nPuedo ayudarte con información sobre:\n*   Ingeniería Biomédica\n*   Automatización Industrial\n*   Agrónica\n*   Mecanizado\n*   Nuestros Productos y Servicios\n\n¿En qué puedo ayudarte hoy?",
    context: "Asistente Virtual BVS Lab"
});

export const getMockResponse = (query: string): MockResponse => {
    const lowerQuery = query.toLowerCase();
    const match = mockResponses.find(r => r.keywords.some(k => lowerQuery.includes(k)));
    return match || getDefaultResponse();
};
