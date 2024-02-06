/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const icon = { diamond: "♦", heart: "♥", club: "♠", spade: "♣" };
const number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
const iconKeys = Object.keys(icon);
const card = document.getElementById("card");

function generateRandomCard() {
  const randomNumber = Math.floor(Math.random() * number.length);
  const randomCards = Math.floor(Math.random() * iconKeys.length);
  const selectedIcon = icon[iconKeys[randomCards]];
  const selectedNumber = number[randomNumber];

  card.className = `card ${iconKeys[randomCards]}`;

  const topIcon = document.getElementById("firstIcon");
  if (topIcon !== null) {
    topIcon.innerHTML = selectedIcon;
  }

  const elementNumber = document.getElementById("number");
  if (elementNumber !== null) {
    elementNumber.innerHTML = selectedNumber;
  }

  const bottomIcon = document.getElementById("secondIcon");
  if (bottomIcon !== null) {
    bottomIcon.innerHTML = selectedIcon;
  }
}

setInterval(() => {
  generateRandomCard();
}, 3000);

generateRandomCard();

document.getElementById("btnGenerateCard").onclick = () => {
  generateRandomCard();
};

document.getElementById("card-width").addEventListener("blur", function(evt) {
  card.style.width = `${this.value}px`;
});

document.getElementById("card-height").addEventListener("blur", function(evt) {
  card.style.height = `${this.value}px`;
});
