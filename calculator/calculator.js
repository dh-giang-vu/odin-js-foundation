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
   return 0;
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
            // Perform Calculations
            // Update input
            // Update display
            console.log("Perform operation");
            return;
        }
    
        if (isDigit(button.textContent) === false) {
            if (input.length === 0) {
                return;
            }
            if (hasOp) {
                // Perform Calculations
                // Update input
                // Update display
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





