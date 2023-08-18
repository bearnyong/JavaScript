/*
02. differances-from-regular-array

일반적인 의미의 배열은 각 요소가 동일한 데이터 크기를 가지며,
빈틈없이 연속적으로 이어져 있어 인덱스를 통한 임의의 요소에 한 번에 접근할 수 있는 고속 동작을 장점으로 한다.

하지만 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체로
각각의 메모리 공간이 동일한 크기를 갖ㅈ니 않아도 되고 연속적으로 이엉지지 않을 수도 있다.

연속적으로 이어지지 않는 배열을 희소배열이라고 한다.
자바스크립트의 배열은 내부적으로 해쉬 테이블로 구성되어 있다.
그래서 여러가지 타입을 하나의 배열에 넣을 수 있게 되는 것이다.
*/


/*
--프로퍼티 플래그
객체 프로퍼티는 값(value)와 함께 플래그(flag)라 불리는 특별한 속성 세 가지를 가진다.
1) writable : true이면 값을 수정할 수 있다. 그렇지 않으면 읽기만 가능하다.
2) enumerable : true이면 반복문을 사용해 나열할 수 있다. 그렇지 않다면 반복문을 사용해 나열할 수 없다.
3) configurable : true이면 프로퍼티 삭제나 플래그 수정이 가능하다. 그렇지 않다면 프로퍼티 삭제와 플래그 수정이 불가능하다.*/

console.log(Object.getOwnPropertyDescriptors([1,2,3])); /*
getOwnPropertyDescriptors() : 객체가 가지고 있는 property를 찾는 함수*/

const arr = [
    '홍길동',
    20,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {},
    function(){}
]
console.log(arr);

