'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//////////////////////////////////////////////////
// Working with Strings Part 3

// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

console.log(maskCreditCard(12345678));
console.log(maskCreditCard(4337281372821738278));
console.log(maskCreditCard('32332432432432432243324354'));

/*
//////////////////////////////////////////////////
// Working with Strings Part 2
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
//////////////////////////////////////////////////
// Working with Strings Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat...');
  else console.log('You got lucky!');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
*/

/*
/////////////////////////////////////////////////////
// Map Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log(...[question.keys()]);
console.log(...[question.values()]);
*/

/*
//////////////////////////////////////////
// Maps
// 객체와 다르게, Map은 모든 타입을 key값으로 가질 수 있다.
const rest = new Map();
rest.set('name', 'Classico Italiano'); // Set의 add같은 기능이 set임. set은 값을 추가할 뿐만 아니라, return하기도 함.
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

// 때문에, 메소드 체이닝이 가능하다. (연속으로 이어서 map에 요소 추가)
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// get은 key값 입력 시 value 불러온다.
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2])); // 생긴 건 같아도, key로 쓰인 [1, 2]와 여기서 호출할 때 쓴 [1, 2]는 다른 array(같은 객체(그중에서도 배열)가 아님)이기 때문에 이것의 결과는 undefined가 된다.
// ... 그러므로 변수로 저장해서 써먹는다...
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// 무려 html elements도 된다
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
*/

/*
//////////////////////////////////////////
// New Operations to Make Sets Useful!

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// intersection - 교집합; 겹치는 거 찾기
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

// union - 합집합; 세트 합치기
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union:', italianMexicanFusion);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// difference - 차집합; 첫 set엔 있지만 second one엔 없는 값들 반환
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference italian', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference mexican', uniqueMexicanFoods);

// symmetricDifference - 대칭차집합; 합집합-교집합
const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

// isDisjointFrom - 서로 교집합 없는지 확인. 없으면 true, 있으면 false
console.log(italianFoods.isDisjointFrom(mexicanFoods));
*/

/*
/////////////////////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // unique한 value를 set에 담기에, 중복되는 value는 제한다.

console.log(new Set('Jonas'));

console.log(ordersSet.size); // array의 length와 유사
console.log(ordersSet.has('Pizza')); // array의 includes와 유사
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

// Set은 unique하니까... 하나하나 직접 불러올 순 없다

for (const order of ordersSet) console.log(order); // Set은 iterable이기에, looping이 가능하다!

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // Set은 iterable이기에, spread 연산자도 가능하다! 이렇게 array로 변환할 수 있다.
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);
*/

/*
/////////////////////////////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties); // properties(keys)로 구성된 array가 나온다

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

/*
////////////////////////////////////////////////////
// Optional Chaining (?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');
*/

/*
///////////////////////////////////////////////////
// For-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
// for ~ of는 continue와 break가 된다!

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
*/

/*
//////////////////////////////////////////////////
// Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
//////////////////////////////////////////////////
// Nullish Coalescing Operator (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10; // 그냥 OR 쓰면 0명이 false돼서 디폴트 값인 10이 나옴 ㅠㅠ
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
// 이 ?? 연산자는 0과 ''를 true처럼? 인식함!!!
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
/////////////////////////////////////////
// Short Circuiting (&& and ||)

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas'); // 보나마나 true니까 뒤에 건 보지도 않음
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null); // 전부 false면 끝까지 보고 마지막 값 되돌려줌

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// 레스토랑에 numGuests property 있으면~ 그걸 돌려주고 : 아니면 10을 돌려줘 (이런 식으로 디폴트 값으로 쓰는듯)
console.log(guests1);

const guests2 = restaurant.numGuests || 10; // OR은 디폴트 값으로 쓰고.. AND는 함수 재생기(?)로 쓰고...
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas'); // 보나마나 false니까 뒤에 건 보지도 않음
console.log(7 && 'Jonas'); // 전부 true면 끝까지 보고 마지막 값 되돌려줌

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// 이러면 .orderPizza 있으니까 true라서, 뒤에 것도 evaluate 돼서 함수가 실행됨!! 짱 신기!!
*/

/*
////////////////////////////////////////////////////
// rest pattern can be used where we would write variable names separated by commas
// not 'values' separated by commas. << this uses spread pattern

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  // rest pattern은 항상, 가장 마지막에 있어야 나머지를 쓸어담는다.
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions (using rest parameters)
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/////////////////////////////////////////
/*
// Spread Operator '...'
// use when building an array, or passing values into a function
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects.
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// WRONG! : console.log(`${...str} Schmedtmann`);

// Real-world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

//////////////////////////////////////////////////
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole 21',
  starterIndex: 1,
});

// Desctructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starterMenu);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 13 };
({ a, b } = obj); // {}로 시작하면 'code 블록'을 기대하므로 ()로 감싸줌!
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
////////////////////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // destructuring assignment
console.log(x, y, z);
console.log(arr); // 기존 배열은 영향받지 아니함

let [main, , secondary] = restaurant.categories; // 두 번째 요소 스킵
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
