import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// firebase config json 
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "old-mates-club.firebaseapp.com",
  databaseURL: "https://old-mates-club.firebaseio.com",
  projectId: "old-mates-club",
  storageBucket: "old-mates-club.appspot.com",
  messagingSenderId: "159454763745",
  appId: "1:159454763745:web:f6ca9e0acb19064b2275a0",
  measurementId: "G-V5B7GRQ4FJ"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export default firebase;
