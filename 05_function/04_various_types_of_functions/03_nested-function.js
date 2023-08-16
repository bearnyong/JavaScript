/*
03. nested-function(중첩함수)

함수 내부에 정의된 함수를 중첩함수 또는 내부함수라고 한다.
중첩함수를 포함하는 함수는 외부함수라고 한다.
일반적으로 중첩함수는 자신을 포함하는 외부함수를 돕는 헬퍼함수의 역할을 한다.
*/

//ES6
function outer() {
    var outerVal = '외부함수';
    function inner() {
        var innerVal = "내부함수";
        console.log(outerVal/*외부함수*/, innerVal/*내부함수*/);
    }
    inner();
}
outer();

/*
실행 흐름(hoisting)

var outer = function() {
    var outerVal;
    var inner = function() {
        var innerVal;
        innerVal = "내부함수";
        console.log(outerVal, innerVal);
    }
    outerVal = "외부함수";
    inner();
}
*/
