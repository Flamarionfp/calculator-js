const visor = document.getElementById("visor");
const buttons = document.querySelectorAll(".calc-button");
const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", clear);

const operators = ["+", "-", "x", "/", "**"];

let valuesToCalculate = [];
let currentOperator = "";

function handleOperatorClick(operator) {
  currentOperator = operator;
  if (valuesToCalculate.length === 1) {
    handleEqualClick();
  } else {
    updateValues(visor.value);
    visor.value = currentOperator;
  }
}

function updateCurrentOperator(currentOperator) {
  currentOperator = currentOperator;
}

function updateValues(value) {
  valuesToCalculate.push(value);
}

function updateVisor(value) {
  if (visor.value === "0" || operators.includes(visor.value)) {
    visor.value = value;
  } else {
    visor.value += value;
  }
}

function handleEqualClick() {
  updateValues(visor.value);
  valuesToCalculate
    .map((value) => Number(value))
    .reduce((prevNumber, currentNumber) => {
      return calculate(prevNumber, currentNumber);
    });
}

function calculate(n1, n2) {
  let res = 0;

  switch (currentOperator) {
    case "+":
      res = sum(n1, n2);
      break;
    case "-":
      res = subtract(n1, n2);
      break;
    case "x":
      res = multiply(n1, n2);
      break;
    case "/":
      res = divide(n1, n2);
      break;
    default:
      res = power(n1, n2);
      break;
  }

  visor.value = res;
  valuesToCalculate = [];
}

function clear() {
  visor.value = "0";
  valuesToCalculate = [];
}

function sum(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function power(n1, n2) {
  return n1 ** n2;
}
