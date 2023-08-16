/*
03. const

const는 상수(constant)를 선언하기 위해 사용한다.
let과 마찬가지로 블록 레벨 스코프를 가지며 변수 호이스팅(hoisting)이 발생하지 않는것처럼 동작
*/

/*
03.1. 중복 선언 불가능 */
// const X; //초기화를 필수로 해야됨
const X = 1;
// const X = 2;

// X = 2; //const는 값이 바뀔 수 없음...(재할당 금지)
// console.log(X) 

/*
상수 : 재할당이 금지된 변수
const 키워드로 선언된 변수에 원시 값을 할당하면 원시 값은 변경할 수 없는 값이고
const 키워드에 의해 재할당이 금지되므로 할당 된 값을 변경할 수 있는 방법은 없다.
일반적으로 상수의 이름은 대문자로 선언해 명확하게 나타내며 여러 단어로 이루어진 경우 언더스코어를 이용한 스네이크 케이스로 표현한다.
*/

const student = {
    name : '유관순',
    age : 25
}
// student[key] = "dfdfdf"; //값을 변경할 수 없음
student.name = "홍길동"; //이렇게 안에 있는 속성 값은 바꿀 수 있음
console.log(student);

/*
ES6를 사용한다면 var 키워드를 사용하지 않는다.
★★★재할당이 필요한 경우 한정해 let 키워드를 사용하며 변수의 스코프는 최대한 좁게 만든다.★★★

변경이 발생하지 않고 읽기 전용으로 사용하는 원시 값과 객체에는 const 키워드를 사용한다.
const 키워드는 재할당을 금지하므로 var, let 보다 안전하다.


-- 전역 변수의 문제점 --

1. 모든 코드가 전역 변수를 참조하고 변경할 수 있는 "암묵적 결합"을 허용한다.
변수의 유효 범위가 크면 클수록 코드의 가독성은 나빠지고 의도치 않게 상태가 변경될 수 있는 위험성도 높아진다.

2. 전역 변수는 "생명주기가 길다"
메모리 리소스도 오래 소비하며, 상태 변경이 가능한 시간 및 기회가 많다
더욱이 중복된 변수명을통해 의도치 않는 재할당이 일어날 수도 있다.

3. 스코프 체인 상태에서 종점에 존재하므로 전역 변수의 검색 속도가 가장 느리다.

4. 네임스페이스가 오염된다.
자바스크립트는 파일이 분리되어 ㅣㅆ어도 하나의 전역 스코프를 공유하므로 예상치 못한 결과를 ㅏㄱ져올 수 있다.
---> 변수의 스코프는 좁을수록 좋다.
*/
