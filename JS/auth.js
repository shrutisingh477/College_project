import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// 🔥 same config jo firebase.js mein hai
const firebaseConfig = {
  apiKey: "AIzaSyDgJi7flxm99-L80iYbvVfeDeFRiV0AiG4",
  authDomain: "campus-safety-733ef.firebaseapp.com",
  projectId: "campus-safety-733ef",
  appId:  "1:920589641005:web:4b6c2b8c12c27d1c5c9fa4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ SIGNUP FUNCTION
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup Successful ✅");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// ✅ LOGIN FUNCTION
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Successful 🎉");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// global access
window.signup = signup;
window.login = login;