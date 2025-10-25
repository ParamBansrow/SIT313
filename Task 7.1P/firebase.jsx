import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDGj7LEteHlm5UYOuh_iIfno8gGGRdC-ho",

  authDomain: "login--registration-page.firebaseapp.com",

  projectId: "login--registration-page",

  storageBucket: "login--registration-page.firebasestorage.app",

  messagingSenderId: "64249873971",

  appId: "1:64249873971:web:575d078c9ca37563370546"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
