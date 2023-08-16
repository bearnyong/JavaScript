//ES6
var student = { //student 객체 생성
    name : '유관순',
    age : 16,
    getInfo(){
        console.log(`${this.name}(은)는 ${this.age}세 입니다.`);
    }
};

for(var key in student) {
    console.log(`key : ${key}`);
    console.log(`student[key] : ${student[key]}`);
}

/*
실행 결과
key : name
student[key] : 유관순
key : age
student[key] : 16
key : getInfo
student[key] : getInfo(){
        console.log(`${this.name}(은)는 ${this.age}세 입니다.`);
    }
*/