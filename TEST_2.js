let arr = ['a','b','f'];
let addArr = ['f','d','e']
let result = [...arr, ...addArr]
console.log(arr)
console.log(result)
let arr3 = [...'defg']
console.log(arr3)

console.log(!!null, !!"", !!1)

let person = { name: "Lydia" };
let members = [person];
person = null;


console.log(members);
console.log(4 + "5")
const a = {};
const b = { key: "b" };
const c = { key: "c" };
//Any object key should be a string ; if an object doesn’t have the method
//toString , JS will convert the object to [object Object]
a[b] = 123;
a[c] = 456;


console.log(a[b]);
const num = parseInt("7*6")
console.log(num)