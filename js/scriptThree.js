'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('button'),
          output = document.querySelector('.output p'),
          allClear = document.querySelector('.clear');
          
    let numberOne = '',
        numberTwo = '',
        sign = '',
        finish = false;

    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
          signs = ['+', '-', '×', '÷'];
    
    function clearAll() {
        numberOne = '';
        numberTwo = '';
        sign = '';
        finish = false;
        output.textContent = '';
    };

    allClear.addEventListener('click', clearAll);
 
    buttons.forEach((btn) => {
        btn.addEventListener('click', function (event) {
            if (event.target.tagName !== 'button' && event.target.classList.contains('clear')) {
                return;
            }
            output.textContent = '';
            const key = event.target.textContent;
    
            if (numbers.includes(key)) {
                if (numberTwo === '' && sign === '') {
                    numberOne += key;
                    output.textContent = numberOne;
                } else if (numberOne !== '' && numberTwo !== '' && finish) {
                    numberTwo = key;
                    finish = false;
                    output.textContent = numberOne;
                } else {
                    numberTwo += key;
                    output.textContent = numberTwo;
                }
            }
    
            if (signs.includes(key)) {
                sign = key;
                output.textContent = sign;
                console.log(numberOne, numberTwo, sign);
                return;
            }

            if (key === '=') {
                if (numberTwo === '') {
                    numberTwo = numberOne;
                }
                switch (sign) {
                    case '+':
                        numberOne = (+numberOne) + (+numberTwo);
                        break;
                    case '-':
                        numberOne = numberOne - numberTwo;
                        break;
                    case '×':
                        numberOne = numberOne * numberTwo;
                        break;
                    case '÷':
                        if (numberTwo === '0') {
                            output.textContent = 'Error';
                            numberOne = '';
                            numberTwo = '';
                            sign = '';
                            return;
                        }
                        numberOne = numberOne / numberTwo;
                        break;
                }
            finish = true;
            output.textContent = numberOne;
            console.table(numberOne, sign, numberTwo);
            }
        });
    });
});