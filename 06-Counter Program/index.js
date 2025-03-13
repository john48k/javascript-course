// Counter button

// Get references to the HTML elements with the specified ids
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

// Initialize a variable to keep track of the count
let count = 0;

// Add an event listener to the increase button that increments the count and updates the label
increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}

// Add an event listener to the decrease button that decrements the count and updates the label
decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
}

// Add an event listener to the reset button that resets the count to 0 and updates the label
resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}