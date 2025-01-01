'use strict';

/*
// Introduction to Objects
// 순서 데이터나 비구조화된 건 array로, 순서 상관없이 속성 이름으로 데이터 retrieve 하고 싶으면 object로
// property: value,
const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	age: 2037 - 1991,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);



// Dot vs. Bracket Notation
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey);

const interestedIn = propmt("What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends");

if(jonas[interestedIn]) { // 입력값이 속성에 있을 때
	console.log(jonas[interestedIn]);
} else { // 입력값이 속성에 없을 때 - undefined는 falsy value임을 이용
	console.log("Wrong request! Choose between firstName, lastName, age, job and friends");
}



// Adding new properties to object
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);


// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/



// Object Methods
// function 또한 value 만드는 expression이므로 객체의 값이 될 수 있음 == 이게 메소드임!!!
const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	birthYear: 1991,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Steven'],
	hasDriversLicense: true,

	//calcAge: function(birthYear) {
	//	return 2037 - birthYear;
	//}

	//calcAge: function() {
	//	console.log(this);
	//	return 2037 - this.birthYear;
	//}

	calcAge: function () {
		this.age = 2037 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
	}
};

console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);



// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(jonas.getSummary());



// Arrays are actually also objects, that's why they can have methods as well.