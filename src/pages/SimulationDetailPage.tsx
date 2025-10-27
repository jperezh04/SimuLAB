import { useParams } from "react-router-dom";

const SimulationDetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simulación: {id}</h2>
      <p>Aquí cargará la animación o modelo matemático de la simulación.</p>
      <button>Iniciar Simulación</button>
    </div>
  );
};

export default SimulationDetailPage;
