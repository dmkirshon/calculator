/**
 * Project: Calculator
 * Author: David Kirshon
 * Date: 10 Jan 2022
 */

// 

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const decimalButton = document.querySelector('.decimal');
const plusmnButton = document.querySelector('.plusmn');
const deleteButton = document.querySelector('.delete');
const valueTextDisplay = document.querySelector('.display');

let displayValue = '0';
let firstNumber = null;
let secondNumber = null;
let operator = '';
const maxEntered = 99999999999;
const maxDigits = 11;

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
    const enteredNumber = this.textContent;

    if (displayValue == 0 && !displayValue.includes('.')) {
        displayValue = enteredNumber;
        if(operator){
            operator.classList.remove('operatorSelected');
        }
    } else if(displayValue.length > maxDigits) {
        return;
    } else {
        displayValue = displayValue + enteredNumber;
    }
    valueTextDisplay.textContent = displayValue;

}

//operator

operatorButtons.forEach(btn => btn.addEventListener('click', enterOperator));

function enterOperator() {
    if (operator) {
        // switch operators otherwise evaluate pair values
        if (displayValue === '') {
            operator.classList.toggle('operatorSelected');
            operator = this;
            operator.classList.toggle('operatorSelected');
        }
        enterEqual();
    }

    // a number must be entered once an operation is selected
    if (displayValue !== ''){
    operator = this;
    operator.classList.toggle('operatorSelected');
    firstNumber = Number(displayValue);
    displayValue = '';
    }   
}

//equals

equalButton.addEventListener('click', enterEqual);

function enterEqual() {
    if (operator && firstNumber !== null && displayValue !== '') {
        secondNumber = Number(displayValue);
        displayValue = operate(operator.textContent, firstNumber, secondNumber).toString();
        displayValue = concatLargeValues(displayValue);

        valueTextDisplay.textContent = displayValue;
        
        firstNumber = null;
        secondNumber = null;
        operator = '';
    }

    // if NaN or Err then allow new numbers to be calculated
    if (displayValue.includes('Err')) {
        displayValue = '0';
    }
}

function concatLargeValues(value){
    if (value.length > maxDigits) {
        if (value.includes('.') && Math.abs(value) < maxEntered) {
            const intValue = Math.abs(Number(value).toFixed(0));
            const numberOfDigits = intValue.toString().length;
            const fixDigitsToFit = Math.abs(maxDigits - numberOfDigits);
            return Number(value).toFixed(fixDigitsToFit);
        }
        return Number(value).toExponential(maxDigits - 5);
    }
}

//clear

clearButton.addEventListener('click', enterClear);

function enterClear() {
    displayValue = '0';
    firstNumber = null;
    secondNumber = null;
    operatorButtons.forEach(btn => btn.setAttribute('class', 'operator'));
    operator = '';
    valueTextDisplay.textContent = displayValue;
}

//decimal

decimalButton.addEventListener('click', enterDecimal);

function enterDecimal() {
    if (!valueTextDisplay.textContent.includes('.')){
        displayValue = displayValue + '.'
        valueTextDisplay.textContent = displayValue;
    }
}

//plusminus

plusmnButton.addEventListener('click', enterPlusmn);

function enterPlusmn() {
    displayValue = (-Number(displayValue)).toString();
    displayValue = concatLargeValues(displayValue);
    valueTextDisplay.textContent = displayValue;
}

//delete

deleteButton.addEventListener('click', enterDelete);

function enterDelete() {
    if(displayValue === '') return;

    displayValue = displayValue.slice(0, -1)
    if (!Number(displayValue)) displayValue = '0';
    valueTextDisplay.textContent = displayValue;
}