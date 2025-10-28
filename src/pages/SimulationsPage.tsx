import { Link } from "react-router-dom";
import { Microscope, User, BookOpen, TrendingUp, Award, Clock } from "lucide-react";

const StudentDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Bienvenido, Estudiante 👨‍🎓
          </h1>
          <p className="text-gray-600 text-lg">
            ¿Qué deseas hacer hoy?
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Tarjetas Principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Explorar Simulaciones */}
          <Link
            to="/simulations"
            className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-40 bg-gradient-to-br from-blue-500 to-indigo-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Microscope className="w-20 h-20 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Explorar Simulaciones
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Descubre experimentos interactivos de física, química y biología
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                <span>Comenzar ahora</span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Mi Perfil */}
          <Link
            to="/profile"
            className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <User className="w-20 h-20 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Mi Perfil
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Revisa tu progreso, logros y personaliza tu experiencia
              </p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                <span>Ver perfil</span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Estadísticas Rápidas */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tu Progreso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="bg-blue-500 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Simulaciones Completadas</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
              <div className="bg-green-500 p-3 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Logros Obtenidos</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
              <div className="bg-purple-500 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Horas de Estudio</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Motivacional */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h3 className="text-3xl font-bold mb-3">¡Sigue Aprendiendo!</h3>
          <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
            Cada simulación completada te acerca más a dominar conceptos científicos complejos. ¡Continúa explorando!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;