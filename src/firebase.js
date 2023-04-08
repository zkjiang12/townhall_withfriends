// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFY_GNF1Bs2K1Zlxq6wUNuNl2CnXPNHFQ",
  authDomain: "townhall2-18156.firebaseapp.com",
  projectId: "townhall2-18156",
  storageBucket: "townhall2-18156.appspot.com",
  messagingSenderId: "1061215832283",
  appId: "1:1061215832283:web:72f4b896606317a438a4fe",
  measurementId: "G-1GHDBHZ25Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)