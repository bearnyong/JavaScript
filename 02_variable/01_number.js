/*
01. number(숫자타입)

자바의 경우 정수와 실수를 구분해 int, long, float, double 등과 같은 다양한 숫자 타입을 제공함
하지만 자바스크립트의 경우 하나의 숫자 타입(var)만 존재하고 모든 수를 실수로 처리한다.
*/

/*
01.1. 정수, 실수, 음수 모두 숫자 타입이다. */ 

var integer = 10; /*
=> (java) int 변수 = 10; */

var double = 5.5; /*
=> (java) flaot, double 변수 = 5.5; */

var negative = -1; /*
=> (java) int 변수 = -1; */


/*
01.2. 타입과 값이 모두 일치한 경우 */ 
console.log(10 == 10.0); //true
console.log(10 == 10.0) //(오토세미콜론)true


/*
01.3. 값이 일치한 경우 */ 
console.log(10/4); //2.5


/* 숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
1) Infinity: 양의 무한대
2) -Infinity: 음의 무한대
3) NaN: 산술 연산 불가(not-a-number)
*/

console.log(10/0); //Infinity
console.log(10/-0); //-Infinity
console.log(1*"문자열"); //NaN


/*
Number("문자열")의 경우 type 확인*/
console.log(Number("123")); //123
console.log(typeof Number("123")); //number
console.log(Number("문자열")); /* NaN
Number("숫자")의 경우 number로 인식하여 결과값이 출력되지만
Number("문자열")의 경우 산술 연산 불가 상태(NaN)가 된다. */


/*
숫자와 문자열을 곱했을 경우 결과 확인*/
console.log(2*"3"); //6


/*
변수 값을 바꿨을 경우  type 확인*/
console.log(typeof integer); //number
integer = "문자열";
console.log(typeof integer); //string
