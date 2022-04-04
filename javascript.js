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

makeRows(16,16);

var color = [, "#3C9EE7", "#E7993C",
            "#E73C99", "#3CE746", "#E7993C"];
  
        document.querySelectorAll(".grid-item").forEach(e => e.addEventListener("mouseover", function (e) {
            e.target.style.background = color[Math.floor(Math.random() * color.length)];
}));
        
        
        