/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 600);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#1e446c") // dark blue

    // draw the bubbles 
    drawBubble(100, 100, 50);
    drawBubble(150, 200, 25);
    drawBubble(300, 70, 100);
    drawBubble(100, 400, 100);
    drawBubble(200, 500, 50);
    drawBubble(300, 300, 75);
}

function drawBubble(x, y, size) {
    push();
    noStroke();
    fill("#95a7ba");
    ellipse(x, y, size);
    pop();
}