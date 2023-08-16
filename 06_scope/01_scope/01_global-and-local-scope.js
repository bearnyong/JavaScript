/*
01. 전역스코프와 지역스코프

전역은 코드의 가장 바깥 영역을 말하며 전역은 전역 스코프를 만든다.
전역에 변수를 선언하면 전역 스코프를 갖는 전역 변수가 되며 전역 변수는 어디서든지 참조할 수 있다.
-- 특별한 경우가 아니면 전역 변수 쓰지마용~~!!

지역이란 함수 몸체 내부를 말하며 지역은 지역 스코프를 만든다.
지역에 변수를 선언하면 지역 스코프를 갖는 지역 변수가 되며 자신의 지역 스코프와 하위 지역 스코프에서 유효한다.
*/

//전역변수(global변수)
var x = "global x";
var y = "global y";

function outer() {
    console.log(x);
    //outer의 지역변수
    var z = "outer's local z";
    console.log(y);
    console.log(z);

    function inner() {
        //inner의 지역변수
        var x = "inner's local x";
        console.log(x);
        console.log(y);
        console.log(z);
    }
    console.log("outer의 x : " + x); //global x
    inner();
}
outer();
console.log(x);

/*
프로그램 동작시

//선언부
var x;
var y;
var outer = function(){
    var z;
    var inner = function(){
        var x;
        x = "inner's local x"; //얘가 할당됨
        console.log(x);
        console.log(y);
        console.log(z);
    }
    z = "outer's local z";
}
x = "global x";
y = "global y";

//실행부
outer(); 
*/
