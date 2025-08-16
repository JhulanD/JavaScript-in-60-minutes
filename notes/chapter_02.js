'Hello World!';
console.log('Hello World!');
console.log(4*4);
let eggNumber = 40;
console.log(eggNumber);

124358584 // this is number data types
'hello world!' //this is string data types
true / false // this is boollean

//dictionaries or objects
    // In JavaScript, objects are the closest equivalent to what are called dictionaries in other programming languages like Python. Here’s a point-by-point comparison and explanation:

//     JavaScript Objects store data in key-value pairs using curly braces {}.
// Keys in JavaScript objects are typically strings or symbols.
// Values can be of any data type (string, number, array, function, etc.).
// Objects also can have methods (functions attached as values).
// You access values by key using dot notation (obj.key) or bracket notation (obj["key"]).

let cousins = {
    Sasha: 'Emotional',
    Ishanni: 'Obidient',
    Vehant: 'Super Cute'
}

console.log(cousins);

// Arrays

    // Here’s a concise overview of JavaScript arrays:

        // An array is an ordered list of values stored in a single variable.
        // Elements in an array are indexed starting at 0.
        // Arrays can store values of any data type: numbers, strings, objects, even other arrays.

let iArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 2048];
console.log(iArray);

// Creating an Array
const fruits = ["Apple", "Banana", "Cherry"];
// or
const numbers = new Array(1, 2, 3);

// Accessing Elements
console.log(fruits[0]); // "Apple"
console.log(numbers); // 3
console.log(typeof(numbers));

// function in JavaScript
    // A function in JavaScript is a reusable block of code designed to perform a specific task. Functions help organize code, reduce repetition, and make programs modular and easier to maintain.
function multiplyNumber(val1, val2) {
    // output the value of is-true
    console.log(val1 * val2)
}

multiplyNumber(25, 52);
multiplyNumber(20, 25);
multiplyNumber(25, 15);
    // if we dont wanna call functions  then we dont put () at end of a function!



// Logical AND (&&)
    // Think of && as "and" in everyday language.
    // It checks if both things are true at the same time.
    // If both conditions are true, the whole statement is true.
    // If any one condition is false, the whole statement is false.

let isSunny = true;
let isWarm = true;

    // Here, the message shows "It's a nice day!" only if both isSunny and isWarm are true.
    // If either is false, it shows "The weather is not perfect."
if (isSunny && isWarm) {
  console.log("It's a nice day!");
} else {
  console.log("The weather is not perfect.");
}

    

// Logical OR (||)
    // Think of || as "or" in everyday language.
    // It checks if at least one thing is true.
    // If any one condition is true, the whole statement is true.
    // The whole statement is false only if all conditions are false.

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("You can relax today!");
} else {
  console.log("You have to work today.");
}


// Quick Tip  - You can use these operators to combine multiple checks in your code. For example:

// // Check if user is logged in AND is admin
// if (isLoggedIn && isAdmin) {
//   showAdminPanel();
// }

// // Check if user is guest OR has limited access
// if (isGuest || hasLimitedAccess) {
//   showRestrictedMessage();
// }
