/*
01. error-case(암묵적 전역)
*/
(function() {
    "use strict";
    x = 10;
    console.log(x);
}/*()*/);


//2. 변수, 함수, 매개변수의 삭제
(function() {
    // "use strict";
    var x = 10;
    delete x;
}());


//3. 매개변수 이름의 중복
(function() {
    // "use strict";
    function test(x,y) {
        return x=x;
    }
    console.log(test(1,2));
}/*()*/);


//4. with문의 사용
(function() {
    // "use strict";
    const user = {
        test : 1
    }
    with(user) { //있지만 없다고 생각하자...(성능에 별로 도움 x -> 참조 연산자를 두 번 만들기 때문)
        console.log(/*user.*/test); //with문을 이용하면 참조를 생략할 수 있다.
    }
}());