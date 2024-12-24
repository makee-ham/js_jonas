// Activating Strict Mode
'use strict';

let hasDriversLicens = false;
const passText = true;

// if (passText) hasDriverLicense = true;
if (passText) hasDriversLicense = true;
if (hasDriversLicens) console.log("I can drive :D");

// const interface = 'Audio';
// const private = 534;
// const if = 23;


// Functions
function logger() {
	console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples}` apples and ${oranges} oranges.;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');