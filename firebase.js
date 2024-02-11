// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYjv-6tDUL9huHazA2K3nib0yzVQQcZPo",
  authDomain: "crack-hack.firebaseapp.com",
  databaseURL: "https://crack-hack-default-rtdb.firebaseio.com",
  projectId: "crack-hack",
  storageBucket: "crack-hack.appspot.com",
  messagingSenderId: "1060310811560",
  appId: "1:1060310811560:web:04b335c987eeb9be87539d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

export default db;
