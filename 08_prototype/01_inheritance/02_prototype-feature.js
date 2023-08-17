const user = {
    id : "user",
    login :  function() {
        console.log(`${this.id}님이 로그인 되었습니다.`);
    }
};

const student = {
    __proto__ : user
};

/*
prototype은 프로퍼티를 읽을 떄만 사용하며
프로퍼티를 추가, 수정, 삭제하는 연산은 객체에 직접 한다. */

student.id = "user01"; /*
login 메소드 내의 this는 프로토타입에 영향을 받지 않으며
메서드를 객체에서 호출, 또는 프로토타입에서 호출 상관없이 this는 언제나 . 앞에 있는 객체이다.*/
console.log(student); //{ id: 'user01' } : student에 id라는 속성 추가

student.login(); /*
메서드는 공유되지만 객체의 상태는 공유되지 않는다.*/

for(let prop in student) {
    console.log(prop);

    let isOwn = student.hasOwnProperty(prop);
    if(isOwn) {
        console.log(`객체 자신의 프로퍼티 ${prop}`)
    } else {
        console.log(`상속 프로퍼티 ${prop}`)
    }
}
