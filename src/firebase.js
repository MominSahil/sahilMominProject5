import firebase from "firebase";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7S_BsnuhDyNqCzSBSzVM6Ml4-4EYHsNk",
    authDomain: "secret-ror.firebaseapp.com",
    databaseURL: "https://secret-ror.firebaseio.com",
    projectId: "secret-ror",
    storageBucket: "secret-ror.appspot.com",
    messagingSenderId: "595556304132",
    appId: "1:595556304132:web:6bcc611a61feae62bd7c51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;