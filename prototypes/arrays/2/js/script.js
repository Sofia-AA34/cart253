/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

let foods = [];
let leftMonsters = [];
let rightMonsters = [];

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600, 600);

    for (let i = 0; i < 10; i++) {
        foods.push(createFood());
    }

    for (let i = 0; i < 5; i++) {
        leftMonsters.push(createLeftMonster());
        rightMonsters.push(createRightMonster());
    }

}

const user = {
    x: undefined,
    y: undefined,
    size: 25,
    fill: ('blue'),
}

function createFood() {
    const newFood = {
        x: random(0, width),
        y: random(0, height),
        size: random(5, 30),
        fill: {
            r: random(0, 255),
            g: random(0, 255),
            b: random(0, 255),
        },
    };
    return newFood;
}

function createLeftMonster() {
    const newLeftMonster = {
        x: -100,
        y: random(0, height),
        size: 30,
        fill: ('black'),
        velocity: {
            x: random(1, 5),
            y: random(-5, 5),
        },
    };
    return newLeftMonster;
}

function createRightMonster() {
    const newRightMonster = {
        x: 600,
        y: random(0, height),
        size: 30,
        fill: ('black'),
        velocity: {
            x: random(-1, -5),
            y: random(-5, 5),
        },
    };
    return newRightMonster;
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#f6eaf4");

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
        moveRightMonster(rightMonster);
        drawRightMonster(rightMonster);
    }

}

function createUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

function drawFood(food) {
    push();
    noStroke();
    fill(food.fill.r, food.fill.g, food.fill.b);
    ellipse(food.x, food.y, food.size);
    pop();
}

function checkOverlap(food) {
    for (let food of foods) {
        const d = dist(user.x, user.y, food.x, food.y);
        if (d < user.size / 2 + food.size) {
            const index = foods.indexOf(food);
            foods.splice(index, 1);
            user.size += food.size / 2;
            foods.push(createFood());
        }
    }
}


function drawLeftMonster(leftMonster) {
    push();
    noStroke();
    fill(leftMonster.fill);
    ellipse(leftMonster.x, leftMonster.y, leftMonster.size);
    pop();
}

function moveLeftMonster(leftMonster) {
    leftMonster.x += leftMonster.velocity.x;
    leftMonster.y += leftMonster.velocity.y;
}

function drawRightMonster(rightMonster) {
    push();
    noStroke();
    fill(rightMonster.fill);
    ellipse(rightMonster.x, rightMonster.y, rightMonster.size);
    pop();
}

function moveRightMonster(rightMonster) {
    rightMonster.x += rightMonster.velocity.x;
    rightMonster.y += rightMonster.velocity.y;
}

function checkTouched(leftMonster) {
    for (let leftMonster of leftMonsters) {
        const d = dist(user.x, user.y, leftMonster.x, leftMonster.y);
        if (d < user.size / 2 + leftMonster.size) {
            const index = leftMonsters.indexOf(leftMonster);
            user.size -= leftMonster.size;
        }
    }
}