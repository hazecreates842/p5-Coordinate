// Colour-Change-Button
const colorButton = document.getElementById("Colour-Change-Button");

colorButton.onclick = () => {
    changeColor();
}
/**
 * 
 * @param {WheelEvent} event event containing the wheel scrolling parameters 
 */

function mouseWheel(event){
    changeColor();
    // delta means increment if the user is scrolling quickl, it will be higher, if the user is scrolling slowly it will be smaller.
const deltaWheel = event.delta;

offset = offset + deltaWheel;
}
