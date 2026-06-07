// =========================
// POPUP FUNCTION
// =========================

function showPopup(message) {

const popup =
document.getElementById(
"notificationPopup"
);

popup.innerHTML = message;

popup.classList.add("show");

setTimeout(() => {

popup.classList.remove("show");

}, 3000);

}

// =========================
// UPDATE UNREAD COUNT
// =========================

function updateUnreadCount() {

const unreadCards =
document.querySelectorAll(
".notification-card.unread"
);

document.getElementById(
"unreadCount"
).innerText =
unreadCards.length;

}

// =========================
// CLICK TO MARK READ
// =========================

document
.querySelectorAll(
".notification-card"
)
.forEach(card => {

card.addEventListener(
"click",
() => {

if(
card.classList.contains(
"unread"
)
){

card.classList.remove(
"unread"
);

updateUnreadCount();

showPopup(
"✅ Notification Marked As Read"
);

}

});

});

// =========================
// MARK ALL READ
// =========================

document
.getElementById(
"markAllRead"
)
.addEventListener(
"click",
() => {

document
.querySelectorAll(
".notification-card.unread"
)
.forEach(card => {

card.classList.remove(
"unread"
);

});

updateUnreadCount();

showPopup(
"✅ All Notifications Marked As Read"
);

}
);

// =========================
// CLEAR ALL
// =========================

document
.getElementById(
"clearNotifications"
)
.addEventListener(
"click",
() => {

const container =
document.querySelector(
".notification-container"
);

container.innerHTML = `

<div class="notification-card safe">

<div class="icon">

🎉

</div>

<div class="content">

<h3>

No Notifications

</h3>

<p>

You're all caught up!

</p>

<span>

Just Now

</span>

</div>

</div>

`;

updateUnreadCount();

document.getElementById(
"criticalCount"
).innerText = "0";

document.getElementById(
"warningCount"
).innerText = "0";

document.getElementById(
"safeCount"
).innerText = "0";

showPopup(
"🗑 All Notifications Cleared"
);

}
);

// =========================
// INITIAL COUNT
// =========================

updateUnreadCount();

// =========================
// OPTIONAL FAKE LIVE ALERTS
// =========================

const fakeAlerts = [

{
icon:"🚨",
title:"Potential Phishing Attempt",
text:"A newly scanned message appears suspicious."
},

{
icon:"⚠️",
title:"Suspicious Recruiter",
text:"Recruiter verification returned medium risk."
},

{
icon:"🔗",
title:"New URL Checked",
text:"A URL analysis has been completed."
}

];

setInterval(() => {

if(Math.random() > 0.7){

const randomAlert =
fakeAlerts[
Math.floor(
Math.random() *
fakeAlerts.length
)
];

const container =
document.querySelector(
".notification-container"
);

const newCard =
document.createElement("div");

newCard.className =
"notification-card info unread";

newCard.innerHTML = `

<div class="icon">

${randomAlert.icon}

</div>

<div class="content">

<h3>

${randomAlert.title}

</h3>

<p>

${randomAlert.text}

</p>

<span>

Just Now

</span>

</div>

`;

container.prepend(
newCard
);

updateUnreadCount();

showPopup(
"🔔 New Security Alert Received"
);

newCard.addEventListener(
"click",
() => {

newCard.classList.remove(
"unread"
);

updateUnreadCount();

});

}

}, 30000);