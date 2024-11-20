import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div style={styles.container}>
    <h1 style={styles.title1}>Enamorados FET</h1>
    <div style={styles.imageContainer}>
        <img
          src="https://koe.com.co/v1/wp-content/uploads/2020/01/FET.jpg"
          alt="Enamorados FET"
          style={styles.image}
        />
      </div>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.title}>Iniciar sesión</h2>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        
        <button type="submit" style={styles.button}>Iniciar sesión</button>

        {/* Enlace a "¿Se te olvidó la contraseña?" */}
        <Link to="/forgot-password" style={styles.link}>
          ¿Se te olvidó la contraseña?
        </Link>

        {/* Enlace a la página de registro */}
        <Link to="/register" style={styles.link}>
          ¿No tienes cuenta? Regístrate
        </Link>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#E24D81',
  },
  title1 : {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px", 
    color: "#333",
  },
  form: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',

  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#3EA515',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  link: {
    display: 'block',
    textAlign: 'center',
    marginTop: '10px',
    color: '#B62629',
    textDecoration: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  linkHover: {
    color: '#087f23', // Color más oscuro al pasar el ratón
  },
};

export default Login;
