const library = []

console.log('Enter data in format: isbn, title, author, year')

console.log("==== Test print library before push ==== " + library)

let inputData = '9781849707435, Horus Rising, Dan Abnett, 2006'

for (const key in inputData) {
    console.log(Book[key])
    const book = new Book(inputData[key])
    library.push(book)
}
console.log("==== Test print library after push ==== " + library)
printLibrary(library)

function printLibrary() {
    //TODO print all books from library to console
    console.log("test print library  " + library)
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