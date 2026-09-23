/**
 * Title of Project
 * Sofia Allashukurova
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates the Canvas
*/
function setup() {
    createCanvas(640, 480);
    angleMode(DEGREES);
}


/**
 * Draws the butterfly
*/
function draw() {
    // Green background
    background(0, 155, 120);

    // No stroke everywhere 
    noStroke();

    drawButterfly();
}

/**
 * Draws the butterfly using functions
 */
function drawButterfly() {
    drawBody();
}

/**
 * Draws the butterfly's body 
 */
function drawBody() {
    //Butterfly's head
    stroke(50);
    push();
    fill(80)
    circle(385, 161, 15);
    circle(375, 177, 25);
    pop();

    //Butterfly's middle 1
    push();
    fill(80);
    translate(355, 213);
    rotate(25);
    ellipse(0, 0, 40, 65);
    pop();

    //Butterfly's middle 2
    push();
    fill(80);
    translate(335, 250);
    rotate(25);
    ellipse(0, 0, 34, 58);
    pop();

    //Butterfly's bottom 1
    push();
    fill(80);
    translate(315, 290);
    rotate(25);
    ellipse(0, 0, 23, 60)
    pop();

    //Butterfly's bottom 2
    push();
    fill(80);
    translate(293, 336);
    rotate(25);
    ellipse(0, 0, 15, 65)
    pop();
}