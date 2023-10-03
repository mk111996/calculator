const turnOn = document.querySelector("#on");
const turnOff = document.querySelector("#off");
const operationResult = document.querySelector(".operation-result");

turnOn.addEventListener("click", () => {
    operationResult.textContent = "0";
});

turnOff.addEventListener("click", () => {
    operationResult.textContent = "";
});
