const display = document.querySelector(".display p");
const buttons = document.querySelectorAll(".button-container button");
const clear = document.querySelector("#ac");
const del = document.querySelector("#c");

let input = [];
let hasOp = false;

/* Check if character is digit or  not */
function isDigit(symbol) {
    return /^[0-9]$/.test(symbol);
}


function performOperation() {
    let first = 0;
    let op = undefined;
    let second = 0;

    if (isDigit(input[input.length-1]) === false) {
        input = [];
        return "ERROR";
    }

    // Convert input to expression
    for (let i = 0; i < input.length; i++) {
        if (isDigit(input[i]) === false) {
            op = input[i];
            console.log(op, input[i]);
            continue;
        }

        if (op === undefined) {
            first = first * 10 + Number(input[i]);
        }
        else {
            second = second * 10 + Number(input[i]);
        }
    }

    let result = 0;

    // Get result
    switch(op) {
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "*":
            result = first * second;
            console.log("m" + result);
            break;
        case "/":
            if (second === 0) {
                input = [];
                return "ERROR";
            }
            result = Math.round(first / second);
            break;
        default:
            result = first;
    }

    input = [];

    // Parse into input
    let temp = result.toString();
    for (let i = 0; i < temp.length; i++) {
        input.push(temp[i]);
    }

    return result;
}


clear.addEventListener("click", () => {
    display.textContent = "";
    input = [];
    hasOp = false;

    console.log(input);
    console.log(hasOp);
});


del.addEventListener("click", () => {
    if (input.length === 0) {
        return;
    }
    display.textContent = display.textContent.slice(0, -1);
    
    if (isDigit(input[input.length - 1]) === false) {
        hasOp = false;
    }
    input.pop();

    // Sanity Check
    console.log(input);
    console.log(hasOp);
}) 


buttons.forEach(function(button) {
    button.addEventListener("click", () => {

        // Deal with empty placeholder button
        if (button.textContent === "") {
            return;
        }
    
        if (button.textContent === "=") {
            display.textContent = performOperation()
            console.log("Perform operation");
            hasOp = false;
            return;
        }
    
        if (isDigit(button.textContent) === false) {
            if (input.length === 0) {
                return;
            }
            if (hasOp) {
                display.textContent = performOperation();
                console.log("Perform operation");
            }
            else {
                hasOp = true;
            }
        }
    
        input.push(button.textContent);
        display.textContent += button.textContent;
    
        console.log(input);
        console.log(hasOp);
    })
})





