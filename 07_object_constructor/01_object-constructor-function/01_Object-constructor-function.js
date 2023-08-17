/*
01. Object 생성자 함수

new 연산자와 함께 object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.
빈 객체 생성 이후 프로퍼티 또는 메서드를 추가하여 객체를완성할 수 있다.
*/

const student = new Object();
student.name = "유관순";
student.age = 16;
console.log(student); //{ name: '유관순', age: 16 }

let name = new String("스트링 객체");
let age = new Number("123");
console.log(name); //[String: '스트링 객체']
console.log(typeof age); //object

console.log(global); /* node 전체 환경 출력
node 환경의 global -> global 하위에 저 뭐시꺵이들이 있다? */