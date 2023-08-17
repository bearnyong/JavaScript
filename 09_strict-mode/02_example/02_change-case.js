/*
02. change-case

02.1. 일반 함수의 this
생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 떄문에
strict mode에서는 일반 함수로써 호출하면 this에 undefined가 바인딩 된다.
*/

(function() {
    'use strict';

    function test() {
        console.log(this);
    }
    test(); //일반 function으로 실행시켰을 떄
    new test(); //test {} -> this가 자기 자신을 가리키고 있음
}());


(function(x) {
    'use strict';

    x = 2;
    console.log(arguments);
}(1,2,3,4,5));
