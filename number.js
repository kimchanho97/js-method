// Number

// 1) .toFixed()
let num = 3.14159265;
console.log(num.toFixed(2)); // 3.14
console.log(typeof num.toFixed(2)); // string
console.log(parseFloat(num.toFixed(2))); // 3.14
console.log(typeof parseFloat(num.toFixed(2))); // number


// 2) .toLocaleString()
num = 1000000;
console.log(num.toLocaleString()); // 1,000,000
console.log(typeof num.toLocaleString()); // string
console.log(`${num.toLocaleString()}원`); // 1,000,000원


// 3) Number.isInterger()
const int = 314;
const pi = 3.14;
console.log(Number.isInteger(int)); // true
console.log(Number.isInteger(pi)); // false


// 4) Number.isNaN()
const num1 = NaN;
const num2 = 123;
const nullPoint = null;
console.log(Number.isNaN(num1)); // true
console.log(Number.isNaN(num2)); // false
console.log(Number.isNaN(nullPoint)); // false


// 5) Number.parseInt()
str = '3.141592';
num = 3.141592;
console.log(Number.parseInt(str)); // 3
console.log(Number.parseInt(str, 10)); // 3
console.log(parseInt(num)); // 3

str = '110110';
console.log(Number.parseInt(str, 2)); // 54


// 6) Number.parseFloat()
str = '3.141592';
console.log(Number.parseFloat(str)); // 3.141592
console.log(typeof Number.parseFloat(str)); // number