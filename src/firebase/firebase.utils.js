import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBmyHA3G9F8a_kp4yjxQqObq18w03tznOo",
    authDomain: "ecom-react-6a257.firebaseapp.com",
    databaseURL: "https://ecom-react-6a257.firebaseio.com",
    projectId: "ecom-react-6a257",
    storageBucket: "ecom-react-6a257.appspot.com",
    messagingSenderId: "534649745413",
    appId: "1:534649745413:web:7fe60c2115d7c91e2e2c6c",
    measurementId: "G-3J6EHM5GL0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;