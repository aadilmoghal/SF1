'use strict';

// * Structuring
// JS Lots of silent errors 
// Human errors, confusion and all that jazz

// Keep our code within functions wherever possible

// ! Bad Code

// Wanted to get value of two variables added together, then console log out result

let x = 8;
let y = 7;
let value;

value = x + y;
console.log(value);

// * Good Code

let add = (x, y) => x + y; 

console.log(add(8,7));

// * Function Formatting

// Break up our functions and scripts into 3 easy sections
// ? Variables - Setting Up 
// ? Methods - Telling it what you want it to do
// ? Initialisations + Event - Listeners Using Variables + Methods

/*
let exampleFunc = function () {

    // * Variables
    let element = document.querySelector('.header');
    let numVar = 78;


    // * Methods
    let handleClick = function(event) {
        console.log(event.target);
    }

    if (numVar >= 50) {
        console.log("numvar greater than 50");
    } else {
        console.log("Not greater");
    }


    // * Inits & Event Listeners
    element.addEventListener('click', handleClick);
}
*/

