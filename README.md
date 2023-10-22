# Simple Calculator

This is a simple calculator web application built using HTML, CSS, and vanilla JavaScript. The calculator allows basic arithmetic operations such as addition, subtraction, multiplication, division, and calculating percentages.

## Usage

Simply open the `index.html` file in your browser or click on the github page link to use the calculator.

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, and division)
- Ability to calculate percentages
- Continuous calculation
- Clearing functionality to reset the calculator (AC button)
- Deleting the last character (DEL button)

## How it works

The script handles user input for numbers, operators, and various actions such as clear, delete, and calculations. It utilizes event listeners and a switch statement to determine the appropriate action for each button click. 

The `performContinuousCalculation` function allows continuous calculations by storing the previous result and updating it based on subsequent inputs. The `performCalculation` function is responsible for carrying out the mathematical operations based on the selected operator. The `eval()` function in JavaScript can execute arbitrary code, including potentially harmful scripts, making it a security risk when handling user input. To avoid this, instead of relying on `eval()` for calculations, the calculator script employs direct handling of user input and uses specific function to perform calculations based on the selected operator.
