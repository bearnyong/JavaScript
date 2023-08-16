/*
02. computed-property(계산된 프로퍼티 이름)
*/

var prefix = 'key';
var index = 0;

var obj = {};

obj[prefix + '-' + index++] = index;
obj[prefix + '-' + index++] = index;
obj[prefix + '-' + index++] = index;
console.log(obj); //{ 'key-0': 1, 'key-1': 2, 'key-2': 3 }

//ES6
var obj2 = {
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index
}
console.log(obj2); //{ 'key-3': 4, 'key-4': 5, 'key-5': 6 }
