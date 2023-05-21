// String

// 1) .length
let str = 'Hello World!';
console.log(str.length); // 12


// 2) .includes()
// params: 문자열, 시작 위치
console.log(str.includes('Hello')); // true
console.log(str.includes('hello')); // false
console.log(str.includes('Hello', 1)); // false
 

// 3) .indexOf()
// params: 문자열
console.log(str.indexOf('World'));   // 6
console.log(str.indexOf('ell'));     // 1
console.log(str.indexOf('World@'));  // -1


// 4) .padEnd()
str = '1234567';
console.log(str.padEnd(10, '0')); // 1234567000
console.log(str.padEnd(5, 'a')); // 1234567
console.log(str); // 1234567


// 5) .padStart()
console.log(str.padStart(10, '0')); // 0001234567
console.log(str); // 1234567


// 6) .replace()
// params: 찾는 문자열, 교체 문자열
str = 'Hello Hello!';
console.log(str.replace('Hello', 'Hi')); // Hi Hello!
console.log(str.replace(/Hello/g, 'Hi')); // Hi Hi!
console.log(str); // Hello Hello!


// 7) .slice()
// params: 시작위치, 종료위치
str = 'Hello World!';
console.log(str.slice(0, 5)); // Hello
console.log(str.slice(6, -1)); // World
console.log(str.slice(6)); // World!
console.log(str); // Hello World!


// 8) .split()
// params: 구분자
str = 'hello world every one!';
console.log(str.split(' ')); // ['hello', 'world', 'every', 'one!']


// 9) .toLowerCase()
str = 'Apple Banana Cherry';
console.log(str.toLowerCase()); // apple banana cherry
console.log(str); // Apple Banana Cherry


// 10) .toUpperCase()
console.log(str.toUpperCase()); // APPLE BANANA CHERRY
console.log(str); // Apple Banana Cherry


// 11) .trim()
str = `    hello world    \n\n`;
console.log(str); //    hello world    

console.log(str.trim()); // hello world