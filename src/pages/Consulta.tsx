import { useState, useEffect, useRef } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    MessageSquare,
    Search,
    Cpu,
    Globe,
    Database,
    Layers,
    Send,
    Trash2,
    Download,
    Menu,
    X,
    Copy,
    Save,
    CheckCircle2,
    AlertCircle
} from "lucide-react";
import { getMockResponse } from '@/data/mockChatResponses';
import logoImg from '@/assets/bvslab-logo-consulta.png';

// Tipos
interface Message {
    id: string;
    role: 'user' | 'agent';
    content: string;
    mode?: string;
    timestamp: Date;
}

interface LibraryItem {
    id: number;
    query: string;
    mode: string;
    content: string;
    timestamp: string;
}

const Consulta = () => {
    // Estados
    const [query, setQuery] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'agent',
            content: '¡Hola! Soy el asistente de investigación de BVS Lab. Selecciona un modo y escribe tu consulta sobre nuestros servicios de Biomédica, Automatización, Agrónica o Equipos.',
            timestamp: new Date()
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [currentMode, setCurrentMode] = useState('internet_search');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [library, setLibrary] = useState<LibraryItem[]>([]);
    const [librarySearch, setLibrarySearch] = useState('');
    const [libraryFilter, setLibraryFilter] = useState('all');
    const [previewItem, setPreviewItem] = useState<LibraryItem | null>(null);

    const chatEndRef = useRef<HTMLDivElement>(null);

    // Cargar librería al inicio
    useEffect(() => {
        const saved = localStorage.getItem('researchLibrary');
        if (saved) {
            try {
                setLibrary(JSON.parse(saved));
            } catch (e) {
                console.error("Error parsing library", e);
            }
        }
    }, []);

    // Guardar librería cuando cambia
    useEffect(() => {
        localStorage.setItem('researchLibrary', JSON.stringify(library));
    }, [library]);

    // Scroll al fondo del chat
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // Manejadores
    const handleSendMessage = async () => {
        if (!query.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: query,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setQuery('');
        setIsTyping(true);

        // Simular delay de red
        setTimeout(() => {
            const response = getMockResponse(userMsg.content);

            const agentMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'agent',
                content: response.answer + (response.context ? `\n\n### 🔍 Contexto:\n${response.context}` : ''),
                mode: currentMode,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, agentMsg]);
            setIsTyping(false);

            // Auto-guardar en librería
            saveToLibrary(userMsg.content, currentMode, agentMsg.content);
        }, 1500);
    };

    const saveToLibrary = (query: string, mode: string, content: string) => {
        const newItem: LibraryItem = {
            id: Date.now(),
            query,
            mode,
            content,
            timestamp: new Date().toISOString()
        };
        setLibrary(prev => [newItem, ...prev]);
    };

    const clearChat = () => {
        setMessages([{
            id: Date.now().toString(),
            role: 'agent',
            content: 'Chat limpiado. ¿En qué más puedo ayudarte?',
            timestamp: new Date()
        }]);
    };

    const clearLibrary = () => setLibrary([]);

    const exportLibrary = () => {
        const data = JSON.stringify(library, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'bvslab-research-library.json';
        a.click();
    };

    const filteredLibrary = library.filter(item => {
        const matchesSearch = item.query.toLowerCase().includes(librarySearch.toLowerCase());
        const matchesFilter = libraryFilter === 'all' || item.mode === libraryFilter;
        return matchesSearch && matchesFilter;
    });

    // Renderizado de Markdown simple
    const renderMarkdown = (text: string) => {
        return text.split('\n').map((line, i) => {
            if (line.startsWith('### ')) return <h4 key={i} className="text-blue-300 font-medium mt-3 mb-1">{line.replace('### ', '')}</h4>;
            if (line.startsWith('* ')) return <li key={i} className="ml-4 list-disc text-slate-300">{line.replace('* ', '')}</li>;
            if (line.startsWith('1. ')) return <li key={i} className="ml-4 list-decimal text-slate-300">{line.replace(/^\d+\. /, '')}</li>;
            if (line.trim() === '') return <br key={i} />;

            // Negritas simples (**text**)
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
                <p key={i} className="mb-1 text-slate-300 leading-relaxed">
                    {parts.map((part, j) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
                        }
                        return part;
                    })}
                </p>
            );
        });
    };

    const modeColors: Record<string, string> = {
        'rag_search': 'from-blue-600 to-indigo-600',
        'internet_search': 'from-cyan-600 to-blue-600',
        'llm_only': 'from-violet-600 to-purple-600',
        'both': 'from-emerald-600 to-teal-600'
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500/30">
            <Header />

            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[80px] animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 flex h-[calc(100vh-64px)] pt-0">

                {/* Sidebar */}
                <aside
                    className={`
            fixed md:relative z-30 h-full bg-slate-900/90 backdrop-blur-xl border-r border-slate-800 
            transition-all duration-300 ease-in-out flex flex-col
            ${sidebarOpen ? 'w-80 translate-x-0' : 'w-0 -translate-x-full md:w-0 md:translate-x-0 overflow-hidden'}
          `}
                >
                    <div className="p-4 border-b border-slate-800">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-900/20">
                                <Database className="w-5 h-5 text-white" />
                            </div>
                            <div className="overflow-hidden">
                                <h2 className="font-bold text-white whitespace-nowrap">Biblioteca</h2>
                                <p className="text-xs text-slate-400 whitespace-nowrap">Historial de consultas</p>
                            </div>
                        </div>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <Input
                                value={librarySearch}
                                onChange={(e) => setLibrarySearch(e.target.value)}
                                className="w-full pl-9 bg-slate-800/50 border-slate-700 text-sm text-white placeholder:text-slate-500 focus:ring-blue-500/50"
                                placeholder="Buscar..."
                            />
                        </div>
                    </div>

                    <div className="px-4 py-3 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
                        <span className="text-xs text-slate-400">Total: <span className="text-blue-400 font-semibold">{filteredLibrary.length}</span></span>
                        <div className="flex gap-2">
                            <button onClick={exportLibrary} className="p-1.5 text-slate-400 hover:text-emerald-400 transition-colors" title="Exportar">
                                <Download className="w-4 h-4" />
                            </button>
                            <button onClick={clearLibrary} className="p-1.5 text-slate-400 hover:text-red-400 transition-colors" title="Limpiar">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="px-4 py-2 border-b border-slate-800 flex gap-2 overflow-x-auto no-scrollbar">
                        {[
                            { id: 'all', label: 'Todos' },
                            { id: 'rag_search', label: 'RAG' },
                            { id: 'internet_search', label: 'Web' },
                            { id: 'llm_only', label: 'LLM' }
                        ].map(mode => (
                            <button
                                key={mode.id}
                                onClick={() => setLibraryFilter(mode.id)}
                                className={`
                  text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap transition-colors
                  ${libraryFilter === mode.id
                                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                        : 'bg-slate-800 text-slate-400 border border-transparent hover:bg-slate-700'}
                `}
                            >
                                {mode.label}
                            </button>
                        ))}
                    </div>

                    <ScrollArea className="flex-1 p-3">
                        <div className="space-y-2">
                            {filteredLibrary.length === 0 ? (
                                <div className="text-center py-8 px-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mx-auto mb-3">
                                        <MessageSquare className="w-6 h-6 text-slate-600" />
                                    </div>
                                    <p className="text-slate-500 text-xs">No hay consultas guardadas</p>
                                </div>
                            ) : (
                                filteredLibrary.map(item => (
                                    <div
                                        key={item.id}
                                        onClick={() => setPreviewItem(item)}
                                        className="p-3 rounded-lg bg-slate-800/30 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-800/60 cursor-pointer transition-all group"
                                    >
                                        <p className="text-sm text-slate-200 font-medium line-clamp-2 mb-1.5">{item.query}</p>
                                        <div className="flex items-center justify-between">
                                            <span className={`text-[10px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-700`}>
                                                {item.mode === 'internet_search' ? 'WEB' : item.mode === 'rag_search' ? 'RAG' : 'LLM'}
                                            </span>
                                            <span className="text-[10px] text-slate-500">
                                                {new Date(item.timestamp).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </ScrollArea>
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col relative w-full overflow-hidden">
                    {/* Toggle Sidebar Button (Mobile/Desktop) */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className={`
              absolute top-4 z-20 p-2 rounded-r-lg bg-slate-800/80 border border-l-0 border-slate-700 text-slate-400 hover:text-white transition-all duration-300
              ${sidebarOpen ? 'left-0 md:hidden' : 'left-0'}
            `}
                    >
                        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>

                    <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
                        <div className="max-w-4xl mx-auto">

                            {/* Header Title */}
                            <div className="text-center mb-8 mt-4">
                                <div className="inline-flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                        <Cpu className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                                            BVS Research Agent
                                        </h1>
                                        <p className="text-slate-400 text-sm">Asistente Técnico Especializado</p>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                        <span className="text-xs text-slate-300 font-mono">System Online</span>
                                    </div>
                                </div>
                            </div>

                            {/* Mode Selection */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                                {[
                                    { id: 'rag_search', label: 'RAG Search', icon: Database, desc: 'Docs Locales', color: 'text-blue-400' },
                                    { id: 'internet_search', label: 'Web Search', icon: Globe, desc: 'Internet en vivo', color: 'text-cyan-400' },
                                    { id: 'llm_only', label: 'LLM Only', icon: Cpu, desc: 'Solo Modelo', color: 'text-violet-400' },
                                    { id: 'both', label: 'Deep Research', icon: Layers, desc: 'Completo', color: 'text-emerald-400' }
                                ].map((mode) => (
                                    <button
                                        key={mode.id}
                                        onClick={() => setCurrentMode(mode.id)}
                                        className={`
                      relative p-3 rounded-xl border text-left transition-all duration-200 group overflow-hidden
                      ${currentMode === mode.id
                                                ? 'bg-slate-800/80 border-blue-500/50 shadow-lg shadow-blue-900/10'
                                                : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'}
                    `}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-r ${modeColors[mode.id]} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <mode.icon className={`w-4 h-4 ${mode.color}`} />
                                            <span className={`text-sm font-semibold ${currentMode === mode.id ? 'text-white' : 'text-slate-300'}`}>
                                                {mode.label}
                                            </span>
                                        </div>
                                        <p className="text-[10px] text-slate-500">{mode.desc}</p>
                                        {currentMode === mode.id && (
                                            <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-current ${mode.color} shadow-[0_0_8px_currentColor]`}></div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Chat Area */}
                            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/80">
                                    <div className="flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4 text-blue-400" />
                                        <span className="text-sm font-medium text-slate-200">Sesión Actual</span>
                                    </div>
                                    <button onClick={clearChat} className="text-xs text-slate-500 hover:text-red-400 transition-colors flex items-center gap-1">
                                        <Trash2 className="w-3 h-3" /> Limpiar
                                    </button>
                                </div>

                                <div className="h-[400px] md:h-[500px] overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                                        >
                                            <div
                                                className={`
                          max-w-[85%] md:max-w-[75%] rounded-2xl p-4 shadow-md
                          ${msg.role === 'user'
                                                        ? 'bg-blue-600 text-white rounded-tr-sm'
                                                        : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-tl-sm'}
                        `}
                                            >
                                                {msg.role === 'agent' && (
                                                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-700/50">
                                                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${modeColors[msg.mode || 'internet_search']} flex items-center justify-center`}>
                                                            <Cpu className="w-3 h-3 text-white" />
                                                        </div>
                                                        <span className="text-xs font-bold text-blue-300">BVS Agent</span>
                                                        {msg.mode && (
                                                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-700 ml-auto">
                                                                {msg.mode === 'internet_search' ? 'WEB' : msg.mode === 'rag_search' ? 'RAG' : 'LLM'}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}

                                                <div className="text-sm leading-relaxed">
                                                    {msg.role === 'agent' ? renderMarkdown(msg.content) : msg.content}
                                                </div>

                                                {msg.role === 'agent' && (
                                                    <div className="mt-3 pt-2 border-t border-slate-700/50 flex justify-end gap-2">
                                                        <button
                                                            onClick={() => navigator.clipboard.writeText(msg.content)}
                                                            className="p-1 text-slate-500 hover:text-blue-400 transition-colors"
                                                            title="Copiar"
                                                        >
                                                            <Copy className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {isTyping && (
                                        <div className="flex justify-start animate-in fade-in duration-300">
                                            <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-sm p-4 shadow-md">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${modeColors[currentMode]} flex items-center justify-center`}>
                                                        <Cpu className="w-3 h-3 text-white animate-spin" />
                                                    </div>
                                                    <span className="text-xs text-slate-400">Procesando consulta...</span>
                                                </div>
                                                <div className="flex gap-1 mt-2 ml-7">
                                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={chatEndRef} />
                                </div>

                                <div className="p-4 bg-slate-900 border-t border-slate-800">
                                    <div className="relative flex items-center gap-2">
                                        <Input
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && !isTyping && handleSendMessage()}
                                            placeholder="Escribe tu pregunta aquí..."
                                            disabled={isTyping}
                                            className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:ring-blue-500/50 pr-12 py-6"
                                        />
                                        <Button
                                            onClick={handleSendMessage}
                                            disabled={!query.trim() || isTyping}
                                            className="absolute right-1.5 h-9 w-9 p-0 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg shadow-blue-600/20"
                                        >
                                            <Send className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <p className="text-[10px] text-slate-500 text-center mt-2">
                                        El agente puede cometer errores. Verifica la información importante.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>

            {/* Floating Logo Button (Solo en esta página) */}
            <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
                <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-40 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <div className="relative w-14 h-14 bg-slate-900 rounded-full border border-blue-500/30 flex items-center justify-center shadow-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <img src={logoImg} alt="BVS Logo" className="w-10 h-10 object-contain" />
                    </div>
                    <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700">
                        BVS Lab AI
                    </div>
                </div>
            </div>

            {/* Preview Modal */}
            {previewItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl">
                        <div className="p-4 border-b border-slate-800 flex justify-between items-center">
                            <h3 className="font-semibold text-white truncate pr-4">{previewItem.query}</h3>
                            <button onClick={() => setPreviewItem(null)} className="text-slate-400 hover:text-white">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <ScrollArea className="flex-1 p-6">
                            <div className="prose prose-invert prose-sm max-w-none">
                                {renderMarkdown(previewItem.content)}
                            </div>
                        </ScrollArea>
                        <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex justify-end">
                            <Button variant="secondary" onClick={() => setPreviewItem(null)}>Cerrar</Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer (fuera del contenedor principal para que no afecte el layout flex) */}
            {/* Nota: En este diseño de pantalla completa tipo app, el footer podría sobrar o ir al final del scroll. 
          Lo pondré oculto en mobile o al final del scroll del main. */}
        </div>
    );
};

export default Consulta;
