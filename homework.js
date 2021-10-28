//Section 1: 3, 2, 1... Code!

//Presentation//
//Write a program that displays your name and age.
console.log("Damon");
console.log(21);

//Minimalistic calculator
//Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.
console.log(6 + 3);
console.log(6 - 3);
console.log(6 * 3);
console.log(6 / 3);

//Values prediction
//Observe the following program and try to predict the values it displays.
//9
console.log(4 + 5);
//"4 + 5"
console.log("4 + 5");
//"45"
console.log("4" + "5");


//Section 3: Add conditions

//Following day
//Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

const day = prompt("Day of the week");
switch (day) {
  case "Sunday":
    console.log("Monday");
    break;
  case "Monday":
    console.log("Tuesday");
    break;
  case "Tuesday":
    console.log("Wednesday");
    break;
  case "Wednesday":
    console.log("Thursday");
    break;
  case "Thursday":
    console.log("Friday");
    break;
  case "Friday":
    console.log("Saturday");
    break;
   case "Saturday":
    console.log("Sunday");
    break;
  default:
    console.log("Not a valid day of a week");
}

//Number comparison
//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

const nb1 = Number(prompt("Enter nb1:"));
const nb2 = Number(prompt("Enter nb2:"));

if (nb1 > nb2) {
  console.log(`${nb1} is greater than ${nb2}`);
} else if (nb1 < nb2) {
  console.log(`${nb2} is greater than ${nb1}`);
} else {
  console.log(`${nb1} is equal to ${nb2}`);
}

//Final values
//Take a look at the following program.

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
//nb1=nb2=nb3=4: nb1=0 , nb2=4 ,nb3=12
//nb1=4,nb2=3,nb3=2: nb1=4 , nb2=3 ,nb3=2
//nb1=2,nb2=4,nb3=0: nb1=3 , nb2=4 ,nb3=0

//Number of days in a month
//Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

const month = Number(prompt("month number between 1 and 12"));
switch (month) {
  case 1:
    console.log("31");
    break;
  case 2:
    console.log("31");
    break;
  case 3:
    console.log("28");
    break;
  case 4:
    console.log("30");
    break;
  case 5:
    console.log("31");
    break;
  case 6:
    console.log("30");
    break;
  case 7:
    console.log("31");
    break;
  case 8:
    console.log("31");
    break;
  case 9:
    console.log("30");
    break;
  case 10:
    console.log("31");
    break;
  case 11:
    console.log("30");
    break;
  case 12:
    console.log("31");
    break;
  default:
    console.log("Not a valid month between 1 and 12");
}

//Following second
//Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

let h = Number(prompt("Enter hour from 0 to 59:"));
let m = Number(prompt("Enter minite from 0 to 59:"));
let s = Number(prompt("Enter second from 0 to 23:"));

if ((s <= 59) && (s >= 0) && (m <= 59) && (m >= 0) && (h <= 23) && (h >= 0)){
  s++;
  if (s == 60){
    s = 0;
    m++;
    if (m == 60){
      m = 0;
      h++;
      if (h == 24){
        h = 0;
      }
    }
  }
  console.log(`${h}h ${m}m ${s}s`);
}else{ 
  console.log("Not a valid input");
}

//Section 4: Repeat statements

//Carousel
//Write a program that launches a carousel for 10 turns, showing the turn number each time.
//When it's done, improve it so that the number of turns is given by the user.

//while loop
let turn = Number(prompt("Enter number of turns:"));
while (turn >  0) {
  console.log(turn);
  turn--;
}

//for loop
let turn;
for (turn = Number(prompt("Enter number of turns:")); turn > 0; turn--) {
  console.log(turn);
} 

//Parity
//Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

//for loop
for (let i = Number(prompt("Enter number:")); i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(`${i} is odd`);
  }
}

//while loop
let number = Number(prompt("Enter number:"));
while (number <=  10) {
  if (number % 2 !== 0) {
    console.log(`${number} is odd`);
  }
  number++;
}

//Input validation
//Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// let number = Number(prompt("Enter number less than or qual to 100"));
while (number > 100) {
  number = Number(prompt("Enter number less than or qual to 100"));
}

//When you are done with the above, improve the program so that the terminating number is between 50 and 100.
let number = Number(prompt("Enter number between 50 and 100"));
while ((number >= 100) || (number <= 50)){
  number = Number(prompt("Enter number between 50 and 100"));
}

//Multiplication table
//Write a program that asks the user for a number, then shows the multiplication table for this number.

const number = Number(prompt('Enter an integer 0-10: '));
for(let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

//When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

const number = Number(prompt('Enter an integer: '));
for(let i = 1; i <= 10; i++) {
  if ((number>2) && (number<9)){
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
  }else{
    console.log('invalid input')
  }
}

// Neither yes nor no
// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.


let letter = "";
while ((letter !== "yes")||(letter !== "no")) {
  letter = prompt("Type a letter or X to exit:");
}

// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:
// It shows "Fizz" instead if the number is divisible by 3.
// It shows "Buzz" instead if the number is divisible by 5 and not by 3.
// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

for (let number = 1; number <= 100; number++) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log('FizzBuzz');
	}
    else if (number % 3 == 0) {
        console.log("Fizz");	
	}
    else if (number % 5 == 0) {
        console.log("Buzz");
	}
    else {
    	console.log(number);
	} 
}

//Section 5:

//Improved hello
//Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

const firstName = prompt("First name:");
const lastName = prompt("Last name:");

function sayHello(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
} 

console.log(sayHello(firstName, lastName));

//Number squaring
//Complete the following program so that the square1() and square2() functions work properly.

function square1(x) {
  return x * x;
}
const square2 = x => x * x; 

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

for (let i = 0; i <= 10; i++) {
  console.log(square1(i));
}

//Minimum of two numbers
//Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

function min(a, b) {
  if (a < b) {
    return a;
  } else{
  return b;
	}
} 

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9)); // Must show 9
console.log(min(1, 1)); // Must show 1

//Calculator
//Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

function calculate(num1, operation, num2) {
  let answer;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  return answer;
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

//Circumference and area of a circle
//Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.
//Here are some tips for solving this exercise:
	//Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
	//The value of number π (Pi) is obtained with Math.PI in JavaScript.
	//You might want to use the exponentiation operator ** to perform computations.

const radius = Number(prompt("Circle radius:"));

 function circumference(radius) {
  return 2 * radius * Math.PI;
} 


 function area(radius) {
  return radius ** 2 * Math.PI;
} 

console.log(`Circumference: ${circumference(radius)}`);
console.log(`Area: ${area(radius)}`);







