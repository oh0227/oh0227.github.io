const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLogInSubmit(event){
    event.preventDefault();
    const username = logInInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    logInForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Welcome! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername !== null){
    paintGreetings(savedUsername);
} else {
    logInForm.classList.remove(HIDDEN_CLASSNAME);
    logInForm.addEventListener("submit", onLogInSubmit);
}
