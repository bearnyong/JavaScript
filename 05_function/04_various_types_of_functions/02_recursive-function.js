/*
02. recursive-function(재귀함수)

함수가 자기 자신을 호출하는 것을 재귀호출이라고 한다.
재귀 호출을 수행하는 함수인 재귀 함수는 반복되는 처리를 위해 사용한다.

스택오버플로우가 발생되기 쉬움... (조건문을 잘못 쓸 경우 무한루프에 빠질 수 있다...)
*/

function factorial(n) {
    if(n<=1) return 1;
    return n*factorial(n-1);
}

console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(3)); //6
console.log(factorial(4)); //24
console.log(factorial(5)); //120
