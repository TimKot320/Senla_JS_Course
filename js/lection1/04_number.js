let num;

num = 1 + '1';
num = parseFloat('50rem');
num = parseFloat('is50'); // NaN
num = Math.random(); // выводит рандомное число до 1
num = Math.floor(Math.random()*100); // выводит рандомное целое число до 100
num = num.toFixed(6); // округление до определенного числа знаков после запятой

console.log(num);