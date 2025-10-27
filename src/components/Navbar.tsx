import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: "10px", background: "#f5f5f5" }}>
      <h3 style={{ display: "inline-block", marginRight: "20px" }}>🐱 LabCat</h3>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/simulations">Simulaciones</Link> |{" "}
      <Link to="/profile">Perfil</Link> |{" "}
      <Link to="/login">Cerrar sesión</Link>
    </nav>
  );
};

export default Navbar;
