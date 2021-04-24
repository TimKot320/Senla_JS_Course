//* Условие 

let hour, greeting;

hour = 24;

if (hour < 18) {
	greeting = "Добрый день";
} else if (hour > 18 && hour < 22) {
	greeting = "Добрый вечер";
} else {
	greeting = "Уже ночь";
}

console.log(greeting);