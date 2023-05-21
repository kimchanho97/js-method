// Object

// 1) Object.assign()
// 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사하고 대상 객체를 반환
const target = {0: 'a', 1: 'b'};
const source1 = {1: 'bb', 2: 'c'};
const source2 = {2: 'cc', 3: 'd'};
const result = Object.assign({}, target, source1, source2);
const result1 = {...target, ...source1, ...source2};

console.log(result); // {0: 'a', 1: 'bb', 2: 'cc', 3: 'd'}
console.log(target); // {0: 'a', 1: 'b'}
console.log(result1); // {0: 'a', 1: 'bb', 2: 'cc', 3: 'd'}


// 2) Object.entries()
// 주어진 객체의 각 속성과 값으로 이루어진 배열들이 연속된 배열 반환
const user = {
    name: 'chan',
    age: 20,
    isTall: true
}
for (const [key, value] of Object.entries(user)){
    console.log(key, value);
}
// name chan
// age 20
// isTall true


// 3) Object.keys()
console.log(Object.keys(user)); // ['name', 'age', 'isTall']


// 4) Object.values()
console.log(Object.values(user)); // ['chan', 20, true]