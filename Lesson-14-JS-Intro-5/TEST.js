const library = []

console.log('Enter data in format: isbn, title, author, year')

console.log("==== Test print library before push ==== " + library)

let inputData = '9781849707435, Horus Rising, Dan Abnet, 2006'
const bookProperties = inputData.split(',')
console.log(bookProperties)
const book = new Book(bookProperties[0], bookProperties[1],bookProperties[2], bookProperties[3])
library.push(book)
inputData = '9781849703833, False Gods, Graham McNeill, 2006'
// const book = new Book(bookProperties[0], bookProperties[1],bookProperties[2], bookProperties[3])
library.push(book)
printLibrary(Book())

function printLibrary() {
    //TODO print all books from library to console
    console.log("Test print library  " + library)
}

function Book(isbn, title, author, year) {
    this.isbn = isbn
    this.title = title
    this.author = author
    this.year = +year
    this.toString = function () {
        return` ISBN: ${this.isbn} , Title: ${this.title}, Author: ${this.author}, Year of publish: ${this.year}`
    }
}