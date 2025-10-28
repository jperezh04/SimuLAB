import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo y Descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">⚛️</span>
              <span className="font-bold text-3xl">
                <span className="text-blue-400">Lab</span>
                <span className="text-white">Cat</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 max-w-md">
              Plataforma de laboratorios virtuales para la educación científica en Perú. 
              Haciendo la ciencia accesible para todos los estudiantes.
            </p>
            <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Hecho por</span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              AlpacaCoders 🦙
            </span>
          </div>

          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/simulations" className="hover:text-blue-400 transition-colors duration-200">
                  Simulaciones
                </Link>
              </li>
              <li>
                <a href="#sobre-nosotros" className="hover:text-blue-400 transition-colors duration-200">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-blue-400 transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                  Términos de servicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} <span className="font-semibold text-white">LabCat</span>. Todos los derechos reservados.
            <span className="mx-2">|</span>
            <span className="text-purple-400 font-semibold">Team AlpacaCoders 🦙🐱</span>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contacto@labcat.edu.pe"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Badge Adicional */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-gray-400">Plataforma en constante evolución</span>
            <span className="text-blue-400 font-semibold">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;