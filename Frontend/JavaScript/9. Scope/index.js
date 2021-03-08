'use strict';

// * Scope
// JS there are two types of scope, Local and Global
// Scope determines accessibility and visibility of variables and functions

let sum = 5;

function add (x, y){
let sum = x + y;
return sum;
}

console.log(sum);

//* Local Scope
// Variables that are declared inside of a function are only accessible within the function

function plantFunc() {
    let plant = "Venus Fly Trap";
    console.log(`my ${plant} from within the function`);
    return plant;
}

// Calls Function, returns from within function
plantFunc();

// Plant is a local variable to plantFunc()
//console.log(plant);

// * Global Scope
// Variables declared outside of a function are accessible within AND outside of the function

let colour = "teal";

function colourFunc(){
    let colourStr = `My colour is ${colour}`;
    console.log(colourStr);
    return colour;
}

colourFunc();
console.log(colourFunc());
console.log(colour);

// * Automatical Global
// If a variable isnt declared in a file, but is referenced inside a function it is created as a global variable
// This is stopped by 'use strict';
// Value can be altered anywhere within the file

// test is initialised within local function, without use strict it becomes a global variable
function globalFunc() {
    test = "internal value";
}

// If GlobalFunc() isn't called, even if test will be a global variable it isn't yet
globalFunc();

// Console logs out the soon to be be global variable test
console.log(test);

// * Variable Hierarchy
// When referencing a variable inside of a function it looks for local variables first, then global
// Without Use Strict, if none are found a global variable is created automatically




