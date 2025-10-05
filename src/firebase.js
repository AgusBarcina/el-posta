// Importa las funciones necesarias
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDM_Oz8Hi7hNxRH2uPgMHZcTmvpX6xofO8",
  authDomain: "barcina-final.firebaseapp.com",
  projectId: "barcina-final",
  storageBucket: "barcina-final.firebasestorage.app",
  messagingSenderId: "284827738383",
  appId: "1:284827738383:web:09926d60456d5c03dc5e7a",
  measurementId: "G-E4K6BXRL4V"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén la referencia a Firestore
const db = getFirestore(app);

// Exporta la referencia
export { db };