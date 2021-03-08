'use strict';

//* Objects
// Objects are unordered collections of related data in the form of key; value pa
// An object is also a data type
// One of the differences between JS objects and Java objects, JS are mutable

// ? Tradtional Object Creation

let luna = new Object();
luna["name"] = "Luna";
luna["colour"] = "White";
luna["age"] = 4;
luna["sleeping"] = true;

console.log(luna);
console.log(luna.colour);
console.log(luna.age);

// The Object can be deconstructed and variables can be assigned
let catColour = luna.colour;
console.log(catColour);

luna.chonky = false
console.log(luna);

//! Create objects through literal notation
let Zaph = {name: "Zaph", colour: "Ashy Black", age: 7, sleeping: true, chonky: true};

console.log(Zaph);

console.log(Zaph.chonky);

// With JS Obects use delete object.field to delet that field from the object
// delete Zaph.chonky;
// console.log(Zaph);

// * Create an array of complex objects, using the [] and objects within
let cattery = [
    {name: "Zaph", colour: "Ashy Black", age: 7, sleeping: true, chonky: true},
    {name: "Barney", colour: "Orange", age: 12, sleeping: false, chonky: true},
    {name: "Bobby", colour: "Grey", age: 4, sleeping: true, chonky: false},
    {name: "Sammy", colour: "Brown", age: 7, sleeping: false, chonky: false},
    luna
];

console.log(cattery);

// To Loop through an array of objects using a for loop
// to access just one attribute of object, console.log out indexed item.attribute
for (let cat = 0; cat < cattery.length; cat++){
    console.log(cattery[cat].name);
}
// * Arrays
// ! Java - Collection of items of the same type
// * JS - Collection of any items of any type
// Can be resized after initialising them
// They index at 0, so array of 3 would have index 0,1,2

let arrayExample = ["string", 54, true, null, [145,789,123], "another string"];
console.log(arrayExample);
console.log(typeof arrayExample[2]);

// 4 wats you can create arrays
let arrayExample2 = Array();
console.log(typeof arrayExample[2]);
console.log(arrayExample2);
// Array(18) Creating an array with size
let arraySize = Array(6);
console.log(arraySize);

//Array ("a", "b", "c") Initialising aan array with pre populated values
let arrayVals = Array("a", "b", "c")
console.log(arrayVals);

// Short hand methods using []
let numbers =[1,2,3,4,5,6];
let phones =["Samsung","iPhone", "Blackberry", "Nokia"];
let numArray =[,1,,2,3,5];

console.log(numArray);

//* Initialising an empty array then assigning values
let drinkList = Array(4)
// let drinkList2 = [,,,,]

drinkList[0] = "Sprite"
drinkList[1] = "pepsi"
drinkList[2] = "Fanta"
drinkList[3] = 7

console.log(drinkList);

// * How would i loop it through?
for (let drink = 0; drink < drinkList.length; drink++){
    console.log(drinkList[drink]);
}

// * Array methods

let animalList = ["Dog", [false, "test", 400], "Penguin", true, "Ostrich", "Snake", "Eel", "Bat"];

// Length of an array
console.log(animalList.length);

// Sort an Array

console.log(animalList.sort());

// Reverse an Array

console.log(animalList.reverse());

// Join all elements to a single string

// console.log(animalList.join());

let newString = animalList.join();
console.log(newString);
console.log(typeof newString);
console.log(animalList);

// Pushed new element to end of array



console.log(animalList.push("Panda" + "Wombat"));
console.log(animalList);

//Pop removes the last element from an array
console.log(animalList.pop());

// shift removes first element from an array

// unshift adds an element to the array

// * JSON

//JSON - javascript object notaion

// Collection of Name/Value Pairs realised as an Object

// JSON formatted as

let exampleJSON = {
    "key1": "value1",
    "key2": true,
    "key3": 123
};

// Parse method takes a string and converts it to an obect

let object = JSON.parse('{"example":"value"}');
console.log(object);
console.log(typeof object);
// Stringify takes JSON and returns a string
let str = JSON.stringify({example2: "value2"});
console.log(str);
console.log(typeof str);

// console.log(exampleJSON);



















