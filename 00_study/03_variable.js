
/* 1. Use strict */
// added in ES 5
// use this for Valina Javascript.
'use strict';



/* 2. variable (=변수) */
// let 키워드 이용 (added in ES6에서 추가됨)
// 자바스크립트에서 변수를 선언할 수 있는 키워드는 오직 let뿐이다...
let globalName = 'global name'; 
{
    /*스코프 안에서 작성한 코드들은 스코프 안에서만 유효하다.*/
    let name = 'ellie';
    console.log(name);

    name = 'hello';
    console.log(name);
}
console.log(globalName); //스코프 밖의 globalName은 콘솔창에 출력되지만
console.log(name); //스코프 안에서 선언된 name은 스코프 밖에서 인식되지 못한다.

// var : 변수 선언을 아주 제멋대로 친구... 또한 블럭 스코프 사용이 불가하다(어느곳에서나 다 동작됨)
// var hoisting : 어디에 선언했는지에 상관없이 선언을 위로 끌어 올려준다는 의미



/* 3. Constants */
// 한 번 할당하면 값이 절대 바뀌지 않음 (java에서 상수느낌?)
const daysInWeek = 7;
const maxnumber = 5;
// 값의 변경 방지로 보안상으로 좋음
// 쓰레드들이 동시에 변수에 접근한다는 점에서 좋음
// 코드를 변경할 때 실수가 줄어든다..?



/* 4. Variable types */
// primitive type, single item : number(숫자), string, boolean, null, undefiedn, symbol
// Object : single item들을 여러개 묶어 한 단위로 관리
// function : 변수에 할당 가능, 파라미터, 리턴타입도 가능
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`); //''아니고 ``이거임
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1/0;
console.log(infinity);
const negativeInfinity = -1/0;
console.log(negativeInfinity);
const nAn = 'not a number'/2;
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// 값 뒤에 n을 붙이면 bigInt로 인식한다. but 아직 다른 브라우저에서 지원되지 않음
const bigInt = 123456789123456789123456789123456789n; //over(-2**53)~(2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello'+brendan; //문자연결도 가능
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const brendan1 = 'brendan';
const helloBob = `hi ${brendan1}!`; //변수의 값이 자동으로 붙어 출력됨
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true; //true
console.log(`value: ${canRead}, type: ${typeof canRead}`);

const test = 3<1; //false
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing/*Object*/}`);

// undefined : 선언은 되었지만 값이 지정되어 있지 않은 친구
let x;
console.log(`value: ${x}, type: ${typeof x/*undefined*/}`);

// symbol, create unique identifiers for objects
// 고유한 식별자 필요할 때 사용됨
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2); //false : 둘은 동일한 symbol이 아니다.

const symbol11 = Symbol.for('id');
const symbol22 = Symbol.for('id');
console.log(symbol11 == symbol22); //ture : for을 사용하여 동일한 symbol로 만들 수 있다.



/* 5. Dynamic typing : dynamically typed language */
// 변수를 선언할 때 할당된 값에 따라 자료형이 주어지는 것...?
// 위험성....
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text/*String*/}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text/*number*/}`);

text = '7'+5; //문자와 문자로 인식
console.log(`value: ${text/*75*/}, type: ${typeof text/*String*/}`);

text = '8'/'2'; //숫자와 숫자로 인식
console.log(`value: ${text/*4*/}, type: ${typeof text/*number*/}`);
