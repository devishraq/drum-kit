for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    drumAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  drumAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("../asset/sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("../asset/sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("../asset/sounds/tom-3.mp3");
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio("../asset/sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("../asset/sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick_bass = new Audio("../asset/sounds/kick-bass.mp3");
      kick_bass.play();
      break;

    case "l":
      var snare = new Audio("../asset/sounds/snare.mp3");
      snare.play();
      break;

    default:
      break;
  }
}

function drumAnimation(key) {
  var currentKey = document.querySelector("." + key);
  currentKey.classList.add("pressed");
  setTimeout(() => {
    currentKey.classList.remove("pressed");
  }, 100);
}
