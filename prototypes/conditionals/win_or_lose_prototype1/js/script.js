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

// Text to dispay for the title, middle and ending
let titleString = "Click on the kitty to start the game";

let state = "title";

/**
 * Creates the canvas
*/
async function setup() {
    createCanvas(600, 600);
    img = await loadImage("assets/images/kitty_cat.png");

    textSize(20);
    textAlign(CENTER, CENTER);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    // Check the state and call the appropriate fucntion
    if (state === "title") {
        title();
    }
}

// draws the image in the center of the canvas 
function title() {
    background("#EDE8D0");

    image(img, 200, 200);

    push();
    fill("black");
    text(titleString, width / 2, height / 4);
    pop();
}