var id = 'p-001';
var price = 10000;

var product = { //객체 선언
    id : id,
    price : price
}
console.log(product); //{ id: 'p-001', price: 10000 }

// ES6에서부터 변수를 이용하여 축약 표현이 가능하다.
var product2 = {id, price}
console.log(product2); //{ id: 'p-001', price: 10000 }
