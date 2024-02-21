// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, get, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Import the functions to get Google Analysts
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEiqCA2Ca7ThhBTuTICd1n1yPxMuebgIQ",
  authDomain: "cumorah-who.firebaseapp.com",
  projectId: "cumorah-who",
  storageBucket: "cumorah-who.appspot.com",
  messagingSenderId: "626968963116",
  appId: "1:626968963116:web:d99d607ffc95130bbd4989",
  measurementId: "G-EKY5KR93HN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Database
const db = getDatabase();
const auth = getAuth(app);

// Assigning the elements to variables
let EmailInp = document.getElementById("emailInp");
let PassInp = document.getElementById("passwordInp");
let FnameInp = document.getElementById("fnameInp");
let LnameInp = document.getElementById("lnameInp");
let RegisterScreen = document.getElementById("registerScreen");


// Creating a function to Register a new user.
let RegisterUser = evt => {
    evt.preventDefault();
    // Creating the User using the credentials and the variables assigned Below
    createUserWithEmailAndPassword(auth,EmailInp.value, PassInp.value)
    .then((credentials)=>{
        console.log(credentials);
    })
    // Creating a error messages to show up if something go wrong
    .catch((error)=>{
        alert(error.message);
        console.log(error.code);
        console.log(error.message);
      })
}

RegisterScreen.addEventListener("submit", (evt)=>{
    RegisterUser(evt);
})



