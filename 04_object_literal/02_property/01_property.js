/*
01. property
객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.
*/

var student = {
    name : '유관순',
    age : 16
}
console.log(student);

/*
-- 프로퍼티 키
: 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
: 프로퍼티 값에 접근하기 위한 식별자 문자열이므로 따옴표를 사용하지만 식별자 네이밍 규칙을 따르는 경우, 사용하지 않음
: 단, 식별자 제이밍 규칙을 따르지 않는 이름은 따옴표를 반드시 사용해야 하며, 가능한 식별자 네이밍 규칙을 따르는 것을 권장한다.

-- 프로퍼티 값
: 자바스크립트에서 사용할 수 있는 모든 값
*/

var obj = {
    normal : "noxmal value",
    '@ s p a c e @' : 'space value',
    '' : '',
    0 : 1,
    var : "var",
    normal : "new value"
};

var key = 'test';
obj[key] = 'test value';

var symbolKey = Symbol('key');
obj[symbolKey] = "symbolTest";

console.log(obj);
console.log("=====");
console.log(obj[symbolKey]); //symbolTest
