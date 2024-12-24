// switch statement
const day = 'monday';

switch(day) {
	case 'monday': // day === 'monday'
		console.log("Plan course structure");
		console.log("Go to coding meetup");
		break;
	case 'tuesday':
		console.log("Prepare theory videos");
		break;
	case 'wednesday':
	case 'thursday':
		console.log("Write code examples");
		break;
	case 'friday':
		console.log("Record videos");
		break;
	case 'saturday':
	case 'sunday':
		console.log("Enjoy the weekend :D");
		break;
	default:
		console.log("Not a valid day!");
}

if(day === 'monday') {
	console.log("Plan course structure");
	console.log("Go to coding meetup");
} else if(day === 'tuesday') {
	console.log("Prepare theory videos");
} else if(day === 'wednesday' || day === 'thursday') {
	console.log("Write code examples");
} else if(day === 'friday') {
	console.log("Record videos");
} else if(day === 'saturday' || day === 'sunday') {
	console.log("Enjoy the weekend :D");
} else {
	console.log("Not a valid day!");
}


// Statements and Expressions
// Expression produces value, but Statement doesn't.
// Statement performs some actions.
// Expression is 'word', and Statement is 'complete sentence'.


// Conditional (Ternary) Operator
// this produces a value, so it is Expression
// -> can be written at Template Literal
const age = 23;
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water")

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18) {
	drink2 = 'wine';
} else {
	drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);