/**
 * оператор - условный оператор
 * операнд
 * оператор
 * Присваение со сложеинем x += у	x = x + y
 * Присваение с вычитанием x -= у	x = x - y
 * Присваение с умножением x *= у	x = x * y
 * Присваение с делением x / = у	x = x / y
 * Присваение по модулю x % = у		x = x % y
 * В результате операции присваения операнду слева от оператора присвоения (знак "=") устанавливается значение, которое берется из правого операнда.
 */

let x = 0, y = 5;

x += y; // 0+5=5
x -= y; // 5-5=0
x %= y; // 0/5=0 

console.log('x: ', x);