' use strict';

// * DOM Manioulation
// DOM represents the Document as Nodes and Objects, which can be constructed to create a visual page

// Move stuff, Formatting Attributes img src, Provisioning of Elements, CSS, extra functionality

// * Document Selector Methods

// * QuerySelector() - Returns the FIRST matching element

// Assigning Header Variable to first h1 (using CSS Selector rules in DOM)
let header = document.querySelector('h2');

// Console logging out header 
console.log(header);

// header element is data type of object
console.log(typeof header);

// element.textContent outputs the inner text of an HTML element
console.log(header.textContent);

// Modifies an HTML elements style
header.style.color = 'red';

// selected the first element with class .className
let headerClass = document.querySelector('.classHeader');

// Selected the first element with id idHeader
let idHeader = document.querySelector('#idHeader');

// Console logged out the content of headerClass
console.log(headerClass.textContent);

//Function to change colour of element
let headerColourChange = (element, colour) => element.style.color = colour;

// Function to addBorder of width and colour
let addBorder = (element, width ,colour) => element.style.border = `solid ${width}px ${colour}`;

// Invoked and passed in element and colour
headerColourChange(headerClass, "green");
headerColourChange(idHeader, "crimson");

// * QuerySelectorAll() - Returns all matching elements

// Grabs all occurences of element 'p'
let paraList = document.querySelectorAll('p');
console.log(paraList);

console.log(typeof paraList); // Type of Object

// simplifed for loop using 'of' 
for(let paragraph of paraList){
    console.log(paragraph.textContent);
    addBorder(paragraph,4,"teal");
}

// Use QuerySelector to pick out an element, a class and an ID
// Change the text content to a new String
// Add Borders of varying width and colour
// Add Margin and Padding 

// User Query Selector All to create a list of elements (your choice)
// Modify the CSS of every other element 1,3,5,7
// Modify the text content of every other element 2,4,6,8

// stretch goals - Use prompt() to change the text content of an element

// * Event Listener
// Event Listeners listen for an event.. They invoke a function when the declared event is triggered
// WebEvents - Clicking a Button, submitting a form, moving your mouse, filling in some data

// Function that is invoked through HTML
let htmlButton = () => console.log("HTML Button Clicked");

// Function to record when JS Button clicked
let jsButtonClicked = () => console.log("Js Button clicked");

// Grabbed JS Button
let jsButton = document.querySelector('.jsButton');
let jsButton2 = document.querySelector('.jsButton2');

// add event listener takes 
jsButton.addEventListener('click', function(){
    console.log("Button clicked from JS");
});

jsButton2.addEventListener('click', jsButtonClicked);

// * Create Element + Append Child

// let createElement = () => {
//     let newParagraph = document.document.createElement('p');
// }

// Grabbed Create element Button
let createElementBtn = document.querySelector('.createFunctionBtn');

// paragraph div wrapper saved to paragraphDiv
let paragraphDiv = document.querySelector('.paragraphWrapper');

//function to create element
let postParagraph = () => {

    // Element is called newParagraph and created through createElement
    let newParagraph = document.createElement('p');

    // Paragraph text content added 
    newParagraph.textContent = "This paragraph has been created";

    // newPara appended to parent (paragraphDiv)
    paragraphDiv.appendChild(newParagraph);
}

// Invokes the postParagraph function
createElementBtn.addEventListener('click', postParagraph);

// * Remove Child
// Removes a selected child from a parent div

// Assigning button to variable removeElement
let removeElementBtn = document.querySelector('.removeChildBtn');
console.log(removeElementBtn);

// Function to remove a paragraph
let removeParagraph = () => {

    // Using queryselector to find the correct paragraph
    let paragraphToRemove = document.querySelector('div > *');

    // Console log to print out the paragraph
    console.log(paragraphToRemove);

    // Removing the selected paragraph from the parent div
    paragraphDiv.removeChild(paragraphToRemove);
    console.log("Paragraph removed!");
}

// Adding event listener to button
removeElementBtn.addEventListener('click', removeParagraph);

// * Replace Child
// Replacing an old child element with a new child element
// Find the old child element to replace
// Create a new element
// Swap the elements around

let replaceChildBtn = document.querySelector('.replaceChildBtn');

let replaceParagraph = () => {

    console.log("Update ran");

    // Using queryselector to find the correct paragraph
    let paragraphToUpdate = document.querySelector('div > p');

    // Element is called updatedHeader and created through createElement
    let updatedHeader = document.createElement('h2');

    // Adding text content to element
    updatedHeader.textContent = "This is an updated element!";

    // Replace the children
    paragraphDiv.replaceChild(updatedHeader, paragraphToUpdate);
}

// Invokes function to replace a child
replaceChildBtn.addEventListener('click', replaceParagraph);


// * Set Attribute
// Allows you to add a new or update the value of an existing attribute with a HTML element

// Find the element we want to manipulate 


let updateAttribute = () => {
    headerClass.setAttribute('contenteditable','');
    headerClass.setAttribute('style', 'color: purple');
}

let setAttributeBtn = document.querySelector('.setAttribute');
setAttributeBtn.addEventListener('click', updateAttribute);

// * Get Attribute
// gets an attribute

h2AttributeStr = headerClass.getAttribute('style');

console.log(headerClass.getAttribute('style'));
console.log(`String taken from attribute: ${h2AttributeStr}`);


// * Remove Attribute
// Removes an attribute

headerClass.removeAttribute('style');

// TODO - Exercise!

// Buttons added to HTML that do the following functions: 
// * Create a List item within a type of list (Stretch goal - Using input form to type out new content)
// * Remove a list item within the list
// * Update the content of the list (Stretch goal - Using input form to type out new content)
// * Change attribute of all lists (CSS/Contenteditable/up to you)
// * Remove all attributes from list items
// * Stretch goal - Change attributes / Update specific item (NOT JUST TOP ONE) 





