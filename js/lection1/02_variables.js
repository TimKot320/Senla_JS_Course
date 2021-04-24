// var, let, const

console.log('1: ' + name);

// Объявление переменной
var name;
// var name;

// Присвоение значения
name = 'Tim';
name = 'Greg';

// Именование переменных
/**
 * userName
 * user_name
 * userName1
 */

console.log(name);

// У let область видимости блочная, заключается в скобках {}
// Сейчас всегда используется let 
let a = 1;
console.log('a: ', a);

let b,
	c = 2,
	d = 'Hello';

a = 5;

console.log('a2: ', a);

// Константы до ES6 - переменные с большой буквы
// Объявление константы
const const_1 = 6;
// const_1 = 2; // error - константу переопределять нельзя
console.log(const_1);

const obj = {key: 'value'};
// Модифицирование объекта
obj.key = 'newValue';

console.log(obj);