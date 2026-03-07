const library = []

// isbn, title, author, year
let inputData = alert('Enter data in format: isbn, title, author, year')


while (inputData !== null ) {
    //TODO create new book and add it to library only if isbn is unique
    inputData = prompt('Enter data in format: isbn,title,author,year')
    if (inputData !== null) {
        library.push(inputData)
    }
}

printLibrary(library)

function printLibrary() {
    //TODO print all books from library to console
    console.log(library)
}

function findBook(library, isbn) {
    //TODO find book by isbn and return index of book in library or -1 if book not found
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
// Book 001 - 978-1849707435, Horus Rising, Dan Abnett, 2006
// Book 002 - 978-1849703833, False Gods, Graham McNeill, 2006
// Book 003 - 978-1849707534, Galaxy in Flames, Ben Counter, 2006
// Book 004 - 978-1849708036, The Flight of the Eisenstein, James Swallow, 2007