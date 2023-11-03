window.addEventListener('DOMContentLoaded', () => {
    let stateInputs = {};

    // transform value to numbers
    const checkNumInputs = (selector) => {
        const numInputs = document.querySelectorAll(selector);

        numInputs.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^0-9.]/g, '');
            });
        });
    };

    const calculate = (firstNum, operator, secondNum) => {
        let result;

        switch (operator) {
            case '+':
                result = firstNum + secondNum;
                break;
            case '-':
                result = firstNum - secondNum;
                break;
            case '*':
                result = firstNum * secondNum;
                break;
            case '/':
                result = firstNum / secondNum;
                break;
            case '%':
                result = firstNum % secondNum;
                break;
            case '**':
                result = firstNum ** secondNum;
                break;
            default:
                result = 'Invalid operator';
        }
        return result;
    };

    // Calculator
    const changeState = (state) => {
        // const firstNumber = document.querySelectorAll('#first-number');
        // const sign = document.querySelectorAll('#sign');
        // const secondNumber = document.querySelectorAll('#second-number');
        const button = document.querySelectorAll('#button');

        // const firstNumberOutput = document.querySelector('.output-first');
        // const signOutput = document.querySelectorAll('.output-sign');
        // const secondNumberOutput = document.querySelector('.output-second');
        const numbers = document.querySelectorAll('.number');
        const signs = document.querySelectorAll('.sign');
        const resultOutput = document.querySelector('.output-result');

        const calculator = (event, elem, prop) => {
            checkNumInputs('#first-number');
            checkNumInputs('#second-number');

            elem.forEach((item, i) => {
                item.addEventListener(event, () => {
                    switch (item.nodeName) {
                        case 'INPUT':
                            const inputNumber = numbers[i];
                            if (inputNumber) {
                                if (i === 0) {
                                    const num1 = +inputNumber.value;
                                    numbers[2].textContent = num1;
                                    result = calculate(num1, signs[0], numbers[1])
                                    resultOutput.textContent = result;
                                    // console.log(num1);
                                    // console.log(numbers[3]);
                                } else if (i === 1) {
                                    const num2 = +inputNumber.value;
                                    numbers[3].textContent = num2;
                                    result = calculate(numbers[3], signs[0], num2)
                                    resultOutput.textContent = result;
                                }
                            }
                            // console.log(item);
                            // console.log(i);
                            // if (item.id === 'first-number') {
                            //     state[prop] = item.value;
                            //     firstNumberOutput.textContent = item.value;
                            //     result = calculate(+firstNumberOutput.textContent, sign[0].value, +secondNumberOutput.textContent);
                            //     resultOutput.textContent = result;
                            // } else if (item.id === 'second-number') {
                            //     state[prop] = item.value;
                            //     secondNumberOutput.textContent = item.value;
                            //     result = calculate(+firstNumberOutput.textContent, sign[0].value, +secondNumberOutput.textContent);
                            //     resultOutput.textContent = result;
                            // }
                            // state[prop] = i;
                            // if (item.getAttribute('type') === 'number') {
                            //     state[prop] = i;
                                // elem.forEach((num, j) => {
                                //     item[i].textContent = 
                                // });
                            // }
                            break;
                        case 'SELECT':
                            // const inputSign = signs[i];
                            if (signs) {
                                const sign = signs.value;
                                signs[2].textContent = num1;
                                result = calculate(num1, signs[0], numbers[1])
                                resultOutput.textContent = result;
                                // state[prop] = item.value;
                                // signOutput.forEach(item =>{
                                //     item.textContent = item.value;
                                // });
                                // result = calculate(+firstNumberOutput.textContent, item.value, +secondNumberOutput.textContent);
                                // resultOutput.textContent = result;
                            }
                            break;
                        case 'BUTTON':
                            if (item.id === 'button') {
                                state[prop] = item.value;
                                result = calculate(+firstNumberOutput.textContent, sign[0].value, +secondNumberOutput.textContent);
                                resultOutput.textContent = result;
                            }
                            break;
                        default:
                            console.log('Error');
                    }
                    // console.log(state);
                });
            });

            return result;
        };

        // calculator('input', firstNumber, 'firstNumber');
        // calculator('input', secondNumber, 'secondNumber');
        // calculator('change', sign, 'sign');
        // calculator('change', signOutput, 'sign');
        calculator('input', numbers, 'firstNumber');
        // calculator('input', numbers, 'secondNumber');
        calculator('change', signs, 'sign');
        calculator('click', button, 'button');
    };

    changeState(stateInputs);
});
