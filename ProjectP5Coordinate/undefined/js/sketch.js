
// select element for user to change between shapes
const selectElement = document.getElementById("shape-display");

// store currently
let shapeDisplay = "circle";

// new variable true or false - aka boolean
let shapeChanged = false;


selectElement.onchange = (event) => {
    shapeDisplay = event.target.value;
    shapeChanged = true;
}

function setup() {
    angleMode(DEGREES);
    createCanvas(windowWidth, windowHeight);
    background(0, 40)
    noStroke();
    changeColor();

}

function draw() {
    translate(width / 2, height / 2);

if (shapeChanged){
    background(0, 40)
    offset = 0
    shapeChanged = false;
}

    switch (shapeDisplay) {

        // display circle
        case "circle": {
            drawCircle();
            break;
        }

        // display spiral
        case "spiral": {
            drawSpiral();
            break;
        }

        case "heart":{
            drawHeart();
            break;
        }
    }
}

