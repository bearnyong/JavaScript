/*
함수 선언문
*/

//1.실행 전
console.log(hello("길동")); //길동님 안녕하세요
function hello(name) {
    return `${name}님 안녕하세요`;
}

/*
자바스크립트는 호이스팅(hoisting)이라는 개념이 존재한다.
*/

//2.실행 후
var hello = function hello/*함수명*/(name) {
    return `${name}님 안녕하세요`;
}
console.log(hello("길동")); //길동님 안녕하세요