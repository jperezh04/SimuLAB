const AdminSchoolPage: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Gestión del Colegio 🏫</h2>
      <p>Aquí los docentes administradores podrán ver estudiantes inscritos, generar códigos o activar plan premium.</p>
      <button>Ver estudiantes</button>
      <button>Generar nuevo código</button>
    </div>
  );
};

export default AdminSchoolPage;
