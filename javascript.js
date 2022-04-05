let gridSize = Number(
    prompt("Enter amount of squares per side to make the new grid")
);


const btnColorReset = document.getElementById("btnColorReset");
btnColorReset.innerHTML = "Color Reset";

btnColorReset.addEventListener("click", () => {       // resets the grid color
    document.querySelectorAll(".grid-item").forEach(
        e => { 
            e.style.backgroundColor = "#202324";
    });
});

const btnGridReset = document.getElementById("btnGridReset");
btnGridReset.innerHTML = "New dimensions";

btnGridReset.addEventListener("click", redrawBoard);

function clearDivs(){                                   // function that removes the divs from the grid 
    document
        .querySelectorAll(".grid-item")
        .forEach((e) => e.parentNode.removeChild(e))
}

function redrawBoard(){
    clearDivs();
    let newSize = Number(
        prompt("Enter amount of squares per side to make the new grid")
    );
    makeRows(newSize, newSize);
    colorGrid();
}

const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(gridSize, gridSize);

var color = [, "#3C9EE7", "#E7993C",
            "#E73C99", "#3CE746", "#E7993C"];
  
function colorGrid() {                               // function that adds color to the divs
    document.querySelectorAll(".grid-item").forEach(
        e => {e.addEventListener("mouseover", (
            e => e.target.style.backgroundColor = color[Math.floor(Math.random() * color.length)])
    )});
}

colorGrid();