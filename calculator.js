// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Function to get input values as numbers (with default fallback)
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Event listener for addition
document.getElementById('add').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for subtraction
document.getElementById('subtract').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for multiplication
document.getElementById('multiply').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Event listener for division
document.getElementById('divide').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
