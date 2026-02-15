import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Ye wala hissa aapne Firebase website se copy karna hai
const firebaseConfig = {
  apiKey: "AIzaSyBiqN9jHaux0M7yFdMjr592FVx8dS7ydzw",
  authDomain: "myportfolio-b3d8a.firebaseapp.com",
  projectId: "myportfolio-b3d8a",
  storageBucket: "myportfolio-b3d8a.firebasestorage.app",
  messagingSenderId: "110335803196",
  appId: "1:110335803196:web:1635b0607b3ddb49a9a839",
  measurementId: "G-BCK591THZ9"
}

// Firebase initialize karein
const app = initializeApp(firebaseConfig);

// Firestore (Database) export karein taake hum use kar sakein
export const db = getFirestore(app);