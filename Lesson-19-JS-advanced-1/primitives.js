//number
let a = 10.7
let res = Math.floor(a)
console.log(res)
res = Math.round(a)
console.log(res)
res = Math.trunc(a)
console.log(res)
console.log(Math.PI)
console.log(Math.random())
a = 2.718281828
res = a.toFixed(2)
let b = Math.random()
let resB = b.toFixed(1)
console.log(resB)

//string
const str = "Two beer or not two beer? Sheaksebeer"
console.log(str.length)
res = str.charAt(2)
console.log(res)
res = str[2]
res = str.indexOf('beer')
console.log(res)
res = str.lastIndexOf('beer')
res = str.substring(4, 8)
console.log(res)
res = str.slice(-4, -1)
console.log(res)