/**
 * Steaming cup of coffee
 * Sofia Allashukurova
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict"

// Cup

// Shape of the cup - quad
let shapeCup = {
    // Position and color of the cup
    // Position 
    x1: 100,
    y1: 150,
    x2: 300,
    y2: 150,
    x3: 275,
    y3: 325,
    x4: 125,
    y4: 325,
    // Color 
    fill: "#AA336A",


}

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#FAD5A5");

    drawCup();
}

/**
 * Draws the cup 
 */
function drawCup() {
    push();
    fill(shapeCup.fill);
    quad(shapeCup.x1, shapeCup.y1, shapeCup.x2, shapeCup.y2, shapeCup.x3, shapeCup.y3, shapeCup.x4, shapeCup.y4);
    pop();
}