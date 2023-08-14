/*
자바스크립트 공부 순서
1. core: 코어
2. browser: dom
*/

/* data-type은 값의 종류를 말하며 자바스크립트(es6)는 7개의 데이터 타입을 제공한다. */
// node.js -> 구글 크롬엔진 vs8(javaScript) , v8 엔진을 로컬에서 실행이 가능하도록 만든 것이 node이다...

/*
01. 숫자타입
자바의 경우 정수와 실수를 구분해 int, long, float, double 등과 같은 다양한 숫자 타입을 제공함
하지만 자바스크립트의 경우 하나의 숫자 타입(var)만 존재하고 모든 수를 실수로 처리한다.
*/

// 정수, 실수, 음수 모두 숫자 타입이다.
var integer = 10; //(java)int 변수 = 10;
var double = 5.5; //(java)flaot, double 변수 = 5.5;
var negative = -1; //(java)int 변수 = -1;

// 타입과 값이 모두 일치한 경우
console.log(10 == 10.0); //true
// 값이 일치한 경우
console.log(10 == 10.0) //(오토세미콜론)true

console.log(10/4); //2.5

/*
숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
Infinity: 양의 무한대
-Infinity: 음의 무한대
NaNL 산술 연산 불가(not-a-number)
*/

console.log(10/0); //Infinity
console.log(10/-0); //-Infinity
console.log(1*"문자열"); //NaN
console.log(Number("123")); //123
console.log(typeof Number("123")); //number
console.log(Number("문자열")); //NaN
console.log(2*"3"); //6

console.log(typeof integer); //number
integer = "문자열";
console.log(typeof integer); //string