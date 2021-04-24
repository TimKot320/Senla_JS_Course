// function declaration

// Можно вызывать функцию до ее объявления
// multiply();
// multiply();

let y = {
	key: 'value',
};

function multiply (o1, o2) {
	let x;
	// console.log(y);
	// console.log(o1 * o2);
	return o1 * o2;
} // функция не сработает если ее просто объявить
multiply();

// function expression
let sum = function () {
	console.log('new expression');
};
sum();

// Self invoked function - самовызывающаяся функция - функция-инструкция
(function () {
	console.log('Self invoked function');
})();

// Стрелочные функции - arrow function
let hello = () => {
	return "Hello Tim";
};

// hello = () => "Heelo World!";

let result = multiply(3, 5);
// console.log(result);

// console.log(multiply); // выведет объект


// параметры по уиолчанию

function subtractionIf (x, y) {
	if (x === undefined) {
		return new Error ('x не передан'); // функия прерывается на первом return
	}
	if (y === undefined) {
		return new Error ('y не передан');
	}
	let a = x;
	let b = y;
	return a - b;
};

// параметры по уиолчанию
function subtraction (x = 1, y = 1, ...arg) {
	let a = x;
	let b = y;
	console.log(arg.length);
	console.log(arg);
	return a - b;
};
// let subtractionResult = subtraction();
let subtractionResultWithArgs = subtraction(5, 2, 4, 8, 6);

// console.log(subtractionResult);

// на самостоятельное изучение деструктуризация