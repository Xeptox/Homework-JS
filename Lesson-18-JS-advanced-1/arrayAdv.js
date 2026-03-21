const arr = ['one', 'two', 'Three', 'eight', "three", "THREE", 'six']
console.log('=== indexOf, lastIndexOf ===')
let res = arr.indexOf('three')
console.log(res)
res = arr.indexOf('five')
console.log(res)
res = arr.lastIndexOf('three')
console.log(res)
console.log('=== includes ===')
res = arr.includes('eight')
console.log(res)
res = arr.includes('nine')
console.log(res)
console.log('=== findIndex ===')
res = arr.findIndex(item => item.toLowerCase() === 'three')
console.log(res)
res = arr.findIndex((item, index) => index > 2 && item.toLowerCase() === 'three')
console.log(res)
res = arr.findIndex((item, index) => index > 2 && item.length === 3)
console.log(res)
const persons = [
    {name: 'Alice', age: 30},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 35},
    {name: 'Dave', age: 25}
]
const person = {name: 'Bob', age: 25}
res = persons.indexOf(person)
console.log(res)
res = persons.findIndex(p => p.name === person.name && p.age === person.age)
console.log(res)
res = persons.findIndex(p => p.age > 30)
console.log(res)
console.log('=== find ===')
res = persons.find(p => p.age > 30)
console.log(res)
console.log('=== forEach ===')
// for (let i = 0; i < persons.length; i++) {
//     console.log(`${i + 1}. ${persons[i].name}, age: ${persons[i].age}`)
// }
persons.forEach((p, i) => console.log(`${i + 1}. ${p.name}, age: ${p.age}`))
console.log('=== filter ===')
res = persons.filter((p) => p.age >= 30)
console.log(res)
console.log('=== map ===')
// res = []
// for (let i = 0; i < persons.length; i++) {
//     res.push(`${i + 1}. ${persons[i].name}, age: ${persons[i].age}`)
// }
res = persons.map((p, i) => `${i + 1}. ${p.name}, age: ${p.age}`)
console.log(res)
persons
    .filter(p => p.age >= 30)
    .map((p, i) => `${i + 1}. ${p.name}, age: ${p.age}`)
    .map(s => {
        const p = document.createElement('p')
        p.append(s)
        return p
    })
    .forEach(p => document.body.append(p))
console.log('=== reduce ===')
const numbers = [5, 9, 11, 2, 13, 2]
// let accum = 0
// for (let i = 0; i < numbers.length; i++) {
//     accum = accum + numbers[i]
// }
// console.log(`sum: ${accum}`)
// accum = 1
// for (let i = 0; i < numbers.length; i++) {
//     accum = accum * numbers[i]
// }
// console.log(`product: ${accum}`)
// accum = ''
// for (let i = 0; i < numbers.length; i++) {
//     accum = accum + numbers[i]
// }
// console.log(`concat: ${accum}`)
res = numbers.reduce((accum, n) => accum + n)
console.log(`sum: ${res}`)
res = numbers.reduce((accum, n) => accum * n)
console.log(`product: ${res}`)
res = numbers.reduce((accum, n) => accum + n, 'concat: ')
console.log(res)
// res = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     // if (numbers[i] < res) {
//     //     res = numbers[i]
//     // }
//     res = numbers[i] < res ? numbers[i] : res
// }
res = numbers.reduce((min, n) => n < min ? n : min)
console.log(`min: ${res}`)
res = persons.reduce((accum, p) => accum + p.age, 0) / persons.length
console.log(`average age: ${res}`)