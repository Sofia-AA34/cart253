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
    background('#D8A8A6'); // muted burgundy

    image(typingMachineImg, -55, -90, 500, 650);

}