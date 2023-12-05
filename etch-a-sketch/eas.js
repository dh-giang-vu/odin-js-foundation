const container = document.querySelector(".eas-container");
const btn = document.querySelector("button");

function removeSquares() {
    while(container.firstChild) {
        container.firstChild.remove();
    }
}

function makeSquares(numSquares) {
    if (numSquares > 100) {
        alert("Maximum dimension is 100x100");
        return;
    }
    
    removeSquares();

    for (let i = 0; i < numSquares*numSquares; i++) {
        let square = document.createElement("div");
        square.className = "square";
        let length = (100 / numSquares).toString();
        console.log(length);
        square.style.width = length + "%";
        square.style.width = length + "%";
        container.appendChild(square);
    }
}

btn.addEventListener("click", () => {
    let numSquares = window.prompt("How many squares?");
    makeSquares(numSquares);
})

container.addEventListener("mouseover", (event) => {
    const target = event.target;
    if (target.className === "square") {
        target.style.backgroundColor = "black";
    }
})

