'use strict'

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.calculator__buttons-item'),
          input = document.querySelector('.calculator__display-input'),
          output = document.querySelector('.calculator__display-output'),
          backspace = document.querySelector('.backspace'),
          equal = document.querySelector('.equal'),
          clear = document.querySelector('.clear');

    let previousSymbol = '';

    function clearAll() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Delete') {
                input.value = '';
            }
        });
        clear.addEventListener('click', () => {
            input.value = '';
        });
    }

    function deleteSymbol() {
        document.addEventListener('keydown', (event) => {
            if (document.activeElement !== input && event.key === 'Backspace') {
                input.value = input.value.slice(0, -1);
            }
        });
        backspace.addEventListener('click', () => {
            input.value = input.value.slice(0, -1);
        });
    }

    function displayInput() {
        input.addEventListener('input', (event) => {
            const inputValue = event.target.value;
            inputValue = inputValue.replace(/[^\d\+\-\*\/\%\s]/g, '').trim();
            const lastCharacter = inputValue[inputValue.length - 1];
            if (!isNaN(lastCharacter) || !isNaN(previousSymbol)) {
                event.target.value += lastCharacter;
                console.log(event.target.value);
            } else if (lastCharacter !== previousSymbol) {
                event.target.value = inputValue.slice(0, -1) + lastCharacter;
                console.log(event.target.value);
            }
            previousSymbol = lastCharacter;
        });
        document.addEventListener('keydown', (event) => {
            const button = event.key;
            if (document.activeElement !== input && /\d|[\+\-\*\/\%]/.test(button)) {
                if (!isNaN(button) || !isNaN(previousSymbol)) {
                    input.value += button;
                } else if (button !== previousSymbol) {
                    const inputValue = input.value;
                    input.value = inputValue.slice(0, -1) + button;
                }
                previousSymbol = button;
            }
        });
    }

    displayInput();
    clearAll();
    deleteSymbol();
});