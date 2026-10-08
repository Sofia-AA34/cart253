/**
 * Find your way out 
 * Sofia Allashukurova
 * 
 * This is a very easy maze challenge. Or is it? Try to reach the end 
 * and remember: DO NOT TOUCH THE WALLS!
 */

"use strict";

// The image used in this prototype: a maze 
let mazeImg;

// First state shown when the prototype runs 
let state = "maze";

// Text displayed for the "warning" state
let warningString = "Don't touch the walls!";


/**
 * Creates the canvas, loads the image and sets up the text settings
*/
async function setup() {
    //creates the canvas 
    createCanvas(400, 400);

    noCursor();

    // Loads the image used in this prorotype
    mazeImg = await loadImage("assets/images/maze.png");

    // text settings
    textSize(30);
    textAlign(CENTER, CENTER);
}


/**
 * Depending on the current state, run the function to handle the state
*/
function draw() {
    // Check teh state and call the appropriate function 
    if (state === "maze") {
        maze();
    }
    else if (state === "warning") {
        warning();
    }
}

/**
 * The default state, as long as the user does not touch the walls of the maze
 */
function maze() {
    background("black");

    image(mazeImg, 0, 0);

    // used to get the exact coordinates of the corridors of the maze
    // text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 50, 50); 

    // the current cursor - a red circle 
    push();
    fill("red");
    circle(mouseX, mouseY, 15);
    pop();
}

/**
 * The state the user trigger's if he lets his cursor touch the walls of the maze. 
 * A red banner with a warning text displayed 
 */
function warning() {
    background("red");

    // text to display 
    push();
    fill("white");
    text(warningString, width / 2, height / 2);
    pop();
}

/**
 * Function that alternates between the two states ( "maze" and "warning" )
 * depending on user's mouse position
 */
function mouseMoved() {
    // coordinates where user's mouse should stay to avoid the "Warning" state
    if (
        (mouseX > 202 && mouseX < 252 && mouseY > 322 && mouseY < 450) ||
        (mouseX > 202 && mouseX < 367 && mouseY > 322 && mouseY < 369) ||

        (mouseX > 319 && mouseX < 367 && mouseY > 263 && mouseY < 369) ||
        (mouseX > 202 && mouseX < 367 && mouseY > 263 && mouseY < 311) ||

        (mouseX > 202 && mouseX < 250 && mouseY > 204 && mouseY < 311) ||
        (mouseX > 202 && mouseX < 367 && mouseY > 204 && mouseY < 252) ||

        (mouseX > 320 && mouseX < 367 && mouseY > 146 && mouseY < 252) ||
        (mouseX > 26 && mouseX < 367 && mouseY > 146 && mouseY < 195) ||

        (mouseX > 26 && mouseX < 76 && mouseY > 87 && mouseY < 195) ||
        (mouseX > 26 && mouseX < 192 && mouseY > 87 && mouseY < 137) ||

        (mouseX > 144 && mouseX < 192 && mouseY > 0 && mouseY < 137)
    ) {
        state = "maze";  // coordinates of the corridors within the maze 
    }

    else {
        state = "warning"; // by default the walls of the maze
    }
}
