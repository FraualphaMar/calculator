// functions for basic math operator
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
    return a / b;
}

// calculator operation flow

function operate(a, operation, b) {
    if (operation === "divide" && b === 0) {
        return "ERROR, cannot divide by zero";
    } else if (operation === "add") {
        return add(a, b);
    } else if (operation === "subtract") {
        return subtract(a, b);
    } else if (operation === "multiply") {
        return multiply(a, b);
    } else if (operation === "divide") {
        return divide(a, b);
    }
}

const digitsBtn = document.querySelectorAll(".digits")
const operatorsBtn = document.querySelectorAll(".operators");

digitsBtn.forEach(button => {
    button.addEventListener("click", () => {

    })
});

operatorsBtn.forEach(button => {
    button.addEventListener("click", () => {
    })
})

const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {

})

equalsBtn.addEventListener("click", () => {

})
