const loginForm = document.querySelector("#login-form")
const loginIDInput = document.querySelector("#login-form #ID");
const loginPWInput = document.querySelector("#login-form #PW");
const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event) {
    event.preventDefault()
    const userID = loginIDInput.value;
    const userPW = loginPWInput.value;
    localStorage.setItem("userID", userID);
    localStorage.setItem("userPW", userPW);
}



loginForm.addEventListener("submit", onLoginSubmit);