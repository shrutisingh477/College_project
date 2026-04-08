
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

// 📍 Location Function
function sendLocation() {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(async (position) => {

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const mapLink = `https://www.google.com/maps?q=${lat},${lon}`;

      try {
        await addDoc(collection(db, "locations"), {
          latitude: lat,
          longitude: lon,
          map: mapLink,
          time: new Date()
        });

        alert("📍 Location Sent Successfully!");

      } catch (error) {
        alert("Error: " + error.message);
      }

    });

  } else {
    alert("Geolocation not supported");
  }
}

// global access
window.sendLocation = sendLocation;