/**
 * for/of - используется для объектов, перебирает значения итеративного объекта
 * 
 * for (variable of iterable) {// блок кода будет выполняться}
 */

let txt = "JavaScript";
let x;

for (x of txt) {
	console.log(x);
	document.write(x + "<br >");
}

let cars = ["BMW", "Mersrdes", "AUDI"];
let d;

for (d of cars) {
	document.write(d + "<br >");
	console.log(d);
}