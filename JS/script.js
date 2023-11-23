const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const parentheses = document.querySelector("#parentheses");
const allClear = document.querySelector("#clear");
const backspace = document.querySelector("#del");
const equals = document.querySelector("#equal");

function clearDisplay() {
    display.textContent = "";
}

function updateDisplay(element) {
    display.textContent += element.textContent;
}

clearDisplay();

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if(number.textContent == "." && display.textContent.endsWith(".")) {
            return
        } else {
            updateDisplay(number);
        }
    })
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if(!display.textContent) {
            if(operator.textContent == "-") {
                updateDisplay(operator);
            }
            return
        }
        if(display.textContent.endsWith("+") || display.textContent.endsWith("-") || display.textContent.endsWith("×") || display.textContent.endsWith("÷")) {
            return
        } else {
            updateDisplay(operator);
        }
        
    })
});

parentheses.addEventListener("click", () => {
    updateDisplay(parentheses);
    switch (parentheses.textContent) {
        default:
            parentheses.textContent = ")";
            break;
        case "(":
            parentheses.textContent = ")";
            break;
        case ")":
            parentheses.textContent = "(";
            break;
    }
})

allClear.addEventListener("click", () => {
    clearDisplay();
})

backspace.addEventListener("click", () => {
    if(display.textContent) {
        display.textContent = display.textContent.slice(0, -1);
    }
})

equals.addEventListener("click", () => {
    if(display.textContent) {
        let equation = display.textContent.replace("÷", "/").replace("×", "*");
        try {
            let result = eval(equation);
            display.textContent = result.toString();
        } catch {
            display.textContent = "Syntax Error";
        }
    }
})