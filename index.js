// const firstDrum = document.querySelector(".w");
const crash = new Audio("./sounds/crash.mp3");
const kick = new Audio("./sounds/kick-bass.mp3");
const snare = new Audio("./sounds/snare.mp3");
const tom1 = new Audio("./sounds/tom-1.mp3");
const tom2 = new Audio("./sounds/tom-2.mp3");
const tom3 = new Audio("./sounds/tom-3.mp3");
const tom4 = new Audio("./sounds/tom-4.mp3");

function handleKeyPress(event) {
  if (event.key === "w") {
    crash.play();
  } else if (event.key === "a") {
    kick.play();
  } else if (event.key === "s") {
    snare.play();
  } else if (event.key === "d") {
    tom1.play();
  } else if (event.key === "j") {
    tom2.play();
  } else if (event.key === "k") {
    tom3.play();
  } else if (event.key === "l") {
    tom4.play();
  }
}

document.addEventListener("keydown", handleKeyPress);
const classes = [".w", ".a", ".s", ".d", ".j", ".k", ".l"];

function handleClick() {
  if (this.classList.contains("w")) {
    crash.play();
  } else if (this.classList.contains("a")) {
    kick.play();
  } else if (this.classList.contains("s")) {
    snare.play();
  } else if (this.classList.contains("d")) {
    tom1.play();
  } else if (this.classList.contains("j")) {
    tom2.play();
  } else if (this.classList.contains("k")) {
    tom3.play();
  } else if (this.classList.contains("l")) {
    tom4.play();
  }
}

classes.forEach((className) => {
  const elements = document.querySelectorAll(className);

  // Attach event listener to each element with the current class
  elements.forEach((element) => {
    element.addEventListener("click", handleClick);
  });
});
