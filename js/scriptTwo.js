'use strict';

// 2) Calculator
document.addEventListener("DOMContentLoaded", () => {
    const output = document.querySelector('.output');
    let numOne, sign, numTwo;

    function calculator() {
        if (!numOne || !sign || !numTwo) {
            output.textContent = '_____';
            return;
        }

        if (sign === '+') {
            output.textContent = numOne + numTwo;
        } else if (sign === '-') {
            output.textContent = numOne - numTwo;
        } else if (sign === '*') {
            output.textContent = numOne * numTwo;
        } else if (sign === '/') {
            output.textContent = numOne / numTwo;
        }
    }

    function getCalculate(selector) {
        const input = document.querySelector(selector);
        const btn = document.querySelector(selector);

        input.addEventListener('input', () => {
            switch(input.getAttribute('class')) {
                case 'number__one':
                    numOne = +input.value;
                    break;
                case 'math__sign':
                    sign = input.value;
                    break;
                case 'number__two':
                    numTwo = +input.value;
                    break;
            }
        });

        btn.addEventListener('click', () => {
            calculator();
        });
    }
    getCalculate('.number__one');
    getCalculate('.math__sign');
    getCalculate('.number__two');
    getCalculate('.btn');
});