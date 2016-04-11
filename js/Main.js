const FPS = 30;
var canvas;
var canvasContext;

var imagesToLoad = 3;

var warrior = new WarriorClass();

// var debug = false;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    loadImages();
};

function move() {
    warrior.move();
}

function draw() {
    colorRect(0, 0, canvas.width, canvas.height, "#000000");
    drawTiles();
    warrior.drawCar();
}

function startGame() {
    setInterval(function() {
        move();
        draw();
    }, 1000 / FPS);

    warrior.init(playerPic, "Blue car");
    initInput();
}
