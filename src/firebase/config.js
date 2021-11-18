import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBNjFmi0Gq6IBT6B34OfAyYWANchN4pd9o",
    authDomain: "dojo-1ecb8.firebaseapp.com",
    projectId: "dojo-1ecb8",
    storageBucket: "dojo-1ecb8.appspot.com",
    messagingSenderId: "992394864994",
    appId: "1:992394864994:web:e4ebcb55a659a0005fe43b"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };