let sky1 = document.getElementById("sky1");
let sky2 = document.getElementById("sky2");
let sky3 = document.getElementById("sky3");
let house = document.getElementById("house");
let text = document.getElementById("text");
let section = document.getElementById("content");

const image = document.querySelector(".ukiyo");
new Ukiyo(image);

function parallaxSetup() {
  let value = window.scrollY;
  if (value < window.innerWidth / 2) {
    sky3.style.left = value * -1 + "px";
    sky1.style.bottom = value + "px";
    text.style.transform = `translateY(${value / 1.5}px)`;
    let zoomFactorSky2 = 1 + value / window.innerWidth;
    sky2.style.transform = `scale(${zoomFactorSky2})`;
  }
}

window.addEventListener("scroll", parallaxSetup);
window.addEventListener("resize", parallaxSetup);
