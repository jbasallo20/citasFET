import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login"; // Asegúrate de que esta ruta sea correcta
import Register from "./components/Register"; // Asegúrate de que esta ruta sea correcta
import FriendsList from "./components/FriendsList"; // Asegúrate de que esta ruta sea correcta
import Olvido from "./components/Olvido";
import UsersList from "./components/UserList";
import Descrip from "./components/Descrip";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar la visibilidad

  const handleLoginClick = () => {
    setIsLoggedIn(true); // Ocultar los botones y mostrar el formulario de login
  };

  const handleRegisterClick = () => {
    setIsLoggedIn(true); // Ocultar los botones y mostrar el formulario de registro
  };

  return (
    <Router>
      <div style={styles.container}>
        {!isLoggedIn ? (
          // Mostrar esto si no se ha hecho login ni registro
          <>
            <h1>Bienvenido a la APP de citas "FUNDACION ESCUELA TECNOLOGICA FET"</h1>
            
            <div style={styles.buttons}>
              <button style={styles.button} onClick={handleLoginClick}>
                Iniciar sesión
              </button>
              <button style={styles.button} onClick={handleRegisterClick}>
                Registrarse
              </button>
            </div>
          </>
        ) : (
          // Si ya se hizo login o registro, no mostrar los botones y texto de bienvenida
          <div>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/friends" element={<FriendsList />} />
              <Route path="/forgot-password" element={<Olvido/>} />  
              <Route path="/users" element={<UsersList />} />
              <Route path="/descrip" element={<Descrip />} />

            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    backgroundColor: "#6CC847",
    justifyContent: "center",
    
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#B62629",
    color: "white",
  },
};

export default App;
