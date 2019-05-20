import Rebase from "re-base";
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC9UMvn03BPl8-Wemu0_Ysamxwqwr0ujzM",
  authDomain: "catch-of-the-day-de617.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-de617.firebaseio.com",
  projectId: "catch-of-the-day-de617",
  storageBucket: "catch-of-the-day-de617.appspot.com",
  messagingSenderId: "176931718832",
  appId: "1:176931718832:web:9eec466437b47a4b"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const base = Rebase.createClass(app.database());

export default base;
