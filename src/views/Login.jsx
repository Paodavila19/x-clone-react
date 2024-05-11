import { Navigate, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import logo from "../assets/images/logo_ppal.png"
import React, { useState } from "react";



const USER = [
  {
    id: 1,
    username: "acastillo",
    password: "123456",
    role: "admin"
  },
  {
    id: 2,
    username: "lissetzea",
    password: "123456",
    role: "admin"
  },
  {
    id: 3,
    username: "ormanc",
    password: "123456",
    role:"user"
  },
  {
    id: 4,
    username: "camilab",
    password: "123456",
    role:"user"
  }
]

function Login() {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [error, setError] = useState("");

  if (user) {
    return <Navigate to="/" />;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // hacer una peticion fetch al servidor para que verifique el login
    // fetch('/api/login', { method: form.method, body: formData });

    const loginObject = Object.fromEntries(formData.entries());
    const userLogin = USER.find((user) => 
      user.username === loginObject.username 
      && user.password === loginObject.password
    )
    if (userLogin) {
      // login exitoso
      login(userLogin.id);
      if (userLogin.role === "user") {
        navigate("/PageUser"); // Redirigir a la página del usuario normal
      } else if (userLogin.role === "admin") {
        navigate("/"); // Redirigir a la página del administrador
      }
    } else {
      setError("Nombre de usuario o contraseña incorrectos");
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-100">
      <div className="p-4">
        <img src={logo} alt="Logo de la plataforma" className="mb-4 mx-32 w-40" />
        <h2 className="mb-6 font-bold text-2xl text-center text-blue-700">BioInsight Diagnostics</h2>
        <div className="bg-white p-6 rounded-lg shadow-md" style={{ width: "400px" /* Ancho deseado */ }}>
          <form className="flex flex-col items-center" method="post" onSubmit={handleSubmit}>
            {error && <p className="text-red-500 mb-4">{error}</p>} {/* Mostrar el mensaje de error si existe */}
            <label htmlFor="username" className="text-blue-700 mb-6 text-left w-full">
              Iniciar sesión
            </label>
            <input
              className="mb-6 mx-auto rounded-md p-3 text-black"
              name="username"
              id="username"
              placeholder="Nombre de usuario"
              style={{ width: "350px" }}
            />
            <input
              className="mb-6 rounded-lg p-3 text-black"
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              style={{ width: "350px" }}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full mb-4"
              type="submit"
            >
              Iniciar sesión
            </button>
            <Link className="text-blue-500 hover:underline" to="/register">
              Registro
            </Link>
          </form>
        </div>
      </div>
    </div>
  );  
}

export default Login;
