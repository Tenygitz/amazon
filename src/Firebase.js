
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDVElG9sUbQ3KjvrFeCSRB-aNwX4_nir58",
  authDomain: "clone-110bd.firebaseapp.com",
  projectId: "clone-110bd",
  storageBucket: "clone-110bd.appspot.com",
  messagingSenderId: "156657550037",
  appId: "1:156657550037:web:faebf1407ddb90f302185c",
  measurementId: "G-FXGPESXNZJ"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);