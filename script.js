let canvas = document.getElementById("snake");
let content = canvas.getContext("2d"); //organiza o desenho do canvas. plano 2d
let box = 32;

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();
