// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-189de.firebaseapp.com",
  projectId: "task-manager-189de",
  storageBucket: "task-manager-189de.firebasestorage.app",
  messagingSenderId: "657883912596",
  appId: "1:657883912596:web:7ad51207be3ad70b8ed781"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);