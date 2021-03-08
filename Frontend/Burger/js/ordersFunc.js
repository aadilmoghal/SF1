function displayOrders() {
    const OrderReq = new XMLHttpRequest();
    OrderReq.onreadystatechange = () => {
        // Example Handle Logic
        if (OrderReq.status === 200 && OrderReq.readyState === 4) {

            if (OrderReq.getResponseHeader("Content-Type") === "application/json") {

                //create elements
                let container = document.createElement('div');
                container.setAttribute("class", "container");
                //create elements
                let row = document.createElement('div');
                row.setAttribute("class", "row");
                document.body.appendChild(container);

                let stuff = JSON.parse(OrderReq.response);
                stuff.forEach(orders => {
                    console.log("oh look its some JSON: " + OrderReq.response);

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
                    orders.product.forEach(products => {
                        // Set content to respective ids
                        title.textContent = products.title;
                        description.textContent = "Description: " + products.description;
                        price.textContent = "£ " + products.price;
                        let img = new Image();
                        img.src = products.image;
                        image.appendChild(img);

                        // create indented items
                        container.appendChild(row);
                        row.appendChild(column);
                        column.appendChild(panel);
                        panel.appendChild(title);
                        panel.appendChild(image);
                        panel.appendChild(description);
                        panel.appendChild(price);
                    })
                });
            } else {
                console.log(
                    "Looks like its not JSON but lets see what it is... " + OrderReq.responseText
                );
            }
        } else {
            console.log("Oh no... handle error");
        }
    }; // append all products
    OrderReq.open("GET", "http://localhost:8080/allProducts");
    OrderReq.send();
}

function createOrder(){
    let elements = document.getElementById("productForm").elements;
    let obj = {};
    for(let i = 0 ; i < elements.length - 1 ; i++){
        let item = elements.item(i);
        obj[item.name] = item.value;
    }

    const OrderReq = new XMLHttpRequest();
    OrderReq.open("POST", "http://localhost:8080/createOrder");
    OrderReq.onload = () => {
        if (OrderReq.status === 200 && OrderReq.readyState === 4) {
            console.log("Server Responded with: " + OrderReq.responseText);
        } else {
            console.log("Oops...");
        }
    };
    OrderReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    OrderReq.send(JSON.stringify({title: obj.title, image: obj.image, description: obj.description, price: obj.price, stock: obj.stock}));
}