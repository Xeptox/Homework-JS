const library = []
const isbn = document.getElementById('isbn')
const title = document.getElementById('title')
const author = document.getElementById('author')
const year = document.getElementById('year')
const addBook = document.getElementById('addBook')
const books = document.getElementById('books')

addBook.onclick = function () {
    // TODO: Add book to library if it's not already there
    // Add book to DOM (use element books for appending
    // Add remove book functionality
    // NB! if remove book from DOM remove from library too
    findBook()
}


function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i
        }
    }
    return -1
}

function Book(isbn, title, author, year) {
    this.isbn = isbn
    this.title = title
    this.author = author
    this.year = +year
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`
    }
}