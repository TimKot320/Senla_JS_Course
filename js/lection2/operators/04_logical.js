//* Логические операторы

// expr1 && expr2 возвращает операнд expr1, если он может быть преобразован в false (запинается на первой лжи)

let a1 = true && true && true;
let a2 = true && false && true;
let a3 = "Cat" && "Dog"; 

console.log(a1); // true
console.log(a2); // false
console.log(a3); // Dog

// expr1 || expr2 возвращает операнд expr1, если он может быть преобразован в true (запинается на первой правде)

let b1 = true || true;
let b2 = "Cat" || "Dog";

console.log(b1); // true
console.log(b2); // Cat

// Логическое отрицание
let n1 = !true; 

console.log(n1); // false

let c1 = !!"someSrting";

console.log(c1); //true
