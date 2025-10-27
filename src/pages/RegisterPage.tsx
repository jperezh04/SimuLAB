import { useState } from "react";

const RegisterPage: React.FC = () => {
  const [schoolCode, setSchoolCode] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registro:", { schoolCode, email, password });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registro de Estudiante/Docente</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Código del colegio" value={schoolCode} onChange={(e) => setSchoolCode(e.target.value)} required />
        <input type="email" placeholder="Correo institucional" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
export default RegisterPage;
