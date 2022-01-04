/**
 * Project: Calculator
 * Author: David Kirshon
 * Date: 04 Jan 2022
 */

// 

// arithmetic functions
// addOperation
function addOperation (firstValue, secondValue) {
    return firstValue + secondValue;
}
// subtractOperation
function subtractOperation (firstValue, secondValue) {
    return firstValue - secondValue;
}
// multiplyOperation
function multiplyOperation (firstValue, secondValue) {
    return firstValue * secondValue;
}
// divisionOperation
function divisionOperation (firstValue, secondValue) {
    if (secondValue === 0) {
        console.log('Error: Divide by Zero!');
        return;
    }
    return firstValue / secondValue;
}

//operate

//clear

