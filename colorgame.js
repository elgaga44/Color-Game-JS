// Variables
  var randomnumber = Math.floor(Math.random() * 250);

  var numBoxes = 6;

  var colors = generateRandomColors(numBoxes);

  var pickedColor = pickColor();

  var rgb = document.querySelector("#rgb");

  var box = document.querySelectorAll(".box");

  var newcolor = document.querySelector(".new");

  var newText = document.querySelector(".newText");

  var correct = document.querySelector(".correct");

  var easy = document.querySelector(".easy");

  var hard = document.querySelector(".hard");

  var guessBar = document.querySelector(".guessBar");

  var gameover = false;

  var yeah = new Audio("yeah.mp3");

  var arrow = document.querySelector("#arrow");

// Easy mode by default
hard.classList.add("hardActive")

// Easy mode
easy.addEventListener ("click", function functionName() {
  // Change button color
  easy.classList.add("easyActive");
  hard.classList.remove("hardActive");
  // Reset colors
  numBoxes = 3;
  colors = generateRandomColors(numBoxes);
  pickedColor = pickColor();
  rgb.textContent = pickedColor;
  // Only 3 boxes + give them new color
  for (var i = 0; i < box.length; i++) {
  if (colors[i]) {
    box[i].style.backgroundColor = colors[i];
  } else {
    box[i].style.display = "none";
    }
  }
    // Reset "Correct!"
    correct.classList.remove("correct-right");
    correct.classList.remove("correct-wrong");
    correct.textContent = "";
    rgb.style.color = "white";

    // Reset "New colors" button
    newText.textContent = "NEW COLORS";
    newcolor.classList.remove("newGame");
    arrow.style.display = "none";

    gameover = false;
});

// Hard mode
hard.addEventListener ("click", function functionName() {
  // Change button color
  hard.classList.add("hardActive")
  easy.classList.remove("easyActive")
  // Reset colors
  numBoxes = 6
  colors = generateRandomColors(numBoxes);
  pickedColor = pickColor();
  rgb.textContent = pickedColor;
  // 6 boxes + give them new color
  for (var i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = colors[i];
    box[i].style.display = "block";
  }
  // Reset "Correct!"
  correct.classList.remove("correct-right");
  correct.classList.remove("correct-wrong");
  correct.textContent = "";
  rgb.style.color = "white";

  // Reset "New colors" button
  newText.textContent = "NEW COLORS";
  newcolor.classList.remove("newGame");
  arrow.style.display = "none";

  gameover = false;
});


// 1. Display color to guess
rgb.textContent = pickedColor;

// 2. Play !!

for (var i = 0; i < box.length; i++) {

  // Give initial colors to squares
  box[i].style.backgroundColor = colors[i];

  // Change color when clicking on squares
  box[i].addEventListener ("click", function () {
    // If right square, squares turn same color
    if (this.style.backgroundColor == rgb.textContent) {
      for (var i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = rgb.textContent;
      }
      // "Correct!" appears
      correct.textContent = "Correct!";
      correct.classList.add("correct-right");
      correct.classList.remove("correct-wrong");
      // Yeah sound effect
      yeah.play();
      // RGB turns right color
      rgb.style.color = rgb.textContent;
      // "New game?" prompt
      newText.textContent = "NEW GAME?";
      newcolor.classList.add("newGame");
      arrow.style.display = "block";
      // Game stops
      gameover = true;
    }
    // If wrong square, square disappears
    else if (!gameover) {
      this.style.backgroundColor = "black";
      // "Try again!" appears
      correct.textContent = "Try again!";
      correct.classList.add("correct-wrong");
    }
  });
}

// 3. Set new game
newcolor.addEventListener ("click", function () {

      // Give new colors to squares
      colors = generateRandomColors(numBoxes);
      for (var i = 0; i < box.length; i++) {
      box[i].style.backgroundColor = colors[i];
      }

      // Give new color to find
      pickedColor = pickColor();
      rgb.textContent = pickedColor;

      // Reset "Correct!"
      correct.classList.remove("correct-right");
      correct.classList.remove("correct-wrong");
      correct.textContent = "";
      rgb.style.color = "white";

      // Reset "New colors" button
      newText.textContent = "NEW COLORS";
      newcolor.classList.remove("newGame");
      arrow.style.display = "none";

      // Game over = false
      gameover = false;
  });

// Function: pick the color to guess
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Function: create a random color
  function randomColor(){
    // Pick a "red" from O to 255
    var r = Math.floor(Math.random() * 256);
    // Pick a "green" from O to 255
    var g = Math.floor(Math.random() * 256);
    // Pick a "blue" from O to 255
    var b = Math.floor(Math.random() * 256);
    // Add everything together to create string
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

// Function: Generate Random Colors
  function generateRandomColors(num) {
    // make an array
    var arr = []
    // repeat num times
    for (var i = 0; i < num; i++) {
      // get random color and push into array
      arr.push(randomColor())
    }
    // return that array
    return arr;
  }
