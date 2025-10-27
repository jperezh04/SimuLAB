import { useState } from "react";

const LoginPage: React.FC = () => {
  const [schoolCode, setSchoolCode] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ schoolCode, email, password });
    // Aquí irá Firebase/Auth API luego
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Código del colegio" 
          value={schoolCode} 
          onChange={(e) => setSchoolCode(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Correo" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
