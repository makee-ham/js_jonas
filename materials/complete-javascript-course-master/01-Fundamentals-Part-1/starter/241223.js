// type conversion (형변환)
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));  // NaN
console.log(typeof NaN);  // number -> 'invalid number'

console.log(String(23), 23);
// JS can't convert smt to 'undefined' or 'null'.
// Only String, Number, Boolean


// type coercion (다른 자료형끼리 만나면 강제형변환으로 통일시켜 줌)
console.log('I am ' + 23 + ' years old');  // num to str
console.log('23' - '10' - 3);  // str to num
console.log('23' + '10' + 3);  // num to str
console.log('23' * '2');
console.log('23' / '2');
console.log('10'-'4'-'3'-2+'5');  // guess!


// truthy & falsy values
// 5 falsy values: 0, '', undefined, null, NaN
// and except false, everything is truthy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));  // empty object  IS TRUE!
console.log(Boolean(''));

// When does Boolean type coercion happens?
const money = 0;
if(money) {
	console.log("Don't spend it all");
} else {
	console.log('You should get a job!');
}

let height;
if(height) {
	console.log('YAY! Height is defined');
} else {
	console.log('Height is UNDEFINED');
}


// Equality Operators : == vs. ===
const age = '18';
if(age == 18) console.log('You just became an adult! (loose)');
if(age === 18) console.log('You just became an adult! (strict)');
// For clean cord, avoid using loose one. Use strict one.

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);  // prompt로 입력 받으면 string임

if (favourite === 23) {
	console.log('Cool! 23 is an amazing number!');
} else if(favourite === 7) {
	console.log('7 is also a cool number');
} else {
	console.log('Number is not 23 or 7');
}

// != vs. !==
if(favourite !== 23) console.log('Why not 23?');


// Logical Operators
// a && b
// a || b
// !a