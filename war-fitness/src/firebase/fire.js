import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB67jgXiroXXNAY3yMfMKkt2FwiaSvDD_M",
    authDomain: "war-fitness-25aca.firebaseapp.com",
    databaseURL: "https://war-fitness-25aca.firebaseio.com",
    projectId: "war-fitness-25aca",
    storageBucket: "war-fitness-25aca.appspot.com",
    messagingSenderId: "722953902460",
    appId: "1:722953902460:web:6ae964b29cd00e6de8ecf9"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;