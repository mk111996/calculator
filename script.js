const resultNumber = document.querySelector(".operation-result");
const numberButtons = document.querySelectorAll("#number");
const operationButtons = document.querySelectorAll("#operation");
const equalOperation = document.querySelector("#equal");
const clearOperation = document.querySelector("#clear");
const turnOn = document.querySelector("#on");
const turnOff = document.querySelector("#off");

let result = "";

operationButtons.forEach((button) => button.addEventListener("click", operationResult));

equalOperation.addEventListener("click", calculate);

clearOperation.addEventListener("click", clear);

turnOn.addEventListener("click", on);

turnOff.addEventListener("click", off);

numberButtons.forEach((button) => {
    button.addEventListener("click", displayNumber)
});

function displayNumber() {
    if (this.textContent === "." && resultNumber.innerHTML.includes(".")) return;
    if (this.textContent === "." && resultNumber.innerHTML === "") return resultNumber.innerHTML = "0.";
    resultNumber.innerHTML += this.textContent;
}

function operationResult() {
    if (resultNumber.innerHTML === "" && this.textContent ==="-") {
        resultNumber.innerHTML = "-";
        return;
    }
    else if (resultNumber.innerHTML === "") {
        return;
    }

}

function calculate() {
    let a = Number(resultNumber.innerHTML);
    let b = Number(resultNumber.innerHTML);

    if (resultNumber.innerHTML === "+") {
        result = a + b;
        resultNumber.innerHTML = result;
    }
}

function clear() {
    resultNumber.textContent = "0";
}

function on() {
    resultNumber.textContent = "0";
}

function off() {
    resultNumber.textContent = "";
}