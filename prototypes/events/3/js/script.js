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
    createCanvas(400, 300);


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#e3e7f5");
    noStroke();

    // used to get the exact coordinates of the corridors of the maze
    text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 50, 50);

    // if (state === "alive") {
    //alive();
    //}

    // if (state === "dead") { dead(); }

    drawOutline();
    drawInsideBlocks();
}


function drawOutline() {
    push();
    fill("#0909a7");
    rect(0, 0, 400, 10); //top
    rect(390, 0, 10, 300); //right
    rect(0, 290, 400, 10); //bottom
    rect(0, 0, 10, 300); //left
    pop();
}

function drawInsideBlocks() {
    push();
    stroke("#0909a7");
    strokeWeight(10);
    line(10, 40, 100, 40);
    pop();


}