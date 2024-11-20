import React, { useEffect, useState } from "react";
import { db } from "./../firebase"; // Asegúrate de importar Firestore desde tu archivo firebase.js
import { collection, getDocs } from "firebase/firestore";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        // Referencia a la colección 'friends' en Firestore
        const querySnapshot = await getDocs(collection(db, "friends"));
        
        // Mapear los documentos de Firestore a un array
        const friendsData = querySnapshot.docs.map(doc => doc.data());
        
        setFriends(friendsData); // Establecer el estado de los amigos
      } catch (error) {
        console.error("Error al obtener los amigos:", error.message);
      }
    };

    fetchFriends(); // Llamada para obtener los amigos cuando se carga el componente
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Lista de Amigos</h2>
      <ul style={styles.list}>
        {friends.length > 0 ? (
          friends.map((friend, index) => (
            <li key={index} style={styles.friendItem}>
              <div>{friend.name}</div>
              <div>{friend.email}</div>
            </li>
          ))
        ) : (
          <p>No tienes amigos registrados aún.</p>
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#B62629',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  friendItem: {
    padding: '10px',
    backgroundColor: '#fff',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default FriendsList;
