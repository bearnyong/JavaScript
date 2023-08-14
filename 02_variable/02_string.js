/*
2. 문자열 타입
문자열 타입은 텍스트 데이터를 나타내는데 사용한다.
문자열은 작은 따옴표(''), 큰 따옴표(""), 또는 백틱(``)으로 텍스트를 감싼다.
자바는 문자열을 객체로 표현하지만 자바스크립트는 문자열을 원시 타입으로 변경한다.
*/

var string; //주소값을 참조할 수 있는 메모리 공간 할당
string = "javascript";
string = "JavaScript";
string = `JaVaScRict`;

console.log(string); //JaVaScRict
console.log(`java vs ${string}`); //java vs JaVaScRict(이크마6 문법)

text = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식";
console.log(text); //큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식

text = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열로 인식';
console.log(text); //작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열로 인식

/*
템플릿 리터럴
ES6부터 도입된 멀티라인 문자열, 표현식 삽입 등의 편리한 문자열 처리 기능을 제공하는 문자열 표기
이 때는 작은 따옴표, 큰 따옴표 대신 백틱을 사용해 표현한다.
*/

// 일반 문자열 내에서는 줄바꿈이 허용되지 않는다.
// var str = "안녕하세요
//             반갑습니다.";

// 백틱을 사용하면 줄바꿈이 허용되고 모든 공백이 있는 그대로 적용된다.
var str1 = `안녕하세요
반갑습니다.`;
console.log(str1); //안녕하세요(enter)반갑습니다.

var str2 = "안녕하세요 \n반갑습니다.";
console.log(str2); //안녕하세요(enter)반갑습니다.

var lastName = "홍";
var firstName = "길동";
console.log(`제 이름은 ${lastName} ${firstName} 입니다.`); //제 이름은 홍 길동 입니다.