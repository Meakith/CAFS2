class Book {
    constructor(name, author, year) {
        this.name = name,
            this.author = author,
            this.year = year
    }

    nameAuthor() {
        return `Author ${this.author},
        Name ${this.name}`;
    }

    bookAge() {
        const age = new Date().getFullYear();

        return `Age of the book is  ${age - this.year}  years.`;
    }
}

const theBook = new Book('Harry Potter', 'J.K Rowling', 1997);

console.log(theBook);
console.log(theBook.nameAuthor());
console.log(theBook.bookAge());
