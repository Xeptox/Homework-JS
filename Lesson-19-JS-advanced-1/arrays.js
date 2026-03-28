const persons = [
    {name: 'Alice', age: 30},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 35},
    {name: 'Dave', age: 25}
]

const numbers = [5, 9, 11, 2, 13, 2]
console.log('=== sort ===')
numbers.sort((a, b) => (a-b))
numbers.sort((a, b) => -(a-b))