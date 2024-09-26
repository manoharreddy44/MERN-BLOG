// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c7f1c.firebaseapp.com",
  projectId: "mern-blog-c7f1c",
  storageBucket: "mern-blog-c7f1c.appspot.com",
  messagingSenderId: "736351750262",
  appId: "1:736351750262:web:f32d775ebb3913e9a53757"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);