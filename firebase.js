import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA0bYfvUr7hEtY7SrBvDsi0lPMbz0vz82M",
    authDomain: "robinhood-53187.firebaseapp.com",
    projectId: "robinhood-53187",
    storageBucket: "robinhood-53187.appspot.com",
    messagingSenderId: "982117168108",
    appId: "1:982117168108:web:2ffd0095e660887a6f46c9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };