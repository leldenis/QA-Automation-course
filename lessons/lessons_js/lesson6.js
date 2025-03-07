
function printMessage () {
    console.log('Hello World!!!');
}
printMessage();

function greet(name) {
    return `Hello ${name}!`;
}
console.log(greet('Alice'));


const add = function(a, b) {
    return a + b;
}
console.log(add(1, 2));


const multiply = (a, b) => a * b;

console.log(multiply(3, 4));

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sumAll());
console.log(sumAll(1, 2, 3));

function sumAllRest(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumAllRest(1, 2, 3, 4 , 5));

function sumAllRest2(a, b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sumAllRest2(1, 2, 3, 4, 5));

let firstName = 'John'

function showName() {
    console.log("First Name: " + firstName);

    firstName = 'Jane'
}

showName();
console.log("First Name: " + firstName);


function getSumInterupt (a) {
    if (a === 0) {
        console.log('first');
        return;
    }
    if (a === 1) {
        console.log('second');
        return;
    }
    if (a === 2) {
        console.log('third');
        return;
    }
    console.log('a is not 0, is nor 2, is nor 3');
}
getSumInterupt();


function getSome (a, b) {
    console.log('getSome');

let getSome = mult( a, b);
return getSome + a + b;
    
}

function mult(a, b) {
    console.log('mylt');
    return a * b;
}

console.log(getSome(2, 3));