const imageUpload =
document.getElementById("imageUpload");

const pdfUpload =
document.getElementById("pdfUpload");

imageUpload.addEventListener("change", function(){

if(this.files[0]){

document.getElementById(
"imageName"
).innerText =
this.files[0].name;

}

});

pdfUpload.addEventListener("change", function(){

if(this.files[0]){

document.getElementById(
"pdfName"
).innerText =
this.files[0].name;

}

});

document
.getElementById("scanBtn")
.addEventListener("click", scanMessage);

loadHistory();

function scanMessage(){

const message =
document.getElementById(
"messageInput"
).value.toLowerCase();

const suspiciousWords = [

"won",
"winner",
"congratulations",
"click here",
"claim",
"reward",
"gift",
"lottery",
"urgent",
"otp",
"upi",
"bank",
"account",
"telegram",
"whatsapp",
"investment",
"job offer",
"internship",
"free",
"payment",
"refund",
"₹",
"$"

];

let score = 0;

let foundKeywords = [];

suspiciousWords.forEach(word=>{

if(message.includes(word)){

score += 8;

foundKeywords.push(word);

}

});

if(score > 100){

score = 100;

}

let status = "";
let explanation = "";

if(score >= 70){

status =
"🚨 HIGH RISK SCAM";

explanation =
"This content contains multiple scam indicators. Avoid clicking links or sharing personal information.";

}
else if(score >= 40){

status =
"⚠ SUSPICIOUS";

explanation =
"This content contains suspicious patterns. Verify the sender before taking action.";

}
else{

status =
"✅ APPEARS SAFE";

explanation =
"No major scam indicators detected. Stay cautious online.";

}

document.getElementById(
"riskScore"
).innerText =
score + "%";

document.getElementById(
"riskStatus"
).innerText =
status;

document.getElementById(
"keywords"
).innerText =
foundKeywords.length
?
foundKeywords.join(", ")
:
"None Found";

document.getElementById(
"aiExplanation"
).innerText =
explanation;

document.querySelector(
".meter-fill"
).style.width =
score + "%";

saveHistory(score,status);

}

function saveHistory(score,status){

let history =
JSON.parse(
localStorage.getItem(
"scanHistory"
)
) || [];

history.unshift({

score,
status,
date:
new Date().toLocaleString()

});

if(history.length > 5){

history.pop();

}

localStorage.setItem(
"scanHistory",
JSON.stringify(history)
);

loadHistory();

}

function loadHistory(){

let history =
JSON.parse(
localStorage.getItem(
"scanHistory"
)
) || [];

const list =
document.getElementById(
"historyList"
);

if(history.length === 0){

list.innerHTML =
"<li>No Scans Yet</li>";

return;

}

list.innerHTML = "";

history.forEach(item=>{

const li =
document.createElement("li");

li.innerHTML =
`${item.date} - ${item.score}%`;

list.appendChild(li);

});

}