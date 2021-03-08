'use strict';

// ! C - Create - Post
// ! R - Read - Get
// ! U - Update - Put
// ! D - Delete - Delete

//* Fetch

// Fetch allows us to send and receive reuests utilising promises 

let targetDiv = document.querySelector('div');

// Basic Use case for a get request

fetch (`https://jsonplaceholder.typicode.com/comments`) // fetch olug in the target URL
.then ((response) => {
    if (response.status !== 200) {
        console.log(`status: ${response.status}`);
        return;
    }
    response.json()
    .then((data) => console.log(data) )
    .catch((error) => console.log(`${error}`));
})

//* Fetch by ID

let id = 100; //ID of the item i want to retrieve
console.log(`the id of the item I was is $(id)`);

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
.then((response) => {
    if (response.status !== 200) {
        console.log(`status ${response.status}`);
        return;
    }
    response.json()
    .then((data) => console.log(data))
    .catch ((error) => console.log(`error ${error}`))
    })
    .catch((error) => console.log(`Error${error}`));

   // * Fetch Post
   
   const myObject = {
       "userId": 300,
       "title": "This is a test",
       "body": "This is the test body"
   };

   let dataGrab = () => {

   }
   fetch(`https://jsonplaceholder.typicode.com/posts`,{
       method: `Post`,
       headers: {
           "Content-type":"application/json" //Header
       },
       body: JSON.stringify(myObject) // What data to post
   })

   .then ((response) => response.json())
   .then ((data) => console.log(`Request successful with JSON response ${data}`))
   .then ((error) => console.log(error));

   //* Fetch Delete

   // Deleting a specific item

   console.log(`post to be deleted ${id}`);

   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
       method:`DELETE`
    })
    .then ((data) => console.log(`Request all food with JSON response ${data}`))
    .then ((error) => console.log(error));

    //* PostData Fucntion

    let postData = (data) => {
        let newTitle = document.createElement('h3');
        let newBody = document.createElement('p');
        let bodyData = data.body;
        let titleData = data.title;
        // newData. innerHTML = `Title $(titleData) Body: ${bodyData}`;
        targetDiv.appendChild(newTitle);
        targetDiv.appendChild(newBody);

    }

