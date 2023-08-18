/*
01. array

배열은 여러 개의 값을 순차적으로 나열한 자료 구조이다.
*/

const a = ['12', 12, "dfdf"];
console.log(a);

const arr = ['바나나', '복숭아', '키위'];
console.log(arr);

// 생성자를 통해서 배열 객체를 할당함
const arr2 = new Array();
console.log(arr2);

// Array 생성자의 인자를 주어 배열의 길이를 결정함
const arr3 = new Array(10);
console.log(arr3); //[]
console.log(arr3.length); //10

// 전달된 인자가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열 생성
const arr4 = new Array(1,2,3);
console.log(arr4); //[1,2,3]
console.log(arr4.length); //3

const arr5 = new Array("5");
console.log(arr5); //[ '5' ]
console.log(arr5.length); //1 -> 요소가 하나라는 뜻
console.log(typeof parseInt(arr5[0])); //arr5가 가지고 있는 0번째 인덱스의 타입..


/*
01.3. Array.of 메소드
전달된 인수를 요소로 갖는 배열 생성*/
console.log(Array.of(10));
console.log(Array.of(1,2,3));
console.log(Array.of("hello", 'js'));

// 배열의 요소는 자신의 위치를 나타내는 인덱스를 가지며 배열의 요소에 접근할 때 사용한다.
console.log(arr[0]); //바나나
console.log(arr[1]); //복숭아
console.log(arr[2]); //키위
console.log(arr.length);

for(let index=0; index<arr.length; index++) {
    console.log(arr[index]); //3개의 인자를 갖는다.
    //arr[0], arr[1], arr[2]가 출력된다.
}

// 배열이라는 별도의 타입은 존재하지 않으며 배열은 객체 타입이다.
console.log(typeof arr);

/*
일반 객체와 배열은 값의 순서와 length 프로퍼티 유무에서 차이가 있다

인덱스로 표현되는 값의 순서와 length 프로퍼티를 갖는 배열은
반복문을 통해 순차적으로 값에 접근하기 적합한 자료구조이다.

배열의 장점은 처음부터 순차적으로 요소에 접근할 수 있으며
마지막부터 역순으로 요소에 접근할 수도 있다.*/
