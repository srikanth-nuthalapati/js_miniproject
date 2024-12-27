// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApJVESuvdH_iwHgddciMjnq88ORdQfLRc",
  authDomain: "login-signup-d6de2.firebaseapp.com",
  projectId: "login-signup-d6de2",
  storageBucket: "login-signup-d6de2.firebasestorage.app",
  messagingSenderId: "306538488543",
  appId: "1:306538488543:web:2b66baf260a1f475b47f6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


let submit = document.querySelector("button");

submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let email = document.querySelector("input#email").value
    let password = document.querySelector("input#password").value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("login")
      window.location.href = "home.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
})
