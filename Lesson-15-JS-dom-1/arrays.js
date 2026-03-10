const arr = [1, 2, 3, 'four', 'five']
console.log('=== push ===')
let res = arr.push(10, 20, 30);
console.log(arr)
console.log(res)
console.log('=== pop ===')
res = arr.pop()
console.log(arr)
console.log(res)
console.log('=== shift ===')
res = arr.shift()
console.log(arr)
console.log(res)
console.log('=== unshift ===')
res = arr.unshift(-20, -10)
console.log(arr)
console.log(res)
console.log('=== split ===')
const sheaksbeer = 'Two beer or not two beer'
res = sheaksbeer.split(' ')
console.log(res)
console.log('=== slice ===')
res = arr.slice(2, 6)
console.log(arr)
console.log(res)
console.log('=== splice ===')
// arr.splice(1,2)
// arr.splice(1,2, 100, 200, 300)
// arr.splice(0, 1) // shift
// arr.splice(0, 0, 100, 200) // unshift
// arr.splice(arr.length - 1, 1) // pop
// arr.splice(arr.length, 0, 1000, 2000) // push
arr.splice(5, 20)
console.log(arr)

