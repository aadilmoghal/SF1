'use strict';

// * Function
// Functions are just collections of instructions that are called when invoked
// Keeps code DRY and Modular
// Functions have global scope, allowing them to be accessed anywhere

let globalVar = "test";

let globalFunc = function test () {
return "yo";
}

console.log(globalVar);
console.log(globalFunc());

// * Default Function

// Traditional Function
function add(x,y) {
    return x + y;
}

// * Function Expression
// variable sub = the function
const sub = function(x,y){
    return x - y
};

// Function returned as a function without use of parentheses
console.log(sub);

// Function returned as a result of function when parantheses added
console.log(sub(23,6));

// Function passed in directly as a variable
console.log(`23 subtract 6 = ${sub(23,6)}`);

// * Function formatting
// Function names may include letters, digits, underscores and dollar signs
// Parantheses are variables seperated by commas

// * Arrow Functions
// Arrow Functions are a shorthand method of writing simple functions

// Traditional Variable function creation
const helloFunc = function() {
    return "Hello World";
}



let helloArrow = function(){
    return "Hello World v.2 Arrow DLC";
}

// Ignore the word Function
// Add a => after parantheses
let helloArrow1 = () => {
    return "Hello World v.3 Arrow DLC";
}

// If function has multiple 
let helloArrowMulti = () => {
    let sum = 5 + 4;
    return sum;
}

// Simplyfying a one liner function, removing {} and word return
let helloArrow2 = () => "Hello World V.4 Arrow DLC";

// Paramaters can be passed in as well
let helloArrow3 = (text, num) => `Hello World V.${num} Arrow DLC + ${text}`;

// If passing in a single paramater, you can ignore the brackets around the paramater
let helloArrow4 = text => `Hello World V.6 Arrow DLC + ${text}`;

console.log(helloArrow());
console.log(helloArrow1());
console.log(helloArrow2());
console.log(helloArrow3("this is efficient", 5));
console.log(helloArrow4("this is too efficient"));




console.log(helloFunc());

