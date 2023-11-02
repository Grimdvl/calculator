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

    // transform value to operators
    const checkSignInputs = (selector) => {
        const signInputs = document.querySelectorAll(selector);

        signInputs.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^+\-*/%^]/g, '');
            });
        });
    };

    // Calculator
    const changeState = (state) => {
        const firstNumber = document.querySelectorAll('#first-number');
        const sign = document.querySelectorAll('#sign');
        const secondNumber = document.querySelectorAll('#second-number');
        const button = document.querySelectorAll('#button');

        const calculator = (event, elem, prop) => {
            checkNumInputs('#first-number');
            checkSignInputs('#sign');
            checkNumInputs('#second-number');

            elem.forEach((item) => {
                item.addEventListener(event, () => {
                    const value = item.value;
                    switch (item.nodeName) {
                        case 'INPUT':
                            if (item.id === 'first-number') {
                                state[prop] = value;

                            } else if (item.id === 'second-number') {
                                state[prop] = value;

                            }
                            break;
                        case 'SELECT':
                            if (item.id === 'sign') {
                                state[prop] = value;
                                
                            }
                            break;
                        case 'BUTTON':
                            if (item.id === 'button') {
                                state[prop] = value;

                            }
                            break;
                        default:
                            console.log('Error');
                    }
                    console.log(state);
                });
            });
        };

        calculator('input', firstNumber, 'firstNumber');
        calculator('change', sign, 'sign');
        calculator('input', secondNumber, 'secondNumber');
        calculator('click', button, 'button');
    };

    changeState(stateInputs);
});
