lastName: 'Doe',
    salary: 20000,
    fullName: function () {
    return `${this.firstName} ${this.lastName}`






















address: {
street: '123 Main St',
city: 'Anytown',
    state: 'CA',
zip: '12345'
}
age: 25
}
//let firstName = person.firstName
//let lastName = person.lastName
let {firstName, lastName, age: personAge, ...rest} = person
console.log(firstName)
console.log(lastName)
console.log(rest)
console.log(personAge)
//let {address : {city, street}} = person
let {city, street} = person.address
console.log(city, street)

function personInfo(lastName, age) {
    // let age = obj.age
    age++
    // obj.salary = obj.salary * 1.1
    console.log(`${obj.lastName} - ${obj.age} years old`)
}
