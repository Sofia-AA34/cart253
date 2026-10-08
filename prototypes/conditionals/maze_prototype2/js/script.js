/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let mazeImg;

/**
 * Creates the canvas 
*/
async function setup() {
    createCanvas(400, 400);

    mazeImg = await loadImage("assets/images/maze.png");

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("black");

    image(mazeImg, 0, 0);

}