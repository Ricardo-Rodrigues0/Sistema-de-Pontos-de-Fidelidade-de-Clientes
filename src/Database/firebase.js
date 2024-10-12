// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs5Thpj12O8FY8ppcjrKRH3TSPoKUhZK8",
  authDomain: "cliente-fidelidade-5b0c6.firebaseapp.com",
  projectId: "cliente-fidelidade-5b0c6",
  storageBucket: "cliente-fidelidade-5b0c6.appspot.com",
  messagingSenderId: "81403461916",
  appId: "1:81403461916:web:c76fe1705b0e1f90d57ad9",
  measurementId: "G-7EFV0RFBNM"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider };