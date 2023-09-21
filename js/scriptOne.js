'use strict';

// 1) Calculator
const num1 = +prompt('1st number', ''),
      sign = prompt('sign', ''),
      num2 = +prompt('second number', '');

function calc(n1, s, n2) {
    if (s === '+') {
        return n1 + n2;
    } else if (s === '-') {
        return n1 - n2;
    } else if (s === '*') {
        return n1 * n2;
    } else if (s === '/') {
        return n1 / n2;
    } else {
        return 'error';
    }
}
alert(calc(num1, sign, num2));