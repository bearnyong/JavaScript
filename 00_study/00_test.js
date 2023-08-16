var a = 1;

function test() {
    console.log("1 : " + a);

    function test1() {
        console.log("2 : " + a);
        var a = 2;
        console.log("3 : " + a);
    }
    
    test1();
    console.log("4 : " + a);
}
test();