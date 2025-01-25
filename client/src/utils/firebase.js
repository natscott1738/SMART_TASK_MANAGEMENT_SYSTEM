// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7R93q0DjRMa1Gk_hk5dqtwFdWxGTG1Rw",
  authDomain: "smart-task-management-system.firebaseapp.com",
  projectId: "smart-task-management-system",
  storageBucket: "smart-task-management-system.firebasestorage.app",
  messagingSenderId: "29320773177",
  appId: "1:29320773177:web:b5b4cf107edac9aea0d7e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);