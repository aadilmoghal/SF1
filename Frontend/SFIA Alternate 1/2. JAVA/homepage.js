 function displayBlogs(){
    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        // Example handle logic
        if (req.status === 200 && req.readyState === 4) {
            if (req.getResponseHeader("Content-Type") === "application/json") {
                console.log("oh look its some JSON: " + req.responseText);
                // adding an element to the body example
                // let elem = document.createElement('div');
                // elem.textContent = "hello world";
                // document.body.appendChild(elem);

                let stuff = JSON.parse(req.response);
                stuff.forEach(el => {
                    // console.log(el); // prints whole element
                    // console.log(el.name); // allows access to specific value


                    // adding title to the body of the page
                    let elem = document.createElement('div');
                    let header = document.createElement('h1');
                    header.textContent = "Blog Name: " + el.name;
                    elem.appendChild(header);
                    el.posts.forEach(post => {
                        console.log(post) // print all posts for each blog
                        let name = document.createElement('p');
                        let title = document.createElement('p');
                        let body = document.createElement('p');
                        name.textContent = "Name: " + post.name;
                        title.textContent = "Title: " + post.title;
                        body.textContent = "Body: " + post.body;
                        elem.appendChild(name);
                        elem.appendChild(title);
                        elem.appendChild(body);
                    })
                    document.body.appendChild(elem);
                });



            } else {
                console.log(
                    "Looks like its not JSON but lets see what it is... " + req.responseText
                );
            }
        } else {
            console.log("Oh no... handle error");
        }
    };
    req.open("GET", "http://localhost:8090/getAllBlogs");
    req.send();
}
 function submitPost(){
    // console.log("hello");
     let elements = document.getElementById("postsForm").elements;
     console.log(elements);
     let obj ={};
     for(let i = 0 ; i < elements.length - 1 ; i++){
         let item = elements.item(i);
         obj[item.name] = item.value;
     }

     // console.log(obj.id);
     const req = new XMLHttpRequest();
     req.open("POST", "http://localhost:8090/createBlog");
     req.onload = () => {
         if (req.status === 200 && req.readyState === 4) {
             console.log("Server Responded with: " + req.responseText);
         } else {
             console.log("Oops...");
         }
     };

     req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
     req.send(JSON.stringify(
         {
             name: obj.name,
             title: obj.title,
             body: obj.body,
             blog:{
                 id: Number(obj.id)
             }
         }
         )
     );
 }
