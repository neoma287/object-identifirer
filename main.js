img="";

function preload(){
    img= loadImage("bedroom.jpg");
}

function setup() {
    canvas = createCanvas(640 , 420);
    canvas.center();
}

function draw() {
    image(img , 0 , 0 , 640 , 420);
    fill("#FF0000");
    text("bed" , 45 , 70);
    noFill();
    stroke("#FF0000");
    rect(40 , 40 , 550 , 350);
}
function modelLoaded () {
    console.log("model Loaded!");
    status=true;
    objectDetector.detect(img,gotResult);
    