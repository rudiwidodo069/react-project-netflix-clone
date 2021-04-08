import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBCzI7pUhYSoJtVN7VYdvhbIfOhTAqoauo",
    authDomain: "netflix-clone-b5bbf.firebaseapp.com",
    projectId: "netflix-clone-b5bbf",
    storageBucket: "netflix-clone-b5bbf.appspot.com",
    messagingSenderId: "700175896081",
    appId: "1:700175896081:web:bc8da52eebd89dfc08abb0",
    measurementId: "G-YNPWTQ7VP2"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;