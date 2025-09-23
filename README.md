# 🎨 Etch A Sketch

A browser-based Etch A Sketch clone built with **HTML, CSS, and JavaScript**.  
Users can draw on a resizable grid by hovering their mouse over cells.  
Includes a button to clear the screen and reset the grid size.

---

## 🚀 Features
- **Dynamic Grid**: Default grid size is 16×16 (256 cells).  
- **Resizable**: Click **Clear The Screen** to set a new grid size (between 1 and 100).  
- **Hover Drawing**: Moving the mouse over a cell colors it black.  
- **Clean Reset**: Clears the container and generates a fresh grid on demand.  
- **Responsive Cells**: Cells adjust their width/height automatically using `flex` and `aspect-ratio`.

---

## 🖼️ Preview
The grid is 960×960 pixels, divided into equal squares.  
Each square has a goldenrod border and turns black when hovered.

---

## ⚙️ How It Works
### JavaScript
- **`createBackground(size)`**  
  Creates a grid of `size × size` cells inside `.etch__container`.

- **Sketch Logic**  
  Listens for `mouseover` events on the container.  
  If the event target is a cell, its background is painted black.

- **Restart Button**  
  Clears the container with `replaceChildren()`, prompts the user for a new size (1–100), and rebuilds the grid.

- **`getSizeFromUser()`**  
  Prompts the user, validates input, and ensures a fallback to the default size if canceled.

---

## 🖥️ Usage
1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Hover over the grid cells to draw.
4. Click **Clear The Screen** to reset with a new grid size.

---

## 🛠️ Technologies Used
- **HTML5** for structure.
- **CSS3** for layout (`flexbox` and `aspect-ratio`).
- **Vanilla JavaScript** for logic and interactivity.

---

## ✨ Future Improvements
- Add random color or shading mode (cells darken with multiple passes).  
- Add click-and-drag drawing instead of hover-only.  
- Add save/export functionality for sketches.

---

## 📜 License
This project is open source and available under the MIT License.
