//1. Print numbers from 1 to 10.
//2. Print all even numbers between 1 and 20.
//3. Calculate the sum of all numbers from 1 to 100 and print the result. Hint: ‘+=’
//4. const numbers = [1, 2, 3, 4, 5]. Given the array of numbers, print each element to the console.
//5. const numbers = [3,7, 2, 5, 10, 6]. Given the array of numbers, find and print the largest number.
//#Hint: current value and previous value.

for(let i = 1; i<= 10;){
    console.log(i)
};

for(let i = 1; i<=20; i++)
    if(i % 2 ===0) {
        console.log(i);
    }


    numbers = [1,2,3,4,5];

    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i]);
    }

    const numbers = [3, 7, 2, 5, 10, 6];
    
    let largest = numbers[0];
    
    for(let i = 1; i < numbers.length; i++)
        if(numbers[i] > largest) {
            largest = numbers[i];
        }

        console.log("Largest number is", largest);

 //Exercise 4: While loops
 let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
};


while(i <=20){
    if(i % 2 === 0){
        console.log(i);
    }
    i++
}

let sum = 0;
let i = 1;

while (i <= 100) {
  sum += i;
  i++;
}

console.log(sum);


let i = 5;

while (i < 50) {
  console.log(i);
  i += 5;
}


let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);


let i = 1;
let sum = 0;

do {
  sum += i;
  i++;
} while (i <= 100);

console.log(sum);

let number;

do {
  number = prompt("Enter a number greater than 10:");
} while (number <= 10);

console.log("Valid number entered:", number);


let secretNumber = 7;
let guess;

do {
  guess = prompt("Guess a number between 1 and 10:");
} while (guess != secretNumber);

console.log("Correct! You guessed it!");