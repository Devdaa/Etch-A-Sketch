const grid = document.querySelector(".grid");
const colorMode = document.getElementById("colorBtn");
const rainbowMod = document.getElementById("rainbowBtn");
const dolaqidzeMode = document.getElementById("dolaBtn");
const lomadzeMode = document.getElementById("lomadzeBtn");
const hoverMode = document.getElementById("hoverBtn");
const eraser = document.getElementById("eraserBtn");
const clear = document.getElementById("clearBtn");
const toggleBtn = document.getElementById("toggleBorder")
const popup = document.getElementById("popup");


function createGrid(w){
    let fractions = grid.querySelectorAll("div");
    fractions.forEach((div) => div.remove());
    for(let i=0; i<(w*w); i++){
        const fraction = document.createElement("div");
        fraction.style.border = "1px solid gray ";
        grid.style.gridTemplateColumns = `repeat(${w}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${w}, 1fr)`;
        grid.appendChild(fraction).classList.add("fraction");
    }
}

createGrid(16);

function sizePopup(){
    let size = prompt("choose width of ur workplace 1-100 thanks bro");
    if(size<1 || size>100){
        createGrid(16);
    }else{
        createGrid(size);
    }
}
