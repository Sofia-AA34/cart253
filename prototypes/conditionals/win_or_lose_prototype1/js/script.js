/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Load the image kitty_cat
let img;

/**
 * Creates the canvas
*/
async function setup() {
    createCanvas(600, 600);
    img = await loadImage("assets/images/kitty_cat.png");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#EDE8D0");

    drawImage();
}

// draws the image in the center of the canvas 
function drawImage() {
    image(img, 200, 200);
}