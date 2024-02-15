let buttons = document.querySelectorAll(".buttons button");
let display = document.querySelector(".display");
const operators = ["%", "*", "/", "+", "-"];
let result = "";

let calculate = (btn) => {
    if (btn === "=" && result !== "") {
        result = eval(result.replace("%", "/100"));
        display.value = result;
    } else if (btn === "AC") {
        result = "";
    } else if (btn === "DEL") {
        result = result.slice(0, -1);
    } else if (btn === "SQR") {
        result = Math.pow(Number(display.value), 2);
    } else if (btn === "CUBE") {
        result = Math.pow(Number(display.value), 3);
    } else if (btn === "ROOT") {
        result = Math.sqrt(display.value);
    } else if (btn === "NEG") {
        // result = `(${-display.value})`;
        result = -Number(display.value);
    } else {
        if (result === "" && operators.includes(btn)) return;
        result += btn;
    }
    display.value = result;
};

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        calculate(event.target.dataset.value);
    });
});
