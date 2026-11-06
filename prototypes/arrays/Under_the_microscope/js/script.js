/**
 * Under the microscope 
 * Sofia Allahukurova
 * 
 * Eat the colorful microorganisms and avoid the black ones. Move your mouse to move the blue 
 * microbe. Can you grow big enough to rule them all?
 */

// The foods user is supposed to eat - colorful ellipses
let foods = [];

// The monsters coming towards user from the left side of the canvas 
let leftMonsters = [];

// The monsters coming towards user from the right side of the canvas 
let rightMonsters = [];

// Time between the monsters
let leftMonsterDelay = 0.5 * 1000; // coming from the left side of the canvas 
let rightMonsterDelay = 0.5 * 1000; // comig from the right side of the canvas 

/**
 * Creates the canvas and 20 foods 
 * Adds the left and right monsters according to the setTimeout 
 * 
*/
function setup() {
    // creates the canvas
    createCanvas(600, 600);

    // creates 20 foods to start with 
    for (let i = 0; i < 20; i++) {
        foods.push(createFood());
    }

    setTimeout(addLeftMonster, leftMonsterDelay);
    setTimeout(addRightMonster, rightMonsterDelay);
}

/**
 * User properties - blue ellipse 
 */
const user = {
    x: undefined, // will be the mouse position 
    y: undefined,
    size: 25,
    fill: ('blue'),
}

/**
 * Creates and returns a randoized food that will appear somewhere within the canvas bounds
 */
function createFood() {
    const newFood = {
        // position and dimension
        x: random(0, width),
        y: random(0, height),
        size: random(5, 30),
        // color
        fill: {
            r: random(0, 255),
            g: random(0, 255),
            b: random(0, 255),
        },
    };
    return newFood;
}

/**
 * Adds a left monster to the array 
 */
function addLeftMonster() {
    // Create and add a left monster 
    const leftMonster = createLeftMonster();
    leftMonsters.push(leftMonster);

    // set the new timeout 
    setTimeout(addLeftMonster, leftMonsterDelay);
}

/**
 * Creates and returns a randomized left monster that will appear on the left 
 * side of the canvas and move to the right 
 */
function createLeftMonster() {
    const newLeftMonster = {
        // Position and dimension
        x: -100,
        y: random(0, height),
        size: 30,
        // color
        fill: ('black'),
        // movement
        velocity: {
            x: random(3, 7),
            y: random(-5, 5),
        },
    };
    return newLeftMonster;
}

/**
 * Adds a right monster to the array 
 */
function addRightMonster() {
    // Create and add a right monster 
    const rightMonster = createRightMonster();
    rightMonsters.push(rightMonster);
    // set the new timeout 
    setTimeout(addRightMonster, rightMonsterDelay);
}

/**
 * Creates and returns a randomized right monster that will appear on the right 
 * side of the canvas and move to the left 
 */
function createRightMonster() {
    const newRightMonster = {
        // position and dimension 
        x: 700,
        y: random(0, height),
        size: 30,
        // color 
        fill: ('black'),
        // movement 
        velocity: {
            x: random(3, -7),
            y: random(-5, 5),
        },
    };
    return newRightMonster;
}

/**
 * Draw and move the left and right monsters and display the foods
 * Check if user touches the food or any monsters.
 * If user touches the food, user grows in size and new food appears.
 * If user touches the monsters, user shrink in size.
 * 
*/
function draw() {
    background("#f6eaf4");

    // makes user (blue circle) move with the mouse movements
    user.x = mouseX;
    user.y = mouseY;

    createUser();

    for (let food of foods) {
        checkOverlap(food);
        drawFood(food);
    }

    for (let leftMonster of leftMonsters) {
        checkTouched(leftMonster);
        moveLeftMonster(leftMonster);
        drawLeftMonster(leftMonster);
    }

    for (let rightMonster of rightMonsters) {
        checkEaten(rightMonster);
        moveRightMonster(rightMonster);
        drawRightMonster(rightMonster);
    }
}

/**
 * Draws user according to its properties - blue ellipse 
 */
function createUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Draws a food according to its properties 
 */
function drawFood(food) {
    push();
    noStroke();
    fill(food.fill.r, food.fill.g, food.fill.b);
    ellipse(food.x, food.y, food.size);
    pop();
}

/**
 * Checks if user touches any of the food 
 * If yes: removes the touched food, makes user grow in size and creates new food
 */
function checkOverlap(food) {
    for (let food of foods) {
        const d = dist(user.x, user.y, food.x, food.y);
        if (d < user.size / 2 + food.size) {
            // removes the touched food 
            const index = foods.indexOf(food);
            foods.splice(index, 1);
            // makes user grow in size 
            user.size += food.size / 2;
            // creates new food (replacement)
            foods.push(createFood());
        }
    }
}

/**
 * Draws a left monster according to its properties 
 */
function drawLeftMonster(leftMonster) {
    push();
    noStroke();
    fill(leftMonster.fill);
    ellipse(leftMonster.x, leftMonster.y, leftMonster.size);
    pop();
}

/**
 *  Moves a left monster according to its properties 
 */
function moveLeftMonster(leftMonster) {
    leftMonster.x += leftMonster.velocity.x;
    leftMonster.y += leftMonster.velocity.y;
}

/**
 * Checks if user touches any of the left monsters
 * If yes: user shrinks in size 
 */
function checkTouched(leftMonster) {
    for (let leftMonster of leftMonsters) {
        const d = dist(user.x, user.y, leftMonster.x, leftMonster.y);
        if (d < user.size / 2 + leftMonster.size) {
            // user shrinks in size
            user.size -= leftMonster.size;
        }
        // sets a constraint so that user doesn't grow when the monster is bigger in size 
        if (leftMonster.size > user.size) {
            user.size *= -1;
        }
    }
}

/**
 * Draws a right monster according to its properties 
 */
function drawRightMonster(rightMonster) {
    push();
    noStroke();
    fill(rightMonster.fill);
    ellipse(rightMonster.x, rightMonster.y, rightMonster.size);
    pop();
}

/**
 *  Moves a right monster according to its properties 
 */
function moveRightMonster(rightMonster) {
    rightMonster.x += rightMonster.velocity.x;
    rightMonster.y += rightMonster.velocity.y;
}

/**
 * Checks if user touches any of the right monsters
 * If yes: user shrinks in size 
 */
function checkEaten(rightMonster) {
    for (let rightMonster of rightMonsters) {
        const d = dist(user.x, user.y, rightMonster.x, rightMonster.y);
        if (d < user.size / 2 + rightMonster.size) {
            // user shrinks in size
            user.size -= rightMonster.size;
        }

        // sets a constraint so that user doesn't grow when the monster is bigger in size 
        if (rightMonster.size > user.size) {
            user.size *= -1;
        }
    }
}