/**
 * My Useful Charger 
 * Sofia Allashukurova
 * 
 * A simultaion where you plug the charger into the outlet and watch
 * the battery charge right before your eyes
 */

"use strict";

// The image used in this prototype - an outlet 
let outletImg;

// first state shown when the prototype runs 
let state = "empty";

// Battery on the right side of the canvas 
let battery = {
    fill: "red",
    fills: {
        empty: "red",
        full: "green"
    }
}

/**
 * Creates the canavs and loads the outlet image 
*/
async function setup() {
    // creates the canvas 
    createCanvas(600, 400);

    // Loads the image used in this prototype
    outletImg = await loadImage("assets/images/outlet.png");
}


/**
 * Depending on the current state, runs the function to handle the state 
*/
function draw() {
    background("#C9C5B1");

    image(outletImg, 50, 50);

    noCursor();

    if (state === "empty") {
        empty();
    }
    else if (state === "full") {
        empty();
    }
}

/**
 * Deafault state of the program, before the user can alter it by moving 
 * his mouse. The cursor is the charger and the battery is empty (red)
 */
function empty() {
    // Draws the battery 
    // Draws the ouline of the battery 
    push();
    fill(battery.fills[state]);  // the color of the battery changes dependening on the state 
    rect(450, 100, 100, 200);
    pop();

    // Draws the details (lines inside the outline) of the battery
    push();
    stroke("black");
    strokeWeight(2);
    line(451, 150, 549, 150);
    line(451, 200, 549, 200);
    line(451, 250, 549, 250);
    pop();


    // The charger (charger block + cable) is the user's cursor 
    // Draws the charger block - made out of two rectangles 
    push();
    fill("white");
    rect(mouseX, mouseY, 140, 130, 20);
    rect(mouseX + 32, mouseY + 25, 75, 75, 20);
    pop();

    // Draws the charger cable - made out of a bezier line 
    push();
    noFill();
    stroke("black");
    strokeWeight(25);
    bezier(mouseX + 70, mouseY + 60, mouseX + 250, mouseY - 100, mouseX - 50, mouseY - 100, 450, 400);
    pop();
}

/**
 * The state of the program once the user alligns the charger with one of the 
 * two outlet openings 
 */
function full() {
    if (battery.fill === baterry.fills.full) { //green
    }
}

/**
 * Function that changes the states of the battery depending on where user's
 * cursor is. 
 */

function mouseMoved() {
    // coordinates of the two outlet openings that trigger the change of state 
    if (
        (mouseX > 75 && mouseX < 100 && mouseY > 75 && mouseY < 100) || // top one
        (mouseX > 75 && mouseX < 100 && mouseY > 175 && mouseY < 210) // bottom one
    ) {
        state = "full"; // green
    }

    else { // when the cursor is anywhere but on the outlet openings 
        state = "empty"; // red
    }

}