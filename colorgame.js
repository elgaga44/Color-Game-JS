// Variables

var randomnumber = Math.floor(Math.random() * 250);

var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
]

var rgb = document.querySelector("#rgb");

var box = document.querySelectorAll(".box");

var newcolor = document.querySelector(".new");

var correct = document.querySelector(".correct");

var easy = document.querySelector(".easy");

var hard = document.querySelector(".hard");

var guessBar = document.querySelector(".guessBar");

var gameover = false;

// Random color to find
for (var i = 0; i < colors.length; i++) {
  rgb.textContent = colors[Math.floor(Math.random() * colors.length)];
}


// Play

for (var i = 0; i < box.length; i++) {

  // Give initial colors to squares
  box[i].style.backgroundColor = colors[i];

  // Change color when clicking on squares
  box[i].addEventListener ("click", function () {
    // If right square, square disappears
    if (this.style.backgroundColor == rgb.textContent) {
      for (var i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = rgb.textContent;
      }
      // "Correct!" appears
      correct.textContent = "Correct!";
      correct.classList.add("correct-right");
      correct.classList.remove("correct-wrong");
      // RGB turns right color
      rgb.style.color = rgb.textContent;
      // Game stops
      gameover = true;
    }
    // If wrong square, square does not change
    else if (!gameover) {
      this.style.backgroundColor = "black";
      // "Try again!" appears
      correct.textContent = "Try again!";
      correct.classList.add("correct-wrong");
    }
  });
}

// Set new game

newcolor.addEventListener ("click", function () {

      // Give new color to find
      var randomcolor = colors[Math.floor(Math.random() * colors.length)];
      rgb.textContent = randomcolor;


      // Give new colors to squares
      for (var i = 0; i < box.length; i++) {
      box[i].style.backgroundColor = colors[i];

      // Reset "Correct!"
      correct.classList.remove("correct-right");
      correct.classList.remove("correct-wrong");
      correct.textContent = "";
      rgb.style.color = "white";
      // Game over = false
      gameover = false;

      }
  });
