'use strict'

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('button'),
          input = document.querySelector('.calculator__display-input'),
          output = document.querySelector('.calculator__display-output'),
          backspace = document.querySelector('.backspace'),
          equal = document.querySelector('.equal'),
          clear = document.querySelector('.clear');

    // const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
    //       signs = ['+', '-', '×', '÷', '%'];

    // let firstNumber, sign, secondNumber;

    function calculator () {
        let result;

        input = input.value;
        console.log(input);
    }

    input.addEventListener('input', calculator);
});