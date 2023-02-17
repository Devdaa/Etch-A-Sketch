const grid = document.querySelector(".grid");
const colorMode = document.getElementById("colorBtn");
const rainbowMode = document.getElementById("rainbowBtn");
const dolaqidzeMode = document.getElementById("dolaBtn");
const lomadzeMode = document.getElementById("lomadzeBtn");
const hoverMode = document.getElementById("hoverBtn");
const eraser = document.getElementById("eraserBtn");
const clear = document.getElementById("clearBtn");
const toggleBtn = document.getElementById("toggleBorder");
const popup = document.getElementById("popup");
const main = document.querySelector("main");

const imagesDola = [
    "url('./dola/dola1.jpg')",
    "url('./dola/dola2.jpg')",
    "url('./dola/dola3.jpg')",
    "url('./dola/dola4.jpg')"
];

const imagesLoma = [
    "url('./loma/loma1.jpg')",
    "url('./loma/loma2.jpg')",
    "url('./loma/loma3.jpg')",
    "url('./loma/loma4.jpg')"
];

let color = "black";
document.getElementById("colorPicker").addEventListener("input", function() {
    color = this.value;
});

colorMode.addEventListener("click", () => {
    let fractions = grid.querySelectorAll("div");
    color = document.getElementById("colorPicker").value;
    fractions.forEach(fraction => {
        fraction.classList.remove("rainbow");
    });
});

eraser.addEventListener("click", () => {
    let fractions = grid.querySelectorAll("div");
    color = "white";
    fractions.forEach(fraction => {
        fraction.classList.remove("rainbow");
    });
});

clear.addEventListener("click", () => {
    let fractions = grid.querySelectorAll("div");
    fractions.forEach(fraction => {
        fraction.style.backgroundColor = "white";
    });
});

toggleBtn.addEventListener("click", () => {
    let fractions = grid.querySelectorAll("div");
    fractions.forEach(fraction => {
        if(fraction.classList.contains("fractionBorder")){
            fraction.classList.remove("fractionBorder");
        }else{  
            fraction.classList.add("fractionBorder");
        }
    });
})

function createGrid(w){
    let fractions = grid.querySelectorAll("div");
    fractions.forEach((div) => div.remove());
    for(let i=0; i<(w*w); i++){
        const fraction = document.createElement("div");
        fraction.classList.add("fractionBorder");
        fraction.addEventListener("mouseover", fractionColor);
        grid.style.gridTemplateColumns = `repeat(${w}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${w}, 1fr)`;
        grid.appendChild(fraction).classList.add("fraction");
    }
}

createGrid(16);

rainbowMode.addEventListener("click", () => {
    let fractions = grid.querySelectorAll("div");
    fractions.forEach(fraction => {
        fraction.classList.add("rainbow");
    });
});

function fractionColor(){
    if(this.classList.contains("rainbow")){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }else{
        this.style.backgroundColor = color;
    }
}

function sizePopup(){
    let size = prompt("choose width of ur workplace 1-100 thanks bro");
    if(size<1 || size>100){
        createGrid(16);
    }else{
        createGrid(size);
    }
}

