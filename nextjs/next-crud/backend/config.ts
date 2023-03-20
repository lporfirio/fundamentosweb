import firebase from "firebase/app";
import 'firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCdBPufeUiRrEoSy9XbwqJR0SETbCVQ5co",
        authDomain: "next-crud-aacc9.firebaseapp.com",
        projectId: "next-crud-aacc9",
        storageBucket: "next-crud-aacc9.appspot.com",
        messagingSenderId: "143142465719",
        appId: "1:143142465719:web:45c6c880c4d08505fd5d32"
    })
}

export default firebase


