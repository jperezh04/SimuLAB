import { Microscope, School, User, BookOpen, Users, TrendingUp, Award, BarChart3, Bell, Calendar } from "lucide-react";

const TeacherDashboard: React.FC = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, label: "Estudiantes Asignados", value: "84", color: "blue" },
    { icon: <BookOpen className="w-6 h-6" />, label: "Simulaciones Activas", value: "12", color: "purple" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Progreso Promedio", value: "76%", color: "green" },
    { icon: <Award className="w-6 h-6" />, label: "Logros Desbloqueados", value: "156", color: "yellow" },
  ];

  const recentActivity = [
    { student: "Ana García", action: "completó Péndulo Simple", time: "Hace 2 horas", avatar: "AG" },
    { student: "Carlos Mendoza", action: "inició Caída Libre", time: "Hace 4 horas", avatar: "CM" },
    { student: "María Torres", action: "obtuvo logro 'Primera Simulación'", time: "Hace 5 horas", avatar: "MT" },
  ];

  const upcomingClasses = [
    { subject: "Física", topic: "Movimiento Rectilíneo", time: "Hoy, 10:00 AM", students: 28 },
    { subject: "Química", topic: "Reacciones Químicas", time: "Mañana, 2:00 PM", students: 32 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Panel del Docente 👩‍🏫
              </h1>
              <p className="text-gray-600 text-lg">
                Bienvenido/a de vuelta, Prof. [Nombre]
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="relative p-3 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                <Bell className="w-6 h-6 text-gray-700" />
                <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button className="relative p-3 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                <Calendar className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Estadísticas Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <div className={`bg-${stat.color}-100 p-3 rounded-xl w-fit mb-4 text-${stat.color}-600`}>
                {stat.icon}
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Acciones Principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Ver Simulaciones */}
          <a
            href="/simulations"
            className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-40 bg-gradient-to-br from-blue-500 to-indigo-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Microscope className="w-20 h-20 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Ver Simulaciones
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Explora y asigna simulaciones interactivas a tus estudiantes
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                <span>Explorar</span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </a>

          {/* Administrar Colegio */}
          <a
            href="/admin"
            className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <School className="w-20 h-20 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Administrar Colegio
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Gestiona estudiantes, códigos de acceso y configuraciones
              </p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                <span>Gestionar</span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </a>

          {/* Mi Perfil */}
          <a
            href="/profile"
            className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-40 bg-gradient-to-br from-green-500 to-emerald-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <User className="w-20 h-20 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Mi Perfil
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Revisa y actualiza tu información personal y preferencias
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:gap-2 transition-all">
                <span>Ver perfil</span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          
          {/* Actividad Reciente */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-bold text-gray-900">Actividad Reciente</h2>
              <p className="text-gray-600 text-sm">Últimas acciones de tus estudiantes</p>
            </div>
            <div className="p-6 space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    {activity.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-medium">
                      <span className="font-bold">{activity.student}</span> {activity.action}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <button className="w-full text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Ver toda la actividad →
              </button>
            </div>
          </div>

          {/* Próximas Clases */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-xl font-bold text-gray-900">Próximas Clases</h2>
              <p className="text-gray-600 text-sm">Tu agenda de esta semana</p>
            </div>
            <div className="p-6 space-y-4">
              {upcomingClasses.map((classItem, index) => (
                <div key={index} className="p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{classItem.subject}</h3>
                      <p className="text-gray-600 text-sm">{classItem.topic}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {classItem.students} estudiantes
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{classItem.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <button className="w-full text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Ver calendario completo →
              </button>
            </div>
          </div>
        </div>

        {/* Acceso Rápido a Reportes */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Reportes y Análisis</h2>
              <p className="text-gray-600">Visualiza el desempeño de tus estudiantes</p>
            </div>
            <BarChart3 className="w-12 h-12 text-blue-600" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 text-left group">
              <div className="font-bold text-gray-900 mb-1 group-hover:text-blue-600">Reporte Semanal</div>
              <div className="text-sm text-gray-600">Resumen de actividad</div>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 text-left group">
              <div className="font-bold text-gray-900 mb-1 group-hover:text-purple-600">Progreso Individual</div>
              <div className="text-sm text-gray-600">Por estudiante</div>
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-green-400 hover:bg-green-50 transition-all duration-300 text-left group">
              <div className="font-bold text-gray-900 mb-1 group-hover:text-green-600">Comparativa de Grupos</div>
              <div className="text-sm text-gray-600">Análisis por clase</div>
            </button>
          </div>
        </div>

        {/* Banner Motivacional */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <Award className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h3 className="text-3xl font-bold mb-3">¡Excelente Trabajo!</h3>
          <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
            Tus estudiantes han completado 89 simulaciones esta semana. ¡Sigue motivándolos a alcanzar sus metas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;