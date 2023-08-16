/*
함수 호이스팅
*/
console.log(hello); //[Function: hello]
console.log(hi); //undefined

console.log(hello("길동"));
// console.log(hi("길동")); //에러...

//함수 선언
function hello(name) {
    return `hello : ${name}님 안녕안하세요..`;
}

//함수 할당
var hi = function(name) {
    return `hi : ${name}님 안녕하세요.`
}
console.log(hi("길동")); //hi : 길동님 안녕하세요.

/*
실행 흐름

var hello = function hello(name) {
    return `hello : ${name}님 안녕안하세요..`;
}

var hi;

console.log(hello); //[Function: hello]
console.log(hi); //undefined

console.log(hello("길동"));
// console.log(hi("길동")); //에러... -> 선언만 되었고 function문은 아래에서 실행되기 때문에 에러 발생

function(name) {
    return `hi : ${name}님 안녕하세요.`
}
console.log(hi("길동")); //hi : 길동님 안녕하세요.
*/