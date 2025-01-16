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

// Functions Accepting Callback Functions
