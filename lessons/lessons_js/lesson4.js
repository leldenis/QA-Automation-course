let message = "hello, world";
console.log(message);
{
let message = "hello, den"; 
console.log(message);
}
console.log (message);


let counter = 0;
let g = counter++;
console.log(counter);
console.log(g);



// якщо хоч в одному є тру буде тру
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);


const age = 18;
const firstName = 'John';
const isActive = true;
const employee = {firstName: 'John', age: 18,isActive: true};
const salary = function () {console.log('salary') };
const numbers = [1, 2, 3, 4, 5];

console.log(typeof age);
console.log(typeof firstName);
console.log(typeof isActive);
console.log(typeof employee);
console.log(typeof salary);
console.log(typeof numbers);


let a;

console.log(typeof a);
console.log(typeof null);

console.log(Boolean(0));
console.log(Boolean(1));

let b = Number('3');
console.log(typeof b);

let c = parseFloat('3.5test  ')
console.log(c);