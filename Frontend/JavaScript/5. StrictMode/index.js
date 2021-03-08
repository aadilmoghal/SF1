'use strict';

// Used to write secure JS, changes existing bad Syntax to errors
// Eliminates *some of* the silent errors in JS Code


// Stops you using variables without them being declared
let test = "this won't be printed";
console.log(test);

// *Stops you from deleting variables, objects or functions

//* Stops you from being to duplicate a paramater name
/*
function add (x,x) {
    return x + x;
}
*/

// console.log(add(1,123));

//* Writing to read only or get only properties

//* Words that cannot be used for variables
let thisExample = 56;

// ! USE COMMON SENSE