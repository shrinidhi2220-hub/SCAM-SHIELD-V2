function showPopup(message){

const popup =
document.getElementById("reportPopup");

popup.innerHTML = message;

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

},3000);

}

// Upload Names

const imageUpload =
document.getElementById("imageUpload");

const pdfUpload =
document.getElementById("pdfUpload");

imageUpload.addEventListener("change",()=>{

document.getElementById("imageName").innerText =
imageUpload.files[0]
? imageUpload.files[0].name
: "No Screenshot Selected";

});

pdfUpload.addEventListener("change",()=>{

document.getElementById("pdfName").innerText =
pdfUpload.files[0]
? pdfUpload.files[0].name
: "No PDF Selected";

});

// Load History

let reportHistory =
JSON.parse(
localStorage.getItem("reportHistory")
) || [];

const historyList =
document.getElementById("reportHistory");

function loadHistory(){

historyList.innerHTML = "";

if(reportHistory.length===0){

historyList.innerHTML =
"<li>No Reports Yet</li>";

return;

}

reportHistory
.slice()
.reverse()
.forEach(report=>{

const li =
document.createElement("li");

li.innerHTML = `
🚩 <strong>${report.type}</strong>
<br>
Risk: ${report.risk}
<br>
${report.date}
`;

historyList.appendChild(li);

});

}

loadHistory();

// Submit Report

document
.getElementById("submitReport")
.addEventListener("click",()=>{

const scamType =
document.getElementById("scamType").value;

const riskLevel =
document.getElementById("riskLevel").value;

const description =
document.getElementById("description").value;

if(
scamType === "" ||
description.trim() === ""
){

showPopup(
"⚠ Please fill required fields"
);

return;

}

const report = {

id:
"SS-" +
Math.floor(
100000 + Math.random()*900000
),

type: scamType,

risk: riskLevel,

description: description,

date:
new Date().toLocaleString()

};

reportHistory.push(report);

localStorage.setItem(
"reportHistory",
JSON.stringify(reportHistory)
);

loadHistory();

showPopup(
"✅ Scam Report Submitted Successfully"
);

// Clear Form

document.getElementById("scamType").value = "";
document.getElementById("website").value = "";
document.getElementById("phone").value = "";
document.getElementById("upi").value = "";
document.getElementById("scammerName").value = "";
document.getElementById("description").value = "";

document.getElementById("imageName").innerText =
"No Screenshot Selected";

document.getElementById("pdfName").innerText =
"No PDF Selected";

});