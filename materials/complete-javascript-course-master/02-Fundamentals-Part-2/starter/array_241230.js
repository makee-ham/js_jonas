'use strict';
/*
// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const Years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // not zero-based
console.log(friends[friends.length - 1]);

// Array is not a primitive value, so even though it is const, we can mutate it.
friends[2] = 'Jay';
console.log(friends);
// But not in entire array changing.
// friends = ['Bob', 'Alice']; // illegal

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann'. 2037 - 1991, friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
	return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

// array 직접 계산 불가. 요소 불러와서 계산할 것.
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
const.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/


// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// 제일 뒤에 요소 추가
const newLength = friends.push('Jay'); // returns length
console.log(friends);
console.log(newLength);

// 제일 앞에 요소 추가
friends.unshift('John'); // returns length
console.log(friends);

// 마지막 요소 제거
friends.pop(); // returns removed element
const popped = friends.pop();
console.log(popped);
console.log(friends);

// 첫 번째 요소 제거
friends.shift(); // returns removed element
console.log(friends);

// 요소 찾기 - 몇 번째?
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// 요소 존재 여부
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); // 강력 비교
console.log(friends.includes(23));

if (friends.includes('Steven')) {
	console.log("You have a friend called Steven");
}