import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxDn3dlj4q3a1zgmrDBrWg4xqp9Bz-UvA",
  authDomain: "rizalvillage.firebaseapp.com",
  projectId: "rizalvillage",
  storageBucket: "rizalvillage.appspot.com",
  messagingSenderId: "850913287994",
  appId: "1:850913287994:web:eb266845ab745c40fa3a03",
  measurementId: "G-NLB0KH51EY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);