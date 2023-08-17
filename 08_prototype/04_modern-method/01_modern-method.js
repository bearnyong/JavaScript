/*
01. modern-method
*/

const user = {
    activate : true
};
// Object의 프로토타입을 이용하여 user를 만든다.
const student = Object.create(user);
console.log(student.activate); //true

// Object.getPrototypeOf(obj) - obj의 [[prototype]]을 반환
console.log(Object.getPrototypeOf(student) === user); //true

// student의 Prototype이 user -> {}로 변경
Object.setPrototypeOf(student, {});
console.log(Object.getPrototypeOf(student) === user); //false

const obj = {};
let key = "__proto__";
obj[key] = "값 설정"; //obj.__proto__로 들어감
console.log(obj[key]); //[Object: null prototype] {}

obj[key] = {test: "새로운 객체 덮어쓰기"};
console.log(obj[key]); /* { test: '새로운 객체 덮어쓰기' }
리터럴 형태는 안되고 객체 형태의 값만 넣을 수 있다 (설계적 오류) */
