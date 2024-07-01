// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-js.firebaseapp.com",
  projectId: "mern-blog-js",
  storageBucket: "mern-blog-js.appspot.com",
  messagingSenderId: "505997328380",
  appId: "1:505997328380:web:e656f31eaaba3f758c3c79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);