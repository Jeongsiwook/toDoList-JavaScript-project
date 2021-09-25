const loginSelector = document.querySelector("#login-form");
const loginInputSelector = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function helloAndRemove(username) {
    greeting.innerText = `Hello ${username}`;    
    greeting.classList.remove(HIDDEN_CLASS);
}
function handleLoginBtn(event) {
    event.preventDefault(); // 기본 동작을 막아줌
    const username = loginInputSelector.value;
    localStorage.setItem(USERNAME_KEY, username);
    helloAndRemove(username);
    loginSelector.classList.add(HIDDEN_CLASS);
    
}

if (savedUsername) {    
    helloAndRemove(savedUsername);
} else { 
    loginSelector.addEventListener("submit", handleLoginBtn);    
    loginSelector.classList.remove(HIDDEN_CLASS);
}
