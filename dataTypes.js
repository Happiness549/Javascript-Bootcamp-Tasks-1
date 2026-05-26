//1. Declare a number variable and assign an integer to it. Declare a variable and assign it a floating number.
//2. Perform addition, subtraction, multiplication, division, modulus and exponentiation with a number variable and another number.
//3. Print all your variables.

let wholeNumber = 12;
let decimalNumber = 3.4;

let addition = wholeNumber + 8;
let subtraction = wholeNumber - 4;
let multiplication = wholeNumber * 2;
let division = wholeNumber / 2;
let medulus = wholeNumber % 3;
let exponentiation = wholeNumber ** 2;

console.log("Addition:",addition);
console.log("Subtraction:" ,subtraction);
console.log("Multiplication:" ,multiplication);
console.log("Division:",division);
console.log("Medulus",medulus);
console.log("Exponentiation",exponentiation);


//Exercise 2: Boolean and Operators

let greater = 9 > 7;
let lesser = 10 < 12;
let equal = 6 === 2;
let not = 6 !== 6;

let x = 8;
let y = 12;

console.log(x>y);
console.log(x < y);
console.log(x === y);
console.log(x !== y);

let a = true;
let b = false;

let andResult = a && b;
let orResult = a || b;
let notResult = !a;
console.log(andResult);
console.log(orResult);
console.log(notResult);

let p = 10;

p += 8
console.log(p);
p -= 2
console.log(p);
p *= 3
console.log(p);
p /= 2
console.log(p);
p %= 2
console.log(p)