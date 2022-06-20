// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqepKJ-_jyd0PguJ69506Jxc2Q_YXwHqQ",
  authDomain: "meu-primeiro-projeto-f496b.firebaseapp.com",
  projectId: "meu-primeiro-projeto-f496b",
  storageBucket: "meu-primeiro-projeto-f496b.appspot.com",
  messagingSenderId: "842415823049",
  appId: "1:842415823049:web:bdfc74f9e85e1f2d7ad518"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore };