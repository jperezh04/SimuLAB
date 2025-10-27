import { Link } from "react-router-dom";

const StudentDashboard: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Bienvenido, Estudiante 👨‍🎓</h2>
      <p>Selecciona qué deseas hacer:</p>
      <ul>
        <li><Link to="/simulations">Explorar Simulaciones</Link></li>
        <li><Link to="/profile">Mi Perfil</Link></li>
      </ul>
    </div>
  );
};
export default StudentDashboard;
