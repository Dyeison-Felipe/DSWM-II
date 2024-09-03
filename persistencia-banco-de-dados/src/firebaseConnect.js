import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOzWpXviNJGEJH7MH2XjY3HsYER08EOQA",
  authDomain: "dswm-ii.firebaseapp.com",
  projectId: "dswm-ii",
  storageBucket: "dswm-ii.appspot.com",
  messagingSenderId: "945027066117",
  appId: "1:945027066117:web:ba529ff4b1cb467bc36f6c",
  measurementId: "G-BEYBJZVBXB",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
