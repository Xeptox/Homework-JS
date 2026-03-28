console.log('=== Array spread ===')
const arr1 = [2, 3, 5]
const arr1Clone = [...arr1]
console.log(arr1Clone)
console.log(arr1 === arr1Clone)
arr1Clone.push(7)
console.log(arr1)
console.log(arr1Clone)
const arr2 = [7,11]
// const arr3 = arr1.concat(arr2)
