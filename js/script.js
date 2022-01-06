/**
 * Project: Calculator
 * Author: David Kirshon
 * Date: 04 Jan 2022
 */

// 

const numberButtons = document.querySelectorAll('.number');
const valueTextDisplay = document.querySelector('.display');
let result = 0;
let displayValue = 0;

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
        case '+':
            result = addOperation(firstValue, secondValue);
            break;
        case '-':
            result = subtractOperation(firstValue, secondValue);
            break;
        case '*':
            result = addOperation(firstValue, secondValue);
            break;
        case '/':
            result = addOperation(firstValue, secondValue);
            break;
        default:
    
    return result;
    }
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
    console.log(displayValue);
    valueTextDisplay.textContent = displayValue;

}

//clear

