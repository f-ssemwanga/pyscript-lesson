// get all elements from the html
// buttons
const getDateButton = document.getElementById("getDateButton");
const getRandomButton = document.getElementById("getRandomButton");
const getRandomRangeButton = document.getElementById("getRandomRangeButton");
// input divs
const inputLowerBound = document.getElementById("lowerBound");
const inputUpperBound = document.getElementById("upperBound");
// output divs
const timeOutput = document.getElementById("timeOutput");
const randomOutput = document.getElementById("randomOutput");
const randomRangeOutput = document.getElementById("randomRangeOutput");


// link python functions to the buttons
getDateButton.addEventListener("click", () => {
    timeOutput.innerText = app.getCurrentDateAndTime();
});

getRandomButton.addEventListener("click", () => {
    randomOutput.innerText = app.getRandomNumber();
});

getRandomRangeButton.addEventListener("click", () => {
    min = inputLowerBound.value;
    max = inputUpperBound.value;
    randomRangeOutput.innerText = app.getRandomNumberInRange(min, max);
});
