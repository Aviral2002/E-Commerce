import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-S-OQ6DtFUhwxPjMDB4XJaz-rE5gbuxU",
    authDomain: "e-commerce-a58a3.firebaseapp.com",
    projectId: "e-commerce-a58a3",
    storageBucket: "e-commerce-a58a3.appspot.com",
    messagingSenderId: "877414657810",
    appId: "1:877414657810:web:6fc27e7b80d1afee040dcb"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth= firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();