// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "bills-8735c.firebaseapp.com",
  projectId: "bills-8735c",
  storageBucket: "bills-8735c.appspot.com",
  messagingSenderId: "80332429797",
  appId: "1:80332429797:web:a37b6800cb94429258f70c"
};

// Initialize Firebase
const app = getApps().length == 0? initializeApp(firebaseConfig): getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage}