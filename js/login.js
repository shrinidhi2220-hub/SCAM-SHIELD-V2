function togglePassword(){

const password =
document.getElementById("password");

if(password.type === "password"){

password.type = "text";

}
else{

password.type = "password";

}

}

document
.getElementById("loginForm")
.addEventListener("submit", function(e){

e.preventDefault();

const email =
document.getElementById("email").value.trim();

const password =
document.getElementById("password").value.trim();

if(
email.includes("@") &&
password.length >= 6
){

localStorage.setItem(
"loggedIn",
"true"
);

localStorage.setItem(
"userEmail",
email
);

document.getElementById(
"loginSuccess"
).style.display = "flex";

setTimeout(() => {

window.location.href =
"dashboard.html";

}, 2000);

}
else{

alert(
"Please enter a valid email and a password with at least 6 characters."
);

}

});