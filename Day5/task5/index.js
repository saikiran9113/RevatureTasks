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
    { name: "sai", city: "tirupati", age: 23 },
    { name: "kiran", city: "chittoor", age: 20 },
    { name: "nova", city: "goa", age: 25 }
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
