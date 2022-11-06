const images = [
  "0.jpg", "1.jpg", "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// document.body.style.background.appendChild(bgImage);

const backgroundImg = document.querySelector("#background");

backgroundImg.setAttribute("style", `background-image:URL(${bgImage.src})`);