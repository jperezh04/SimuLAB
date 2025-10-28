import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Building2, ArrowLeft, Eye, EyeOff, User } from "lucide-react";

const RegisterPage: React.FC = () => {
  const [schoolCode, setSchoolCode] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [userType, setUserType] = useState<"student" | "teacher">("student");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    
    console.log({ schoolCode, name, email, password, userType });
    // Aquí irá Firebase/Auth API luego
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 py-12">
      
      {/* Contenedor Principal */}
      <div className="w-full max-w-md">
        
        {/* Botón de Regreso */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Volver al inicio</span>
        </Link>

        {/* Card de Registro */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-10 text-center">
            <div className="text-5xl mb-4">⚛️</div>
            <h2 className="text-3xl font-bold text-white mb-2">Únete a LabCat</h2>
            <p className="text-blue-100">Crea tu cuenta para empezar a experimentar</p>
          </div>

          {/* Formulario */}
          <div className="p-8">
            <form onSubmit={handleRegister} className="space-y-5">
              
              {/* Selector de Tipo de Usuario */}
              <div className="grid grid-cols-2 gap-3 p-1 bg-gray-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setUserType("student")}
                  className={`py-3 rounded-lg font-semibold transition-all duration-200 ${
                    userType === "student"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Estudiante
                </button>
                <button
                  type="button"
                  onClick={() => setUserType("teacher")}
                  className={`py-3 rounded-lg font-semibold transition-all duration-200 ${
                    userType === "teacher"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Profesor
                </button>
              </div>

              {/* Código del Colegio */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Código del colegio *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Ej: COL-12345" 
                    value={schoolCode} 
                    onChange={(e) => setSchoolCode(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500">Solicita este código a tu colegio</p>
              </div>

              {/* Nombre Completo */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Nombre completo *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Juan Pérez" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Correo electrónico *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="tu@correo.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    required
                  />
                </div>
              </div>

              {/* Contraseña */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Contraseña *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Mínimo 8 caracteres" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirmar Contraseña */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Confirmar contraseña *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Repite tu contraseña" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Términos y Condiciones */}
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="terms"
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  Acepto los{" "}
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    Términos de Servicio
                  </a>{" "}
                  y la{" "}
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    Política de Privacidad
                  </a>
                </label>
              </div>

              {/* Botón de Submit */}
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Crear cuenta
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">o</span>
              </div>
            </div>

            {/* Link a Login */}
            <div className="text-center">
              <p className="text-gray-600">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Info para Colegios */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
          <p className="text-sm text-gray-700 text-center">
            <span className="font-semibold text-blue-700">¿Tu colegio no tiene LabCat?</span>
            <br />
            <a href="#contacto" className="text-blue-600 hover:underline font-medium">
              Contáctanos para implementarlo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;