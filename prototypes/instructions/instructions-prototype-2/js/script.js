/**
 * Title of Project
 * Sofia Allashukurova
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//Value for the mouse clicked function of the pupil
let value = 0

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);
}

/**
 * Draws the eye
*/
function draw() {
    //black background
    background(0, 0, 0);

    drawEye()
}

/**
 * Draws the eye using functions 
 */
function drawEye() {
    drawIris();
    drawPupil();
}

/**
 * Draw the iris of the eye 
 */

function drawIris() {
    //draw the shape of the iris
    push();
    fill(128, 128, 128);
    circle(200, 200, 400);
    pop();

    //create an array of colors for the iris colors 
    push();
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white'];

    //creat an array for circle sizes
    let sizes = [375, 350, 325, 300, 275, 250, 225, 200, 175];

    //shuffle the array 
    shuffle(colors, true);

    //draw the circles using the array 
    for (let i = 0; i < colors.length; i += 1) {
        fill(colors[i]);
        circle(200, 200, sizes[i]);
    }
    pop();

    //add more definition to the iris by adding more circles around it
    push();
    noFill();
    stroke(24, 24, 24);
    strokeWeight(10);
    circle(200, 200, 175);
    circle(200, 200, 200);
    circle(200, 200, 225);
    circle(200, 200, 250);
    circle(200, 200, 275);
    circle(200, 200, 300);
    circle(200, 200, 325);
    circle(200, 200, 350);
    circle(200, 200, 375);
    pop();


}

/**
 * Draw the pupil of the eye
 */
// draw the shape of the pupil
function drawPupil() {

    //draw the pupil
    push();
    fill(value, 0, 0);
    circle(200, 200, 150);
    pop();
}
// toggle the iris color when the user clicks 
function mouseClicked() {
    if (value === 255) {
        value = 0
    } else {
        value = 255;
    }
}

