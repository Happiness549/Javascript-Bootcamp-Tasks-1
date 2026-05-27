//1. Write a code using if else statements to check the temperature and print a message based on the following conditions:
//a. If the temperature is below 0, print "It's freezing!"
//b. If the temperature is between 0 and 15, print "It's cold."
//c. If the temperature is between 16 and 25, print "It's mild."
//d. If the temperature is above 25, print "It's warm."
//2. Re-write the code using switch Statements.

let temperature = 18;

if(temperature < 0){
    alert("It's freezing");
} else if(temperature >= 0 && temperature <= 15){
    alert("It's cold");
} else if(temperature >=16 && temperature <= 25 ){
    alert("It's mild")
} else{
    alert("It's warm");
}


// Switch statement for temperature check
temperature = 19;

switch (true) {
  case (temperature < 0):
    console.log("It's freezing!");
    break;

  case (temperature >= 0 && temperature <= 15):
    console.log("It's cold.");
    break;

  case (temperature >= 16 && temperature <= 25):
    console.log("It's mild.");
    break;

  default:
    console.log("It's warm.");
}


//Exercise 2: Divisibility Check


let number = 12;


if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} 
else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} 
else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} 
else {
  console.log("Not divisible by 2 or 3.");
}



switch (true) {
  case (number % 2 === 0 && number % 3 === 0):
    console.log("Divisible by both.");
    break;

  case (number % 2 === 0):
    console.log("Divisible by 2.");
    break;

  case (number % 3 === 0):
    console.log("Divisible by 3.");
    break;

  default:
    console.log("Not divisible by 2 or 3.");
}
 