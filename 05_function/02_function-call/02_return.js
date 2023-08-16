function hello(name) {
    return `${name}님 안녕하세요`;
    //함수의 종단점은 return이다... 이로인해 return 이후의 구문은 실행되지 않는다.
    console.log("dfdfdfdfddf");
}
console.log(hello("민영")); //민영님 안녕하세요

function cal(a, b) {
    console.log(a+b);
    return; //함수를 종료시킬 때
}
console.log(cal(1,2));