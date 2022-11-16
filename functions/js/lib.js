function numbers() {
    const number1 = prompt("choose a number.");
    const number2 = prompt("choose another number.");
    const number3 = number1 + number2;
    alert(number1 + "+" + number2 + "=" + number3)
}

function rectangle() {
    const height = prompt("What is the height of the rectangle.");
    const width = prompt("What's the width of the rectangle.");
    const surface = height * width;
    alert("the surface is " + surface + " m2")
}

function workMemory() {
    const memory = prompt("How much GB RAM do you have?");
    if (memory > 4) {
        alert("You have enough memory for VSC");
    }
    else {
        alert("you dont have enough memory for VSC")
    }
}

function userAge() {
    const age = prompt("How old are you?")
    if (age < 18) {
        alert("you did not pass this round")
    }
    else {
        alert("you passed this round")
    }
}

function cricleSurface() {
    const radius = prompt("What's the radius of the circle");
    const surfaceCircle = 3.14 * (radius * radius);
    alert("The surface of the cirlce is" + surfaceCircle + "m2")
}

function math() {
    const no1 = prompt("choose a number");
    const no2 = prompt("choose another number");
    const result = ((no1 + no2) * (no1 + no2)) / ((no1 - no2)* (no1 - no2));
    alert(result)
}

function childrenMoney() {
    const childrenNumber = prompt("How many children are you signing up to the music school");
    let money;
    if (childrenNumber == 1) {
        money = 300
    }
    else if (childrenNumber >=2 && childrenNumber <= 3) {
        money = (250 * childrenNumber)
    }
    else if (childrenNumber >= 4) {
        money = (225 * childrenNumber)
    }
    else {
        money = "invalid"
    }
    console.log(money);
}

function cost() {
    let pagesNumber = prompt("how many pages do you want")
    let costs = pagesNumber * 0.05 + 75
    console.log("it costs €" + costs + " without Tax");
    const costsWithTax = costs + (costs * 0.21)
    console.log("€" + costsWithTax + " with Tax")
}