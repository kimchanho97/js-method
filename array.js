// Array

// 1) .length
let arr = [1, 2, 3];
console.log(arr.length); // 3


// 2) .at()
console.log(arr.at(0)); // 1
console.log(arr[0]); // 1
console.log(arr.at(-1)); // 3
console.log(arr[-1]); // undefined


// 3) .concat()
// 대상 배열과 주어진 배열을 병합해 새로운 배열 반환
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = ['a', 'b', 'c'];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4, 5, 6]
console.log(arr1.concat(arr3)); // [1, 2, 3, 'a', 'b', 'c']
console.log([...arr1, ...arr2]); // [1, 2, 3, 4, 5, 6]


// 4) .every()
// 대상 배열의 모든 요소가 콜백 테스트에서 참(Truthy)을 반환하는지 확인합니다.
arr = [1, 2, 3, 4];
const isValid = arr.every(item => {
    return item < 5;
});
console.log(isValid); // true
console.log(arr.every(item => item < 3)); // false


// 5) .filter()
// 콜백 테스트를 통과하는 모든 요소를 새로운 배열로 반환
arr = [1, 2, 20, 7, 9, 104, 0, 58];
const filterArr = arr.filter(el => el < 30);
console.log(filterArr); // [1, 2, 20, 7, 9, 0]
console.log(arr.filter(el => el < 0)); // []


// 6) .find()
// 콜백 테스트를 통과하는 첫번째 배열 반환
arr = [5, 8, 120, 12, 44];
const findItem = arr.find(item => item > 5);
console.log(findItem); // 8


// 7) .findIndex()
const idx = arr.findIndex(item => item > 100);
console.log(idx); // 2


// 8) .flat()
// 대상 배열의 모든 하위 배열을 지정한 깊이(Depth)까지 이어붙인 새로운 배열을 생성
arr = [1, 2, [3, 4, [5, 6]]];
console.log([1, 2, [3, 4]].flat()); // [1, 2, 3, 4]
console.log(arr.flat());  // [1, 2, 3, 4, [5, 6]]
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]


// 9) .forEach()
arr = ['a', 'b', 'c'];
arr.forEach((item, idx, itmes) => {
    console.log(item, idx, itmes);
});
// a 0 ['a', 'b', 'c']
// b 1 ['a', 'b', 'c']
// c 2 ['a', 'b', 'c']


// 10) .includes()
arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(7)); // false

let users = [
    { name: 'neo', age: 80 },
    { name: 'amy', age: 20 }
];
let user = users[0];
console.log(users.includes({ name: 'neo', age: 80 })); // false(서로 다른 객체이기때문)
console.log(users.includes(user)); // true


// 11) .join()
arr = ['a', 'b', 'c'];
console.log(arr.join(' ')); // a b b
console.log(arr.join('')); // abc


// 12) .map()
// 콜백의 리턴 값을 모아 새로운 배열 반환
arr = [1, 2, 3, 4];
const newArr = arr.map(el => el * 2);
console.log(newArr); // [2, 4, 6, 8]


// 13) .pop()
arr = ['a', 'b', 'c', 'd'];
console.log(arr.pop()); // d
console.log(arr); // ['a', 'b', 'c']


// 14) .push()
arr.push('z');
console.log(arr); // ['a', 'b', 'c', 'z']


// 15) .reduce()
// 마지막에 호출되는 콜백의 리턴값을 반환한다.
// 각 콜백의 리턴값은 다음 콜백으로 전달
arr = [1, 2, 3, 4];
const sum = arr.reduce((item, sum) => {
    return item + sum;
}, 0);
console.log(sum); // 10
console.log(arr.reduce((item, sum) => item+sum, 10)); // 20


// 16) .reverse()
arr = [1, 2, 3]
console.log(arr.reverse()); // [3, 2, 1]
console.log(arr); // [3, 2, 1]


// 17) .shift()
// popleft()와 동일
arr = [1, 2, 3, 4];
console.log(arr.shift()); // 1
console.log(arr); // [2, 3, 4]


// 18) .slice()
arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.slice(2, 5)); // [3, 4, 5]
console.log(arr.slice(4, -1)); // [5, 6, 7]
console.log(arr.slice(4)); // [5, 6, 7, 8]
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]


// 19) .some()
// 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인
arr = [1, 2, 3, 4];
const isValid1 = arr.some(item => item > 3); 
const isValid2 = arr.every(item => item > 3);
console.log(isValid1); // true
console.log(isValid2); // false


// 20) .sort()
// 대상 배열을 콜백의 반환 값(음수, 양수, 0)에 따라 정렬합니다.
// 콜백을 제공하지 않으면, 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬합니다.
// 대상 배열 원본이 변경된다.
arr = [1, 4, 5, 103, 20, 0, 77];
arr.sort()
console.log(arr); // [0, 1, 103, 20, 4, 5, 77] *문자열 기준으로 정렬

arr.sort((a, b) => a-b);
console.log(arr); // [0, 1, 103, 20, 4, 5, 77]
arr.sort((a, b) => b-a); 
console.log(arr); // [0, 1, 4, 5, 20, 77, 103]

users.sort((a, b) => a.age - b.age);
console.log(users); // [{name: 'amy', age: 20}, {name: 'neo', age: 80}]


// 21) .splice()
// 대상 배열에 요소를 추가하거나 삭제하거나 교체
// params: 시작 위치, 삭제 개수, 추가 요소
arr = [1, 2, 3, 4];
arr.splice(0, 1, 5, 6); 
console.log(arr); // [5, 6, 2, 3, 4]
arr.splice(2, 2);
console.log(arr); // [5, 6, 4]


// 22) .unshift()
// appendleft()와 동일
arr = [1, 2, 3, 4]
arr.unshift(999);
console.log(arr); // [999, 1, 2, 3, 4]


// 23) Array.from()
// 유사 배열(Array-like)을 실제 배열로 반환
// key값이 index숫자이면서 length값이 정의되어야 함
const arraylike = {
    0: 'a', 
    1: 'b', 
    2: 'c', 
    length: 3
};

console.log(arraylike.constructor === Array); // false
console.log(arraylike.constructor === Object); // true
Array.from(arraylike).forEach(item => {console.log(item)}); // a b c


// 24) Array.isArray()
arr = new Array();
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(arraylike)); // false