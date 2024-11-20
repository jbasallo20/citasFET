// src/components/FirestoreDemo.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const FirestoreDemo = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));
      setData(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  const addItem = async () => {
    await addDoc(collection(db, "items"), { name: newItem });
    setNewItem("");
  };
  const saveFriend = async (user) => {
    try {
      await addDoc(collection(db, "friends"), {
        name: user.displayName, // Suponiendo que el usuario tiene un nombre
        email: user.email,
      });
      console.log("Amigo guardado correctamente");
    } catch (error) {
      console.error("Error al guardar el amigo:", error.message);
    }
  };

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Nuevo ítem"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Agregar</button>
    </div>
  );
};

export default FirestoreDemo;
