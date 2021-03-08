function displayProducts() {
    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        // Example Handle Logic
        if (req.status === 200 && req.readyState === 4) {
            if (req.getResponseHeader("Content-Type") === "application/json") {

                //create elements
                let container = document.createElement('div');
                container.setAttribute("class", "container");
                //create elements
                let row = document.createElement('div');
                row.setAttribute("class", "row");
                document.getElementById("content").appendChild(container);
                container.appendChild(row);

                let stuff = JSON.parse(req.response);
                stuff.forEach(product => {
                    console.log("oh look its some JSON: " + req.response);
                    // adding title to the body of the page
                    let column = document.createElement('div');
                    column.setAttribute("class", "col-sm-4");// create column item

                    let panel = document.createElement('div');// new panel item
                    panel.setAttribute("class", "panel panel-success");// Create a "class" attribute

                    let title = document.createElement('div'); // new title
                    title.setAttribute("class", "panel-heading");       // Create a "class" attribute#

                    let image = document.createElement('div');// new description -> i want this to b
                    image.setAttribute("class", "panel-body");// Create a "class" attribute

                    let description = document.createElement('div');// new description -> i want this to b
                    description.setAttribute("class", "panel-body");// Create a "class" attribute

                    let price = document.createElement('div');
                    price.setAttribute("class", "panel-footer");// Create a "class" attribute

                    let deleteB = document.createElement("button");
                    deleteB.setAttribute("id", "delete");
                    deleteB.setAttribute("class", "button");
                    deleteB.addEventListener("click", function (){
                        deleteProduct(product.id);
                        location.reload();
                    });

                    let updateB = document.createElement("button");
                    updateB.setAttribute("id", "update");
                    updateB.setAttribute("class", "button ");
                    updateB.addEventListener("click", function(){
                        window.open("../html/products/updateProduct.html?" + "id=" + product.id, "_self");
                    })


                    // Set content to respective ids
                    title.textContent = product.title;
                    description.textContent = "Description: " + product.description;
                    price.textContent = "£ " + product.price;
                    let img = new Image();
                    img.src = product.image;
                    img.setAttribute("style", "max-width:100%; height:auto;");
                    image.appendChild(img);
                    deleteB.textContent = "DELETE";
                    updateB.textContent = "UPDATE";


                    // create indented items
                    row.appendChild(column);
                    column.appendChild(panel);
                    panel.appendChild(title);
                    panel.appendChild(image);
                    panel.appendChild(description);
                    panel.appendChild(price);
                    panel.appendChild(deleteB);
                    panel.appendChild(updateB);
                });
            } else {
                console.log(
                    "Looks like its not JSON but lets see what it is... " + req.responseText
                );
            }
        } else {
            console.log("Oh no... handle error");
        }
    }; // append all products
    req.open("GET", "http://35.230.158.36:8080/allProducts");
    req.send();
}

/*

THIS IS THE CREATE PRODUCT SECTION

 */
function createProduct(){
    let elements = document.getElementById("productForm").elements;
    let obj = {};
    for(let i = 0 ; i < elements.length - 1 ; i++){
        let item = elements.item(i);
        obj[item.name] = item.value;
    }

    const req = new XMLHttpRequest();
    req.open("POST", "http://localhost:8080/createProduct");
    req.onload = () => {
        if (req.status === 200 && req.readyState === 4) {
            console.log("Server Responded with: " + req.responseText);


        } else {
            console.log("Oops...");
        }
    };
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(JSON.stringify({title: obj.title, image: obj.image, description: obj.description, price: obj.price, stock: obj.stock}));
}

/*

THIS IS THE DELETE PRODUCT SECTION

 */
function deleteProduct(id){
    const req = new XMLHttpRequest();
    req.open("DELETE", "http://localhost:8080/deleteProduct/" + id);
    req.onload = () => {
        if (req.status === 200 && req.readyState === 4) {
            console.log("Server Responded with: " + req.responseText);
        } else {
            console.log("Oops...");
        }
    };
    req.send();
}

/*

THIS IS THE UPDATE PRODUCT SECTION

 */
function updateGetProduct(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('id');
    const reqGet = new XMLHttpRequest();
    reqGet.open("GET", "http://localhost:8080/getProductById/" + product);
    reqGet.onload = () => {
        if (reqGet.status === 200 && reqGet.readyState === 4) {
            // this loops through the given query
            let product = JSON.parse(reqGet.response);
            // populate the fields
            document.getElementById("title").setAttribute("placeholder", product.title);
            document.getElementById("price").setAttribute("placeholder", product.price);
            document.getElementById("stock").setAttribute("placeholder", product.stock);
            document.getElementById("description").setAttribute("placeholder", product.description);
            let updateB = document.getElementById("submit");
            updateB.setAttribute("class", "button");
            updateB.addEventListener("click", function (){
                updatePushProduct(product.id);
            });
        } else {
            console.log("Oh no... handle error");
        }
    }; // append all products
    reqGet.send();
}

/*

THIS COVERS THE UPDATE PUSH NEW PRODUCT VALUESx

 */
function updatePushProduct(id){
    console.log("id received = " + id);
    let elements = document.getElementById("updateForm").elements;
    let obj = {};
    for(let i = 0 ; i < elements.length - 1 ; i++){
        let item = elements.item(i);
        console.log(item.value);
        if(item.name === "image"){
            obj[item.name] = item.value;
            console.log( "from if : " + obj[item.name]);
        } else if (item.value === "") {
            obj[item.name] = item.getAttribute("placeholder").valueOf();
            console.log( "from else if : " + obj[item.name]);
        } else {
            obj[item.name] = item.value;
            console.log("from else : " + obj[item.name]);
        }
    }
    const req = new XMLHttpRequest();
    req.open("PUT", "http://localhost:8080/updateProduct/" + id);
    req.onload = () => {
        if (req.status === 200 && req.readyState === 4) {
            console.log("Server Responded with: " + req.responseText);
        } else {
            console.log("Oops...");
        }
    };
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(JSON.stringify({title: obj.title, image: obj.image, description: obj.description, price: obj.price, stock: obj.stock}));
}