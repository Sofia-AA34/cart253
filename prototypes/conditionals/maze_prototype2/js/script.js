/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let mazeImg;

let state = "maze";

/**
 * Creates the canvas 
*/
async function setup() {
    createCanvas(400, 400);

    //noCursor();

    mazeImg = await loadImage("assets/images/maze.png");

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    if (state === "maze") {
        maze();
    }
    else if (state === "noMaze") {
        noMaze();
    }
}

function maze() {
    background("black");

    image(mazeImg, 0, 0);

    text(`x: ${int(mouseX)} y: ${int(mouseY)}`, 50, 50);

    //push();
    //fill("red");
    //circle(mouseX, mouseY, 20);
    //pop();   
}

function mouseMoved() {

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
        state = "maze";
    }

    else {
        state = "noMaze";
    }
}

function noMaze() {
    background("red");
}