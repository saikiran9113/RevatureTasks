//Create a p tag inside it initially shwo 0. Then create 2 buttons to increment or decreament it by 1.

const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");

incrementButton.addEventListener("click", function() {
    let currentValue = parseInt(counterElement.textContent);
    currentValue =currentValue+1;
    counterElement.textContent = currentValue;
});

decrementButton.addEventListener("click", function() {
    let currentValue = parseInt(counterElement.textContent);
    currentValue =currentValue-1;
    counterElement.textContent = currentValue;
});
