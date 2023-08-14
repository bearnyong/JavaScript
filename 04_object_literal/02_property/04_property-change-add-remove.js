var dog = {
    name : '데마시아'
}
dog.name = '두부';
console.log(dog); //{ name: '두부' }

dog['name'] = "두부";
console.log(dog); //{ name: '두부' }

/*
프로퍼티 동적 추가
존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당된다.
*/

dog.age = 3;
console.log(dog.age); //3
console.log(dog); //{ name: '두부', age: 3 }

//속성 삭제
delete dog.age;
console.log(dog); //{ name: '두부' }

//없는 프로퍼티 속성을 삭제할 경우, 
delete dog.something;
console.log(dog); //{ name: '두부' }(무시한다)
