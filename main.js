status = "";
img = "";

function preload(){
    img = loadImage('imagem- projeto131.jpeg');
}

function setup() 
{
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detectando Objetos";
}

function modelLoaded()
{
console.log("Model Loaded!");
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
if(error) {
    console.log(error);
}
console.log(results);
}