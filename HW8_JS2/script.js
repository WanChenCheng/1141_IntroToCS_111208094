const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const opEl = document.getElementById("op");
const calcBtn = document.getElementById("calcBtn");
const resultText = document.getElementById("resultText");
const hintText = document.getElementById("hintText");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null; 
  return a / b;
}

function calculate() {
  hintText.textContent = "";

  const a = Number(num1El.value);
  const b = Number(num2El.value);
  const op = opEl.value;


  if (num1El.value === "" || num2El.value === "") {
    hintText.textContent = "Please enter both numbers.";
    resultText.textContent = "--";
    return;
  }

  let result = null;

  if (op === "+") result = add(a, b);
  else if (op === "-") result = subtract(a, b);
  else if (op === "*") result = multiply(a, b);
  else if (op === "/") result = divide(a, b);

  if (result === null || Number.isNaN(result)) {
    hintText.textContent = "Invalid operation (e.g., division by zero).";
    resultText.textContent = "--";
    return;
  }


  resultText.textContent = result.toFixed(2);
}

calcBtn.addEventListener("click", calculate);
