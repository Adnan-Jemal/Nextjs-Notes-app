// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvPhDgBjmncwpzZB_hHcjI5U1WJdWyiRo",
  authDomain: "notes-72b81.firebaseapp.com",
  projectId: "notes-72b81",
  storageBucket: "notes-72b81.appspot.com",
  messagingSenderId: "422223069651",
  appId: "1:422223069651:web:a76fb30b3b459139386f26"
};

// Initialize Firebase
const app = !getApps().length?initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app)
export const db = getFirestore(app)