// function letsGoHome(cbFunction) {
//     console.log('Call a taxi');
//     console.log('On the road...');
//     cbFunction();
//   }
  
//   function callback() {
//     console.log('We are at home!');
//   }
  
//   letsGoHome(callback);



// function helo (hello, world)
// {
//     this.hello = hello;
//     this.world = world;

//     console.log(`${this.hello} ${this.world}`);
// }

// setTimeout (helo, 5000, 'Gello', 'World', 'haha');


// function saySmth (phrase, name) {
//     console.log(`${phrase} ${name}`);
// }

// setInterval (saySmth, 5000, 'Hello', 'World');

// const id = setInterval (saySmth, 2000, 'Hello', 'World');

// setTimeout(() => clearTimeout(id), 6000); - 'clear time out'


// let timeId = setTimeout (function tick() {
//     console.log('tick');
//     timeId = setTimeout(tick, 1000);
// }
// , 5000);   - всередині функція відпрацьовує кожну секунду, за нею викликається сама та функція через 5 секкунд


// function step1(callback)
// {
//     setTimeout(() => {
//         console.log("step1");
//         callback();
//     }, 1000);
// }

// function step2(callback)
// {
//     setTimeout(() => {
//         console.log("step2");
//         callback();
//     }, 1000);
// }

// function step3(callback)
// {
//     setTimeout(() => {
//         console.log("step3");
//         callback();
//     }, 1000);
// }


// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("Done");  - виклик функцій асинхронно, але послідовно але в жс є промиси, які пізніше будуть
//         });
//     });
// });

//проміси

// asyncFunction(a,b, result => 
//     {
//     console.log('The result is: ' + result);
// });

// asyncFunction();


// asyncFunction(a, b) 
// .then(result => { console.log('The result is: ' + result);
// });


// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("step1");
//             resolve();
//         }, 1000)
//     });
// };

// function step2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("step2");
            // resolve();
//         }, 1000)
//     });
// };

// function step3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("step3");
//             resolve();
//         }, 1000)
//     });
// };

// step1()
// .then(step2)
// .then(step3)
// .then(() => {
//     console.log("Done");
// })
// .catch ((err) => {
//     console.error(err);
// })
// .finally(() => {
//     console.log("Finally");
// });



// function step1() {
//     return new Promise((resolve) => {

//         console.log("Loading data from server");

//         setTimeout(() => {
//             console.log("step1");
//             resolve();
//         }, 1000)
//     });
// };

// function step2() {
//     return new Promise((resolve, reject) => {

//         console.log("Loading data from server");

//         setTimeout(() => {
//             const isError = true;
//             if (isError) {
//                 reject ("Error while loading data from server")
//             }
//             else {
//                 console.log('step2');
//                 resolve();
//             } 
//         }, 1000)
//     });
// };

// function step3() {
//     return new Promise((resolve) => {

//         console.log("Loading data from server");

//         setTimeout(() => {
//             console.log("step3");
//             resolve();
//         }, 1000)
//     });
// };

// step1()
//     .then(step2)
//     .then(step3)
//     .catch ((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log("Finnaly.....");
//     });


// Promise.resolve(1)
// .then((value) => {
//     console.log(value);
//     return value + 1;
// })
// .then((value) => {
//     console.log(value);
//     return value + 1;
// });

// Promise.reject( new Error('Something went wrong'))
// .catch(error => {console.error(error);
// })
// .finally(() => {
//     console.log('Done');
// });

const promiseA = Promise.resolve('Hello');
const promiseB = Promise.resolve('Promise');
const promiseC = Promise.reject( new Error('We take error'));


const promiseCollection = Promise.allSettled([promiseA,promiseB,promiseC]);


promiseCollection
    .then(console.log)
    .catch(console.log);