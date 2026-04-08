function sendSOS() {
  alert("Emergency Alert Sent 🚨");
}

function goToComplaint() {
  window.location.href = "complaint.html";
}
function sendLocation(){
 alert("Location sent succussfully");
}
function logout() {
  alert("Logged out");
  window.location.href = "login.html";
}

window.sendSOS = sendSOS;
window.goToComplaint = goToComplaint;
window.sendLocation = sendLocation;
window.logout = logout;