/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */


// Will create it with createTarget()
let targets = [];
let target = undefined;


/**
 * creates the canvas and the target
*/
function setup() {
    // creates the canvas 
    createCanvas(600, 400);
    target = createTarget();
    targets.push(target);
}

function createTarget() {

    // create a target object with appropriate properties
    const newTarget = {
        // Position and dimensions
        x: random(0, width),
        y: -20,
        size: random(25, 50),
        // color
        fill: ('red'),
        // movement
        velocity: {
            x: random(-5, 5),
            y: random(3, 10),
        }
    };
    return newTarget;
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('lightgray');



    // draws and moves the target
    for (let target of targets) {
        moveTarget(target);
        drawTarget(target);
    }
}

/**
 * Draws a target according to its properties
 */
function drawTarget(target) {
    push();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();
}

function moveTarget(target) {
    target.x += target.velocity.x;
    target.y += target.velocity.y;
}


