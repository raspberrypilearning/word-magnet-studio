<h2 class="c-project-heading--task">Make word magnets</h2>

Use word sets and edge positions to create buttons around the board.

Open `script.js` and add the word banks, board positions, and setup functions.

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 1
line_highlights: 1-38
---
// Word banks keep the project easy to retheme.
const wordBanks = {
  "Story spark": ["I", "you", "we", "make", "found", "lost", "dream", "strange"],
  "Neon city": ["neon", "street", "arcade", "bus", "tower", "window", "paint", "signal"],
  "Space quest": ["orbit", "star", "rocket", "moon", "planet", "comet", "galaxy", "alien"],
  "Mystery mood": ["quiet", "hidden", "wild", "hopeful", "brave", "gentle", "storm", "wonder"]
};

const edgeSpots = [
  { x: 3, y: 4 }, { x: 27, y: 4 }, { x: 51, y: 4 }, { right: 3, y: 4 },
  { x: 3, y: 14 }, { x: 3, y: 24 }, { x: 3, y: 34 }, { x: 3, y: 44 },
  { right: 3, y: 44 }, { right: 3, y: 34 }, { right: 3, y: 24 }, { right: 3, y: 14 },
  { x: 3, y: 94 }, { x: 27, y: 94 }, { x: 51, y: 94 }, { right: 3, y: 94 }
];

const board = document.querySelector("#board");
const magnetLayer = document.querySelector("#magnet-layer");
const bankSelect = document.querySelector("#bank-select");
const shuffleButton = document.querySelector("#shuffle-button");
const resetButton = document.querySelector("#reset-button");
const wordForm = document.querySelector("#word-form");
const newWordInput = document.querySelector("#new-word");

let currentBank = Object.keys(wordBanks)[0];
let magnets = [];

function randomWord() {
  const words = wordBanks[currentBank];
  return words[Math.floor(Math.random() * words.length)];
}

function placeMagnet(magnet, spot) {
  if (spot.right !== undefined) {
    magnet.style.right = `${spot.right}%`;
  } else {
    magnet.style.left = `${spot.x}%`;
  }
  magnet.style.top = `${spot.y}%`;
}

function makeMagnet(spot) {
  const magnet = document.createElement("button");
  magnet.type = "button";
  magnet.className = "magnet";
  magnet.textContent = randomWord();
  placeMagnet(magnet, spot);
  magnetLayer.append(magnet);
  magnets.push(magnet);
}

edgeSpots.forEach(makeMagnet);
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run your project and check that word buttons appear around the edge of the board.

<div class="c-project-output">
  <img src="images/step_3_output.png" alt="Observed project output after this step.">
</div>
