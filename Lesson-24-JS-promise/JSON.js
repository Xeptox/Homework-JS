const Person
    =
    {
        firstName: 'John',
        lastName: 'Doe',
        age: '25',
        address: {
                street: '123 main st',
                city: 'Anytown',
                state: 'CA'
            },
        hobbies: ['Reading', 'Writting', 'Coding'],
        isMarried:
            false,
        fullName:

            function () {
                return `${this.firstName} ${this.lastName}`
            }
    }

    console.log(Person)
console.log(typeof Person)
const personString = JSON.stringify(Person)
console.log(personString)