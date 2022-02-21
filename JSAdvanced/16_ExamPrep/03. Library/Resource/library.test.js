let library = require('./library');
const { assert, expect } = require('chai');

// describe("Tests …", function() {
//     describe("TODO …", function() {
//         it("TODO …", function() {
//             // TODO: …
//         });
//      });
//      // TODO: …
// });

describe("Tests of LIBRARY", function () {
    
    //променливите да си ги дефинирам в дескрайб, иначе ще гръмне!
    let invalidBookName = 125;
    let validBookName = 'Test Book'
    let invalidYear = 127.25;
    let validYear = 1978;
    let emptyBooksArray = [];
    let validBookArray = ['Test Book', 'Test Book 1', 'Test Book 2'];
    let invalidCountBook = 128.95;
    let negativeCountBook = -100;

    describe("calcPriceOfBook", function () {

        it("Throws error when book name is invalid", function () {
            expect(() => library.calcPriceOfBook(invalidBookName, validYear)).to.throw('Invalid input');
        });

        it("Throws error when book name is invalid", function () {
            expect(() => library.calcPriceOfBook(validBookName, invalidYear)).to.throw('Invalid input');
        });

        it("If valid book name and valid date before 1980 returns half price", function () {
            let output = library.calcPriceOfBook(validBookName, 1979);
            expect(output).to.equal('Price of Test Book is 10.00');
        });

        it("If valid book name and valid date equals 1980 returns half price", function () {
            let output = library.calcPriceOfBook(validBookName, 1980);
            expect(output).to.equal('Price of Test Book is 10.00');
        });

        it("If valid book name and valid date after 1980 returns full price", function () {
            let output = library.calcPriceOfBook(validBookName, 1981);
            expect(output).to.equal('Price of Test Book is 20.00');
        });



    });

    describe("findBook", function () {
        it("Empty books array should throw error", function () {
            expect(() => library.findBook(emptyBooksArray, validBookName)).to.throw('No books currently available');
        });

        it("When book is in array returns cofirm message", function () {
            let output = library.findBook(validBookArray, validBookName);
            expect(output).to.equal('We found the book you want.')
        });

        it("When book is no in array returns correct message", function () {
            let output = library.findBook(validBookArray, 'Test Book 100');
            expect(output).to.equal('The book you are looking for is not here!');
        });

    });

    describe("arrangeTheBooks", function () {

        it("If invalid count book is passed, then throws error", function () {
            expect(() => library.arrangeTheBooks(invalidCountBook)).to.throw('Invalid input')
        });

        it("If negative count book is passed, then throws error", function () {
            expect(() => library.arrangeTheBooks(negativeCountBook)).to.throw('Invalid input')
        });

        it("If avaible space greater than book count returns confirm message", function () {
            expect(library.arrangeTheBooks(10)).to.equal('Great job, the books are arranged.');
        });

        it("If avaible space equals book count returns confirm message", function () {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it("If avaible space below book count returns confirm message", function () {
            expect(library.arrangeTheBooks(1000)).to.equal('Insufficient space, more shelves need to be purchased.');
        });

    });

});