const scanHistory =
JSON.parse(
localStorage.getItem("scanHistory")
) || [];

const urlHistory =
JSON.parse(
localStorage.getItem("urlHistory")
) || [];

const recruiterHistory =
JSON.parse(
localStorage.getItem("recruiterHistory")
) || [];

const userEmail =
localStorage.getItem("userEmail");

document.getElementById(
"profileEmail"
).innerText =
userEmail || "Guest User";

document.getElementById(
"messageCount"
).innerText =
scanHistory.length;

document.getElementById(
"urlCount"
).innerText =
urlHistory.length;

document.getElementById(
"recruiterCount"
).innerText =
recruiterHistory.length;

document.getElementById(
"totalActivity"
).innerText =
scanHistory.length +
urlHistory.length +
recruiterHistory.length;

if(userEmail){

const username =
userEmail.split("@")[0];

document.getElementById(
"profileName"
).innerText =
username;

}