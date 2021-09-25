const imgSelector = document.createElement("img");
const images = ["0.jpg", "1.jpg", "2.jpg"];
const numberImg = Math.floor(Math.random() * images.length);

imgSelector.src = `img/${images[numberImg]}`;

document.body.appendChild(imgSelector);