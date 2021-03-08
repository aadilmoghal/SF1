'use strict';

// * Promises 

// ? A Promise is a placeholder for some data that will be available: 
// ? immediately, some time in the future, or possibly not at all
// ? When data is needed and not availabe straight away, we wait for that data to be abailable

// * Promises come in 3: States
// Pending - Not fulfilled or not rejected yet
// Fulfilled/Success - The action relating to the promise succeeded 
// Rejected/Failed - The action relating to the promise failed

// .then() If succesful, what should happen next
// .catch() If failed/rejected, what should happen next 

// * Promise Syntax

// creating a Promise as a new variable
// Promise has two paramaters, one of the internal is two params resolve, reject
let newPromise = new Promise( (resolve, reject) => {
let a = 1 + 1; 
if (a === 2) {
    //What happens in the success outcome
    resolve(" test passed! ");
} else {
    // What happens in the reject outcome
    reject(" Failed :( ");
}
});

// .then((message = equal to resolve/reject message)) is run when promise is resolved
// .catch is run when promise is rejected
// final .then is run regardless of outcome

// .then(()).catch(()) each method chains off of the other with full stops
newPromise.then((message) => {
    console.log(`This is in the .then block and status is: ${message}`);
    populateWebsite(data);
}).catch((message) => {
    console.log(`This is in the .catch Block and status is ${message}`);
}).then(() => {
    console.log(`This will be called regardless of the outcome`);
    console.log(multiplyFunc(7,9));
});

let multiplyFunc = (x,y) => x * y

// * Callbacks

// Callbacks are functions that are passed into other functions as an argument

// The function that will be called back
const message = (text) => alert(`${text}`);

// The function doing the call back
const processInput = (x) => {
    let text = prompt(`Enter some text pls`);
    x(text);
    console.log(text);
}

// Invoke the function which DOES THE CALLBACK (processInput)
// Passing in the callbacked function as a paramater
processInput(message);

// Running the function
//message("yo");