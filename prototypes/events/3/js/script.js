/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let state = "alive";

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

    if (state === "alive") {
        alive();
    }
    else if (state === "dead") {
        dead();
    }
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
    line(10, 50, 250, 50);
    line(300, 40, 400, 40);
    line(250, 50, 250, 90);
    line(300, 40, 300, 80);
    line(300, 120, 300, 150);
    line(300, 120, 400, 120);
    line(60, 90, 250, 90);
    line(60, 90, 60, 120);
    line(0, 160, 60, 160);
    line(100, 130, 100, 190);
    line(100, 130, 145, 130);
    line(145, 130, 145, 250);
    line(60, 160, 60, 250);
    line(60, 250, 145, 250);
    line(190, 130, 190, 300);
    line(190, 130, 230, 130);
    line(230, 130, 230, 250);
    line(345, 170, 345, 200);
    line(290, 200, 345, 200);
    line(290, 200, 290, 300);
    pop();
}