/**
 * while - перебирает блок кода, пока выполняется указанное условие
 */

let i = 0;
let text = "";

while (i < 10) {
	text += "The number is " + i + " ";
	++i;
	console.log(i++);
};