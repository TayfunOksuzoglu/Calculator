// Get the display input element
const displayElement = document.querySelector('.display');

// Get all the buttons
const buttons = document.querySelectorAll('.buttons button');

// Create an object to store the calculator state
let currentInput = '';
let selectedOperator = null;
let previousResult = null;

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.dataset.value;

    // Switch statement to handle different button clicks
    switch (value) {
      // Case for numbers
      case '00':
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        // Append the number to the current number
        currentInput = currentInput + value;
        displayElement.value = currentInput;
        break;
      // Case for operators
      case '+':
      case '-':
      case '*':
      case '/':
      case '%':
        // Assign selected operator and display it
        displayElement.value = value;
        selectedOperator = value;

        performContinuousCalculation();

        break;
      // Case for '=' to calculate the result
      case '=':
        //
        performContinuousCalculation();
        //
        break;
      // Case for 'AC' to clear the calculator state
      case 'AC':
        currentInput = '';
        selectedOperator = null;
        previousResult = null;
        displayElement.value = '';
        break;
      // Case for 'DEL' to delete the last character
      case 'DEL':
        currentInput = currentInput.slice(0, -1);
        displayElement.value = currentInput;
        break;
      // Case for '.' to add a decimal point
      case '.':
        // If the current number does not already contain a decimal point, add one
        if (!currentInput.includes('.')) {
          currentInput += '.';
          displayElement.value = currentInput;
        }
        break;
    }
  });
});

function performContinuousCalculation() {
  if (previousResult !== null && currentInput !== '') {
    previousResult = performCalculation(
      previousResult, // previous number
      parseFloat(currentInput), // next number
      selectedOperator // operator
    );
    displayElement.value = previousResult; // Display the result of calculation
    currentInput = ''; // Clear the current input for the next calculation
  } else if (currentInput !== '') {
    // If there's current input but no previous result, make current input the previous result
    previousResult = parseFloat(currentInput);
    currentInput = '';
  }
}

// Perform mathematical operations
function performCalculation(prev, next, selectedOperator) {
  switch (selectedOperator) {
    case '+':
      return prev + next;
    case '-':
      return prev - next;
    case '*':
      return prev * next;
    case '/':
      return prev / next;
    case '%':
      return (prev * next) / 100; // Next is the percentage in this case. ie. 10% of 100 = (100 * 10) / 100
    default:
      return prev;
  }
}
