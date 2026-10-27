/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const fish = {
    fill: ("#140320"),
    x1: 400,
    y1: 600,
    x2: 550,
    y2: 500,
    x3: 550,
    y3: 700,
    velocity: {
        x: -10,
        y: -5,
    },
};

const fish2 = {
    fill: ("#bc1d7a"),
    x1: 100,
    y1: 550,
    x2: 0,
    y2: 500,
    x3: 0,
    y3: 600,
    velocity: {
        x: 0,
        y: 0,
    },
};

const fish3 = {
    fill: ("#0e0c8a"),
    x1: 50,
    y1: 100,
    x2: 0,
    y2: 75,
    x3: 0,
    y3: 125,
    velocity: {
        x: 15,
        y: 8,
    },
};

const seaweed = {
    x: 20,
    y: 500,
    width: 40,
    height: 100,
    growing: true,
};

const seaweed1 = {
    x: 100,
    y: 550,
    width: 30,
    height: 50,
};

const seaweed2 = {
    x: 180,
    y: 450,
    width: 40,
    height: 150,
};

const seaweed3 = {
    x: 280,
    y: 525,
    width: 50,
    height: 75,
};

const seaweed4 = {
    x: 370,
    y: 475,
    width: 20,
    height: 125,
};


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 600);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#5680ad") // dark blue

    // draw the bubbles 
    drawBubble(100, 100, 50);
    drawBubble(150, 200, 25);
    drawBubble(300, 70, 100);
    drawBubble(100, 400, 100);
    drawBubble(200, 500, 50);
    drawBubble(300, 300, 75);

    checkOverlapFish(fish);

    // draw the fish and make it swim across the screen
    wrapFish(fish);
    chaseFish(fish2);
    wrapFishFast(fish3)
    swimFish(fish);
    swimFish(fish2);
    swimFish(fish3);
    moveSeaweed(seaweed);
    moveSeaweed(seaweed1);
    moveSeaweed(seaweed2);
    moveSeaweed(seaweed3);
    moveSeaweed(seaweed4);


    drawFish(fish);
    drawFish(fish2);
    drawFish(fish3);
    drawSeaweed(seaweed);
    drawSeaweed(seaweed1);
    drawSeaweed(seaweed2);
    drawSeaweed(seaweed3);
    drawSeaweed(seaweed4);



}

function drawBubble(x, y, size) {
    push();
    noStroke();
    fill("#7ea3ca");
    ellipse(x, y, size);
    pop();
}

function drawFish(fish) {
    push();
    noStroke();
    fill(fish.fill);
    triangle(fish.x1, fish.y1, fish.x2, fish.y2, fish.x3, fish.y3);
    pop();
}

/**
 * Move the fish by its velocity
 */
function swimFish(fish) {
    fish.x1 += fish.velocity.x;
    fish.x2 += fish.velocity.x;
    fish.x3 += fish.velocity.x;

    fish.y1 += fish.velocity.y;
    fish.y2 += fish.velocity.y;
    fish.y3 += fish.velocity.y;
}

/**
 * If the fish goes off the canvas, wrap it around
 */
function wrapFish(fish) {
    // right to left
    if (fish.x1 < -200 || fish.x2 < -50 || fish.x3 < -50) {
        fish.x1 = 550 + fish.x1;
        fish.x2 = 550 + fish.x2;
        fish.x3 = 550 + fish.x3;
    }

    // bottom to top
    if (fish.y1 < -100 || fish.y2 < - height || fish.y3 < - height) {
        fish.y1 = height - fish.y1;
        fish.y2 = height - fish.y2;
        fish.y3 = height - fish.y3;
    }
}

function wrapFishFast(fish) {
    // right to left
    if (fish.x1 > 460 || fish.x2 > 410 || fish.x3 > 410) {
        fish.x1 = fish.x1 - width;
        fish.x2 = fish.x2 - width;
        fish.x3 = fish.x3 - width;
    }
    // bottom to top
    if (fish.y1 > height || fish.y2 > height || fish.y3 > height) {
        fish.y1 = fish.y1 - height;
        fish.y2 = fish.y2 - height;
        fish.y3 = fish.y3 - height;
    }

}

function chaseFish(fish) {
    // if the mouse is in range, it affects the fish - the fish chases it
    const d = dist(mouseX, mouseY, ((fish.x1 + fish.x2 + fish.x3) / 3), ((fish.y1 + fish.y2 + fish.y3) / 3));

    if (d < 300) {
        fish.velocity.x += (-fish.x1 + mouseX) * 0.0005;
        fish.velocity.x += (-fish.x2 + mouseX) * 0.0005;
        fish.velocity.x += (-fish.x3 + mouseX) * 0.0005;

        fish.velocity.y += (-fish.y1 + mouseY) * 0.0005;
        fish.velocity.y += (-fish.y2 + mouseY) * 0.0005;
        fish.velocity.y += (-fish.y3 + mouseY) * 0.0005;
    }

    if (fish.x1 < 0 || fish.x2 < 0 || fish.x3 < 0) {
        fish.velocity.x *= -1;
    }

    if (fish.x1 > 400 || fish.x2 > 400 || fish.x3 > 400) {
        fish.velocity.x *= -1;
    }

    if (fish.y1 < 0 || fish.y2 < 0 || fish.y3 < 0) {
        fish.velocity.y *= -1;
    }

    if (fish.y1 > 600 || fish.y2 > 600 || fish.y3 > 600) {
        fish.velocity.y *= -1;
    }
}

function drawSeaweed(seaweed) {
    push();
    noStroke();
    fill("#072c0e");
    rect(seaweed.x, seaweed.y, seaweed.width, seaweed.height);
    pop();
}

function moveSeaweed(seaweed) {
    if (seaweed.growing) {
        growSeaweed(seaweed);
    }

    else { shrinkSeaweed(seaweed); }
}

function growSeaweed(seaweed) {
    seaweed.y -= 1; // grows
    seaweed.height += 1; // keeps it from floating away 

    if (seaweed.y < 400) {
        seaweed.growing = false;
    }
}

function shrinkSeaweed(seaweed) {
    seaweed.y += 1;
    seaweed.height -= 1;

    if (seaweed.y > 550) {
        seaweed.growing = true;
    }
}

function checkOverlapFish(fish) {
    // get the distance betwwen the mouse position and the targets 

    // fish (purple)
    //if (
    ////  (mouseX === (fish.x1, fish.x3)) || // bottom
    // (mouseY < (fish.y1, fish.y3)) ||
    // (mouseX === (fish.x1, fish.x2)) || //right 
    // (mouseY > (fish.y1, fish.y2)) ||
    //  (mouseX === (fish.x2, fish.x3)) ||
    //  (mouseY > (fish.y2, fish.y3))
    //)


    // fish (blue)

    // fish (pink)
}

function alive() {

}

function dead() {

}


