const car1 = {

brand: "Tesla",
model: "Model S",
year: 2015
};

const car2 = {

    brand: "BMW",
    model: "GT 535",
    owner: "Den"
};

const car3 = {...car1, ...car2};

console.log(car3);

