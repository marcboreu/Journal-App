import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';



const firebaseConfig = {
    apiKey: "AIzaSyDWSsPkA0YVWF4ccYwm7qisnHJFh64fInI",
    authDomain: "journalapp2020.firebaseapp.com",
    projectId: "journalapp2020",
    storageBucket: "journalapp2020.appspot.com",
    messagingSenderId: "428721215742",
    appId: "1:428721215742:web:9c060ba1ab2963212b2daf",
    measurementId: "G-CR4918YPS0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



  export {
      db,
      googleAuthProvider,
      firebase
  }