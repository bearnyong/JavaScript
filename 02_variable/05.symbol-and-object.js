/*
05. symbol-and-object

05.1. symbol
심벌은 es6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다.
다른 값과 중복되지 않는 유일무이한 값으로 이름 충돌할 위험이 없는 객체의 유일한
프로퍼티 키를 만들기 위해서 사용한다.
심벌 이외의 원시 값은 리터럴을 통해 생성하지만 심벌은 Symbol 함수를 통해 호출하여 생성한다.
*/

var key = Symbol("key");
var key2 = Symbol("key");

console.log(typeof key); //symbol;
console.log(key); //Symbol(key)
console.log(key2); //Symbol(key)
console.log(key === key2); //false(무조건 다른 주소값을 가지고 있기 때문에... 이름은 같을 수 있지만 값을 같을 수 없다..!)


var obj = {};
obj[key] = 'value';

console.log(obj); //{ [Symbol(key)]: 'value' }
console.log(obj[key]); //value

