import { useState } from "react";
import { User, Mail, School, Edit2, Save, X, Award, BookOpen, Clock, TrendingUp, Trophy, Target } from "lucide-react";

const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "Usuario de Ejemplo",
    correo: "ejemplo@colegio.edu",
    colegio: "I.E. ABC",
    codigo: "ABC123"
  });

  const handleSave = () => {
    setIsEditing(false);
    // Aquí iría la lógica para guardar los datos
  };

  const achievements = [
    { icon: <Trophy className="w-6 h-6" />, title: "Primera Simulación", color: "from-yellow-400 to-orange-500" },
    { icon: <Target className="w-6 h-6" />, title: "10 Experimentos", color: "from-blue-400 to-indigo-500" },
    { icon: <Award className="w-6 h-6" />, title: "Semana Completa", color: "from-purple-400 to-pink-500" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "100% en Quiz", color: "from-green-400 to-emerald-500" },
  ];

  const stats = [
    { icon: <BookOpen className="w-6 h-6" />, label: "Simulaciones Completadas", value: "12", color: "blue" },
    { icon: <Clock className="w-6 h-6" />, label: "Horas de Estudio", value: "24", color: "purple" },
    { icon: <Award className="w-6 h-6" />, label: "Logros Obtenidos", value: "8", color: "green" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Mi Perfil 🧑
          </h1>
          <p className="text-gray-600 text-lg">
            Gestiona tu información personal y revisa tu progreso
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        
        {/* Tarjeta de Información Personal */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Información Personal</h2>
                  <p className="text-blue-100">Tus datos académicos</p>
                </div>
              </div>
              
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Edit2 className="w-5 h-5" />
                  Editar Datos
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg"
                  >
                    <Save className="w-5 h-5" />
                    Guardar
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center gap-2 px-4 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="p-8 space-y-6">
            {/* Nombre */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <User className="w-4 h-4 text-blue-600" />
                Nombre Completo
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                />
              ) : (
                <p className="text-lg text-gray-900 font-medium bg-gray-50 px-4 py-3 rounded-xl">
                  {formData.nombre}
                </p>
              )}
            </div>

            {/* Correo */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Mail className="w-4 h-4 text-blue-600" />
                Correo Electrónico
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={formData.correo}
                  onChange={(e) => setFormData({...formData, correo: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                />
              ) : (
                <p className="text-lg text-gray-900 font-medium bg-gray-50 px-4 py-3 rounded-xl">
                  {formData.correo}
                </p>
              )}
            </div>

            {/* Colegio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <School className="w-4 h-4 text-blue-600" />
                  Institución Educativa
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.colegio}
                    onChange={(e) => setFormData({...formData, colegio: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                  />
                ) : (
                  <p className="text-lg text-gray-900 font-medium bg-gray-50 px-4 py-3 rounded-xl">
                    {formData.colegio}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <School className="w-4 h-4 text-blue-600" />
                  Código de Colegio
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.codigo}
                    onChange={(e) => setFormData({...formData, codigo: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                  />
                ) : (
                  <p className="text-lg text-gray-900 font-medium bg-gray-50 px-4 py-3 rounded-xl">
                    {formData.codigo}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Estadísticas de Progreso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 bg-${stat.color}-50 border-${stat.color}-100`}>
                <div className={`bg-${stat.color}-500 p-3 rounded-lg w-fit mb-4 text-white`}>
                  {stat.icon}
                </div>
                <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logros */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Logros Recientes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-xl border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`bg-gradient-to-br ${achievement.color} p-4 rounded-full mb-3 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <p className="text-sm font-semibold text-gray-700 text-center">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Motivacional */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <Award className="w-12 h-12 mx-auto mb-4 text-purple-200" />
          <h3 className="text-3xl font-bold mb-3">¡Sigue Así!</h3>
          <p className="text-purple-100 mb-6 text-lg max-w-2xl mx-auto">
            Has completado el 65% de las simulaciones disponibles. ¡Continúa aprendiendo para desbloquear más logros!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;