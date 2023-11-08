// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "notes-72b81.firebaseapp.com",
  projectId: "notes-72b81",
  storageBucket: "notes-72b81.appspot.com",
  messagingSenderId: "422223069651",
  appId: "1:422223069651:web:a76fb30b3b459139386f26",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
