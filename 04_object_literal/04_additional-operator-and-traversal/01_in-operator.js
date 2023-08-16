/*자주 쓰는 문법*/

var student = { //student 객체 생성
    name : '유관순',
    age : 16,
    test : null //왜 null을 썼는지 잘 생각해보기
}
console.log(student.name === undefined); //false
console.log(student.height === undefined); //true
console.log(student.test == undefined); //true

// 존재하는가?
console.log("name" in student); //true
console.log("height" in student); //false
console.log("test" in student); //true