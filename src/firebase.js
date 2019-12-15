const firebase = require('firebase/app')

require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAr3fMu2R9V4dex2r6wjC0Gh_JxyN-X_O8",
    authDomain: "swetimetracker.firebaseapp.com",
    databaseURL: "https://swetimetracker.firebaseio.com",
    projectId: "swetimetracker",
    storageBucket: "swetimetracker.appspot.com",
    messagingSenderId: "784860893025",
    appId: "1:784860893025:web:e3a12aa611b7de5e"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig)

const firestore = firebaseApp.firestore();


export default firestore