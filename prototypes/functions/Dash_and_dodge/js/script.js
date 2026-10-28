/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// First state shown when the prototype runs
let state = "firstFrame"

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    // creates the canvas
    createCanvas(500, 300);

}


/**
 * Depending on the current state, run the function to handle the state
*/
function draw() {
    // Check the state and call the appropriate function
    if (state === "firstFrame") {
        firstFrame();
    }
}

/**
 * The first state - "firstFrame"
 */
function firstFrame() {
    background("#7d5a5a"); // red-gray 
}