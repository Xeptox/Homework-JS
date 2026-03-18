const arr = ['one', 'two', 'three', 'eight', "three", "THREE", 'six']
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

res= arr.findIndex((item, index) => index > 2 && item.toLowerCase() === 'three')

const persons = [
    {name: 'Alice', age: 30},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 35},
    {name: 'Dave', age: 25}]

const person = {name: 'Bob', age: 30}
res = persons.indexOf(person)
console.log(res)
res = persons.findIndex(p => p.name === person.name && p.age === person.age)
res = persons.indexOf(person)
console.log(res)
res = persons.findIndex(p => p.age > 30)
console.log(res)
console.log('=== find ===')
res = persons.find(p => p.age > 30)
console.log(res)
console.log('=== forEach ===')
persons.forEach((p, i) => console.log(`${i + 1}. ${p.name}, age: ${p.page}`))
console.log('=== filter ===')
res = persons.filter(p => p.age >= 30)
console.log(res)
console.log('=== map ===')
res = persons.map((p, i ) => `${i + 1}. ${p.name}, age: ${p.age}`)
console.log(res)

persons
.filter(p => p.age >= 30)
.map((p, i) => `${i +1}. ${p.name}, age: ${p.age}`)
.map(s => {
    const p = document.createElement('p')
    p.append(s)
    return p
})
.forEach(p => document.body.append(p))
console.log('=== reduce ===')
const numbers = [5, 9, 11, 2, 13, 2 ]
let accum = 0
for (let i =0; i < numbers.length; i++) {
    accum += numbers[i]
}
console.log(`sum: ${accum}`)