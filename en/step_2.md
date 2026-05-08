<h2 class="c-project-heading--task">Style the dream scene</h2>

Turn the plain page into a colourful board with space for word tiles around the edge.

Open `style.css` and add the styles for the toolbar, scene, and magnet buttons.

<div class="c-project-code">

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 1
line_highlights: 1-23
---
/* The board is a fixed scene so the word magnets feel like fridge poetry. */
* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #17202a;
  background: #f5f0e6;
}

button,
input,
select {
  font: inherit;
}

.app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}

.toolbar {
  display: grid;
  gap: 0.55rem;
  padding: 0.75rem;
  background: #f8d96f;
  border-bottom: 3px solid #17202a;
}

.board {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #20314f 0%, #435f74 42%, #f28c58 43%, #f8d96f 48%, #185c64 49%, #102f3a 100%);
  touch-action: none;
}

.magnet {
  position: absolute;
  min-width: 2.4rem;
  min-height: 1.55rem;
  padding: 0.12rem 0.45rem;
  border: 2px solid #17202a;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 2px 2px 0 rgba(23, 32, 42, 0.85);
  cursor: grab;
  font-weight: 800;
  font-size: 0.8rem;
  text-align: center;
  user-select: none;
  touch-action: none;
}
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run your project and check that the board fills the screen below the controls.

<div class="c-project-output">
  <img src="images/step_2_output.png" alt="Observed project output after this step.">
</div>
