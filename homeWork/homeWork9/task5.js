const users = [
    { name: "Misha", email: "mish@gmail.com", age: 30 },
    { name: "Anna", email: "anna@gmail.com", age: 25 },
    { name: "Vika", email: "vika@gmail.com", age: 28 }
];

for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
