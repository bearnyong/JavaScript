(function () {
    console.log("익명 즉시 실행 함수! 함수 정의와 동시에 호출!");
})();

function test(name) { 
    console.log("익명 즉시 실행 함수");
    console.log(`${name}님 안녕하세요~`);
}("홍길동");

// test("길동"); //익명함수는 한 번 사용하려고 쓰는 함수라 재사용이 불가능함...