// for loop
// for loop keeps running while condition is TRUE
console.log('Lifting weights repetition 1');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}



// 배열 요소 꺼내서 for문으로 다른 배열 만들기
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonasArray
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);



const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);



// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}



// loop backwards
for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}



// loop inside loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}



// while loop
// for 반복문에 비해 다양한 상황에 변형, 적용 가능. 카운터가 필요 없고 조건만 쓰기 때문.
// 몇 번 반복하게 될지 모르는 상황에도 쓸 수 있다! 카운터 없이 반복할 경우 while을 쓰자.
// 몇 번 반복할지 알고 있으면 for문 쓰기.

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

// 6이 나올 때까지 굴려지는 주사위 만들기(첫 수가 바로 6이면 아예 뭐 안 나옴)
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}