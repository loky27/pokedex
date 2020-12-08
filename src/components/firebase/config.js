import firebase from "firebase";
//npm install firebase

const firebaseConfig = {
    apiKey: "AIzaSyDp9kLF0t2bhT74dkQC84d9GrvulPxH6PI",
    authDomain: "pokedex-jonathan.firebaseapp.com",
    databaseURL: "https://pokedex-jonathan-default-rtdb.firebaseio.com",
    projectId: "pokedex-jonathan",
    storageBucket: "pokedex-jonathan.appspot.com",
    messagingSenderId: "525387040324",
    appId: "1:525387040324:web:9bfb7a53eb7a1c8b605e11",
    measurementId: "G-K7VMCWQR6J"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
