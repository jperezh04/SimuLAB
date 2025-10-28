import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, RotateCcw, Settings, Info, BookOpen, Award, Lock, Download } from "lucide-react";
import React, { useMemo, useState } from "react";
import { PendulumCanvas } from "../sim/pendulum/PendulumCanvas";
import { usePendulumSim } from "../sim/pendulum/store";
import { usePendulumLogger } from "../sim/pendulum/logger";
import TimeSeriesChart from "../components/TimeSeriesChart";
import { toCSV, downloadCSV } from "../utils/csv";

const simulationsData: Record<string, any> = {
  pendulo: {
    title: "Péndulo Simple",
    subject: "Física",
    description:
      "Simula un péndulo simple con controles de longitud, masa, ángulo inicial, amortiguamiento y gravedad. Visualiza variables en tiempo real, energía total y estima el período automáticamente.",
    difficulty: "Básico",
    duration: "25 min",
    objectives: [
      "Comprender el movimiento armónico simple",
      "Relacionar el período con la longitud y la gravedad",
      "Analizar energía mecánica y amortiguamiento",
      "Interpretar gráficas de θ(t), ω(t) y energía"
    ],
    controls: [
      { name: "Longitud", min: 0.5, max: 2, unit: "m" },
      { name: "Masa", min: 0.1, max: 5, unit: "kg" },
      { name: "Ángulo inicial", min: 5, max: 45, unit: "°" }
    ],
    premium: false
  },
};

