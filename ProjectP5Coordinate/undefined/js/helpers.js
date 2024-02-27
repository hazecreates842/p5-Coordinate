/**
 * a function that translates radius and theta to 
 * cartesianCoordinate and returns x and y in an object.
 */
function transformPolarToCartesian(radius, theta) {
    // calculate x and y using the cosine and sine formula.
    const x = radius * cos(theta);
    const y = -radius * sin(theta);

    const cartesianCoordinate = {
        // storing x and y within cartesianCoordinate object.
        // from now on cartesianCoordinate.x is the same as x.
        // from now on cartesianCoordinate.y is the same as y.
        x: x,
        y: y
    }


    // return the stored data so that it can be used outside of the function.
    return cartesianCoordinate;
}

function changeColor() {
    const r = random(255);
    const g = random(255);
    const b = random(255);
    fill(r, g, b);
}

function drawCircle() {

    //radius of the circle which is constant
    const radius = offset;
    offset = offset - 1;

    // Loop through a whole circle (0 to 360 degrees)
    for (let theta = 0; theta < 360; theta += 0.1) {
        const cartesianCoordinate = transformPolarToCartesian(radius, theta);

        // draw a point in those coordinates
        circle(cartesianCoordinate.x, cartesianCoordinate.y, 8);
    }
}

//offset of the spiral starts at 0 and is updated as 
let offset = 0;

// draw a spiral in the middle of the canvals
function drawSpiral() {

    background(0, 40)

    // radius starts at zero and will increase with the formula of the spiral
    let r = 0;

    //    constant of proportion between r and theta
    const k = 0.8 + offset * 0.001;
    const a = 5;
    const b = 0.01;

    //    loop through a whole circle - 0 to 360 degrees
    for (let theta = 0; theta < 5 * 360; theta = theta + 0.1) {

        // update r according to theta
        // r = k * theta;
        r = a * Math.exp(b * theta);

        // get the cartesian coordinates
        const cartesianCoordinates = transformPolarToCartesian(r, theta + offset);

        circle(cartesianCoordinates.x, cartesianCoordinates.y, 8)
    }

       offset = offset - 1;
}

function radiusForHeart(theta) {
    const radius = 2 - 2 * sin(theta) +
        // math.abs is math absolute value - if it is negative it will turn it positive, if it is positive it will remain unchanged.
        // math.sqrt is math square root - 

        /**
         * calculate radius needed at each angle thetaof the heart
         * math.sqrt() = square root of what's inside the parenthesis
         * math.abs() = absolute value of whats inside the parenthesis
         * absolute value means if it's negative make that positive, if it's positive leave it as it is
         * @param {Number} theta the angle in degrees
         */

        (sin(theta) * Math.sqrt(Math.abs(cos(theta)))) / (sin(theta) + 1.4);
        return radius;
}

// draw a heart
/**
 * 
 */
function drawHeart() {

    translate(0, -0.2 * height);

    for (let theta = 0; theta < 360; theta = theta + 0.1) {
        // const radius = offset * radiusForHeart(theta);
        const radius = 80 * radiusForHeart(theta - offset);
    

    

    const cartesianCoordinates = transformPolarToCartesian(radius, theta);
    circle(cartesianCoordinates.x, cartesianCoordinates.y, 20);

 
}
offset = offset + 1;
}