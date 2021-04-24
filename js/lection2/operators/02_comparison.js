//* Операторы сравнения

let operand1 = '3';
let operand2 = 3;
let operand3 = '4';
let isResult;

// Не строгое сравнение - Равно (==) Возвращает true, если операнды равны.
isResult = (operand1 == operand2); // true

// Не строгое сравнение - Не Равно (!=) Возвращает true, если операнды не равны.
isResult = (operand1 != operand3); // true

// Cтрогое сравнение - Равно (===) Возвращает true, если операнды равны и имеют одинаковый тип.
isResult = (operand1 === operand2); // false

// Cтрогое сравнение - Не Равно (!==) Возвращает true, если операнды не равны и/или имеют разный тип.
isResult = (operand1 !== operand3); // true

console.log(isResult);

let str1 = 'Alex';
let str2 = 'alex';
let str3 = 'alexa';
let str4 = 'яблоко';
let str5 = 'яблыко';


// Больше (>) возвращает true, если операнд слева больше операнда справа.

// Больше или равно (>=) возвращает true, если операнд слева больше или равен операнду справа.

// Меньше (>) возвращает true, если операнд слева меньше операнда справа.

// Меньше или равно (>=) возвращает true, если операнд слева меньше или равен операнду справа.

console.log(str1 > str2); // false
console.log(str3 > str2); // true
console.log(str4 > str5); // false
