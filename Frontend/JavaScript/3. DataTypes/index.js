//alert("Hello")

// * 3 different ways to declare variables!
let a = "Deep Dish" // Will change over time!
const b = "Pepproni" // Something that won't change 
var c = "Mushrooms" // Don't use, has global scope by default

// ! Dont just declare a variable without saying if its a let or a var
// ! d = "pasta"; 

// Naming Variables
// * letter, a _ or a dollar sign


//let $test = "test";

// let 123abc = "test";

// * Variables are case sensitive
let caseSensitive = "this is the first variable";
let CaseSensitive = "this is the second variable";

console.log(caseSensitive);
console.log(CaseSensitive);

let lowerCaseCamelCase = "best practice!";

// Don't use obviously reserved JS Words and terms
let int = 54;
console.log(54);

let playerInt = 54;

// * JS Dynamically Types
// * String, Boolean, Number, BigNum, Array, Object, undefined, null

let numExample = 54.6978;
let num = 7;
let bigNum = 999999999999999999999999n;

const stringExample = "this is a string";
const numberExample = 20;
const bigNumber = 904567665546576867563n;
const boolExample = true;
const nullExample = null;
const undefEplicit = undefined;
let undefNotExplicit; 
const objectExample = {key1: "String", key2: 54};
const numExample2 = 24.01;
const arrayExample = ["value1", "value2", "value3"];

// Prints out the type of data type the variable is
console.log(typeof stringExample);
console.log(typeof bigNumber);
console.log(typeof undefEplicit);
console.log(typeof undefNotExplicit);
console.log(typeof nullExample);

// * Strings
// String Concatenation

let str1 = "a, b, c, ";
let str2 = "d, e";
console.log(str1 + str2);

let concatString = str1 + str2; 
console.log(concatString);

// COmbine strings with other data types

let string3 = "10 + 10 = ";
console.log(string3);

let sum1 = 10 + 10;
console.log(sum1);

let finalString = string3 + sum1;
console.log(finalString);

console.log(typeof string3);
console.log(typeof sum1);
console.log(typeof finalString);


// * Template Literals
// Allow for strings to be declared within JS expressions, and you allow to put variables and functions within.

let strA = "Tomato";
let numA = 17;

let newFinalString = "The pasta is " + strA + " flavoured and costs " + numA + " pounds.";
console.log(newFinalString);

// Template Literal use `` ${}
let newCoolString = `The pasta is ${strA} flavoured and costs ${numA} pounds.`;
console.log(newCoolString);