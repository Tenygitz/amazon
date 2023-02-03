
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDQA_3fwdO0eElyQl5mR3SqZ6i8yC1C3qU",
  authDomain: "ecommerce-b3c70.firebaseapp.com",
  projectId: "ecommerce-b3c70",
  storageBucket: "ecommerce-b3c70.appspot.com",
  messagingSenderId: "379733395227",
  appId: "1:379733395227:web:93c35e3979c0cc6c53f5be"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage=getStorage(app)