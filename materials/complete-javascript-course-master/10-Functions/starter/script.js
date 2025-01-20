'use strict';

/*
// Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers, // flightNum = 'LH123'가 아니라 booking.flightNum = 'LH123'
    price, // {'aaa', 2, 800}가 아니라 {flightNum: 'aaa', numPassengers: 2}
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('aaa', 2, 800);
createBooking('bbb', 2);
createBooking('ccc', 5);

createBooking('ddd', undefined, 1000);
*/
///////////////////////////////////////////////////////

/*
// Value vs. Reference - How passing arguments works
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/
//////////////////////////////////////////

/*
// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🖐');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/
/////////////////////////////////////////////

/*
// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey'); // greeterHey가 곧 return된 function이 됨
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');
*/
////////////////////////////////////////////////

/*
// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah WIlliams'); // 첫 번째 인자?는 무조건 'this' 키워드가 어딜 가리키는지를 명시하는 데에 쓰인다.
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // (this가 뭔지, 배열)
console.log(swiss);

// 위와 결과는 같고, 이게 더 많이 쓰임
book.call(swiss, ...flightData);

/////////////////////////////////////
// The bind Method
// Bind method
// this를 아예 정해주며, 아규먼트 프리셋도 지정이 가능!
// book.call(eurowings, 23, 'Sarah WIlliams');

const bookEW = book.bind(eurowings); // this가 아예 정해짐
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); // 즉 bind로 프리셋도 가능...!
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();

document
  .querySelector('.buy')
  // bind 없이 하면 .buy에 해당하는 버튼이 this로 지정되어버림;;
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // this가 없으니 null로
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(23));
*/
////////////////////////////////////////////////

/*
// Immediately Invoked Function Expressions (IIFE)
// function that disappears right after it's called ONCE.
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// 이게 바로 IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})(); // statement가 아닌 expression으로 괄호로 감싸서 바꿔주고, ()로 바로 실행!

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();
// 얘도 위와 같음

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
*/
////////////////////////////////////////////////////

// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
