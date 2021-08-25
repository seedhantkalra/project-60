import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB5C4-AkX8b_FxMTOk9aMAJy5OQBtIkXmY",
    authDomain: "project-60-bc118.firebaseapp.com",
    databaseURL: "https://project-60-bc118-default-rtdb.firebaseio.com",
    projectId: "project-60-bc118",
    storageBucket: "project-60-bc118.appspot.com",
    messagingSenderId: "521627440211",
    appId: "1:521627440211:web:f042b268f719068604a2a6"
  };
//initialize your database
firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  