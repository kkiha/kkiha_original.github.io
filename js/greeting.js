const loginForm = document.querySelector("#login-form")
const loginIDInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden")
    const userID = loginIDInput.value;
    localStorage.setItem("userID", userID);
    paintGreetings(userID);
}

function paintGreetings(userID) {
    greeting.innerText = `Hello ${userID}!`;
    greeting.classList.remove("hidden");
}

const savedUserID = localStorage.getItem("userID");

if (savedUserID === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserID);
}