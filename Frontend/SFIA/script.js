const createForm = document.getElementById("createForm");
const listOutput = document.getElementById("readDiv");
const updateCard = document.getElementById("updateForm");
const priceTotal = document.getElementById("totalPrice");

// create a new record input form

createForm.addEventListener('submit', function (event){
    event.preventDefault();
    const data = {
        foodTitle: this.name.value,
        foodPrice: this.price.value
    }
    fetch("http://localhost:9999/createFood", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json"
        }
    }).then(response => { 
        return response.json(); 
    }).then(data => { 
        readFoods();
        this.reset();
    }).catch(error => console.log(error));
});
//gets all the data created 
//Buttons for item created

function readFoods() {
    fetch("http://localhost:9999/getFoods")
        .then(response => response.json())
        .then(arrayOfFoods => {
            console.log(arrayOfFoods);
            listOutput.innerHTML = '';
            arrayOfFoods.forEach(function(food) {

                const card = document.createElement("div");
                card.className = "card";
                listOutput.appendChild(card);

                const cardBody = document.createElement("div");
                cardBody.className = "card-body";
                card.appendChild(cardBody);

                const title = document.createElement("h5");
                title.className = "card-title";
                title.innerText = food.foodTitle;
                cardBody.appendChild(title);

                const price = document.createElement("p");
                price.className = "card-body";
                price.innerText = "£" + food.foodPrice;
                cardBody.appendChild(price);

                //makes a delete button 
                const deleteButton = document.createElement("button");
                deleteButton.className = "card-button";
                deleteButton.innerText = "Delete Item";
                deleteButton.addEventListener("click", function () {
                    deleteFood(food.id);
                })
                cardBody.appendChild(deleteButton);

                //makes the update button 
                const updateButton = document.createElement("button");
                updateButton.className = "card-button";
                updateButton.innerText = "Update Item";
                updateButton.addEventListener("click", function () {                  
                    updateFood(food.id);
                })
                cardBody.appendChild(updateButton);
                
                //adding space to page
                const spacer = document.createElement("br");
                listOutput.appendChild(spacer);

            });

            //Tadding all items to make the total price
            let total = 0;
            arrayOfFoods.forEach(function(food) {
                total += food.foodPrice;
            });
            priceTotal.innerText = "Total: £" + total;

        }).catch(error => console.error(error));
}

readFoods();
// Delete method to remove a record when it has been created 

function deleteFood(id) {
    fetch("http://localhost:9999/deleteFood/" + id, {
        method: "DELETE"
    }).then(response => {
        console.log(response);
        readFoods();
    }).catch(error => console.error(error));
}
// modifies existing food that have been created
function updateFood(id) {

    const card = document.createElement("div");
    card.className = "update-card";
    updateCard.appendChild(card);

    const cardBody = document.createElement("div");
    cardBody.className = "update-body";
    card.appendChild(cardBody);

    const titleUpdate = document.createElement("input");
    titleUpdate.className = "update-input";
    titleUpdate.placeholder = "New Item...";
    cardBody.appendChild(titleUpdate);

    const priceUpdate = document.createElement("input");
    priceUpdate.className = "update-input";
    priceUpdate.placeholder = "New Price (£)...";
    cardBody.appendChild(priceUpdate);

    const updateButton = document.createElement("button")
    updateButton.className = "button-update";
    updateButton.innerText = "Update Basket";
    updateButton.addEventListener("click", function() {

        const data = {
        foodTitle: titleUpdate.value,
        foodPrice: priceUpdate.value
    }
    
    fetch("http://localhost:9999/updateFood/" + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': "application/json"
        }
    }).then(response => {
        console.log(response);
        readFoods();
    }).catch(error => console.error(error));
    });

    cardBody.appendChild(updateButton);
    
}
// function newUpdate (id){
//     const data = {
//     }
    
//     fetch("http://localhost:9999/getFood/" + id, {
//         method: "GET",
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': "application/json"
//         }
        
//     }).then(response => { {
//         console.log(response);
//         readFoods();
//         } 
//         response.json()
//         .catch(error => console.error(error));
//     response.json()
//     .then( (data) => console.log({data}))
//     .catch(error => console.error(error));
    
// });
// }