// functions for basic math operator
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// calculator operation flow
function operate(a, operation, b) {
    if (operation === "÷" && b === 0) {
        return "ERROR, cannot divide by zero";
    } else if (operation === "+") {
        return add(a, b);
    } else if (operation === "-") {
        return subtract(a, b);
    } else if (operation === "x") {
        return multiply(a, b);
    } else if (operation === "÷") {
        return divide(a, b);
    }
}

function roundResult(num) {
    return Math.round(num * 100000000) / 100000000;
}

const results = document.querySelector(".display");

let num1 = "";
let num2 = "";
let operation = "";
let lastWasOperator = false;
let resetDisplay = false;

const digitsBtn = document.querySelectorAll(".digits button")
const operatorsBtn = document.querySelectorAll(".operators button");

function updateValue() {
    digitsBtn.forEach(button => {
        button.addEventListener("click", (e) => {
            const digit = e.target.textContent;
            if (resetDisplay) {
                num1 = digit;
                num2 = "";
                operation = "";
                resetDisplay = false;
                results.textContent = num1;
                return;
            }
            if (operation === "") {
                num1 += digit;
                results.textContent = num1;
                lastWasOperator = false;
            } else {
                num2 += digit;
                results.textContent = num2;
                lastWasOperator = false;
            }
        })
    });
}


operatorsBtn.forEach(button => {
    button.addEventListener("click", (e) => {
        const clickedOperation = e.target.textContent;
        if (num1 === "") return;
        if (lastWasOperator) {
            operation = normalizeOperator(clickedOperation);
            return;
        }
        if (operation !== "" && num2 !== "") {
            const result = operate(parseFloat(num1), operation, parseFloat(num2));
            if (typeof result === "string") {
                results.textContent = result;
                resetDisplay = true;
                return;
            }
            num1 = roundResult(result).toString();
            num2 = "";
            results.textContent = num1;
        }
        operation = clickedOperation;
        lastWasOperator = true;
        resetDisplay = false;
    })
})

const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operation = "";
    lastWasOperator = false;
    resetDisplay = false;
    results.textContent = "0";
})

equalsBtn.addEventListener("click", () => {
    if (num1 !== "" && num2 !== "" && operation !== "") {
        const result = operate(parseFloat(num1), operation, parseFloat(num2));
        const roundedResult = roundResult(result);
        results.textContent = roundedResult.toString();
        num1 = roundedResult.toString();
        num2 = "";
        operation = "";
        lastWasOperator = true;
        resetDisplay = true;
    }
})
updateValue();