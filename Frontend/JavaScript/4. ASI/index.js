// * Automatic SemiColon Insertion

// ! Works, because code is very simple.. BUT DONT DO
let x = "string"
console.log(x)

// ? 1. Adds ';' when two lines are seperated by a line break

let jamesBond = "actor"

// Don't seperate like this. 
// ! Use Semi colons!!
let pierce
Brosnan
="actor"

function actor(){
    let jack
    Black
    ="Actor"
}

console.log(actor());

console.log(jamesBond);
console.log(Brosnan);

// ? 2. Adds ';' when two statements are seperated by a closing brace

function add () {

} // <-- Semi colon will be added here

function minus () {

}; // ! DO THIS WAY PLS

// 

// ? 3. Adds ';' if line terminator follows BREAK, RETURN, THROW or CONTINUE

function helloThere() {
    return   // <-- Add Semi colon right here
    {
        "General Kenobi"
    };
}

helloThere();
console.log(helloThere());