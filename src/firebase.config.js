// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYyKkb8GVALJFJjiGtwLK1nMuvtqbGRHs",
  authDomain: "jobconnect-69f01.firebaseapp.com",
  projectId: "jobconnect-69f01",
  storageBucket: "jobconnect-69f01.appspot.com",
  messagingSenderId: "732472623478",
  appId: "1:732472623478:web:ef1e091c3adf3d5c0d3a57",
  measurementId: "G-MLQSS11R8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export {db};