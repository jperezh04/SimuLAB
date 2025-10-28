import { Link } from "react-router-dom";
import { Atom, Microscope, Zap, Lock, ArrowRight, Search } from "lucide-react";
import { useState } from "react";

const simulations = [
  { 
    id: "pendulo", 
    title: "Péndulo Simple", 
    subject: "fisica",
    description: "Estudia el movimiento armónico simple",
    difficulty: "Básico",
    premium: false
  },
  { 
    id: "caida-libre", 
    title: "Caída Libre", 
    subject: "fisica",
    description: "Analiza la aceleración gravitacional",
    difficulty: "Básico",
    premium: false
  },
  { 
    id: "caos-doble-pendulo", 
    title: "Péndulo Doble Caótico", 
    subject: "fisica",
    description: "Explora sistemas caóticos complejos",
    difficulty: "Avanzado",
    premium: true
  },
  { 
    id: "reacciones-quimicas", 
    title: "Reacciones Químicas", 
    subject: "quimica",
    description: "Experimenta con diferentes reacciones",
    difficulty: "Intermedio",
    premium: false
  },
  { 
    id: "tabla-periodica", 
    title: "Tabla Periódica Interactiva", 
    subject: "quimica",
    description: "Explora elementos y propiedades",
    difficulty: "Básico",
    premium: false
  },
  { 
    id: "celula-animal", 
    title: "Célula Animal", 
    subject: "biologia",
    description: "Descubre las partes de la célula",
    difficulty: "Básico",
    premium: false
  },
];

const subjects = [
  { id: "todos", name: "Todas", icon: <ArrowRight className="w-5 h-5" />, color: "gray" },
  { id: "fisica", name: "Física", icon: <Zap className="w-5 h-5" />, color: "blue" },
  { id: "quimica", name: "Química", icon: <Atom className="w-5 h-5" />, color: "purple" },
  { id: "biologia", name: "Biología", icon: <Microscope className="w-5 h-5" />, color: "green" },
];

const SimulationsPage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredSimulations = simulations.filter(sim => {
    const matchesSubject = selectedSubject === "todos" || sim.subject === selectedSubject;
    const matchesSearch = sim.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sim.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Básico": return "bg-green-100 text-green-700 border-green-200";
      case "Intermedio": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Avanzado": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getSubjectColor = (subject: string) => {
    switch(subject) {
      case "fisica": return "from-blue-500 to-indigo-500";
      case "quimica": return "from-purple-500 to-pink-500";
      case "biologia": return "from-green-500 to-emerald-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Simulaciones Disponibles 🔬
              </h1>
              <p className="text-gray-600">
                Explora más de {simulations.length} experimentos virtuales interactivos
              </p>
            </div>
            
            {/* Buscador */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar simulaciones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Filtros por Materia */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtrar por materia</h3>
          <div className="flex flex-wrap gap-3">
            {subjects.map(subject => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  selectedSubject === subject.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-md"
                }`}
              >
                {subject.icon}
                <span>{subject.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Simulaciones */}
        {filteredSimulations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSimulations.map(sim => (
              <Link
                key={sim.id}
                to={`/simulation/${sim.id}`}
                className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Header con Gradiente */}
                <div className={`h-32 bg-gradient-to-br ${getSubjectColor(sim.subject)} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">
                      {sim.title}
                    </h3>
                  </div>
                  
                  {/* Badge Premium */}
                  {sim.premium && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold shadow-lg">
                      <Lock className="w-3 h-3" />
                      Premium
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {sim.description}
                  </p>

                  {/* Tags */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs px-3 py-1 rounded-full border font-semibold ${getDifficultyColor(sim.difficulty)}`}>
                      {sim.difficulty}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 font-semibold capitalize">
                      {sim.subject}
                    </span>
                  </div>

                  {/* Botón de Acción */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      <span>Iniciar simulación</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // Estado Vacío
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No se encontraron simulaciones
            </h3>
            <p className="text-gray-600">
              Intenta con otros términos de búsqueda o selecciona otra materia
            </p>
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-3">¿No encuentras lo que buscas?</h3>
          <p className="text-blue-100 mb-6 text-lg">
            Estamos constantemente agregando nuevas simulaciones. ¡Sugiérenos qué experimento te gustaría ver!
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
            Enviar sugerencia
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimulationsPage;