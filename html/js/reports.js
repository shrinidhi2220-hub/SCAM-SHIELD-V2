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

document.getElementById(
"messageScans"
).innerText =
scanHistory.length;

document.getElementById(
"urlScans"
).innerText =
urlHistory.length;

document.getElementById(
"recruiterChecks"
).innerText =
recruiterHistory.length;

loadHistory(
"messageHistory",
scanHistory,
(item)=>`${item.date} - ${item.score}%`
);

loadHistory(
"urlHistory",
urlHistory,
(item)=>`${item.url} - ${item.score}%`
);

loadHistory(
"recruiterHistory",
recruiterHistory,
(item)=>`${item.company} - ${item.score}%`
);

function loadHistory(id,data,formatter){

const list =
document.getElementById(id);

if(data.length===0){

list.innerHTML =
"<li>No Data Available</li>";

return;

}

list.innerHTML="";

data.forEach(item=>{

const li =
document.createElement("li");

li.innerHTML =
formatter(item);

list.appendChild(li);

});

}