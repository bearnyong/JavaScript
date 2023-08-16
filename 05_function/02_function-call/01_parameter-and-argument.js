function hello(name) {
    console.log(name); //길동
    console.log(arguments); //[Arguments] { '0': '길동' }

    return `${name}님 안녕하세요`;
}

var result = hello("길동");
console.log(result); //길동님 안녕하세요

result = hello(); //undefined
console.log(result); //[Arguments] {} (enter) undefined님 안녕하세요

result = hello("홍길동", "홍박사", "님을 아세요?");
console.log(result);

//ES6 문법에서 지원되는 기본 매개변수 값을 이용하는 방법
function hi(name = "아무개") {
    //기본 값을 이용하는 경우 arguments의 인자로 인식되지 않는다.
    if(arguments.length!==1 || typeof name!=='string' || name.length===0) {
        throw new TypeError("인수는 1개여야하고 문자열 값을 가져야하며, 빈문자는 허용하지 않습니다..")
    }
    return `${name}님 안녕하세요`;
}

// result = hi("홍길동", "홍박사");
// result = hi(1); //error -> string type이 아님 (number type)
// result = hi(''); //error -> name.length===0
result = hi(' ');
console.log(result.length); //8

result = hi("홍길동");
console.log(result);