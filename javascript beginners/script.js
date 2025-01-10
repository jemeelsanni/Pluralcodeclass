// const n = 100;

// for (let j = 0; j <= n; j++) {
//     if (j === 0) {
//         console.log(j + " this is an even number");
//     } else if (j % 2 === 0) {
//         console.log(j + " this is an even number");
//     } else if (j % j == 1 || j % 1 === 0) {
//         if (isPrime(j)) {
//             console.log(j + " this is a prime number");
//         } else {
//             console.log(j + " this is an odd number");
//         }
//     }
// }

// // Function to check
// function isPrime(num) {
//     if (num < 2) return false; // Numbers less than 2 are not prime
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }


// let i = 1;
// let q = 5;

// do {
//     console.log(i); i++;
// }while(i <= q)


// const j = Math.floor(Math.random() * 10);
// console.log (j);


// let a = "hello world";

// function greet() {
//     a = 3;
// }

// console.log(a);

// greet();
// console.log(a);


// const obj= {
//     i: 10,
//     b: () => console.log(this.i, this),
//     c(){
//         console.log(this.i, this);
//     },
// };
// obj.b();
// obj.c();



// const myHonda = {
//     color: "red",
//     wheels: 4,
//     engine: {
//         cylinders: 4,
//         size: 2.2
//     },
//     speed: function() {
//         console.log("200km/h")
//     }
// };

// console.log(myHonda);


// function createCar(color, wheels, year) {
//     return {
//         color,
//         wheels,
//         year,
//         speed() {
//             console.log("200km/h")
//         }
//     };    
// }
// const car1 = createCar("red", 4, 2011);
// console.log(car1)


// function Car(color, wheels, year) {
//     this.color = color,
//     this.wheels = wheels,
//     this.year = year,
//     this.speed = function() {
//         console.log("200km/h")
//     }
// }
// const car1 = new Car("red", 4, 2011)
// console.log(car1)
// car1.speed()

// const person = {
//     name: "yewande",
//     email: "yewande@yewande.com",
//     age: 25,
//     gender: "female",
//     occupation: "student",
//     profile: function() {
//         console.log(this.name + " is a " + this.gender + " and she is " + this.age + " years old!")
//     }
// }
// delete person.occupation 
// console.log(person);
// person.profile();

// let x = {value:10};
// let y = x
// x.value = 20;
// console.log(x, y);



// let sum = 0;
// const n = 100;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log('sum:', sum);


// let i = 1; n = 5;
// while (i <= n) {
//     console.log(i); i += 1;
// }

// let sum = 0;
// let number = parseInt(prompt('Enter a number: '));
// while(number >= 0){
//     sum += number;
//     number = parseInt(prompt('Enter a number: '));
// }
// console.log(`The sum is ${sum}.`);

console.log(Math.pow(8, 5))