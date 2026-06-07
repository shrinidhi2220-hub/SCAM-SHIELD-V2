/* Check Login */

if(localStorage.getItem("loggedIn") !== "true"){

    window.location.href = "login.html";

}

/* Welcome User */

const email = localStorage.getItem("userEmail");

if(email){

    document.getElementById("welcomeText").innerText =
    `Welcome, ${email}`;

}

/* Logout */

function logoutUser(){

    localStorage.removeItem("loggedIn");

    localStorage.removeItem("userEmail");

    window.location.href = "login.html";

}