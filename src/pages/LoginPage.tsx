import { useState } from "react";
import { Link } from "react-router-dom";
import { School, Mail, Lock, LogIn, Eye, EyeOff, Rocket, Zap, Atom, Microscope } from "lucide-react";

const LoginPage: React.FC = () => {
  const [schoolCode, setSchoolCode] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ schoolCode, email, password });
    // Aquí irá Firebase/Auth API luego
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-6">
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
        </div>
      </header>
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Sección Izquierda - Visual/Branding */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-semibold text-sm shadow-lg">
              <Rocket className="w-4 h-4" />
              Bienvenido de vuelta
            </div>
            
            <h1 className="text-6xl font-bold text-gray-900 leading-tight">
              Explora el
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Universo Científico
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Accede a tu laboratorio virtual y continúa tu viaje de descubrimiento científico.
            </p>
          </div>

          {/* Grid de Íconos Animados */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: <Zap className="w-8 h-8" />, bg: "from-blue-500 to-indigo-500", label: "Física" },
              { icon: <Atom className="w-8 h-8" />, bg: "from-purple-500 to-pink-500", label: "Química" },
              { icon: <Microscope className="w-8 h-8" />, bg: "from-green-500 to-emerald-500", label: "Biología" }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${item.bg} rounded-2xl p-6 flex items-center justify-center text-white shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300`}>
                  {item.icon}
                </div>
                <p className="text-center mt-2 text-sm font-semibold text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Estadísticas */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-600">50+</p>
                <p className="text-sm text-gray-600">Simulaciones</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-600">1000+</p>
                <p className="text-sm text-gray-600">Estudiantes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">24/7</p>
                <p className="text-sm text-gray-600">Acceso</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Derecha - Formulario de Login */}
        <div className="w-full">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8 md:p-10">
            
            {/* Header del Formulario */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 mb-4 shadow-lg">
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Iniciar Sesión
              </h2>
              <p className="text-gray-600">
                Ingresa tus credenciales para continuar
              </p>
            </div>

            {/* Formulario */}
            <div className="space-y-6">
              
              {/* Código del Colegio */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <School className="w-4 h-4 text-blue-600" />
                  Código del Colegio
                </label>
                <input
                  type="text"
                  placeholder="Ej: ABC123"
                  value={schoolCode}
                  onChange={(e) => setSchoolCode(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none text-gray-900 placeholder:text-gray-400"
                />
              </div>

              {/* Correo */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  placeholder="estudiante@colegio.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none text-gray-900 placeholder:text-gray-400"
                />
              </div>

              {/* Contraseña */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Lock className="w-4 h-4 text-blue-600" />
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none text-gray-900 placeholder:text-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Recordarme / Olvidé contraseña */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Recordarme
                  </label>
                </div>
                <span className="text-sm text-blue-600 font-semibold hover:underline cursor-pointer">
                  ¿Olvidaste tu contraseña?
                </span>
              </div>

              {/* Botón de Login */}
              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                Iniciar Sesión
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">o continúa con</span>
                </div>
              </div>

              {/* Botones de Login Social */}
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-semibold text-gray-700">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-semibold text-gray-700">
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                ¿No tienes una cuenta?{" "}
                <Link 
                  to="/register" 
                  className="text-blue-600 font-semibold hover:underline cursor-pointer"
                >
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>

          {/* Ayuda */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              ¿Necesitas ayuda? <span className="text-blue-600 font-semibold hover:underline cursor-pointer">Contacta soporte</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;