<h2 class="c-project-heading--task">Add a shuffle button</h2>

Create a button that changes every word magnet at once.

<h2 class="c-project-heading--explainer">Make this change</h2>

## Step 1
Run the code to see the starter html page.

The html has already been styled using a css file.

Some javascript code is already in `starter.js`, so you can drag word tiles into the central space.

## Step 2
In `index.html`, add a controls area with a `Shuffle edge` button below the title.

<div class="c-project-code">

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 13-15
---
<main class="app">
  <header class="toolbar" aria-label="Word magnet controls">
    <h1>Word Magnet Studio</h1>
    <nav class="control-row">
      <button id="shuffle-button" type="button">Shuffle edge</button>
    </nav>
  </header>
--- /code ---
</div>

## Step 3

Open `script.js`.

Add the code that runs the `randomiseMagnet` function when the button is pressed.

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 1
line_highlights:
---
const shuffleButton = document.querySelector("#shuffle-button");

function shuffleWords() {
  magnets.forEach(randomiseMagnet);
}

shuffleButton.addEventListener("click", shuffleWords);
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run your project, click Shuffle edge, and check that all the word tiles change.

<div class="c-project-output">
  <img src="images/step_1_output.png" alt="Observed project output after this step.">
</div>
