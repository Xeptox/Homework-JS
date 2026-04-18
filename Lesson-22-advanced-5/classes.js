class Person {
    constructor(id, firstName, lastName, birthDate) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(birthDate);
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get birthDate() {
        return this._birthDate;
    }

    setFirstName(value) {
        this._firstName = value;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        const ageDiffMs = (new Date()) - this.birthDate;
        const ageDate = new Date(ageDiffMs);
        return ageDate.getUTCFullYear() - 1970;
    }

    fullName = function () {
        return `${this._firstName} ${this._lastName}`;
    }
}

class Employee extends Person {
    constructor(id, firstName, lastName, birthDate, salary) {
        super(id, firstName, lastName, birthDate);
        this._salary = salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        if (value > this._salary) {
            this._salary = value;
        }
    }
}

class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee(employee) {
        if (this._employees.findIndex(e => e.id === employee.id) === -1) {
            this._employees.push(employee);
            return true;
        }
        return false;
    }

    removeEmployee(employeeId) {
        const index = this._employees.findIndex(e => e.id === employeeId);
        if (index !== -1) {
            this._employees.splice(index, 1);
            return true;
        }
        return false;
    }

    get size() {
        return this._employees.length;
    }
}

const john = new Person(1000, "John", "Doe", "2001-04-08")
console.log(john);
console.log(john._id)
// john._id = 1;
// console.log(john._id);
console.log(john.id)
john.firstName = 'Johny'
// john.setFirstName('Johny')
console.log(john.firstName)
console.log(john.age)
// console.log(john.age())
console.log(john.fullName())
const peter = new Employee(2000, 'Peter', 'Parker', '1998-01-01', 10000)
console.log(peter)
console.log(peter.age)
console.log(peter.salary)
peter.salary = 8000
console.log(peter.salary)
peter.salary = 15000
console.log(peter.salary)
console.log('=== Company ===')
const firm = new Company()
firm.addEmployee(peter)
const mary = new Employee(3000, 'Mary', 'Poppins', '1999-02-02', 5000)
firm.addEmployee(mary)
console.log(firm.size)
// firm._employees.push(peter)
firm.employees.push(peter)
firm.employees.length = 1
console.log(firm.size)
firm.employees.forEach(console.log)
firm.removeEmployee(2000)
console.log(firm.size)
firm.employees.forEach(console.log)
