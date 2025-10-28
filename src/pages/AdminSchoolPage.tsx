import { useState } from "react";
import { School, Users, Key, Crown, Plus, Eye, BarChart3, Settings, TrendingUp, Award, Clock } from "lucide-react";

const AdminSchoolPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const stats = [
    { icon: <Users className="w-6 h-6" />, label: "Estudiantes Activos", value: "247", change: "+12%", color: "blue" },
    { icon: <Award className="w-6 h-6" />, label: "Simulaciones Completadas", value: "1,834", change: "+23%", color: "green" },
    { icon: <Clock className="w-6 h-6" />, label: "Horas Totales", value: "892", change: "+18%", color: "purple" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Promedio de Progreso", value: "78%", change: "+5%", color: "orange" },
  ];

  const recentStudents = [
    { name: "Ana García", email: "ana.garcia@colegio.edu", status: "Activo", progress: 85 },
    { name: "Carlos Mendoza", email: "carlos.mendoza@colegio.edu", status: "Activo", progress: 72 },
    { name: "María Torres", email: "maria.torres@colegio.edu", status: "Activo", progress: 91 },
    { name: "Luis Ramírez", email: "luis.ramirez@colegio.edu", status: "Inactivo", progress: 45 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-4 rounded-2xl shadow-lg">
                <School className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-1">
                  Gestión del Colegio 🏫
                </h1>
                <p className="text-gray-600 text-lg">
                  I.E. ABC - Panel de Administración
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                <Settings className="w-5 h-5" />
                Configuración
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Crown className="w-5 h-5" />
                Activar Premium
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Estadísticas Principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-${stat.color}-100 p-3 rounded-xl text-${stat.color}-600`}>
                  {stat.icon}
                </div>
                <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded-lg">
                  {stat.change}
                </span>
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Acciones Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Ver Estudiantes */}
          <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
            <div className="h-32 bg-gradient-to-br from-blue-500 to-indigo-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="w-16 h-16 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Ver Estudiantes
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Administra y monitorea el progreso de todos los estudiantes inscritos
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                <Eye className="w-5 h-5" />
                <span className="ml-2">Acceder</span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </div>

          {/* Generar Códigos */}
          <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
            <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Key className="w-16 h-16 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                Generar Códigos
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Crea códigos de acceso únicos para nuevos estudiantes y docentes
              </p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                <Plus className="w-5 h-5" />
                <span className="ml-2">Crear nuevo</span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </div>

          {/* Reportes */}
          <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
            <div className="h-32 bg-gradient-to-br from-green-500 to-emerald-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                Reportes y Analytics
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Visualiza estadísticas detalladas y genera reportes de desempeño
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:gap-2 transition-all">
                <BarChart3 className="w-5 h-5" />
                <span className="ml-2">Ver reportes</span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de Estudiantes Recientes */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Estudiantes Recientes</h2>
                <p className="text-gray-600">Últimos estudiantes registrados en la plataforma</p>
              </div>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Ver todos
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Estudiante
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Correo
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Progreso
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentStudents.map((student, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                          {student.name.charAt(0)}
                        </div>
                        <span className="font-semibold text-gray-900">{student.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {student.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        student.status === "Activo" 
                          ? "bg-green-100 text-green-700 border border-green-200" 
                          : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm hover:underline">
                        Ver detalles
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Banner Premium */}
        <div className="mt-12 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <Crown className="w-16 h-16 mx-auto mb-4 text-yellow-200" />
            <h3 className="text-4xl font-bold mb-3">Desbloquea el Potencial Completo</h3>
            <p className="text-yellow-50 mb-6 text-lg max-w-2xl mx-auto">
              Activa el plan Premium para acceder a simulaciones avanzadas, reportes detallados y soporte prioritario para tu institución.
            </p>
            <button className="px-10 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-yellow-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center gap-3 mx-auto">
              <Crown className="w-6 h-6" />
              Activar Plan Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSchoolPage;