const verifyBtn =
document.getElementById("verifyBtn");

const imageUpload =
document.getElementById("imageUpload");

const pdfUpload =
document.getElementById("pdfUpload");

imageUpload.addEventListener("change",function(){

if(this.files[0]){

document.getElementById(
"imageName"
).innerText =
this.files[0].name;

}

});

pdfUpload.addEventListener("change",function(){

if(this.files[0]){

document.getElementById(
"pdfName"
).innerText =
this.files[0].name;

}

});

verifyBtn.addEventListener(
"click",
verifyRecruiter
);

loadHistory();

function verifyRecruiter(){

const email =
document.getElementById(
"recruiterEmail"
).value.toLowerCase();

const linkedin =
document.getElementById(
"linkedinUrl"
).value.toLowerCase();

const company =
document.getElementById(
"companyName"
).value;

const salary =
Number(
document.getElementById(
"salary"
).value
);

const description =
document.getElementById(
"jobDescription"
).value.toLowerCase();

let score = 0;

const scamWords = [

"registration fee",
"processing fee",
"security deposit",
"telegram interview",
"whatsapp interview",
"instant joining",
"guaranteed job",
"earn money",
"pay fee",
"limited seats"

];

scamWords.forEach(word=>{

if(description.includes(word)){

score += 15;

}

});

if(
email.includes("@gmail.com") ||
email.includes("@yahoo.com") ||
email.includes("@outlook.com")
){

score += 20;

document.getElementById(
"emailAnalysis"
).innerText =
"⚠ Free Email Domain";

}
else{

document.getElementById(
"emailAnalysis"
).innerText =
"✅ Professional Email";

}

if(
linkedin.includes("linkedin.com")
){

document.getElementById(
"linkedinAnalysis"
).innerText =
"✅ LinkedIn Profile Provided";

}
else{

score += 15;

document.getElementById(
"linkedinAnalysis"
).innerText =
"⚠ Missing Valid LinkedIn";

}

if(
salary > 100000
){

score += 20;

document.getElementById(
"salaryAnalysis"
).innerText =
"⚠ Unusually High Salary";

}
else{

document.getElementById(
"salaryAnalysis"
).innerText =
"✅ Salary Appears Reasonable";

}

if(company.trim()===""){

score += 20;

document.getElementById(
"companyAnalysis"
).innerText =
"⚠ Company Missing";

}
else{

document.getElementById(
"companyAnalysis"
).innerText =
"✅ Company Information Present";

}

if(score>100){

score=100;

}

let status="";
let recommendation="";

if(score>=70){

status="🚨 HIGH RISK";

recommendation=
"This recruiter contains multiple scam indicators. Verify through official company channels before proceeding.";

}
else if(score>=40){

status="⚠ SUSPICIOUS";

recommendation=
"Some details require verification. Cross-check company website and recruiter identity.";

}
else{

status="✅ LOW RISK";

recommendation=
"No major scam indicators detected.";

}

document.getElementById(
"riskScore"
).innerText =
score+"%";

document.getElementById(
"riskStatus"
).innerText =
status;

document.getElementById(
"recommendation"
).innerText =
recommendation;

document.querySelector(
".meter-fill"
).style.width =
score+"%";

saveHistory(company,score);

}

function saveHistory(company,score){

let history =
JSON.parse(
localStorage.getItem(
"recruiterHistory"
)
)||[];

history.unshift({

company,
score,
date:new Date().toLocaleString()

});

if(history.length>5){

history.pop();

}

localStorage.setItem(
"recruiterHistory",
JSON.stringify(history)
);

loadHistory();

}

function loadHistory(){

const history =
JSON.parse(
localStorage.getItem(
"recruiterHistory"
)
)||[];

const list =
document.getElementById(
"historyList"
);

if(history.length===0){

list.innerHTML =
"<li>No Checks Yet</li>";

return;

}

list.innerHTML="";

history.forEach(item=>{

const li =
document.createElement("li");

li.innerHTML =
`${item.company} | ${item.score}% | ${item.date}`;

list.appendChild(li);

});

}