const getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

const john = {
    firstName: 'John',
    lastName: 'Doe'
}

const peter = {
    firstName: 'Peter',
    lastName: 'Parker'
}

john.fullName = getFullName
peter.fullName = getFullName

console.log(john.fullName())
console.log(peter.fullName())