/*
02. constructor-function (생성자 함수)
*/

const student = {
    name: "유관순",
    age: 15,
    getInfo: function() {
        return `${this.name}은 ${this.age}세 입니다.`;
    }
};

const student2 = {
    name: "홍길동",
    age: 20,
    getInfo: function() {
        return `${this.name}은 ${this.age}세 입니다.`;
    }
};

(function() {
    console.log("익명의 this");
    console.log(this.test);
})();

function Student(name, age) {
    console.log(this.test);
    this.name = name; //자신에게 name이라는 프로퍼티를 할당
    this.age = age;
    this.getInfo = function() {
        return `${this.name}은 ${this.age}세 입니다.`;
    }
};

const student3 = new Student("장보고", 23);
const student4 = new Student("이단비", 24);

console.log(student3.getInfo());
console.log(student4.getInfo());
