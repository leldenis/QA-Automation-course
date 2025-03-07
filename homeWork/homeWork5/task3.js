// Таблиця множення для цифри 5 з циклом "for"

for (let first = 5; first <= 5; first++) {
    for (let second = 1; second <=10; second++)
    {
    console.log(first + ' * ' + second + ' = ' + first * second);
    }
}


// Таблиця множення для цифри 6 з циклом "while"

let firstNumber = 5;
let cesondNumber = 1;

while (cesondNumber <= 10)
{
    let result = firstNumber * cesondNumber;
    console.log(firstNumber + ' * ' + cesondNumber + ' = ' + result);
    cesondNumber++;
}