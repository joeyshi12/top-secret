let inconsolata;
let canvas;

function preload() {
    inconsolata = loadFont('assets/inconsolata.otf');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent("sketch-holder");
    textFont(inconsolata);
    textSize(120);
    textAlign(CENTER, CENTER);
}

function draw() {
    resizeCanvas(windowWidth, windowHeight);

    background(0);
    let time = millis();
    rotateX(time / 1600);
    rotateZ(time / 1400);
    text('joeyshi.tech', 0, 0);
}