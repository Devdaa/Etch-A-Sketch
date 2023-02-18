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
    colorMode.classList.add("activeButton");
    isDolaqidzeModeActive = false;
    isLomadzeModeActive = false;
    let fractions = grid.querySelectorAll("div");
    color = document.getElementById("colorPicker").value;
    fractions.forEach(fraction => {
        fraction.classList.remove("rainbow");
    });
});

eraser.addEventListener("click", () => {
    isDolaqidzeModeActive = false;
    isLomadzeModeActive = false;
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
        fraction.style.backgroundImage = "none";
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
});

const buttons = document.querySelectorAll('.glow-on-hover');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

function createGrid(w){
    let isDrawing = false;
    let fractions = grid.querySelectorAll("div");
    fractions.forEach((div) => div.remove());
    for(let i=0; i<(w*w); i++){
        const fraction = document.createElement("div");
        fraction.classList.add("fractionBorder");
        fraction.addEventListener("mousedown", () => {
            isDrawing = true;
        });
        fraction.addEventListener("mouseup", () => {
            isDrawing = false;
        });
        fraction.addEventListener("mousemove", () => {
            if (isDrawing) {
                fractionColor(fraction);
            }
        });
        fraction.addEventListener("mouseleave", () => {
            isDrawing = false;
        });
        fraction.addEventListener("mouseenter", (event) => {
            if (event.buttons === 1) {
                fractionColor(fraction);
            }
        });
        fraction.setAttribute("draggable", "false");
        fraction.addEventListener("dragstart", (event) => {
            event.preventDefault();
        });
        grid.style.gridTemplateColumns = `repeat(${w}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${w}, 1fr)`;
        grid.appendChild(fraction).classList.add("fraction");
    }
}

  

let isDolaqidzeModeActive = false;

dolaqidzeMode.addEventListener("click", () => {
    isLomadzeModeActive = false;
    isDolaqidzeModeActive = true;
});

let isLomadzeModeActive = false;

lomadzeMode.addEventListener("click", () => {
    isDolaqidzeModeActive = false;
    isLomadzeModeActive = true;
});

function fractionColor(fraction) {
  if (isDolaqidzeModeActive) {
    fraction.style.backgroundImage = imagesDola[Math.floor(Math.random() * imagesDola.length)];
    fraction.style.backgroundSize = "cover";
  }else if(isLomadzeModeActive){
    fraction.style.backgroundImage = imagesLoma[Math.floor(Math.random() * imagesLoma.length)];
    fraction.style.backgroundSize = "cover";
  }else if(fraction.classList.contains("rainbow")) {
    isDolaqidzeModeActive = false;
    isLomadzeModeActive = false;
    fraction.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    fraction.style.backgroundColor = color;
  }
}




createGrid(25);

rainbowMode.addEventListener("click", () => {
    isDolaqidzeModeActive = false;
    isLomadzeModeActive = false;
    let fractions = grid.querySelectorAll("div");
    fractions.forEach(fraction => {
        fraction.classList.add("rainbow");
    });
});

function sizePopup(){
    let size = prompt("choose width of ur workplace 1-100 thanks bro");
    if(size<1 || size>100){
        createGrid(25);
    }else{
        createGrid(size);
    }
}

