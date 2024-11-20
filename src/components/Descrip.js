import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica para cerrar sesión
    alert("Sesión cerrada correctamente");
    navigate("/login"); // Redirige al usuario a la página de inicio de sesión
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>¡Bienvenido a FET Social!</h1>
      <p style={styles.message}>Estamos encantados de tenerte aquí.</p>
      <button style={styles.button} onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#D32F2F",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  message: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#555",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#D32F2F",
    color: "white",
  },
};

export default Home;
