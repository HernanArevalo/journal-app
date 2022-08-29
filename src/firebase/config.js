// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6sFEbrqKyCreI8_NbHyZyD-cFmWLMfOY",
  authDomain: "journal-app-dc565.firebaseapp.com",
  projectId: "journal-app-dc565",
  storageBucket: "journal-app-dc565.appspot.com",
  messagingSenderId: "679888322912",
  appId: "1:679888322912:web:baf4e33b542ff9a8969e05"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp )