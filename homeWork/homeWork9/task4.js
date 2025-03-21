const person = {
    firstName: "Valera",
    lastName: "Grizli",
    age: 27
};

person.email = "leldenis@gmail.com";

delete person.age;

console.log(person);