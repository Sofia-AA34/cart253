/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

let foods = [];
let leftMonsters = [];

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
        x: 10,
        y: random(0, height),
        size: 30,
        fill: ('black'),
        velocity: {
            x: random(1, 7),
            y: random(-5, 5),
        },
    };
    return newLeftMonster;
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
        drawLeftMonster(leftMonster);
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