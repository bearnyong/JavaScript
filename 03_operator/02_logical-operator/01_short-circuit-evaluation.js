/*
01. logical-operator(논리 연산자)
||(or), &&(AND), !(NOT)의 논리 연산자는 피연산자를 논리 연산한다.

01.1. short-circuit-evaluation(단축 평가)
표현식을 평가하는 도중 평가 결과가 확정된 경우 평가 과정을 생략하는 것

OR, AND 연산자 표현식의 결과는 때로는 불리언 값이 아닐 수도 있다.

OR의 경우 'apple'이 이미 Truthy 값이여서 true로 평가되고,
논리 연산의 결과를 결정한 첫 번째 피연산자 apple을 그대로 반환한다.
*/
console.log('apple' || 'banana'); //apple(앞에서 true인 값이 있으면 앞의 값을 출력)
console.log(false || 'banana'); //banana
console.log('apple' || false); //apple

/*
AND의 경우 좌항, 우항 모두 확인해야 하므로
논리 연산의 결과를 결정하는 두 번째 피연산자 banana를 그대로 반환한다.
*/
console.log('apple' && 'banana'); //banana
console.log(false && 'banana'); //false
console.log('apple' && false); //false

// 단축 평가를 사용하면 if문을 대체할 수 있다.
var num = 1;
if (num % 2 == 0) {
    console.log("짝수입니다.");
    console.log("{}를 생략하는 것도 가능하다.");
}
else {
    console.log("홀수입니다."); //홀수입니다.
}

num%2 == 0 && console.log("짝수입니다."); //(참이 아니라서 실행 안 됨)
num%2 == 0 || console.log("홀수입니다."); //홀수입니다.

var obj = null;
// var val = obj.value; //value라는 프로퍼티가 없어서 오류...
var val = obj && obj.value;
console.log(val); //null