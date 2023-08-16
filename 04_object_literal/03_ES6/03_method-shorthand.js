/*
3. 메서드 단축 표현
*/

var dog = {
    name : '뽀삐',
    eat : function(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`) //뽀삐(은)는 고구마를 맛있게 먹어요
    }
}
dog.eat('고구마');


//ES6
var dog2 = {
    name : '두부',
    eat(food) { //function을 키값으로 받는다?
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`) //두부(은)는 고구마를 맛있게 먹어요
    }
}
dog2.eat("고구마");
