import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } 
from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// 🔥 Firebase Config (apna wala paste karo)
const firebaseConfig = {
  apiKey: "AIzaSyDgJi7flxm99-L80iYbvVfeDeFRiV0AiG4",
  authDomain: "campus-safety-733ef.firebaseapp.com",
  projectId: "campus-safety-733ef",
   appId:  "1:920589641005:web:4b6c2b8c12c27d1c5c9fa4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function submitComplaint(event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const issue = document.getElementById("issue").value;
  const type = document.getElementById("type").value;
  const contact = document.getElementById("contact").value;

  alert("Complaint Submitted ✅");
  window.location.href = "dashboard.html";

 }

window.submitComplaint = submitComplaint;

