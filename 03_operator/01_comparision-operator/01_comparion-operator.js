/*
기본적인 연산자의 사용은 자바와 다르지 않다.
자바스크립트에서 추가적으로 필요한 연산자와 관련한 내용을 학습해보자
*/

/*
01. comparison-operator(비교 연산자)
비교 연산자는 좌항과 우항의 비교 연산자를 비교한 다음 그 결과를 불리언 값으로 반호나한다.
if문이나 for문과 같은 제어문의 조건식에 주로 사용한다.
*/

/*
01.1. 동등/일치 비교 연산자
동등 비교(loose equality)연산자와 일치 비교(strict equlity)연산자는 비교하는 엄격성 정도가 다르다.
동등 비교(==, !=)연산자는 먼저 암묵적인 타입 변환을 통해 일치시킨 후 같은 값인지 비교한다.
일치 비교(===, !==)연산자는 타입과 값이 모두 일치하는지 비교한다.
*/

console.log(`1=='1' : ${1=='1'}`); //1=='1' : true
console.log(`1==true : ${1==true}`); //1==true : true
console.log(`1==='1' : ${1==='1'}`); //1==='1' : false
console.log(`1===true : ${1===true}`); //1===true : false

console.log(`0=='0' : ${0=='0'}`); //0=='0' : true
console.log(`0=='' : ${0==''}`); //0=='' : true
console.log(`0==false : ${0==false}`); //0==false : true
console.log(`0==='0' : ${0==='0'}`); //0==='0' : false
console.log(`0==='' : ${0===''}`); //0==='' : false
console.log(`0===false : ${0===false}`); //0===false : false

// null, undefined 비교
console.log(`null==undefined : ${null==undefined}`); //null==undefined : true
console.log(`null===undefined : ${null===undefined}`); //null===undefined : false(타입이 같지는 않다.)

// NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(`NaN==NaN : ${NaN==NaN}`); //NaN==NaN : false
console.log(`NaN===NaN : ${NaN===NaN}`); //NaN===NaN : false
console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`); //Number.isNaN(NaN) : true

var test = Number("dkdkdkd")
console.log(`Number.isNaN(NaN) : ${Number.isNaN(test)}`); //Number.isNaN(NaN) : true

console.log(`'hello'==='hello' : ${'hello'==='hello'}`); //'hello'==='hello' : true
console.log(`'hello'!=='hello' : ${'hello'!=='hello'}`); //'hello'!=='hello' : false

console.log(`'apple'<'banana' : ${'apple'<'banana'}`); //'apple'<'banana' : true -> a(97), b(98)
console.log(`'apple'>'banana' : ${'apple'>'banana'}`); //'apple'>'banana' : false

console.log(`'cat'<'Zoo' : ${'cat'<'Zoo'}`); //'cat'<'Zoo' : false -> c(99), Z(90)
console.log(`'cat'>'Zoo' : ${'cat'>'Zoo'}`); //'cat'>'Zoo' : true
