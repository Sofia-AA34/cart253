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
    drawHead();
    drawBody();
    drawWings();
}

/**
 * Draws the butterfly's head
 */
function drawHead() {

    //Butterfly's head
    push();
    stroke(50);
    fill(80);
    circle(385, 161, 15);
    circle(375, 177, 25);
    pop();


}

/**
 * Draws the butterfly's body 
 */
function drawBody() {
    //Butterfly's middle 1
    push();
    stroke(50);
    fill(80);
    translate(355, 213);
    rotate(25);
    ellipse(0, 0, 40, 65);
    pop();

    //Butterfly's middle 2
    push();
    stroke(50);
    fill(80);
    translate(335, 250);
    rotate(25);
    ellipse(0, 0, 34, 58);
    pop();

    //Butterfly's bottom 1
    push();
    stroke(50);
    fill(80);
    translate(315, 290);
    rotate(25);
    ellipse(0, 0, 23, 60)
    pop();

    //Butterfly's bottom 2
    push();
    stroke(50);
    fill(80);
    translate(293, 336);
    rotate(25);
    ellipse(0, 0, 15, 65)
    pop();
}

/**
 * Draw butterfly's wings 
 */
function drawWings() {
    //Butterfly's right upper wing
    push();
    fill(255, 95, 31);
    quad(356, 210, 620, 150, 570, 340, 355, 235);
    pop();

    //Butterfly's right lower wing
    push();
    fill(255, 95, 31);
    quad(355, 235, 590, 350, 420, 460, 315, 290);
    pop();

    //Butterfly's left upper wing
    push();
    fill(255, 95, 31);
    quad(220, 30, 356, 210, 345, 225, 145, 195);
    pop();

    //Butterfly's left lower wing
    push();
    fill(255, 95, 31);
    quad(130, 185, 345, 225, 315, 290, 180, 350);
    pop();
}