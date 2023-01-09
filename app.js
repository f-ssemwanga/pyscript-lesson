// get all elements from the html
// buttons
const getDateButton = document.getElementById("getDateButton");
// random comment
// output divs
const timeOutput = document.getElementById("timeOutput");


// link python functions to the buttons
getDateButton.addEventListener("click", () => {
    timeOutput.innerText = app.getCurrentDateAndTime();
});
