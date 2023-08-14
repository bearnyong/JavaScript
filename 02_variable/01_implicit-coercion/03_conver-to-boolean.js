console.log("=====논리 타입으로 변환=====");

// 자바스크립트 엔진은 boolean 타입이 아닌 값을 Truthy값(참으로 평가되는 값)
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적으로 변환한다.

// Truthy
if(true) console.log("if(true)"); //if(true)
if(!false) console.log("if(false)"); //if(false)
if(1) console.log("if(1)"); //if(1)
if('javascript') console.log("if('javascript')"); //if('javascript')

// Falsy(출력X)
if(false) console.log("if(false)");
if(undefined) console.log("if(undefined)");
if(null) console.log("if(null)");
if(0) console.log("if(0)");
if(NaN) console.log("if(NaN");
if('') console.log("if('')");

