/**
 * Don't let them eat you
 * Sofia Allashukurova
 * 
 * This is a game set in the ocean depths. The user must avoid 
 * being eaten by the fish or getting tangled in the seaweed. 
 */

"use strict";

// first state shown when the prototype runs
let state = "alive";

// Text to display for the GameOver state 
let gameOverString = "You lose :(";

// Dark purple fish that swims in a set pattern (bottom to top)
const fish1 = {
    fill: ("#140320"),
    x: 400,
    y: 600,
    size: 150,
    velocity: {
        x: -5,
        y: -3,
    },
};

// Pink fish that chases the user (follows the mouse position)
const fish2 = {
    fill: ("#bc1d7a"),
    x: 200,
    y: 100,
    size: 100,
    velocity: {
        x: 0,
        y: 0,
    },
};

// Blue fish that swims in a set pattern (top to bottom)
const fish3 = {
    fill: ("#0e0c8a"),
    x: 50,
    y: 100,
    size: 50,
    velocity: {
        x: 5,
        y: 2,
    },
};

// The green seaweed (five of them)
const seaweed1 = {
    x: 20,
    y: 500,
    width: 40,
    height: 100,
    growing: true,
};

const seaweed2 = {
    x: 100,
    y: 550,
    width: 30,
    height: 50,
};

const seaweed3 = {
    x: 180,
    y: 450,
    width: 40,
    height: 150,
};

const seaweed4 = {
    x: 280,
    y: 525,
    width: 50,
    height: 75,
};

const seaweed5 = {
    x: 370,
    y: 475,
    width: 20,
    height: 125,
};


/**
 * Creates the canvas and sets up the text for the gameOver state
*/
function setup() {
    createCanvas(400, 600);

    // text settings for the gameOver state
    textSize(50);
    textAlign(CENTER, CENTER);
}


/**
 * Depending on the current state, runs the function to handle the state
 * If the state is "alive" - draws the bubbles, the swiming fish and the moving seaweed
 * If the state is "gameOver" - displays a red rectangle with the "You lose :(" text
*/
function draw() {
    // The gameOver state
    if (state === "gameOver") {
        push();
        rectMode(CENTER);
        fill('red'); // red rectangle
        noStroke();
        rect(width / 2, height / 2, 300);
        pop();

        push();
        fill('black');
        text(gameOverString, width / 2, height / 2); // text string 
        return;
    }

    background("#5680ad") // blue 

    // draw the bubbles in the background
    drawBubble(100, 100, 50);
    drawBubble(150, 200, 25);
    drawBubble(300, 70, 100);
    drawBubble(100, 400, 100);
    drawBubble(200, 500, 50);
    drawBubble(300, 300, 75);

    // checks if the user touches the fish 
    checkOverlapFish(fish1);
    checkOverlapFish(fish2);
    checkOverlapFish(fish3);

    // check if the user touches the seaweed
    checkOverlapSeaweed(seaweed1);
    checkOverlapSeaweed(seaweed2);
    checkOverlapSeaweed(seaweed3);
    checkOverlapSeaweed(seaweed4);
    checkOverlapSeaweed(seaweed5);


    // makes the dark purple and blue fish wrap when they go off the canvas
    wrapFish(fish1);
    wrapFish(fish3);

    // makes the pink fish chase the user
    chaseFish(fish2);

    // makes the fish swim across the screen
    swimFish(fish1);
    swimFish(fish2);
    swimFish(fish3);

    // moves the seaweed up and down - grow and shrink
    moveSeaweed(seaweed1);
    moveSeaweed(seaweed2);
    moveSeaweed(seaweed3);
    moveSeaweed(seaweed4);
    moveSeaweed(seaweed5);

    // draws the three fish 
    drawFish(fish1);
    drawFish(fish2);
    drawFish(fish3);

    // draws the seaweed - 5 
    drawSeaweed(seaweed1);
    drawSeaweed(seaweed2);
    drawSeaweed(seaweed3);
    drawSeaweed(seaweed4);
    drawSeaweed(seaweed5);
}

/**
 * Draws the "alive" state - bubbles, swiming fish and moving seaweed
 */

/**
 * Draws the bubbles
 */
function drawBubble(x, y, size) {
    push();
    noStroke();
    fill("#7ea3ca");
    ellipse(x, y, size);
    pop();
}

/**
 * Draws the fish
 */
function drawFish(fish) {
    push();
    noStroke();
    fill(fish.fill);
    ellipse(fish.x, fish.y, fish.size);
    pop();
}

/**
 * Moves the fish by its velocity
 */
function swimFish(fish) {
    fish.x += fish.velocity.x;

    fish.y += fish.velocity.y;
}

/**
 * If the fish goes off the canvas, wraps it around
 */
function wrapFish(fish) {
    // right or left
    if ((fish.x + (fish.size / 2)) < 0 || fish.x - (fish.size / 2) > width) {
        fish.x = width - fish.x;
    }

    // bottom or top
    if (fish.y + (fish.size / 2) < 0 || fish.y - (fish.size / 2) > height) {
        fish.y = height - fish.y;
    }
}

/**
 * Makes the fish chase the user with the mouse position
 */
function chaseFish(fish) {
    // if the mouse is in range, it affects the fish - the fish chases it
    const d = dist(mouseX, mouseY, fish.x, fish.y);

    if (d < fish.size + 100) {
        fish.velocity.x += (-fish.x + mouseX) * 0.005;
        fish.velocity.y += (-fish.y + mouseY) * 0.005;
    }

    // makes the fish bounce off the canvas walls - keeps it from going outside the canvas
    // left and right
    if (fish.x - (fish.size / 2) < 0 || fish.x + (fish.size / 2) > width) {
        fish.velocity.x *= -1;
    }

    // bottom and top
    if (fish.y - (fish.size / 2) < 0 || fish.y + (fish.size / 2) > height) {
        fish.velocity.y *= -1;
    }
}

/**
 * Draws the seaweed
 */
function drawSeaweed(seaweed) {
    push();
    noStroke();
    fill("#072c0e");
    rect(seaweed.x, seaweed.y, seaweed.width, seaweed.height);
    pop();
}

/**
 * Makes the seaweed move - grow or shrink
 */
function moveSeaweed(seaweed) {
    if (seaweed.growing) {
        growSeaweed(seaweed);
    }

    else { shrinkSeaweed(seaweed); }
}

/**
 * Describes how the seaweed will grow - until what point and how fast
 */
function growSeaweed(seaweed) {
    seaweed.y -= 1; // seaweed grows
    seaweed.height += 1; // keeps the seaweed from floating away 

    if (seaweed.y < 300) {
        seaweed.growing = false;
    }
}

/**
 * Describes how the seaweed will shrink - until what point and how fast
 */
function shrinkSeaweed(seaweed) {
    seaweed.y += 1;
    seaweed.height -= 1;

    if (seaweed.y > 550) {
        seaweed.growing = true;
    }
}

/**
 * Checks if the user touches one of the fish
 */
function checkOverlapFish(fish) {
    // gets the distance between the circle's center (fish) and the mouse (user)
    const d = dist(mouseX, mouseY, fish.x, fish.y);

    if (d < fish.size / 2) {
        state = "gameOver"
    }
}

/**
 * Checks if the user touches one of the seaweed
 */
function checkOverlapSeaweed(seaweed) {
    if (
        mouseX >= seaweed.x && // left side
        mouseX <= seaweed.x + seaweed.width && // right side
        mouseY >= seaweed.y && // top
        mouseY <= seaweed.y + seaweed.y + seaweed.height) { // bottom
        state = "gameOver"
    }
}


