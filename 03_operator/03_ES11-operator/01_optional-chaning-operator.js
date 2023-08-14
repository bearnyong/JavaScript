/*
01. optional-chaing-operator(옵셔널 체이닝 연산자)
ES11(ECMAscript2020)에서 도입된 연산자로 좌항의 피연산자가 null 또는 undefined인 경우
undefined를 반환하고 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
*/

var obj = null;

// var val1 = obj.value;
// console.log(val1); //없는 프로퍼티 속성을 사용하려고 해서 에러...

var val = obj?.value; //var val = obj && obj.value; 얘랑 같음
console.log(val); //undefined

/*
옵셔널 체이닝 연산자 이전에는 논리연산자 &&를 사용한 단축 평가로 확인했다.
단 빈 문자열과 같은 falsy 값을 false로 취급해서 생기는 문제가 있다.
*/

var str = ''; //얘를 falsy로 취급하지 않는다..
var len = str?.length;
console.log(len); //0


var obj = {
    "key" : '',
    "value" : ''/*value 값에 null 불가능*/
}
console.log(obj?.value);