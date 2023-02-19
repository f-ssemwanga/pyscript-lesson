// get all elements from the html
// buttons
const getDateButton = document.getElementById("getDateButton");

const getRandomButton = document.getElementById("getRandomButton");

const getRandomRangeButton = document.getElementById("getRandomRangeButton");

const getBasicCalcAnswerButton = document.getElementById("getBasicCalcAnswerButton");

// output divs
const timeOutput = document.getElementById("timeOutput");
const randomOutput = document.getElementById("randomOutput");
const randomRangeOutput = document.getElementById("randomRangeOutput");
const lowerBoundContainer = document.getElementById("lowerBound");
const upperBoundContainer = document.getElementById("upperBound");
const basicCalcOutput = document.getElementById("basicCalcOutput");
const operand1Container = document.getElementById("operand1");
const operand2Container= document.getElementById("operand2");
const operatorContainer= document.getElementById("operator");
// link python functions to the buttons
getDateButton.addEventListener("click", () => {
    timeOutput.innerText = app.getCurrentDateAndTime();
});

getRandomButton.addEventListener("click", () =>{
    randomOutput.innerText =app.getRandomNumGenerator();
});

getRandomRangeButton.addEventListener("click", () =>{
    const lowerBound = parseInt(lowerBoundContainer.value);
    const upperBound = parseInt(upperBoundContainer.value);
    randomRangeOutput.innerText = app.getRandomRangeValue(lowerBound, upperBound)
});

getBasicCalcAnswerButton.addEventListener("click", () =>{
    const operand1 = parseInt(operand1Container.value);
    const operand2 = parseInt(operand2Container.value);
    const operator = operatorContainer.value
    basicCalcOutput.innerText = app.basicCalc(operand1, operand2,operator)
});

//----- Advanced Calculator code starts here ----//

//buttons
const equalsButton = document.getElementById("equals")
const cButton = document.getElementById("c")
const plusButton = document.getElementById("plus")
const timesButton = document.getElementById("times")
const minusButton = document.getElementById("minus")
const divideButton = document.getElementById("divide")
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight")
const nineButton = document.getElementById("nine");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five")
const sixButton = document.getElementById("six");
const threeButton = document.getElementById("three");
const twoButton = document.getElementById("two")
const oneButton = document.getElementById("one");
const zeroButton = document.getElementById("zero")
const dotButton = document.getElementById("dot")

//output
const display = document.getElementById("displayData");


// even listeners and button handlers
let lastChar =""; 
let lastOperator = "";
equalsButton.addEventListener("click", () =>{
  const calcString = display.innerText
  display.innerText = app.evaluateResult(calcString)
  lastChar ="="
});

cButton.addEventListener("click", () => {
  displayData.innerText =0;
  
});

function appendOperatorToDisplay(operator){
  if (displayData.innerText !== "0" && lastChar !== operator &&displayData.innerText.length<16) {
    appendToDisplayData(operator);
    lastChar = operator;
  }

}

function appendToDisplayData(buttonValue) {
  if (displayData.innerText === "0" || lastChar === "=") {
    displayData.innerText = buttonValue;
  } else if (displayData.innerText.length < 16) {
    if (buttonValue === ".") {
      // Check if the last operator was +, -, *, or /
      if (["+", "-", "*", "/"].includes(lastOperator)) {
        displayData.innerText += buttonValue;
      }
    } else {
      displayData.innerText += buttonValue;
    }
  }
}
dotButton.addEventListener("click", () => {
  appendToDisplayData(".")
   
 });


  zeroButton.addEventListener("click", () => {
   appendToDisplayData("0")
    
  });
  
  sevenButton.addEventListener("click", () => {
    appendToDisplayData("7");
    lastChar =""
  });
  
  eightButton.addEventListener("click", () => {
    appendToDisplayData("8") ;
    lastChar =""
  });

  nineButton.addEventListener("click", () => {
    appendToDisplayData("9");
    lastChar =""
  });
  fourButton.addEventListener("click", () => {
    appendToDisplayData("4");
    lastChar =""
  });

  fiveButton.addEventListener("click", () => {
    appendToDisplayData("5");
    lastChar =""
  });

  sixButton.addEventListener("click", () => {
    appendToDisplayData("6");
    lastChar =""
  });
  threeButton.addEventListener("click", () => {
    appendToDisplayData("3");
    lastChar =""
  });
  twoButton.addEventListener("click", () => {
    appendToDisplayData("2");
    lastChar =""
  });
  oneButton.addEventListener("click", () => {
    appendToDisplayData("1");
    lastChar =""
  });

  plusButton.addEventListener("click", () => {
    if (displayData.innerText !== "0" && lastChar !== "=") {
      appendToDisplayData("+");
      lastOperator = "+";
    }
    lastChar = "+";
  });

  timesButton.addEventListener("click", () => {
    if (displayData.innerText !== "0" && lastChar !== "=") {
      appendToDisplayData("*");
      lastOperator = "*";
    }
    lastChar = "*";
  });

  minusButton.addEventListener("click", () => {
    if (displayData.innerText !== "0" && lastChar !== "=") {
      appendToDisplayData("-");
      lastOperator = "-";
    }
    lastChar = "-";
  });

  divideButton.addEventListener("click", () => {
    if (displayData.innerText !== "0" && lastChar !== "=") {
      appendToDisplayData("/");
      lastOperator = "/";
    }
    lastChar = "/";
  });