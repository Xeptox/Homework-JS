const person = {
    hobby: 'coding',
fullName: function() {
        return this.firstName + ' ' + this.lastName
}
}

const john = {
    firstName: 'John',
    lastName: 'Doe'
}
console.log(john)
console.log(john.hobby)
john.__proto__ = person
console.log(john.hobby)
console.log(john)
console.log(john.fullName())
console.log(person.fullName())
john.hobby = 'reading'
console.log(john.hobby)
console.log(john.__proto__ === person)
john.__proto__.hobby = 'gaming'
console.log(person.hobby)
console.log('=== Constructor=== ')
// Person.prototype = person
console.log(Person.prototype.constructor === Person)
Person.prototype.fullName = person.fullName
Person.prototype.hobby = 'coding'
const peter = new Person('Peter', 'Parker')
const mary = new Person('Mary', 'Poppins')
console.log(peter)
console.log(mary)
// peter.__proto__ = person
// mary.__proto__ = person
// console.log(peter.fullName())
// console.log(mary.fullName())
console.log(peter.constructor === Person)
function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}