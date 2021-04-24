let str = "Hello JS";
let newString;
let name = 'Tim';
let age = 21;

newString = str.length; // выводит длину строки
newString = str[6]; // выводит 6 символ строки
newString = str[str.length - 1]; // выводит первый с конца символ строки
newString = str.toLocaleUpperCase(); // приводит всю строку к верхнему регистру
newString = str.indexOf('JS'); // индекс первого вхождения
newString = str.slice(4, 6); // возвращает подстроку с указанного индекса
newString = str.slice(4, -1); // возвращает подстроку с указанного индекса
newString = str.substr(2, 5); // возвращает подстроку с указанного на указанную длину символов

// Конкатенация (сложение) строк
newString = 'Hello' + ' ' + 'JS';
newString = 'My name is ' + name;

// Шаблонные строки
newString = `My name is ${name}.`;

// Преобразование в строку
newString = age.toString();

console.log(newString);