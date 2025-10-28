import { useState } from "react";
import { Link } from "react-router-dom";
import { School, Mail, Lock, UserPlus, Eye, EyeOff, CheckCircle, Sparkles } from "lucide-react";

const RegisterPage: React.FC = () => {
  const [schoolCode, setSchoolCode] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registro:", { schoolCode, email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-6">
      
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Sección Izquierda - Info */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              Plataforma Educativa
            </div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Únete a la Revolución
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Científica Digital
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Accede a simulaciones interactivas de física, química y biología. Aprende experimentando en un entorno virtual seguro.
            </p>
          </div>

          {/* Características */}
          <div className="space-y-4">
            {[
              { icon: <CheckCircle className="w-5 h-5" />, text: "Más de 50 simulaciones interactivas" },
              { icon: <CheckCircle className="w-5 h-5" />, text: "Progreso personalizado y logros" },
              { icon: <CheckCircle className="w-5 h-5" />, text: "Acceso desde cualquier dispositivo" },
              { icon: <CheckCircle className="w-5 h-5" />, text: "Contenido alineado con el currículo" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700">
                <div className="text-green-600">{feature.icon}</div>
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <p className="text-gray-600 italic mb-3">
              "Esta plataforma transformó la manera en que mis estudiantes comprenden los conceptos científicos. ¡Increíble!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                MC
              </div>
              <div>
                <p className="font-semibold text-gray-900">María Contreras</p>
                <p className="text-sm text-gray-500">Profesora de Física</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Derecha - Formulario */}
        <div className="w-full">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8 md:p-10">
            
            {/* Header del Formulario */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 mb-4">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Crear Cuenta
              </h2>
              <p className="text-gray-600">
                Ingresa tus datos para comenzar
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
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none text-gray-900 placeholder:text-gray-400"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Solicita este código a tu institución educativa
                </p>
              </div>

              {/* Correo Institucional */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  Correo Institucional
                </label>
                <input
                  type="email"
                  placeholder="estudiante@colegio.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                    placeholder="Mínimo 8 caracteres"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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

              {/* Términos y Condiciones */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  Acepto los <span className="text-blue-600 font-semibold hover:underline cursor-pointer">términos y condiciones</span> y la <span className="text-blue-600 font-semibold hover:underline cursor-pointer">política de privacidad</span>
                </label>
              </div>

              {/* Botón de Registro */}
              <button
                onClick={handleRegister}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <UserPlus className="w-5 h-5" />
                Crear mi cuenta
              </button>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                ¿Ya tienes una cuenta?{" "}
                <Link 
                  to="/login" 
                  className="text-blue-600 font-semibold hover:underline cursor-pointer"
                >
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </div>

          {/* Nota Legal */}
          <p className="text-center text-xs text-gray-500 mt-6">
            Al registrarte, confirmas que eres estudiante o docente de una institución educativa autorizada
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;