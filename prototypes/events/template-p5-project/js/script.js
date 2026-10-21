/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// The image used in this prototype 
let typingMachineImg; // image of a typing machine 

// Paper in the typing machine
let paper = {
    // Position, size and color of the paper - rectangle
    // Position 
    x: 94,
    y: 98,
    // Size
    width: 216,
    height: 174,
    // Color
    fill: ('#FAFAEC') // beige
}

/**
 * Creates the canvas and laods the image
*/
async function setup() {
    // creates the canvas 
    createCanvas(400, 500);

    // loads the image 
    typingMachineImg = await loadImage("assets/images/typing_machine.png");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('#D8A8A6'); // light pink

    image(typingMachineImg, -55, -90, 500, 650);

    drawPaper();

    // used to get the exact coordinates of the corridors of the maze
    text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 50, 50);

}

/**
 * Draws the paper in the. typing machine
 */
function drawPaper() {
    push();
    noStroke();
    fill(paper.fill);
    rect(paper.x, paper.y, paper.width, paper.height);
    pop();
}
