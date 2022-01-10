/**
 * Project: Calculator
 * Author: David Kirshon
 * Date: 04 Jan 2022
 */

// 

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const valueTextDisplay = document.querySelector('.display');

let displayValue = 0;
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
const maxEntered = 99999999999999;
const maxDigits = 14;

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
        return 'Err: Divide by Zero!';
    }
    return firstValue / secondValue;
}

//operate

function operate(operator, firstValue, secondValue) {
    let result = 0;
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

    if (displayValue === 0) {
        displayValue = enteredNumber;
    } else if(displayValue > maxEntered) {
        return;
    } else {
        displayValue = displayValue * 10 + enteredNumber;
    }
    valueTextDisplay.textContent = displayValue;

}

//operator

operatorButtons.forEach(btn => btn.addEventListener('click', enterOperator));

function enterOperator() {
    if (operator) {
        enterEqual();
    }
    operator = this.textContent;
    firstNumber = displayValue;
    displayValue = 0;
}

//equals

equalButton.addEventListener('click', enterEqual);

function enterEqual() {
    if (operator) {
        secondNumber = displayValue;
        displayValue = operate(operator, firstNumber, secondNumber);

        if (displayValue > maxEntered) {
            valueTextDisplay.textContent = displayValue.toExponential(10);
        } else if (displayValue.toString().includes('.')) {
            const intValue = displayValue.toFixed(0);
            const numberOfDigits = intValue.toString().length;
            const fixDigitsToFit = Math.abs(maxDigits - numberOfDigits);
            valueTextDisplay.textContent = displayValue.toFixed(fixDigitsToFit);
        } else {
            valueTextDisplay.textContent = displayValue;
        }
        
        
        
        
    }
    operator = '';

    // if NaN or Err then allow new numbers to be calculated
    if (typeof displayValue != 'number') {
        displayValue = 0;
    }
}

//clear

clearButton.addEventListener('click', enterClear);

function enterClear() {
    displayValue = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    valueTextDisplay.textContent = displayValue;
}

