const a = 33;

if (a === 2) {
    console.log('a is 2');
}
else if (a ===3) {
    console.log( 'a is 3');
}
else
{
    console.log('a is not 2 and not 3');
}
// використовується коли є одна умава, замість конструкції if/else
const b = 10;
const result = b < 5 ? 'b move 10' : 'b less 10';
console.log(result);


const c = 10;

switch(c){
    case 1:
        console.log('c is not 1');
        break;
    case 2:
        console.log('c is not 2');
        break;
    case 3:
        console.log('c is not 3');
        break;
    default:
        console.log('c is not 1, 2 or 3');
}



const d = 'Saturday'

switch(d) {
    case 'Monday':
    case 'Thuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log("it's working days");
        break;
    case 'Saturday':
        console.log('Saturday is weekend');
        break;
    default:
        console.log("it's weekend day")        
}


//цикли

for (let i = 0; i < 30; i++) {
    i = i +3
    console.log(i);
}

let counter = 0;

while (counter <10)
{
    counter = counter + 1;
    console.log("counter");
}

for (let k = 0; k < 10; k++)
{
    if (k%2 === 0) {
        continue;
    }
    console.log(k);
}

for (let g = 0; g < 10; g++)
{
    if (g%2 === 0) {
        break;
        }
    console.log(g);
}


for (let f = 1; f < 10; f++) {
    for (let m = 1; m <10; m++)
    {
console.log(f + ' * ' + m + ' = ' + f*m);
    }
}


function divide(a,b) {
if (b ===0 ){
    throw new Error ('Cannot fivide by zero');
}
    return a / b;
}

try {
    console.log(divide(10,0));
}
catch (error) {
    console.log(error);
}
finally {
    console.log('some error');
}
