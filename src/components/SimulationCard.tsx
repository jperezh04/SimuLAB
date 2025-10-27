import { Link } from "react-router-dom";

interface SimulationCardProps {
  id: string;
  title: string;
  description: string;
  isPremium?: boolean;
}

const SimulationCard: React.FC<SimulationCardProps> = ({ id, title, description, isPremium }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "10px", marginBottom: "10px" }}>
      <h3>{title} {isPremium && <span style={{ color: "gold" }}>★</span>}</h3>
      <p>{description}</p>
      <Link to={`/simulation/${id}`}>
        <button>Ver Simulación</button>
      </Link>
    </div>
  );
};

export default SimulationCard;
