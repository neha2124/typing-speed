import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXFk4K8UNbhNocQ2zaiaVflpudi87inck",
  authDomain: "typing-test-89585.firebaseapp.com",
  projectId: "typing-test-89585",
  storageBucket: "typing-test-89585.appspot.com",
  messagingSenderId: "359674603804",
  appId: "1:359674603804:web:4dcca73691720f183f32d9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore()
export{db,auth}
export default app