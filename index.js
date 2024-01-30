const crash = "./sounds/crash.mp3";
const kick = "./sounds/kick-bass.mp3";
const snare = "./sounds/snare.mp3";
const tom1 = "./sounds/tom-1.mp3";
const tom2 = "./sounds/tom-2.mp3";
const tom3 = "./sounds/tom-3.mp3";
const tom4 = "./sounds/tom-4.mp3";

async function handleKeyPress(event) {
	var audio = new Audio();

	if (event.key === "w") {
		audio.src = crash;
	} else if (event.key === "a") {
		audio.src = kick;
	} else if (event.key === "s") {
		audio.src = snare;
	} else if (event.key === "d") {
		audio.src = tom1;
	} else if (event.key === "j") {
		audio.src = tom2;
	} else if (event.key === "k") {
		audio.src = tom3;
	} else if (event.key === "l") {
		audio.src = tom4;
	}
	await audio.play();
}

document.addEventListener("keydown", handleKeyPress);
const classes = [".w", ".a", ".s", ".d", ".j", ".k", ".l"];
var audio = new Audio();

async function handleClick() {
	if (this.classList.contains("w")) {
		audio.src = crash;
	} else if (this.classList.contains("a")) {
		audio.src = kick;
	} else if (this.classList.contains("s")) {
		audio.src = snare;
	} else if (this.classList.contains("d")) {
		audio.src = tom1;
	} else if (this.classList.contains("j")) {
		audio.src = tom2;
	} else if (this.classList.contains("k")) {
		audio.src = tom3;
	} else if (this.classList.contains("l")) {
		audio.src = tom4;
	}
	await audio.play();
}

classes.forEach((className) => {
	const elements = document.querySelectorAll(className);

	// Attach event listener to each element with the current class
	elements.forEach((element) => {
		element.addEventListener("click", handleClick);
	});
});
