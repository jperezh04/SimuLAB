import '../index.css'
import { Link } from "react-router-dom";
import { Atom, Microscope, Zap, Clock, ShieldCheck, Sparkles, Menu } from "lucide-react";

// Datos de las tarjetas para la sección de Laboratorios
const SUBJECTS = [
  { id: "quimica", nombre: "Química", icon: <Atom className="w-6 h-6" />, desc: "Reacciones y experimentos" },
  { id: "biologia", nombre: "Biología", icon: <Microscope className="w-6 h-6" />, desc: "Células y ecosistemas" },
  { id: "fisica", nombre: "Física", icon: <Zap className="w-6 h-6" />, desc: "Fuerzas y movimiento" },
];

const LandingPage: React.FC = () => {
  return (
    // CAMBIO CLAVE: Fondo con gradiente sutil y elegante, tipografía base oscura
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 text-gray-900 font-sans">
      
      {/* Navbar */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-indigo-100 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-extrabold text-xl tracking-wide text-indigo-800 hover:text-indigo-600 transition-colors">
            <span className="text-3xl">⚛️</span>
            <span className="hidden sm:inline">LabCat</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#sobre-nosotros" className="text-gray-700 hover:text-indigo-600 transition-colors hover:underline decoration-indigo-300 underline-offset-4">Sobre nosotros</a>
            <a href="#laboratorios" className="text-gray-700 hover:text-indigo-600 transition-colors hover:underline decoration-indigo-300 underline-offset-4">Laboratorios</a>
            <a href="#como-funciona" className="text-gray-700 hover:text-indigo-600 transition-colors hover:underline decoration-indigo-300 underline-offset-4">Cómo funciona</a>
            <a href="#contacto" className="text-gray-700 hover:text-indigo-600 transition-colors hover:underline decoration-indigo-300 underline-offset-4">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login" className="hidden sm:inline-block px-5 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Iniciar sesión
            </Link>
            {/* Botón de menú para móvil */}
            <button className="md:hidden p-2 rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors">
                <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative">
          
          {/* Columna de Texto Principal */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-800 text-sm font-semibold rounded-full mb-6 shadow-md">
              <Sparkles className="w-4 h-4" />
              Educación científica para Perú
            </div>
            
            {/* Título - Estilo "Elegante" con gradiente de texto */}
            <h1 className="text-5xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-indigo-900 via-indigo-700 to-teal-500 bg-clip-text text-transparent animate-fade-in">
              Aprende Ciencias Sin Límites
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Laboratorios virtuales de **Física, Química y Biología** para estudiantes de secundaria.
              <span className="block mt-2 text-indigo-700 font-semibold">Experimenta, explora y domina la ciencia desde cualquier lugar.</span>
            </p>
            
            {/* Botones de CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/register" 
                className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition-all duration-300 shadow-xl shadow-indigo-300/50 hover:shadow-2xl transform hover:-translate-y-1"
              >
                Registrar colegio
              </Link>
              <Link 
                to="/login" 
                className="px-8 py-4 rounded-xl border-2 border-indigo-200 bg-white text-indigo-700 font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-lg"
              >
                Ver demo
              </Link>
            </div>
            
            {/* Características destacadas */}
            <div className="mt-8 flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                <Clock className="w-4 h-4 text-indigo-500" /> 
                <span className="font-medium">Disponible 24/7</span>
              </span>
              <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                <ShieldCheck className="w-4 h-4 text-teal-500" /> 
                <span className="font-medium">100% Seguro</span>
              </span>
            </div>
          </div>
          
          {/* Columna de Imagen/Visual (Visualmente atrayente) */}
          <div className="relative hidden md:block">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 ring-4 ring-indigo-200/50">
              <div className="h-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500"></div>
              <div className="p-10 bg-gradient-to-br from-white to-indigo-50/50">
                <div className="text-8xl mb-6 text-center animate-bounce-slow">🔬⚗️⚡</div>
                <div className="flex items-center gap-2 mb-3 justify-center">
                  <div className="w-4 h-4 bg-teal-500 rounded-full animate-ping-slow"></div>
                  <span className="text-lg font-bold text-teal-600">Plataforma activa y en crecimiento</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-center mt-4">
                  Acceso inmediato a más de <strong className="text-indigo-700">50 simulaciones interactivas</strong> diseñadas para el currículo peruano.
                </p>
              </div>
            </div>
            {/* Elementos de decoración flotantes */}
            <div className="absolute top-0 -right-8 w-16 h-16 bg-purple-300 rounded-full opacity-30 blur-xl animate-float-1"></div>
            <div className="absolute bottom-4 -left-10 w-24 h-24 bg-blue-300 rounded-full opacity-30 blur-xl animate-float-2"></div>
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section id="sobre-nosotros" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-900 to-indigo-700 bg-clip-text text-transparent mb-4">¿Qué es LabCat?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 mx-auto rounded-full"></div>
        </div>
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 border border-indigo-100 shadow-2xl">
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            <span className="font-bold text-indigo-800">LabCat</span> es la solución digital que permite a los estudiantes experimentar con <strong className="text-indigo-700">Física, Química y Biología</strong> de manera segura y sin necesidad de costosos laboratorios físicos.
            <span className="block mt-4 text-lg text-teal-700 font-bold">
              ¡Hacemos que la práctica científica sea accesible para todos los colegios de Perú!
            </span>
          </p>
        </div>
      </section>

      {/* Laboratorios (Tarjetas de Materias) */}
      <section id="laboratorios" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-900 to-teal-600 bg-clip-text text-transparent mb-4">Nuestros Laboratorios por Materia</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUBJECTS.map(s => (
            <div
              key={s.id}
              className="group relative overflow-hidden bg-white rounded-3xl p-8 border border-indigo-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Overlay de hover sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Ícono destacado */}
                <div className="p-4 mb-4 rounded-full bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  {s.icon}
                </div>
                
                {/* Título */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-indigo-800 transition-colors">{s.nombre}</h3>
                
                {/* Descripción */}
                <p className="text-gray-600 mb-4">{s.desc}</p>
                
                {/* Etiqueta de conteo */}
                <div className="mt-3 text-sm text-indigo-600 bg-indigo-50 rounded-full px-4 py-1.5 inline-block font-bold">
                  15+ simulaciones
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="max-w-6xl mx-auto px-4 py-20 relative">
        <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-indigo-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-900 to-teal-600 bg-clip-text text-transparent mb-4">Proceso de Tres Pasos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Paso 1 */}
            <div className="relative p-6 border-l-4 border-indigo-500 bg-white/70 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-4 -left-6 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-xl">1</div>
              <div className="pt-2">
                <div className="font-extrabold text-xl text-indigo-800 mb-2">Regístrate (Colegio)</div>
                <p className="text-gray-600 leading-relaxed">Obtén acceso para <strong className="text-indigo-600">toda tu institución</strong>. Es rápido y sencillo.</p>
              </div>
            </div>
            {/* Paso 2 */}
            <div className="relative p-6 border-l-4 border-teal-500 bg-white/70 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-4 -left-6 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-xl">2</div>
              <div className="pt-2">
                <div className="font-extrabold text-xl text-teal-800 mb-2">Asigna laboratorios</div>
                <p className="text-gray-600 leading-relaxed">Los profesores asignan simulaciones de <strong className="text-teal-600">Física, Química o Biología</strong>.</p>
              </div>
            </div>
            {/* Paso 3 */}
            <div className="relative p-6 border-l-4 border-purple-500 bg-white/70 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-4 -left-6 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-xl">3</div>
              <div className="pt-2">
                <div className="font-extrabold text-xl text-purple-800 mb-2">Experimenta y Aprende</div>
                <p className="text-gray-600 leading-relaxed">Los estudiantes realizan la práctica y <strong className="text-purple-600">reciben feedback</strong> inmediato.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final (Mismo diseño, pero más limpio) */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-600 rounded-3xl text-white p-12 shadow-2xl shadow-indigo-400/50">
          <div className="relative z-10 flex items-center justify-between flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">¡Lleva el laboratorio a tu aula!</h3>
              <p className="text-indigo-100 text-lg">Inicia el registro de tu colegio hoy mismo y transforma la educación científica.</p>
            </div>
            <Link to="/register" className="px-8 py-4 rounded-full bg-white text-indigo-700 font-bold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-xl min-w-[200px] text-center">
              Registrar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-indigo-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 text-gray-600 flex items-center justify-between flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔬</span>
            <span className="font-bold text-indigo-900">LabCat</span>
            <span className="text-gray-500">| © {new Date().getFullYear()}</span>
          </div>
          <nav className="flex gap-4 text-sm">
             <a href="#contacto" className="text-gray-600 hover:text-indigo-600 transition-colors">Contacto</a>
             <a href="#sobre-nosotros" className="text-gray-600 hover:text-indigo-600 transition-colors">Acerca de</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;