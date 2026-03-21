const library = []
const isbn = document.getElementById('isbn')
const title = document.getElementById('title')
const author = document.getElementById('author')
const year = document.getElementById('year')
const addBook = document.getElementById('addBook')
const books = document.getElementById('books')
const minYear = document.getElementById('minYear')
const maxYear = document.getElementById('maxYear')
const avrgYear = document.getElementById('avrgYear')

addBook.onclick = function () {
    if (findBook(library, isbn.value) === -1) {
        const book = new Book(isbn.value, title.value, author.value, year.value);
        library.push(book);
        const li = document.createElement('li');
        const buttonDel = document.createElement("button");
        buttonDel.append('Delete');
        buttonDel.onclick = function (e) {
            e.target.parentElement.remove();
            const index = findBook(library, book.isbn);
            library.splice(index, 1);
        }
        li.append(book.toString(), buttonDel);
        books.appendChild(li);
    } else {
        alert(`Book with isbn = ${isbn.value} exists`);
    }
    isbn.value = title.value = author.value = year.value = '';
}


function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i
        }
    }
    return -1
}

function statistics(library, year) {
    for (let i = 0; i <library.length; i++) {
        if (library[i].year < library[i + 1].year) {
            let minY = library[i].year
            let maxY = library[i + 1].year
            minYear.append(minY)
            maxYear.append(maxY)
        }
    }


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