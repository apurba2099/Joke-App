"use-strict";
//initial step
const jokePart = document.querySelector("p");
const GenerateBtn = document.querySelector(".generatorbtn");

//rest API Link
const url =
  "https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const tapSound = new Audio("./sound/tapSound.mp3");

//logic//
const getJoke = function () {
  jokePart.classList.remove("fade");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      jokePart.textContent = `${data.joke}`;
      jokePart.classList.add("fade");
    })
    .catch((err) => {
      jokePart.textContent = `${err}`;
    });
};

GenerateBtn.addEventListener("click", function () {
  tapSound.play();
  getJoke();
});
