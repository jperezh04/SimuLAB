import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, RotateCcw, Settings, Info, BookOpen, Award, Lock } from "lucide-react";
import { useState } from "react";

// Datos de ejemplo de las simulaciones
const simulationsData: Record<string, any> = {
  "pendulo": {
    title: "Péndulo Simple",
    subject: "Física",
    description: "Observa y analiza el movimiento armónico simple de un péndulo. Modifica la longitud, masa y ángulo inicial para ver cómo afectan el período y la frecuencia.",
    difficulty: "Básico",
    duration: "15 min",
    objectives: [
      "Comprender el movimiento armónico simple",
      "Analizar la relación entre período y longitud",
      "Calcular la aceleración gravitacional"
    ],
    controls: [
      { name: "Longitud", min: 0.5, max: 2, unit: "m" },
      { name: "Masa", min: 0.1, max: 5, unit: "kg" },
      { name: "Ángulo inicial", min: 5, max: 45, unit: "°" }
    ],
    premium: false
  },
  "caida-libre": {
    title: "Caída Libre",
    subject: "Física",
    description: "Experimenta con objetos en caída libre. Observa cómo la gravedad afecta la velocidad y posición de los objetos en el tiempo.",
    difficulty: "Básico",
    duration: "10 min",
    objectives: [
      "Entender la aceleración gravitacional",
      "Calcular velocidad y posición en función del tiempo",
      "Comparar caída libre en diferentes planetas"
    ],
    controls: [
      { name: "Altura inicial", min: 1, max: 100, unit: "m" },
      { name: "Gravedad", min: 1, max: 25, unit: "m/s²" }
    ],
    premium: false
  },
  "caos-doble-pendulo": {
    title: "Péndulo Doble Caótico",
    subject: "Física",
    description: "Explora el fascinante mundo de los sistemas caóticos con un péndulo doble. Pequeños cambios en las condiciones iniciales generan comportamientos completamente diferentes.",
    difficulty: "Avanzado",
    duration: "25 min",
    objectives: [
      "Comprender sistemas dinámicos caóticos",
      "Observar sensibilidad a condiciones iniciales",
      "Analizar el efecto mariposa"
    ],
    controls: [
      { name: "Longitud 1", min: 0.5, max: 2, unit: "m" },
      { name: "Longitud 2", min: 0.5, max: 2, unit: "m" },
      { name: "Masa 1", min: 0.1, max: 5, unit: "kg" },
      { name: "Masa 2", min: 0.1, max: 5, unit: "kg" }
    ],
    premium: true
  }
};

const SimulationDetailPage: React.FC = () => {
  const { id } = useParams();
  const [isRunning, setIsRunning] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const simulation = simulationsData[id || ""] || {
    title: "Simulación no encontrada",
    subject: "N/A",
    description: "Esta simulación no está disponible.",
    difficulty: "N/A",
    duration: "N/A",
    objectives: [],
    controls: [],
    premium: false
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Básico": return "bg-green-100 text-green-700 border-green-200";
      case "Intermedio": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Avanzado": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      
      {/* Header con Navegación */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/simulations" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Volver a simulaciones</span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <Info className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Título y Metadata */}
        <div className="mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                {simulation.title}
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <span className={`text-sm px-4 py-1.5 rounded-full border font-semibold ${getDifficultyColor(simulation.difficulty)}`}>
                  {simulation.difficulty}
                </span>
                <span className="text-sm px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold">
                  {simulation.subject}
                </span>
                <span className="text-sm px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200 font-semibold">
                  ⏱️ {simulation.duration}
                </span>
                {simulation.premium && (
                  <span className="text-sm px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200 font-semibold flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Premium
                  </span>
                )}
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {simulation.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Área Principal de Simulación */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Canvas de Simulación */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 relative flex items-center justify-center">
                {simulation.premium ? (
                  <div className="text-center text-white space-y-4 p-8">
                    <Lock className="w-16 h-16 mx-auto text-yellow-400" />
                    <h3 className="text-2xl font-bold">Contenido Premium</h3>
                    <p className="text-gray-300 max-w-md">
                      Esta simulación está disponible solo para usuarios con suscripción premium.
                    </p>
                    <button className="px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-lg">
                      Actualizar a Premium
                    </button>
                  </div>
                ) : (
                  <div className="text-center text-white space-y-4">
                    <div className="text-6xl mb-4">🔬</div>
                    <p className="text-xl font-semibold">
                      {isRunning ? "Simulación en ejecución..." : "Presiona iniciar para comenzar"}
                    </p>
                    {isRunning && (
                      <div className="w-32 h-1 bg-blue-500 rounded-full overflow-hidden mx-auto">
                        <div className="h-full bg-white animate-pulse"></div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Controles de Simulación */}
              {!simulation.premium && (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => setIsRunning(!isRunning)}
                      className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Play className="w-5 h-5" />
                      {isRunning ? "Pausar" : "Iniciar Simulación"}
                    </button>
                    <button className="p-3 border-2 border-gray-300 rounded-xl hover:bg-gray-100 transition-colors">
                      <RotateCcw className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-3 border-2 border-gray-300 rounded-xl hover:bg-gray-100 transition-colors">
                      <Settings className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Panel de Controles/Parámetros */}
            {!simulation.premium && simulation.controls.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Parámetros de la Simulación
                </h3>
                <div className="space-y-4">
                  {simulation.controls.map((control: any, index: number) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-semibold text-gray-700">
                          {control.name}
                        </label>
                        <span className="text-sm text-gray-500">
                          {control.min} - {control.max} {control.unit}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={control.min}
                        max={control.max}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Derecha */}
          <div className="space-y-6">
            
            {/* Objetivos de Aprendizaje */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Objetivos de Aprendizaje
              </h3>
              <ul className="space-y-3">
                {simulation.objectives.map((obj: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recursos Adicionales */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Recursos Adicionales
              </h3>
              <div className="space-y-3">
                <a href="#" className="block p-3 bg-white rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                  <div className="font-semibold text-gray-900 mb-1">📄 Guía del Laboratorio</div>
                  <div className="text-sm text-gray-600">Manual paso a paso</div>
                </a>
                <a href="#" className="block p-3 bg-white rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                  <div className="font-semibold text-gray-900 mb-1">📊 Hoja de Datos</div>
                  <div className="text-sm text-gray-600">Registra tus observaciones</div>
                </a>
                <a href="#" className="block p-3 bg-white rounded-xl hover:shadow-md transition-all duration-200 border border-gray-200">
                  <div className="font-semibold text-gray-900 mb-1">🎥 Video Tutorial</div>
                  <div className="text-sm text-gray-600">Aprende cómo usar la simulación</div>
                </a>
              </div>
            </div>

            {/* Ayuda */}
            <div className="bg-yellow-50 rounded-2xl border border-yellow-200 p-6">
              <div className="text-center space-y-3">
                <div className="text-4xl">💡</div>
                <h4 className="font-bold text-gray-900">¿Necesitas ayuda?</h4>
                <p className="text-sm text-gray-600">
                  Consulta con tu profesor o revisa la guía del laboratorio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationDetailPage;