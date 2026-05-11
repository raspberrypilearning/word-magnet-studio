// The word list controls which words can appear on the magnet tiles.
const words = [
  "I", "you", "we", "make", "found", "lost", "dream", "strange",
  "bright", "tiny", "secret", "voice", "map", "door", "inside",
  "outside", "maybe", "again", "because", "today"
];

const edgeSpots = [
  { x: 3, y: 4 }, { x: 27, y: 4 }, { x: 51, y: 4 }, { right: 3, y: 4 },
  { x: 3, y: 14 }, { x: 3, y: 24 }, { x: 3, y: 34 }, { x: 3, y: 44 },
  { x: 3, y: 54 }, { x: 3, y: 64 }, { x: 3, y: 74 }, { x: 3, y: 84 },
  { x: 3, y: 94 }, { x: 27, y: 94 }, { x: 51, y: 94 }, { right: 3, y: 94 },
  { right: 3, y: 84 }, { right: 3, y: 74 }, { right: 3, y: 64 }, { right: 3, y: 54 },
  { right: 3, y: 44 }, { right: 3, y: 34 }, { right: 3, y: 24 }, { right: 3, y: 14 }
];

const board = document.querySelector("#board");
const magnetLayer = document.querySelector("#magnet-layer");

let magnets = [];

function randomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function randomiseMagnet(magnet) {
  magnet.textContent = randomWord();
}

function placeMagnet(magnet, spot) {
  magnet.style.left = "";
  magnet.style.right = "";
  if (spot.right !== undefined) {
    magnet.style.right = `${spot.right}%`;
  } else {
    magnet.style.left = `${spot.x}%`;
  }
  magnet.style.top = `${spot.y}%`;
}

function moveMagnet(magnet, left, top) {
  const boardBox = board.getBoundingClientRect();
  const maxLeft = boardBox.width - magnet.offsetWidth;
  const maxTop = boardBox.height - magnet.offsetHeight;
  const safeLeft = Math.min(Math.max(left, 0), maxLeft);
  const safeTop = Math.min(Math.max(top, 0), maxTop);
  magnet.style.right = "auto";
  magnet.style.left = `${safeLeft}px`;
  magnet.style.top = `${safeTop}px`;
}

function addDrag(magnet) {
  magnet.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    magnet.setPointerCapture(event.pointerId);

    const boardBox = board.getBoundingClientRect();
    const magnetBox = magnet.getBoundingClientRect();
    const shiftX = event.clientX - magnetBox.left;
    const shiftY = event.clientY - magnetBox.top;
    const startX = event.clientX;
    const startY = event.clientY;

    magnet.classList.add("dragging");
    magnet.dataset.dragged = "false";

    function onPointerMove(moveEvent) {
      const left = moveEvent.clientX - boardBox.left - shiftX;
      const top = moveEvent.clientY - boardBox.top - shiftY;
      moveMagnet(magnet, left, top);
    }

    function onPointerUp(upEvent) {
      const distance = Math.hypot(upEvent.clientX - startX, upEvent.clientY - startY);
      magnet.dataset.dragged = distance > 6 ? "true" : "false";
      magnet.classList.remove("dragging");
      magnet.releasePointerCapture(upEvent.pointerId);
      magnet.removeEventListener("pointermove", onPointerMove);
      magnet.removeEventListener("pointercancel", onPointerUp);
    }

    magnet.addEventListener("pointermove", onPointerMove);
    magnet.addEventListener("pointerup", onPointerUp, { once: true });
    magnet.addEventListener("pointercancel", onPointerUp, { once: true });
  });
}

function makeMagnet(spot) {
  const magnet = document.createElement("button");
  magnet.type = "button";
  magnet.className = "magnet";
  magnet.textContent = randomWord();
  placeMagnet(magnet, spot);

  magnet.addEventListener("click", () => {
    if (magnet.dataset.dragged === "true") {
      magnet.dataset.dragged = "false";
      return;
    }
    randomiseMagnet(magnet);
  });

  addDrag(magnet);
  magnetLayer.append(magnet);
  magnets.push(magnet);
}

edgeSpots.forEach(makeMagnet);
