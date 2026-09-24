/**
 * Title of Project
 * Sofia Allashukurova
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);
}

/**
 * Draws the iris
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
    push();
    fill(128, 128, 128);
    circle(200, 200, 400);
    pop();
}

/**
 * Draw the pupil of the eye
 */
function drawPupil() {
    push();
    fill(0, 0, 0);
    circle(200, 200, 150);
    pop();
}

