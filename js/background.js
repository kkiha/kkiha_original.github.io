const images = ["0.jpg", "1.jpg", "2.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img")

backgroundImage.src = `image/${chosenImage}`;

document.body.appendChild(backgroundImage);