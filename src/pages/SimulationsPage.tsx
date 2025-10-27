import { Link } from "react-router-dom";

const simulations = [
  { id: "pendulo", title: "Péndulo Simple" },
  { id: "caida-libre", title: "Caída Libre" },
  { id: "caos-doble-pendulo", title: "Péndulo Doble Caótico (Premium)" },
];

const SimulationsPage: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Simulaciones Disponibles 🔬</h2>
      <ul>
        {simulations.map(sim => (
          <li key={sim.id}>
            <Link to={`/simulation/${sim.id}`}>{sim.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SimulationsPage;
