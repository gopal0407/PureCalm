import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzohOfbFkS5smnqBLfPMWNYOuEuzNkFgU",
  authDomain: "palmcalm-018.firebaseapp.com",
  projectId: "palmcalm-018",
  storageBucket: "palmcalm-018.appspot.com",
  messagingSenderId: "714058660908",
  appId: "1:714058660908:web:d0b4a489e4647c85332589",
  measurementId: "G-JDBYJ97R5P"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
