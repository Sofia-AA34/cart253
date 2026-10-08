/**
 * Hide-and-seek
 * Sofia Allashukurova
 * 
 * This is a game where you just follow the directions.
 * Click on the cat, find it among the ghosts and try not to lose!
 */

"use strict";

// The images used in this prototype 
let kittyImg; // small black cat with a white thing around it's neck

let ghostImg; // ghost

let partyImg; // black cat with a confetti gun

let frogImg; // sad frog


// Text to dispay for the start, middle, win and loss states 
let startString = "Click on the cat to start the game";
let middleString = "Can you find it now?";
let winString = "Yayyy!!! You won!"; // win
let gameOverString = "Game over :("; // loss

// first state shown when the prototype runs 
let state = "start";

/**
 * Creates the canvas, loads the images ans sets up the text
*/
async function setup() {
    // creates the canvas
    createCanvas(600, 600);

    // Load the images used in this prototype
    kittyImg = await loadImage("assets/images/kitty_cat.png");
    ghostImg = await loadImage("assets/images/ghost.png");
    partyImg = await loadImage("assets/images/party.png");
    frogImg = await loadImage("assets/images/frog.png");

    // text settings
    textSize(25);
    textAlign(CENTER, CENTER);
}



/**
 * Depending on the current state, run the function to handle the state 
*/
function draw() {
    // Check the state and call the appropriate function
    if (state === "start") {
        start();
    }
    else if (state === "middle") {
        middle();
    }
    else if (state === "win") {
        win();
    }
    else if (state === "gameOver") {
        gameOver();
    }
}

/**
 * The first state "start".
 * Displays the image of the black cat with the white thing around 
 * it's neck and waits for the user to click the mouse (as is told in the text)
 */

function start() {
    background("#EDE8D0"); // beige

    image(kittyImg, 200, 200);

    // text to display
    push();
    fill("black");
    text(startString, width / 2, height / 4); // text is above the image
    pop();
}

/**
 * The second state "middle". 
 * Runs once the user clicks the mouse in the state "start".
 * Displays the cat hiding among ghosts with a text hinting on what 
 * to do next (find the cat).
 * Waits for the user to click the mouse on the cat.
 */

function middle() {
    background("#EDE8D0"); // used to help place the images

    // image of the cat (hidden)
    image(kittyImg, 50, 100);

    // images of a ghost 
    // first row 
    image(ghostImg, 125, -100);
    image(ghostImg, -75, -35);
    image(ghostImg, 200, -35);
    image(ghostImg, 450, -35);
    image(ghostImg, 325, -35);

    // second row
    image(ghostImg, 100, 215);
    image(ghostImg, -15, 215);
    image(ghostImg, 215, 215);
    image(ghostImg, 425, 215);
    image(ghostImg, 325, 215);

    // third row
    image(ghostImg, 75, 465);
    image(ghostImg, -100, 465);
    image(ghostImg, 175, 465);
    image(ghostImg, 390, 465);
    image(ghostImg, 520, 465);
    image(ghostImg, 280, 465);

    // text to display 
    push();
    fill("white");
    text(middleString, width / 2, 225);
    pop();
}

/**
 * One of the two end states. If the user clicks on the cat's head in the "middle" 
 * state, the user wins (hence the win state with a congratulations text is displayed)
*/

function win() {
    background("pink");

    image(partyImg, 150, 150, 300, 300);

    // text to display 
    push();
    fill("black");
    textSize(40);
    text(winString, width / 2, height / 5);
    pop();
}

/**
 * The second possible end state. If the user clicks anywhere else but the cat's head 
 * in the middle state, the user loses (hence the sad frog and the game over text displayed)
 */

function gameOver() {
    background("black");

    image(frogImg, 150, 150, 300, 300);

    // text to display 
    push();
    fill("white");
    textSize(40);
    text(gameOverString, width / 2, height / 5);
    pop();
}

/**
 * Function that changes the states depending on where the user clicks
 */
function mouseClicked() {
    if (state === "start") {    // only one possible outcome
        state = "middle";
    }

    else if (state === "middle") {
        if (mouseX > 125 && mouseX < 200 && mouseY > 150 && mouseY < 225) {
            state = "win";     // user wins if he clicks on the canvas inside those coordinates
        }
        else {
            state = "gameOver"  // user looses if he clicks anywhwere else 
        }
    }
}