/*
순수함수와 비순수함수
순수함수: 외부 상태에 의존하지 않고 변경하지도 않는 함수
비순수함수: 외부 상태에 의존하거나 외부 상태를 변경하는 함수
*/

var cnt = 0;

// 순수 함수
function increase(n){ 
    if(typeof n!==Number) {
        TypeError("오류");
    }
    return ++n;
}
cnt = increase(cnt);
console.log(cnt); //1

// 비순수 함수
function decrease(){
    return --cnt; //전역 스코프에 있는 값 자체를 변경하기에
}
cnt = decrease();   
console.log(cnt); //0

cnt = decrease();
console.log(cnt); //-1
