import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const iniciarSesion = (e) => {
    e.preventDefault();

    if (usuario === "admin" && password === "1234") {
      localStorage.setItem("auth", "true");
      navigate("/");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-page">

      {/* LADO IZQUIERDO INFO */}
      <div className="login-info">
        <h1>IngeInfo</h1>
        <p>Plataforma académica de Ingeniería</p>

        <ul>
          <li>📚 Material académico organizado</li>
          <li>⚙️ Carreras de ingeniería</li>
          <li>🚀 Acceso rápido y seguro</li>
          <li>📊 Recursos digitales modernos</li>
        </ul>
      </div>

      {/* LADO DERECHO LOGIN */}
      <div className="login-container">
        <form className="login-card" onSubmit={iniciarSesion}>
          <h2>Bienvenido</h2>
          <p>Inicia sesión para continuar</p>

          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button type="submit">Entrar</button>

          <p className="demo">
            Demo: <b>admin / 1234</b>
          </p>
        </form>
      </div>

    </div>
  );
}

export default Login;