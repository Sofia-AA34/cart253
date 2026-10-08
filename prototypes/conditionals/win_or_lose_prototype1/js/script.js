/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// Load the image kitty_cat
let kittyImg;

let ghostImg;

let partyImg;

let frogImg;


// Text to dispay for the start, middle and ending
let startString = "Click on the kitty to start the game";
let middleString = "Can you find the kitty?";
let endString = "Yayyy!!! You won!";

let state = "start";

/**
 * Creates the canvas
*/
async function setup() {

    createCanvas(600, 600);
    kittyImg = await loadImage("assets/images/kitty_cat.png");
    ghostImg = await loadImage("assets/images/ghost.png");
    partyImg = await loadImage("assets/images/party.png");
    frogImg = await loadImage("assets/images/frog.png");

    textSize(25);
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
    else if (state === "middle") {
        middle();
    }
    else if (state === "end") {
        end();
    }
}

// draws the image in the center of the canvas 
function start() {
    background("#EDE8D0");

    image(kittyImg, 200, 200);

    push();
    fill("black");
    text(startString, width / 2, height / 4);
    pop();
}

function middle() {
    background("#EDE8D0");

    image(kittyImg, 50, 100);

    image(ghostImg, 125, -100);
    image(ghostImg, -75, -35);
    image(ghostImg, 200, -35);
    image(ghostImg, 450, -35);
    image(ghostImg, 325, -35);

    image(ghostImg, 100, 215);
    image(ghostImg, -15, 215);
    image(ghostImg, 215, 215);
    image(ghostImg, 425, 215);
    image(ghostImg, 325, 215);

    image(ghostImg, 75, 465);
    image(ghostImg, -100, 465);
    image(ghostImg, 175, 465);
    image(ghostImg, 390, 465);
    image(ghostImg, 520, 465);
    image(ghostImg, 280, 465);

    push();
    fill("white");
    text(middleString, width / 2, height / 2);
    pop();
}

function end() {
    background("pink");

    image(partyImg, 150, 150, 300, 300);

    push();
    fill("black");
    text(endString, width / 2, height / 5);
    pop();
}


function mouseClicked() {
    if (state === "start") {
        state = "middle";
    }

    else if (state === "middle") {
        if (mouseX > 125 && mouseX < 200 && mouseY > 150 && mouseY < 225) {
            state = "end";
        }
    }
}