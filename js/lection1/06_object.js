let user = {
	name: 'Tim',
	age: 23,
	work: 'study'
};

let key = 'name';

user.info = 'some value';

// user.money.cash = 150; // error
user.money = {};
user.money.cash = 150;

console.log(user['age']);
console.log(user[key]);
console.log(user['info']);
console.log(user['money']);