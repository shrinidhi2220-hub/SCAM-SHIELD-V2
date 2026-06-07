function showPopup(message){

const popup =
document.getElementById("helpPopup");

popup.innerHTML = message;

popup.classList.add("show");

setTimeout(()=>{

popup.classList.remove("show");

},3000);

}

const faqButtons =
document.querySelectorAll(".faq-btn");

faqButtons.forEach(button=>{

button.addEventListener("click",()=>{

const content =
button.nextElementSibling;

if(content.style.maxHeight){

content.style.maxHeight = null;

}
else{

content.style.maxHeight =
content.scrollHeight + "px";

}

});

});

document
.getElementById("supportBtn")
.addEventListener("click",()=>{

showPopup(
"📧 Support Portal Coming Soon"
);

});