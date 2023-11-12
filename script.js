
let equalPressed = 0;
let buttonInput = document.querySelectorAll(".button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let percentageButton = document.getElementById("percentage");

window.onload = () => {
  input.value = "";
};

buttonInput.forEach((buttonClass) => {
  buttonClass.addEventListener("click", () => {
    if (equalPressed === 1) {
      equalPressed = 0;
      input.value = "";
    }
    input.value += buttonClass.value;
  });
});

percentageButton.addEventListener("click", () => {
  if (equalPressed === 1) {
    equalPressed = 0;
  }
  // Handle the percentage operation
  calculatePercentage();
});

equal.addEventListener("click", () => {
  equalPressed = 1;
  let inputValue = input.value;

  try {
    let solution = eval(inputValue);
    if (Number.isNaN(solution) || !Number.isFinite(solution)) {
      throw new Error("Invalid mathematical expression");
    }
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (error) {
    alert(error.message);
  }
});

clear.addEventListener("click", () => {
  input.value = "";
});

erase.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});

function calculatePercentage() {
  let inputValue = input.value;

  // Check if the input contains an operator
  if (inputValue.includes("+") || inputValue.includes("-") || inputValue.includes("*") || inputValue.includes("/")) {
    // Split the input by the operator
    let operands = inputValue.split(/[\+\-\*\/]/);
    
    // Check if there are exactly two operands
    if (operands.length === 2) {
      // Calculate the percentage of the first operand and replace the input
      let result = (parseFloat(operands[0]) * parseFloat(operands[1])) / 100;
      input.value = result.toFixed(2);
    }
  }
}




