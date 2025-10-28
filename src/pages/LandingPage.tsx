import '../index.css'
import { Link } from "react-router-dom";
import { Atom, Microscope, Zap, BookOpen, Users, GraduationCap, Menu, ArrowRight, Building2 } from "lucide-react";

const SUBJECTS = [
  { id: "quimica", nombre: "Química", icon: <Atom className="w-6 h-6" />, desc: "Reacciones y experimentos" },
  { id: "biologia", nombre: "Biología", icon: <Microscope className="w-6 h-6" />, desc: "Células y ecosistemas" },
  { id: "fisica", nombre: "Física", icon: <Zap className="w-6 h-6" />, desc: "Fuerzas y movimiento" },
];

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-800">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">⚛️</span>
            <span className="font-bold text-2xl">
              <span className="text-blue-600">Lab</span>
              <span className="text-gray-800">Cat</span>
            </span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#sobre-nosotros" className="hover:text-blue-600 transition-colors duration-200">Sobre nosotros</a>
            <a href="#laboratorios" className="hover:text-blue-600 transition-colors duration-200">Laboratorios</a>
            <a href="#como-funciona" className="hover:text-blue-600 transition-colors duration-200">Cómo funciona</a>
            <a href="#beneficios" className="hover:text-blue-600 transition-colors duration-200">Beneficios</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link 
              to="/login" 
              className="hidden sm:inline-block px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Iniciar sesión
            </Link>
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Columna Izquierda */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Educación científica para Perú
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Laboratorios <span className="text-blue-600">Virtuales</span> para tu Colegio
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Experimenta con Física, Química y Biología desde cualquier lugar. Sin equipos costosos, sin riesgos, con resultados reales.
            </p>
            
            <p className="text-lg font-semibold text-blue-700">
              Plataforma educativa que conecta colegios con tecnología de laboratorios virtuales.
            </p>
            
            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/login" 
                className="group px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-2"
              >
                Acceder a la plataforma
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#contacto"
                className="px-8 py-4 rounded-full border-2 border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-center"
              >
                Solicitar demo
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Simulaciones</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-600">3</div>
                <div className="text-sm text-gray-600">Materias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Disponible</div>
              </div>
            </div>
          </div>
          
          {/* Columna Derecha */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
              <div className="p-10 space-y-6">
                <div className="text-center text-7xl mb-6">🔬⚗️⚡</div>
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-lg font-bold text-gray-800">Plataforma activa</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-center">
                  Acceso inmediato a laboratorios interactivos de Física, Química y Biología diseñados para el currículo peruano.
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <p className="text-gray-700 text-center font-medium">
                    Más de <span className="text-3xl font-black text-blue-600">50+</span> experimentos virtuales listos para usar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre-nosotros" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">¿Qué es LabCat?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-xl border border-blue-100">
            <p className="text-2xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              <span className="font-bold text-blue-700">LabCat</span> es una plataforma de laboratorios virtuales que permite a estudiantes de secundaria experimentar con <span className="font-semibold text-indigo-600">Física, Química y Biología</span> de manera segura, accesible y sin necesidad de equipos costosos.
            </p>
            <p className="text-xl text-center mt-6 font-bold text-blue-600">
              Proveemos soluciones tecnológicas educativas a colegios de todo el Perú.
            </p>
          </div>
        </div>
      </section>

      {/* Laboratorios */}
      <section id="laboratorios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros Laboratorios</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">Experimenta con las tres áreas fundamentales de la ciencia</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SUBJECTS.map(s => (
              <div
                key={s.id}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-2xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{s.nombre}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                  <div className="mt-4 text-sm text-blue-600 bg-blue-50 rounded-full px-5 py-2 font-semibold">
                    15+ simulaciones
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Cómo funciona</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 text-lg">Proceso de implementación en tu colegio</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Paso 1 */}
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <div className="pt-4 space-y-3">
                <h3 className="text-xl font-bold text-gray-800">Tu colegio se suscribe</h3>
                <p className="text-gray-600 leading-relaxed">
                  El colegio contacta con nosotros y obtiene acceso institucional completo a la plataforma.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
              <div className="pt-4 space-y-3">
                <h3 className="text-xl font-bold text-gray-800">Alumnos se registran</h3>
                <p className="text-gray-600 leading-relaxed">
                  Los estudiantes crean sus cuentas usando el código del colegio y comienzan a explorar.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
              <div className="pt-4 space-y-3">
                <h3 className="text-xl font-bold text-gray-800">Aprenden practicando</h3>
                <p className="text-gray-600 leading-relaxed">
                  Los profesores asignan experimentos y los alumnos practican con evaluación automática.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">¿Por qué elegir LabCat?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Currículo Peruano</h3>
              <p className="text-gray-600">Contenido 100% alineado con el currículo nacional de educación secundaria.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Acceso Ilimitado</h3>
              <p className="text-gray-600">Todos los estudiantes del colegio pueden acceder 24/7 desde cualquier dispositivo.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Aprendizaje Efectivo</h3>
              <p className="text-gray-600">Feedback inmediato y seguimiento del progreso de cada estudiante.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Para Colegios */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-white space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              <Building2 className="w-4 h-4" />
              Para instituciones educativas
            </div>
            <h3 className="text-4xl md:text-5xl font-bold">¿Eres director o representante de un colegio?</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contáctanos para implementar LabCat en tu institución y transforma la educación científica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">Contacto Comercial</h4>
              <div className="space-y-3 text-blue-100">
                <p>📧 ventas@labcat.edu.pe</p>
                <p>📱 +51 999 888 777</p>
                <p>⏰ Lun - Vie: 9AM - 6PM</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">¿Eres estudiante?</h4>
              <p className="text-blue-100 mb-4">Si tu colegio ya tiene LabCat, puedes registrarte directamente:</p>
              <Link 
                to="/register"
                className="inline-block w-full text-center px-6 py-3 rounded-xl bg-white text-blue-600 font-bold hover:bg-gray-100 transition-all duration-300"
              >
                Crear mi cuenta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between flex-col sm:flex-row gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔬</span>
            <span className="font-bold text-gray-800">LabCat</span>
            <span className="text-gray-400">© {new Date().getFullYear()}</span>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#sobre-nosotros" className="hover:text-blue-600 transition-colors">Sobre nosotros</a>
            <a href="#laboratorios" className="hover:text-blue-600 transition-colors">Laboratorios</a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;