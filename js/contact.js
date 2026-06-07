document.addEventListener("DOMContentLoaded", () => {

const form =
document.getElementById("contactForm");

const modal =
document.getElementById("successModal");

form.addEventListener("submit", function(e){

e.preventDefault();

modal.style.display = "flex";

});

});

function sendAgain(){

document.getElementById("contactForm").reset();

document.getElementById("successModal").style.display = "none";

}

function closeModal(){

document.getElementById("successModal").style.display = "none";

}