const SimulationDetailPage: React.FC = () => {
  const { id } = useParams();
  const [showInfo, setShowInfo] = useState(false);
  const simulation = simulationsData[id || ""] || {
    title: "Simulación no encontrada",
    subject: "N/A",
    description: "Esta simulación no está disponible.",
    difficulty: "N/A",
    duration: "N/A",
    objectives: [],
    controls: [],
    premium: false,
  };
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Básico":
        return "bg-green-100 text-green-700 border-green-200";
      case "Intermedio":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Avanzado":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };
  const isPendulum = id === "pendulo";

  // Store simulación
  const running = usePendulumSim((s) => s.running);
  const toggle = usePendulumSim((s) => s.toggle);
  const reset = usePendulumSim((s) => s.reset);
  const setParam = usePendulumSim((s) => s.setParam);
  const setInitTheta = usePendulumSim((s) => s.setInitTheta);
  const params = usePendulumSim((s) => s.params);
  const presets = usePendulumSim((s) => s.presets);

  // Logger & análisis
  const { samples, period, clear, setEnabled, enabled } = usePendulumLogger();

  const csvData = useMemo(() => {
    return samples.map((s) => ({
      t: s.t.toFixed(4),
      theta: s.theta,
      omega: s.omega,
      energy: s.energy,
    }));
  }, [samples]);

  const exportCSV = () => {
    const csv = toCSV(csvData as any);
    downloadCSV("pendulo_datos.csv", csv);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
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

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Título y meta */}
        <div className="mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">{simulation.title}</h1>
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className={`text-sm px-4 py-1.5 rounded-full border font-semibold ${getDifficultyColor(
                    simulation.difficulty
                  )}`}
                >
                  {simulation.difficulty}
                </span>
                <span className="text-sm px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold">
                  {simulation.subject}
                </span>
                <span className="text-sm px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200 font-semibold">
                  ⏱️ {simulation.duration}
                </span>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">{simulation.description}</p>
        </div>

        <div className="grid xl:grid-cols-3 gap-8">
          {/* Columna principal */}
          <div className="xl:col-span-2 space-y-6">
            {/* Canvas */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg">
              {/* Canvas/Visor grande */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg">
                {/* ❗️QUITAMOS el wrapper con 'aspect-video' y metemos el Canvas directo */}
                {!simulation.premium && isPendulum ? (
                  <PendulumCanvas heightClass="h-[65vh] md:h-[72vh] xl:h-[80vh]" />
                ) : simulation.premium ? (
                  <div className="flex items-center justify-center h-[50vh] text-white bg-gradient-to-br from-gray-900 to-gray-800">
                    <div className="text-center space-y-4 p-8">
                      <Lock className="w-16 h-16 mx-auto text-yellow-400" />
                      <h3 className="text-2xl font-bold">Contenido Premium</h3>
                      <p className="text-gray-300 max-w-md mx-auto">
                        Esta simulación está disponible solo para usuarios con suscripción premium.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-[50vh] text-white bg-gradient-to-br from-gray-900 to-gray-800">
                    <div className="text-center space-y-4">
                      <div className="text-6xl mb-4">🔬</div>
                      <p className="text-xl font-semibold">Simulación no disponible.</p>
                    </div>
                  </div>
                )}

                {/* Controles inferiores (se queda igual) */}
                {!simulation.premium && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                    {/* ... tus botones Iniciar/Reset/Presets/CSV ... */}
                  </div>
                )}
              </div>


              {/* Controles principales */}
              {!simulation.premium && (
                <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggle}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all"
                    >
                      <Play className="w-5 h-5" />
                      {running ? "Pausar" : "Iniciar"}
                    </button>
                    <button
                      onClick={reset}
                      className="p-3 border-2 border-gray-300 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <RotateCcw className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={() => setEnabled(!enabled)}
                      className="p-3 border-2 border-gray-300 rounded-xl hover:bg-gray-100 transition-colors"
                      title="Habilitar/Deshabilitar registro"
                    >
                      <Settings className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Presets de gravedad */}
                  {isPendulum && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-700 mr-2">Gravedad:</span>
                      <button onClick={presets.earth} className="px-3 py-1 rounded-md border hover:bg-gray-100">Tierra</button>
                      <button onClick={presets.moon} className="px-3 py-1 rounded-md border hover:bg-gray-100">Luna</button>
                      <button onClick={presets.jupiter} className="px-3 py-1 rounded-md border hover:bg-gray-100">Júpiter</button>
                    </div>
                  )}

                  {/* Export CSV */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={exportCSV}
                      className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-white bg-gray-100"
                    >
                      <Download className="w-4 h-4" />
                      Exportar CSV
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Gráficos */}
            {isPendulum && (
              <div className="grid md:grid-cols-2 gap-6">
                <TimeSeriesChart
                  data={samples}
                  series={[{ dataKey: "theta", name: "θ (rad)" }]}
                />
                <TimeSeriesChart
                  data={samples}
                  series={[{ dataKey: "omega", name: "ω (rad/s)" }]}
                />
                <div className="md:col-span-2">
                  <TimeSeriesChart
                    data={samples}
                    series={[{ dataKey: "energy", name: "Energía (J)" }]}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: controles & lecturas */}
          <div className="space-y-6">
            {/* Parámetros */}
            {isPendulum && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Controles
                </h3>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <label className="font-medium">Longitud (m)</label>
                      <span className="text-gray-500">{params.L.toFixed(2)} m</span>
                    </div>
                    <input
                      type="range"
                      min={0.5}
                      max={2}
                      step={0.01}
                      value={params.L}
                      onChange={(e) => setParam("L", parseFloat(e.target.value))}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <label className="font-medium">Masa (kg)</label>
                      <span className="text-gray-500">{params.m.toFixed(2)} kg</span>
                    </div>
                    <input
                      type="range"
                      min={0.1}
                      max={5}
                      step={0.1}
                      value={params.m}
                      onChange={(e) => setParam("m", parseFloat(e.target.value))}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <label className="font-medium">Ángulo inicial (°)</label>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={45}
                      step={1}
                      onChange={(e) => setInitTheta(parseFloat(e.target.value))}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <label className="font-medium">Amortiguamiento</label>
                      <span className="text-gray-500">{params.damping.toFixed(3)}</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={0.1}
                      step={0.005}
                      value={params.damping}
                      onChange={(e) => setParam("damping", parseFloat(e.target.value))}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <label className="font-medium">Gravedad (m/s²)</label>
                      <span className="text-gray-500">{params.g.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min={0.5}
                      max={30}
                      step={0.1}
                      value={params.g}
                      onChange={(e) => setParam("g", parseFloat(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Lecturas en vivo */}
            {isPendulum && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  Lecturas
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 rounded-lg bg-blue-50">
                    <div className="text-gray-500">Muestras</div>
                    <div className="font-bold">{samples.length}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50">
                    <div className="text-gray-500">Período (s)</div>
                    <div className="font-bold">{period ? period.toFixed(3) : "—"}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Objetivos */}
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

            {/* Recursos */}
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
          </div>
        </div>

        {/* Info extra (toggle) */}
        {showInfo && (
          <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6 shadow">
            <h4 className="font-bold mb-2">Sugerencias de uso</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Usa presets de gravedad para comparar períodos con igual longitud.</li>
              <li>Activa la amortiguación y observa la caída de energía.</li>
              <li>Exporta CSV y elabora gráficos personalizados para tu reporte.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimulationDetailPage;
