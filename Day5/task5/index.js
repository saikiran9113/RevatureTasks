/*- 4.Create an array with 3 userObjects: name, city , age. put those in an array.
    Now in HTML page. Create an empty div tag: <div></div>
    and below this div tag create an button.
    Now when the user clicks on that button. The names present in all those 3 obj should get printed with <h1>
    after clicking your div should look like this:
<div>
<h1>name<h1>
<h1>name<h1>
<h1>name<h1>
</div> */

const users = [
    { name: "Alice", city: "New York", age: 30 },
    { name: "Bob", city: "Los Angeles", age: 25 },
    { name: "Charlie", city: "Chicago", age: 35 }
];

function printNames() {
    const div = document.getElementById("output");
    
    div.innerHTML = "";
    
    users.forEach(user => {
        const h1 = document.createElement("h1");
        h1.textContent = user.name;
        div.appendChild(h1);
    });
}


document.getElementById("printButton").addEventListener("click", printNames);
