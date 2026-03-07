console.log('=== First object creation method ===')

const person = {
    'firstName': 'John',
    'lastName': 'Doe',
    age: 25,
    "fullName": function () {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log("Person first name" + person.firstName)
console.log(person.lastName)
console.log(person.age)
person.age = 26
console.log(person.age)
console.log(person.fullName())
console.log("person start")
console.log(person)
console.log("person end")
console.log(person.fullName)




const peter = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 19
}
console.log(peter)
// console.log(peter.fullName())
peter.fullName = function () {
    return `${this.firstName} ${this.lastName}`
}
console.log(peter.fullName())
console.log(peter.hobby)
peter.hobby = 'coding'
console.log(peter.hobby)
console.log(peter.id)
// peter.id = 1000
peter['id'] = 1000
console.log(peter.id)
console.log(peter)
console.log(peter["firstName"])
let key = 'hobby'
console.log(peter.key)
console.log(peter['hobby'])
console.log(peter[key])
showFields(person, ['firstName', 'lastName'])
showFields(peter, ['firstName', 'age', 'hobby'])
printObject(person)
printObject(peter)









console.log('=== Second object creation method ===')
const mary = new Person(2000, 'Mary', 'Poppins', 22)
console.log("Mary-1.1")
console.log(mary)
console.log("Mary-1.2")
printObject(mary)
const persons = [mary, peter, new Person(3000, 'Karl', 'Bush', 37),
    {
        id: 4000,
        firstName: 'Rabindranate',
        lastName: 'Tagore',
        age: 27,
        fullName: function () {
            return `${this.firstName} ${this.lastName}`
        }
    }
]
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i].fullName())
}

function Person(id, firstName, lastName, age) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

function printObject(obj) {
    console.log('=== Print Object ===')
    for (const key in obj) {
        if (typeof obj[key] !== 'function') {
            console.log(`${key}: ${obj[key]}`)
        } else {
            console.log(`${key}: ${obj[key]()}`)
        }
    }
    console.log('=== End Print Object ===')
}

function showFields(person, fields) {
    console.log('=== Show Fields ===')
    for (let i = 0; i < fields.length; i++) {
        console.log(person[fields[i]])
    }
    console.log('=== End Show Fields ===')
}