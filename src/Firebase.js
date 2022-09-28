
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDJi95IoPjMa5k9akbNLJKzT2yw1OBeO5s",
    authDomain: "fir-dfa1d.firebaseapp.com",
    projectId: "fir-dfa1d",
    storageBucket: "fir-dfa1d.appspot.com",
    messagingSenderId: "746286990727",
    appId: "1:746286990727:web:bf12f79d66959e85a03f22",
    measurementId: "G-9XQVKMP6GR"
  };
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);