// ===========================
// SUCCESS POPUP
// ===========================

function showPopup(message) {

const popup =
document.getElementById("successPopup");

popup.innerHTML = message;

popup.classList.add("show");

setTimeout(() => {

popup.classList.remove("show");

}, 3000);

}

// ===========================
// LOAD SAVED SETTINGS
// ===========================

window.onload = () => {

document.getElementById("username").value =
localStorage.getItem("username") || "";

document.getElementById("email").value =
localStorage.getItem("email") || "";

document.getElementById("language").value =
localStorage.getItem("language") || "English";

document.getElementById("theme").value =
localStorage.getItem("theme") || "Purple";

document.getElementById("scamAlerts").checked =
JSON.parse(localStorage.getItem("scamAlerts")) || false;

document.getElementById("urlAlerts").checked =
JSON.parse(localStorage.getItem("urlAlerts")) || false;

document.getElementById("recruiterAlerts").checked =
JSON.parse(localStorage.getItem("recruiterAlerts")) || false;

document.getElementById("emailNotifications").checked =
JSON.parse(localStorage.getItem("emailNotifications")) || false;

document.getElementById("animations").checked =
JSON.parse(localStorage.getItem("animations")) || false;

document.getElementById("securityTips").checked =
JSON.parse(localStorage.getItem("securityTips")) || false;

document.getElementById("autoSave").checked =
JSON.parse(localStorage.getItem("autoSave")) || false;

};

// ===========================
// PROFILE SETTINGS
// ===========================

document.getElementById("saveProfile")
.addEventListener("click", () => {

const username =
document.getElementById("username").value;

const email =
document.getElementById("email").value;

localStorage.setItem(
"username",
username
);

localStorage.setItem(
"email",
email
);

showPopup(
"✅ Profile Saved Successfully"
);

});

// ===========================
// LANGUAGE SETTINGS
// ===========================

document.getElementById("saveLanguage")
.addEventListener("click", () => {

const language =
document.getElementById("language").value;

localStorage.setItem(
"language",
language
);

showPopup(
"🌐 Language Saved"
);

});

// ===========================
// THEME SETTINGS
// ===========================

document.getElementById("saveTheme")
.addEventListener("click", () => {

const theme =
document.getElementById("theme").value;

localStorage.setItem(
"theme",
theme
);

showPopup(
"🎨 Theme Saved"
);

});

// ===========================
// NOTIFICATION SETTINGS
// ===========================

document.getElementById("saveNotifications")
.addEventListener("click", () => {

localStorage.setItem(
"scamAlerts",
document.getElementById("scamAlerts").checked
);

localStorage.setItem(
"urlAlerts",
document.getElementById("urlAlerts").checked
);

localStorage.setItem(
"recruiterAlerts",
document.getElementById("recruiterAlerts").checked
);

localStorage.setItem(
"emailNotifications",
document.getElementById("emailNotifications").checked
);

showPopup(
"🔔 Notification Settings Saved"
);

});

// ===========================
// SYSTEM SETTINGS
// ===========================

document.getElementById("saveSystem")
.addEventListener("click", () => {

localStorage.setItem(
"animations",
document.getElementById("animations").checked
);

localStorage.setItem(
"securityTips",
document.getElementById("securityTips").checked
);

localStorage.setItem(
"autoSave",
document.getElementById("autoSave").checked
);

showPopup(
"⚡ System Settings Saved"
);

});

// ===========================
// CLEAR MESSAGE HISTORY
// ===========================

document.getElementById("clearMessageHistory")
.addEventListener("click", () => {

localStorage.removeItem(
"scanHistory"
);

showPopup(
"🗑 Message History Cleared"
);

});

// ===========================
// CLEAR URL HISTORY
// ===========================

document.getElementById("clearURLHistory")
.addEventListener("click", () => {

localStorage.removeItem(
"urlHistory"
);

showPopup(
"🗑 URL History Cleared"
);

});

// ===========================
// CLEAR RECRUITER HISTORY
// ===========================

document.getElementById("clearRecruiterHistory")
.addEventListener("click", () => {

localStorage.removeItem(
"recruiterHistory"
);

showPopup(
"🗑 Recruiter History Cleared"
);

});

// ===========================
// BACKEND FEATURES
// ===========================

const backendButtons =
document.querySelectorAll(".backend-btn");

backendButtons.forEach(button => {

button.addEventListener("click", () => {

showPopup(
"⚠ Backend Integration Pending"
);

});

});

// ===========================
// OPTIONAL THEME COLORS
// ===========================

const savedTheme =
localStorage.getItem("theme");

if(savedTheme){

console.log(
"Current Theme:",
savedTheme
);

}