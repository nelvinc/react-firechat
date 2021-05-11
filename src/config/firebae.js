import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAH7xqUzPoaxuPev0W4wqCyfxFY8UH7Qcs",
    authDomain: "firechat-test-62560.firebaseapp.com",
    projectId: "firechat-test-62560",
    storageBucket: "firechat-test-62560.appspot.com",
    messagingSenderId: "312535050667",
    appId: "1:312535050667:web:578ecfe4ed1057981f0aee",
    measurementId: "G-5Y5DKWR8QC"
  };

firebase.initializiApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}