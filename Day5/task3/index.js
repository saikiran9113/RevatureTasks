//Create a div with "demo text" inside it now when I click on that div the text should get chaged to "I got clicked" and chagen the backgroud color of that div to pink.

const myDiv = document.getElementById("myDiv");

myDiv.addEventListener("click", function() {
    myDiv.textContent = "I got clicked";
    myDiv.style.backgroundColor = "pink";
});
