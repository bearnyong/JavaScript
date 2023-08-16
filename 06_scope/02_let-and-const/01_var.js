/*
01. var

ES5까지 변수를 선언할 수 있는 유일한 방법은 var을 이용하는 것이였으나
다음과 같은 몇 가지 문제를 이야기 한다.
*/

/*
01.1. 변수 중복 선언 가능 */
var message = "안녕하세요";
console.log(message); //안녕하세요

var message = "중복 선언에도 문제가 없어용..";
console.log(message); //중복 선언에도 문제가 없어용..

var message;
console.log(message); //중복 선언에도 문제가 없어용..

/*
프로그램 동작시
(엔진이 해석을 다음과 같이 한다.)

var message;
var message;
var message;

var message = "안녕하세요";
console.log(message);
var message = "중복 선언에도 문제가 없어용..";
console.log(message);
console.log(message);
*/


/*
01.2. 함수 레벨 스코프 */
var i = 0;
for(var i=0; i<10; i++) {}
console.log(i); //10

/*
프로그램 동작시

var i;
var i;
i = 0;

for(var i=0; i<10; i++) {}
console.log(i);
*/


/*
01.3. hoisting의 선언부 */
console.log(test);
test = "반가워요";
console.log(test);
var test;