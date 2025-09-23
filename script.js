/** Starting Phase */
const START_VALUE = 16;
const container = document.querySelector(".etch__container");

function createBackground(size) {
    // Basis is the starting width/height of each item in the flex space depending on the flex direction
    // We want each item to take only a certain percentage of space for accuracy rather than hard values
    const basis = 100 / size;

    // Create Cell Element - Give it a class - Loop & append it to the container element
    // If the user enters 16 then you want a 16 by 16 grid so it's 16 squared total which is 256
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("etch__cell");
        cell.style.flex = `0 0 ${basis}%`;
        cell.style.aspectRatio = '1/1';
        container.appendChild(cell);
    }
}

createBackground(START_VALUE);

/** Sketch Logic */
container.addEventListener("mouseover", e => {
    if (e.target.classList.contains("etch__cell")) {
        e.target.style.backgroundColor = "black";
    }
});

/** Restart Phase & Logic */
const button = document.querySelector(".etch__button");

button.addEventListener("click", () => {
    container.replaceChildren();
    createBackground(getSizeFromUser())
})

function getSizeFromUser() {
    const input = prompt("Please enter a value from 1 to 100: ");
    if (input == null) {
        return START_VALUE;
    }
    const number = Math.floor(Number(input));
    if (number < 1 || number > 100) {
        return getSizeFromUser();
    }
    return number;
}