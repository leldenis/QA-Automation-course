const numbers = [1,2,3,4,5,6,7,8,9,10];


const square =numbers.map(function (num) {
    return num * num;
}
);

console.log(square);


function Person(name){
    this.name = name;
    this.greet = function(){
        console.log('hellow my name ' + this.name);
    }
}

const pers1 = new Person('John');
    pers1.greet();



function omg () {
    console.log(`Hello, ${this.mane}!`);
}

const pers3 = {mane: 'Johns'};

// omg.call(pers3);


function omga (tiemOfDay, weather) {
    console.log(`Good ${tiemOfDay}, ${this.mane}!`);
    console.log(`Weater is ${weather}`);
}

const per4 = { mane: 'Hara'}

// omga.call(per4, 'morning', 'sunny');
// omga.apply(per4,'morning', 'sunny');

const greetMorning = omga.bind(per4, 'morning', 'sunny');

greetMorning();