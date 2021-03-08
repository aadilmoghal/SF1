'use strict';

// * Destructuring 
// Allows you to extract data from arrays, objects, maps and sets

// * Without Destructuring

let numArray1 = [1,2,3,4,5,6,7,8,9,10];
let numArray2 = [1,2,3,4,5,6,7,8,9,10];
let numArray3 = [1,2,3,4,5,6,7,8,9,10];

console.log(numArray1);
console.log(numArray1[2]);
console.log(numArray1[3]);
console.log(numArray1[3], numArray1[4], numArray1[5]);

// * With Destructuring

// Created a number of variables = to array length
const [a,b,c,d,e,f,g,h] = numArray1;
console.log(a);
console.log(b);
console.log(a,b,c,d,h);


// Destructured Array is equal to aray at initialisation, not a reference to it
numArray1 = [7,7,7,7,7,7,7,7];
console.log(numArray1);
console.log(a);

// * Spread Operators
// assign first values however you want, use ...<variable name> to assign the rest to a seperate rest
const [a1,b1,...rest] = numArray2;
console.log(a);
console.log(b);
console.log(rest);


// * Skipping elements
// By using commas and leaving destructred elements blank, you can skip values in an array
const [a2,,b2,c2,,...rest1] = numArray3;
console.log(a2,b2,c2,rest1);

// * Destructuring Objects
// Objects can ne decostructed as well to break down into smaller parts

// Movie object created
const movie = {
    title: "Starship Troopers",
    quote: "Do you want to know more?",
    rating: 10,
    genre: "Sci-fi"
};


// Object consoled out
console.log(movie);

//Object deconstructed into strings and a rest (object)
// let {title, quote, ...rest2} = movie;
// console.log(`My fifth favourite movie is ${title} its quote is ${quote}`);
// console.log(rest2);

// console.log(typeof title); // String
// console.log(typeof rest2); // Object

// Added a default value to deconstructed object, assigning variable name and value
let {title, quote, length = 129} = movie; 
console.log(`My fifth favourite movie is ${title} its quote is ${quote} it is ${length} minutes long`);

// * Using Different Variable Names
// When deconstructuring objects, taking the original

const pizza = {
    name: "Pepproni Passion",
    rating: 9,
    spicy: false
};

// Take original key name add : and new name 
// name: pizzaName
// To change the variable name to use 
let {name: pizzaName, rating, spicy} = pizza;
console.log(pizzaName, rating, spicy);











