
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } 
from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// 🔥 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDgJi7flxm99-L80iYbvVfeDeFRiV0AiG4",
  authDomain: "campus-safety-733ef.firebaseapp.com",
  projectId: "campus-safety-733ef",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🚨 SOS function
async function sendSOS() {
  try {
    await addDoc(collection(db, "sos_alerts"), {
      message: "Emergency SOS Triggered 🚨",
      time: new Date()
    });

    alert("🚨 SOS Alert Sent Successfully!");

  } catch (error) {
    alert("Error: " + error.message);
  }
}

// global
window.sendSOS = sendSOS;