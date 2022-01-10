/**
 * Project: Calculator
 * Author: David Kirshon
 * Date: 04 Jan 2022
 */

// 

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const valueTextDisplay = document.querySelector('.display');
let result = 0;
let displayValue = 0;
let firstNumber = 0;
let secondNumber = 0;
let operator = '';

// arithmetic functions
// addOperation
function addOperation(firstValue, secondValue) {
    return firstValue + secondValue;
}
// subtractOperation
function subtractOperation(firstValue, secondValue) {
    return firstValue - secondValue;
}
// multiplyOperation
function multiplyOperation(firstValue, secondValue) {
    return firstValue * secondValue;
}
// divisionOperation
function divisionOperation(firstValue, secondValue) {
    if (secondValue === 0) {
        console.log('Error: Divide by Zero!');
        return;
    }
    return firstValue / secondValue;
}

//operate

function operate(operator, firstValue, secondValue) {
    switch (operator) {
        case '\u002B':
            result = addOperation(firstValue, secondValue);
            break;
        case '\u2212':
            result = subtractOperation(firstValue, secondValue);
            break;
        case '\u00D7':
            result = multiplyOperation(firstValue, secondValue);
            break;
        case '\u00F7':
            result = divisionOperation(firstValue, secondValue);
            break;
        default:    
    }
    return result;
}

//numbers to display

numberButtons.forEach(btn => btn.addEventListener('click', enterNumber));

function enterNumber() {
    const enteredNumber = Number(this.textContent);

    if(displayValue === 0) {
        displayValue = enteredNumber;
    } else {
        displayValue = displayValue*10 + enteredNumber;
    }
    valueTextDisplay.textContent = displayValue;

}

//operator

operatorButtons.forEach(btn => btn.addEventListener('click', enterOperator));

function enterOperator() {
    operator = this.textContent;
    firstNumber = displayValue;
    displayValue = 0;

    valueTextDisplay.textContent = displayValue;
}

//equals

equalButton.addEventListener('click', enterEqual);

function enterEqual() {
    secondNumber = displayValue;
    displayValue = operate(operator, firstNumber, secondNumber);
    valueTextDisplay.textContent = displayValue;
}


//identify operation
//save display value save operation
//enter second number
//equal sign press => operate
// display operate result


//clear

