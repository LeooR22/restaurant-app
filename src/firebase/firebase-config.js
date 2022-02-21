import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABl7CBI-uHEgIZvvjsFcT49INtscYkiKg",
  authDomain: "restaurant-app-alkemy.firebaseapp.com",
  projectId: "restaurant-app-alkemy",
  storageBucket: "restaurant-app-alkemy.appspot.com",
  messagingSenderId: "348045716027",
  appId: "1:348045716027:web:24ac68f3f3ee2fb4344a1e",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
