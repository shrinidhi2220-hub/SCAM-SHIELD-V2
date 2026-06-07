const analyzeBtn =
document.getElementById("analyzeBtn");

analyzeBtn.addEventListener(
"click",
analyzeURL
);

loadHistory();

function analyzeURL(){

const url =
document.getElementById(
"urlInput"
).value.toLowerCase();

if(url.trim() === ""){

alert("Please enter a URL.");

return;

}

let score = 0;

let explanation = "";

let status = "";

let domainStatus = "";

let httpsStatus = "";

const suspiciousPatterns = [

"free",
"money",
"gift",
"winner",
"reward",
"claim",
"bonus",
"lottery",
"telegram",
"whatsapp",
"crypto",
"earn"

];

suspiciousPatterns.forEach(pattern=>{

if(url.includes(pattern)){

score += 15;

}

});

if(!url.startsWith("https://")){

score += 25;

httpsStatus =
"❌ Not Secure";

}
else{

httpsStatus =
"✅ Secure HTTPS";

}

if(
url.includes(".xyz") ||
url.includes(".top") ||
url.includes(".click") ||
url.includes(".live")
){

score += 30;

domainStatus =
"⚠ Suspicious Domain";

}
else{

domainStatus =
"✅ Appears Legitimate";

}

if(score > 100){

score = 100;

}

if(score >= 70){

status =
"🚨 HIGH RISK";

explanation =
"This URL contains multiple phishing indicators and suspicious domain patterns.";

}
else if(score >= 40){

status =
"⚠ SUSPICIOUS";

explanation =
"This URL contains some risk indicators. Verify before opening.";

}
else{

status =
"✅ SAFE";

explanation =
"No major phishing indicators detected.";

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
"domainStatus"
).innerText =
domainStatus;

document.getElementById(
"httpsStatus"
).innerText =
httpsStatus;

document.getElementById(
"aiExplanation"
).innerText =
explanation;

document.querySelector(
".meter-fill"
).style.width =
score + "%";

saveHistory(url,score);

}

function saveHistory(url,score){

let history =
JSON.parse(
localStorage.getItem(
"urlHistory"
)
) || [];

history.unshift({

url,
score

});

if(history.length > 5){

history.pop();

}

localStorage.setItem(
"urlHistory",
JSON.stringify(history)
);

loadHistory();

}

function loadHistory(){

let history =
JSON.parse(
localStorage.getItem(
"urlHistory"
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
`${item.url} - ${item.score}%`;

list.appendChild(li);

});

}