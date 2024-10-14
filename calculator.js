// Function to update the display value
function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}

// Function to clear the display
function clearDisplay() {
    updateDisplay('0');
}

// Function to append value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        updateDisplay(value);
    } else {
        updateDisplay(display.innerText + value);
    }
}

// Function to delete the last character
function deleteLast() {
    const display = document.getElementById('display');
    if (display.innerText.length > 1) {
        updateDisplay(display.innerText.slice(0, -1));
    } else {
        updateDisplay('0');
    }
}

// Function to calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.innerText);
        updateDisplay(result);
    } catch (e) {
        updateDisplay('Error');
    }
}
