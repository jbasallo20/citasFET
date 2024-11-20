// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configuración de Firebase copiada de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyAo9LzZe1tCRMst54YDM70EXoJ4eRod1JY",
  authDomain: "citasfet2024-2837a.firebaseapp.com",
  projectId: "citasfet2024-2837a",
  storageBucket: "citasfet2024-2837a.firebasestorage.app",
  messagingSenderId: "744050973683",
  appId: "1:744050973683:web:8229aa6e6ffb5d84161086",
 // measurementId: "G-XQGK5VGVFZ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios que usarás
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
