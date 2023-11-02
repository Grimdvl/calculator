window.addEventListener('DOMContentLoaded', () => {
    const stateInputs = {};

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

        const calculator = (event, elem, prop) => {
            checkNumInputs('#first-number');
            checkSignInputs('#sign');
            checkNumInputs('#second-number');

            elem.forEach((item) => {
                item.addEventListener(event, () => {
                    switch (item.nodeName) {
                        case 'firstNumber':
                            console.log('firstNumber');
                            state[prop] = item.value;
                            break;
                        case 'sign':
                            console.log('sign');
                            state[prop] = item.value;
                            break;
                        case 'secondNumber':
                            console.log('secondNumber');
                            state[prop] = item.value;
                            break;
                        default:
                            return 'Error';
                    }
                    console.log(state);
                });
            });
        };

        calculator('input', firstNumber, 'firstNumber');
        calculator('input', sign, 'sign');
        calculator('input', secondNumber, 'secondNumber');
    };

    changeState(stateInputs);
});
