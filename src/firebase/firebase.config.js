// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYdUDjJgoMuZpx6Bjo9n6ce114l2D34L8",
    authDomain: "assigment-11-bc7ca.firebaseapp.com",
    projectId: "assigment-11-bc7ca",
    storageBucket: "assigment-11-bc7ca.appspot.com",
    messagingSenderId: "69874686579",
    appId: "1:69874686579:web:f07b0f20e24349a1d42806"

    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;