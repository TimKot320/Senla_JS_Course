// function declaration

// Можно вызывать функцию до ее объявления
// multiply();
// multiply();

function multiply (o1, o2) {
	console.log(o1 * o2);
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