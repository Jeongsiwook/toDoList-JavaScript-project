const API_KEY = "e593cb91da50817165733b397c8be4bd";
const citySelector = document.querySelector("#weather span:first-child");
const weatherSelector = document.querySelector("#weather span:last-child");

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url);
    fetch(url).then(response => response.json()).then(data => {
        citySelector.innerText = data.name;
        weatherSelector.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function fail() {
    alert("I don't know where you are. So No weather for you.");
}

navigator.geolocation.getCurrentPosition(success, fail);