/*
일반함수와 차이점
*/

function Student(age, name) {
    //일반 메서드 내부의 this는 global을 바라보게 된다.
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}은 ${this.age}세 입니다.`;
    }
    // return;
    // return `${this.name}은 ${this.age}세 입니다.`;
}

/*
일반 함수와 생성자 함수의 특별한 형식적인 차이는 없다.
(첫 문자를 대문자로 기술하여 구별하려고 노력함)

new 연산자와 함께 호출하면 생성자 함수로 동작하는 것이다.
만약 new 연산자와 함께 호출하지 않으면 일반 함수로 동작한다.*/

const student = Student(35, "이단비");
console.log(student); /*
erorr: return 반환된 것이 없기 때문에 undefined*/
console.log(age); /* 35
this(global)에 들어가있는 값이기 때문에 undefined이 아닌 35가 출력됨*/


function Dog(name, age) {
    console.log(new.target);
    console.log(this);

    if(!new.target/*나 자신*/) {
        //재귀 호출
        return new Dog(name, age); /*
        부정문으로 true가 되면서 다시 new로 리턴해주기?*/
    }
    console.log(this); //Dog {}
    this.name = name;
    this.age = age;
}

const dog = Dog("뽀삐", 1);
console.log(dog); //Dog { name: '뽀삐', age: 1 }