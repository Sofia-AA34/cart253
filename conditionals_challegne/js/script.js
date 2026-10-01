/**
 * Circle Master
 * Charlotte Walsh & Sofia Allashukurova 
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000",
    speed: {
        x: 1,
        y: 1,
    }
};

const Canvas = {
    right: 400,
    left: 0,
    top: 0,
    bottom: 400,
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};

const target = {
    x: 55,
    y: 55,
    size: 100,
    fill: "#1507da",
    fills: {
        overlap: "#6b1aa6",
        noOverlap: "#1507da",
    }
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");

    // Move user circle
    moveUser();

    // Draw the user and puck
    drawUser();
    drawTarget();
    checkTarget();
    drawPuck();
    movePuck();

}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}
/**
 * Moved the puck
 */
function movePuck() {
    // Calculate distance between circle's centers 
    const d = dist(user.x, user.y, puck.x, puck.y);
    const overlap = (d < user.size / 2 + puck.size / 2);

    if (overlap) {
        puck.x += puck.speed.x;
        puck.y += puck.speed.y;
    }

    puck.x = constrain(puck.x, Canvas.left + puck.size / 2, Canvas.right - puck.size / 2);
    puck.y = constrain(puck.y, Canvas.top + puck.size / 2, Canvas.bottom - puck.size / 2);

    puck.speed.x = (puck.x - user.x) * 0.1;
    puck.speed.y = (puck.y - user.y) * 0.1;

    if (puck.x + puck.size / 2 > Canvas.right || puck.x - puck.size / 2 < Canvas.left) {
        puck.speed.x *= -1;
    }

    if (puck.y + puck.size / 2 > Canvas.bottom || puck.y - puck.size / 2 < Canvas.top) {
        puck.speed.y *= -1;
    }
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}

/**
 * Changes the color of the traget when the puck overlaps it
 */
function checkTarget() {
    // Calculate distance between circle's centers 
    const d = dist(target.x, target.y, puck.x, puck.y);
    const overlap = (d < target.size / 2 + puck.size / 2);

    if (overlap) {
        target.fill = target.fills.overlap;
    }
    else {
        target.fill = target.fills.noOverlap;
    }
}

/** 
 * Draws the target 
 */
function drawTarget() {
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();
}