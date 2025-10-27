import { Link } from "react-router-dom";

const TeacherDashboard: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Panel del Docente 👩‍🏫</h2>
      <ul>
        <li><Link to="/simulations">Ver Simulaciones</Link></li>
        <li><Link to="/admin">Administrar Colegio / Estudiantes</Link></li>
        <li><Link to="/profile">Mi Perfil</Link></li>
      </ul>
    </div>
  );
};
export default TeacherDashboard;
