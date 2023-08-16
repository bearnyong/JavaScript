/*
02. let

var 키워드의 단점을 보완하기 위해 ES6에서는 새로운 변수 선언 키워드인 let, const를 도입
*/

/*
02.1. 변수 중복 선언 불가능 */
let message = "안녕";
// let message = "중복이 안되네";


/*
02.2. 블록 레벨 스코프 지원
---> 같은 스코프 내의 생명주기가 다름 */
let i = 0;
for(let i=0; i<10; i++) {}
console.log(i); //0


/*
02.3. hoisting 방식
---> hoisting 방식은 동일하되 안되는 것처럼 보이게 함...*/
// console.log(y);
// let y = "dldldldl";


/*
02.4. 엔진 동작 방식... */
let z = "1";
if(true) {
    console.log(z);
    // let z = "2";
}

/*
실행시 동작 과정

let z;
z = '1';
if(true) {
    let z; 
    console.log(z); //마치 호이스팅이 안된 것 처럼...
    z = "2";
}
*/
