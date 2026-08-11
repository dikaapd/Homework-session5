import { Calculator } from "./kalkulator.js";

const resultPlus = Calculator(60, 9, '+');
const resultMinus = Calculator(4567, 1234, '-');
const resultMultiple = Calculator (12, 10, '*');
const resultDivide = Calculator (100, 5, '/');

console.log(resultPlus,",", resultMinus,",", resultMultiple,",", resultDivide);
// console.log(resultMinus);
// console.log(resultMultiple);
// console.log(resultDivide);