import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Asegúrate de tener configurada la base de datos Firestore en firebase.js
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom"; // Importamos Link para la navegación

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "users"); // Cambia "users" por el nombre de tu colección en Firestore
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersList);
      } catch (error) {
        console.error("Error al cargar usuarios:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Personas Registradas</h2>
      <div style={styles.scrollContainer}>
        {users.map((user) => (
          <div key={user.id} style={styles.card}>
            <h3 style={styles.cardTitle}>{user.name || "Usuario anónimo"}</h3>
            <p style={styles.cardEmail}>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#B62629",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  scrollContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxHeight: "60vh",
    overflowY: "scroll",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  card: {
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  cardTitle: {
    fontSize: "18px",
    marginBottom: "5px",
  },
  cardEmail: {
    fontSize: "14px",
    margin: 0,
  },
};

export default UsersList;
