class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length < this.capacity) {
            let bookObject = { bookName, bookAuthor, payed: false };
            this.books.push(bookObject);
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        } else {
            throw Error('Not enough space in the collection.')
        }
    }

    payBook(bookName) {

        let bookIsInTheBookCoolection = false;
        let searchedBook;

        for (const book of this.books) {
            if (book.bookName === bookName) {
                bookIsInTheBookCoolection = true;
                searchedBook = book;
            }
        }

        if (!bookIsInTheBookCoolection) {
            throw Error(`${bookName} is not in the collection.`)
        }

        if (searchedBook.payed === true) {
            throw Error(`${bookName} has already been paid.`)
        }

        searchedBook.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {

        let bookIsInTheBookCoolection = false;
        let searchedBook;

        for (const book of this.books) {
            if (book.bookName === bookName) {
                bookIsInTheBookCoolection = true;
                searchedBook = book;
            }
        }

        if (!bookIsInTheBookCoolection) {
            throw Error("The book, you're looking for, is not found.")
        }

        if (searchedBook.payed === false) {
            throw Error(`${bookName} need to be paid before removing from the collection.`)
        }

        let indexOfBook = this.books.findIndex(b => b.bookName === bookName);
        this.books.splice(indexOfBook, 1)
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {

        let authorPresents = this.books.some(b => b.bookAuthor === bookAuthor);

        if (!authorPresents) {
            throw Error(`${bookAuthor} is not in the collection.`)
        }


        for (const book of this.books) {
            if (book.bookAuthor === bookAuthor) {
                let paidString = '';
                if (book.payed === true) {
                    paidString = 'Has Paid';
                } else {
                    paidString = 'Not Paid';
                }
                return `${book.bookName} == ${book.bookAuthor} - ${paidString}.`
            }
        }

    }

    getStatistics() {
        let emptySlots = 0;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].payed === false) {
                emptySlots++;
            }
        }
        let output = `The book collection has ${emptySlots} empty spots left.` + '\n'
        let booksNumber = this.books.length;

        // this.books.sort((b1, b2) => b1.bookName.localeCompare(b2.bookName)).forEach(b => {
        //     let isOrNotPayed = '';
        //     if (b.payed === true) {
        //         isOrNotPayed = 'Has Paid'
        //     } else if (b.payed === false) {
        //         isOrNotPayed = 'Not Paid';
        //     }
        //     let output2 = '';

        //     if (booksNumber === 1) {
        //         output2 = `${b.bookName} == ${b.bookAuthor} - ${isOrNotPayed}.`
        //     } else {
        //         output2 = `${b.bookName} == ${b.bookAuthor} - ${isOrNotPayed}.` + '\n'
        //     }

        //     output += output2

        // });

        let sorted = this.books.sort((b1, b2) => b1.bookName.localeCompare(b2.bookName));
        for (let i = 0; i < sorted.length; i++) {
            let isOrNotPayed = '';
            if (sorted[i].payed === true) {
                isOrNotPayed = 'Has Paid'
            } else if (sorted[i].payed === false) {
                isOrNotPayed = 'Not Paid';
            }
            let output2 = '';
            if (i === sorted.length-1) {
                output2 = `${sorted[i].bookName} == ${sorted[i].bookAuthor} - ${isOrNotPayed}.`
            } else {
                output2 = `${sorted[i].bookName} == ${sorted[i].bookAuthor} - ${isOrNotPayed}.` + '\n'
            }
            output += output2
        }

        return output;
    }

}

// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());


const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));


// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));


// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));
