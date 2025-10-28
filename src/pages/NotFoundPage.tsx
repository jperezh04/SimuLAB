import { Home, Search, ArrowLeft, Compass, AlertTriangle } from "lucide-react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-6">
      
      <div className="max-w-2xl w-full text-center">
        
        {/* Ícono de Error Animado */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          </div>
          <div className="relative">
            <div className="inline-flex items-center justify-center w-48 h-48 bg-white rounded-full shadow-2xl border-4 border-gray-200 mb-4">
              <div className="relative">
                <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  404
                </span>
                <AlertTriangle className="absolute -top-2 -right-2 w-12 h-12 text-yellow-500 animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
          ¡Ups! Página
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            No Encontrada
          </span>
        </h1>

        {/* Descripción */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
          Parece que te has perdido en el laboratorio virtual. Esta página no existe o fue movida a otra ubicación.
        </p>

        {/* Sugerencias */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 mb-8 text-left max-w-md mx-auto">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Search className="w-5 h-5 text-blue-600" />
            Posibles razones:
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>La URL fue escrita incorrectamente</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>El enlace está desactualizado o roto</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>La página fue eliminada o movida</span>
            </li>
          </ul>
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Volver al Inicio
          </a>
          
          <a
            href="/simulations"
            className="group flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Compass className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Explorar Simulaciones
          </a>
        </div>

        {/* Links Útiles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">O visita estas páginas populares:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/simulations" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors">
              Simulaciones
            </a>
            <span className="text-gray-400">•</span>
            <a href="/profile" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors">
              Mi Perfil
            </a>
            <span className="text-gray-400">•</span>
            <a href="/login" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors">
              Iniciar Sesión
            </a>
            <span className="text-gray-400">•</span>
            <a href="/register" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors">
              Registrarse
            </a>
          </div>
        </div>

        {/* Decoración de Átomos Flotantes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-pink-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
      </div>
    </div>
  );
};

export default NotFoundPage;