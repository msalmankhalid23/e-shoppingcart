import firebase from 'firebase/app';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDGPmCvhXk138dJRIOf5i5w3iax1qgs1HE",
    authDomain: "eshoppingcart-sk.firebaseapp.com",
    databaseURL: "https://eshoppingcart-sk.firebaseio.com",
    projectId: "eshoppingcart-sk",
    storageBucket: "eshoppingcart-sk.appspot.com",
    messagingSenderId: "955765801784",
    appId: "1:955765801784:web:0d43d71d0df192dd4d77cd",
    measurementId: "G-96Q3CXT84F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  firebase.analytics();
  
export default firebase 