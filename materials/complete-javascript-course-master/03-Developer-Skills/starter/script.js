// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1991)); // write 'cl' and press enter & press 'Go Live' on status bar

// BUG TODO FIXME

/////////////////////////////////////////////////////////////

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

function printForecast(arr) {
  let forecast = "...";
  for (i = 0; i < arr.length; i++) {
    forecast += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  return forecast;
}
