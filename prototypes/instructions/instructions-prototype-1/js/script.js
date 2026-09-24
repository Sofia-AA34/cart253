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
    drawFlowers();
    drawHead();
    drawWings();
    drawBody();
    drawsPatterns();
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

    //Butterfly's two antennaes
    push();
    stroke(10);
    strokeWeight(3);
    line(391, 155, 415, 132);
    circle(415, 132, 3);
    line(384, 152, 378, 125);
    circle(378, 125, 3);
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
    triangle(356, 210, 620, 150, 520, 140);
    triangle(620, 150, 570, 340, 638, 185);
    triangle(570, 340, 610, 320, 638, 185);
    pop();

    //Butterfly's right lower wing
    push();
    fill(255, 95, 31);
    quad(355, 235, 590, 350, 420, 460, 325, 290);
    triangle(420, 460, 465, 463, 590, 350);
    triangle(325, 290, 420, 460, 320, 350);
    pop();

    //Butterfly's left upper wing
    push();
    fill(255, 95, 31);
    quad(220, 75, 356, 205, 345, 225, 145, 195);
    triangle(220, 75, 300, 100, 365, 225);
    triangle(220, 75, 170, 90, 145, 195)
    triangle(145, 195, 170, 90, 130, 165);
    pop();

    //Butterfly's left lower wing
    push();
    fill(255, 95, 31);
    quad(130, 185, 345, 225, 303, 290, 150, 320);
    triangle(150, 320, 303, 290, 260, 330);
    pop();
}

/**
 * Draw butterfly's patterns 
 */
function drawsPatterns() {
    //Butterfly's patterns for upper wings 
    //right side
    push();
    stroke(10);
    fill(160, 82, 45);
    translate(460, 190);
    rotate(70);
    ellipse(0, 0, 20, 150);
    pop();

    push();
    stroke(10);
    fill(160, 82, 45);
    translate(520, 220);
    rotate(81);
    ellipse(0, 0, 16, 220);
    pop();

    push();
    stroke(10);
    fill(160, 82, 45);
    translate(520, 265);
    rotate(95);
    ellipse(0, 0, 13, 150);
    pop();

    //left side 
    push();
    stroke(10);
    fill(160, 82, 45);
    translate(290, 150);
    rotate(150);
    ellipse(0, 0, 10, 120);
    pop();

    push();
    stroke(10);
    fill(160, 82, 45);
    translate(260, 155);
    rotate(142);
    ellipse(0, 0, 17, 185);
    pop();

    push();
    stroke(10);
    fill(160, 82, 45);
    translate(240, 180);
    rotate(126);
    ellipse(0, 0, 12, 110);
    pop();

    //Butterfly's patterns on lower wings
    //left side 
    push();
    stroke(2);
    strokeWeight(1);
    fill(139, 64, 0);
    circle(200, 300, 30);
    circle(175, 280, 15);
    circle(230, 240, 30);
    circle(190, 180, 17);
    circle(210, 200, 13);
    pop();

    //right side 
    push();
    stroke(2);
    strokeWeight(1);
    fill(139, 64, 0);
    circle(500, 400, 30);
    circle(475, 380, 15);
    circle(460, 340, 30);
    circle(390, 380, 17);
    circle(370, 320, 13);
    pop();
}

/**
 * Draw a flower beneath the butterfly 
 */
function drawFlowers() {
    //yellow flower
    push();
    fill(255, 192, 0);
    translate(400, 220);
    rotate(95);
    ellipse(0, 0, 250, 350);
    pop();

}