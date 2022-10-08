const loginForm = document.querySelector("#login-form")
const loginIDInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden")
    const userID = loginIDInput.value;
    localStorage.setItem("userID", userID);
}

loginForm.addEventListener("submit", onLoginSubmit);

function savedUsername(userID) {

}

const savedUsername = localStorage.getItem("userID");

if (savedUsername === null); {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} 