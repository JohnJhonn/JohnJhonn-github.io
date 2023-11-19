let buttons = document.querySelectorAll('.buttons button');
let previousDisplay = document.querySelector('.screen .previous');
let currentDisplay = document.querySelector('.screen .current');

let firstNumber = null;
let currentNumber = null;
let operator = '+';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerText;
        switch (value) {
            case ((value.match(/[0-9]/) || {}).input):
                currentNumber = currentNumber !== null ? currentNumber + value : value;
                break;
            case '.':
                currentNumber = currentNumber !== null ? currentNumber + value : '0.';
                break;
            case '±':
                currentNumber = -1 * currentNumber;
                break;
            case '%':
                currentNumber = 0.01 * currentNumber;
                break;
            case ((value.match(/[\+|\x|\÷]/) || {}).input):
                if (currentNumber) {
                    if (firstNumber) {
                        performCalculation();
                    }
                    operator = value;
                    firstNumber = currentNumber;
                    currentNumber = null;
                }
                break;
            case '=':
                performCalculation();
                firstNumber = null;
                break;
            case 'AC':
                firstNumber = null;
                currentNumber = null;
                operator = '+';
                break;
        }
        updateDisplay();
    });
});

const performCalculation = () => {
    switch (operator) {
        case '+':
            currentNumber = Number(firstNumber) + Number(currentNumber);
            break;
        case '-':
            currentNumber = Number(firstNumber) - Number(currentNumber);
            break;
        case 'x':
            currentNumber = Number(firstNumber) * Number(currentNumber);
            break;
        case '÷':
            currentNumber = (Number(firstNumber) / Number(currentNumber)).toFixed(5);
            break;
    }
};

const updateDisplay = () => {
    previousDisplay.innerText = firstNumber !== null ? firstNumber + '' + operator : '';
    currentDisplay.innerText = currentNumber !== null ? currentNumber : '';
};

const returnButton = document.getElementById("returnButton");

returnButton.addEventListener("click", function() {
    window.location.href = "../index.html";
});