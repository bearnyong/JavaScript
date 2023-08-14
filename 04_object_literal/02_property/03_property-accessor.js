/*
03. property-accessor(프로퍼티 접근)
*/

var dog = {
    name : '단비',
    eat : function(food){
        console.log(`${this.name}는 ${food}를 맛있게 먹어요`) //단비는 상한 된장찌개를 맛있게 먹어요
    }
}
console.log(dog.name); //단비
dog.eat("상한 된장찌개");

// console.log(dog[name]); //name 자체를 변수값으로 인식하기 때문에 에러...s
console.log(dog['name']); //단비(프로퍼티에 접근하려면 문자열 형태로 접근해야됨...)
dog['eat']('상한 계란'); //단비는 상한 계란를 맛있게 먹어요

/*
alert() //알림창
prompt("알림 메세지", "기본값") //사용자에게 필드 값을 줌
confirm() //알림창(ok, cancle)
*/


var obj = {
    'dash-key' : 'dash-value',
    0 : 1 //0을 썼지만 생성할 때 "0"로 바꿔준다...
}

// 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름일 경우 반드시 대괄호 표기법 사용
console.log(obj["dath-key"]); //undefined
// console.log(obj.dash-key); //지원되지 않는 표현식이기에 에러...;
console.log(obj["dash-key"]); //dash-value
console.log(obj[0]); //1
console.log(obj["0"]); //1
