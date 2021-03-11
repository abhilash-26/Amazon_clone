import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBDkK2huDUrcEbnMy1BbWc5CSaGRWCnSrA",
    authDomain: "estore-96737.firebaseapp.com",
    projectId: "estore-96737",
    storageBucket: "estore-96737.appspot.com",
    messagingSenderId: "519645632094",
    appId: "1:519645632094:web:eaec88ab4ee5d938ee06cf",
    measurementId: "G-TSXWFQDFEM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  export{db,auth};