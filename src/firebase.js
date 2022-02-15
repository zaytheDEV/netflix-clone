
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "ENTER API KEY",
    authDomain: "netflix-clone-99f39.firebaseapp.com",
    projectId: "netflix-clone-99f39",
    storageBucket: "netflix-clone-99f39.appspot.com",
    messagingSenderId: "781293321514",
    appId: "1:781293321514:web:a83f0b5a9cc8878f937253",
    measurementId: "G-3VRCS419WR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db }
