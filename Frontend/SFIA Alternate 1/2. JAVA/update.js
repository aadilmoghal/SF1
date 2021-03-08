function updatePost() {
    let elements = document.getElementById("updatesForm").elements;
    let obj = {};
    for (let i = 0; i < elements.length - 1; i++) {

        let item = elements.item(i);
        obj[item.name] = item.value;

        const req = new XMLHttpRequest();
        let id = obj.id;
        req.open("PUT", "http://localhost:8090/updateBlog/" + id);
        req.onload = () => {
            if (req.status === 200 && req.readyState === 4) {
                console.log("Server responded with: " + req.responseText);
            } else {
                console.log("Oops...");
            }
        };
        req.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        req.send(JSON.stringify(
            {
                name: obj.name,
                blog: {
                    id: Number(obj.id)
                }
            }
            )
        );
    }
}