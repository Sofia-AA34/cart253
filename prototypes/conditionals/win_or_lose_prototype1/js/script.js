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

// Text to dispay for the start, middle and ending
let startString = "Click on the kitty to start the game";

let state = "start";

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
    if (state === "start") {
        start();
    }

    // draws the image in the center of the canvas 
    function start() {
        background("#EDE8D0");

        image(img, 200, 200);

        push();
        fill("black");
        text(startString, width / 2, height / 4);
        pop();
    }
}