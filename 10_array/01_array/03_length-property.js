/*
03.length-property

length 프로퍼티는 요소의 개수를 나타내는 0 이상의 점수를 값으로 갖는다.
*/

console.log([].length); //0

const arr = [1,2,3,4,5];
console.log(arr.length); //5

arr.push(7); //배열에 값을 추가한다.
console.log(arr); //[ 1, 2, 3, 4, 5, 7 ]

arr.pop(); //배열의 가장 마지막 값을 삭제한다.
console.log(arr); //[ 1, 2, 3, 4, 5 ]

arr.length = 10;
console.log(arr);
console.log(arr.length); //10
console.log(Object.getOwnPropertyDescriptors(arr));

/*
자바스크립트는 배열의 요소가 연속적으로 위치하지 않고
일부가 비어있는 희소배열을 문법적으로 허용한다.*/
const sparse = [,2,3];
console.log(sparse);
console.log(sparse.length);
console.log(Object.getOwnPropertyDescriptors(sparse));

/*
일반적으로 배열의 length는 배열의 요소의 개수,
즉 배열의 길이와 언제나 일치하지만 희소 배열의 length와 배열 요소의 개수는 일치하지 않는다는 것에 유의해야 한다.

자바스크립트 문법이 허용하긴 하지만 배열은 같은 타입의 요소를 연속적으로 위치 시키는 것이 효율적으로 동작한다. */
