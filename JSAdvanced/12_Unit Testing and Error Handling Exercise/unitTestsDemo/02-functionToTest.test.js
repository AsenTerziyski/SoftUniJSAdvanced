//demo
// const sumOfTwoNumbers = require('./01-functionToTest');
// const { assert } = require('chai');

// describe('sum of two numbers to test', () => {

//     it('Test with two numbers', () => {
//         assert.equal(sumOfTwoNumbers(1, 2), 3);
//     });

//     it('Test with string as input', () => {
//         assert.equal(sumOfTwoNumbers('3', 3), 6)
//     });

// });

//problem 02
// const isOddOrEven = require('./01-functionToTest');
// const { assert } = require('chai');

// describe('isOddOrEven function tests', () => {
//     it('should return undefined if the paremeter is a number', () => {
//         assert.equal(isOddOrEven(3), undefined);
//     });

//     it('should return undefined if the paremeter is an object', () => {
//         assert.equal(isOddOrEven({}), undefined);
//     });

//     it('should return undefined if the paremeter is an array', () => {
//         assert.equal(isOddOrEven([1,2,3]), undefined);
//     });

//     it('should return undefined if the paremeter is a null', () => {
//         assert.equal(isOddOrEven(null), undefined);
//     });

//     it('should return undefined if the paremeter is a undefined', () => {
//         assert.equal(isOddOrEven(undefined), undefined);
//     });

//     it('should return odd if the paremeter is with odd length', () => {
//         assert.equal(isOddOrEven('tes'), 'odd');
//     });

//     it('should return even if the paremeter is with even length', () => {
//         assert.equal(isOddOrEven('test'), 'even');
//     });

// });

// problem 03
// const lookupChar = require('./01-functionToTest');
// const { assert } = require('chai');

// describe('TEST lookupChar function:', () => {

//     it('01. should return undefined if first param is not string.', () => {
//         assert.equal(lookupChar(5, 5), undefined);
//     });

//     it('02. should return undefined if first param is string and second param is not integer.', () => {
//         assert.equal(lookupChar('test', 5.5), undefined);
//     });

//     it('03. should return undefined if first param is not string and second param is not integer.', () => {
//         assert.equal(lookupChar(7, 5.5), undefined);
//     });

//     it('04. should return Incorrect index if params are correct, but str.length is < index.', () => {
//         assert.equal(lookupChar('test', 7), "Incorrect index");
//     });

//     it('05. should return Incorrect index if first param is correct, but index < 0.', () => {
//         assert.equal(lookupChar('test', -7), "Incorrect index");
//     });

//     it('06. should return Incorrect index if first param is blank, and index is 0.', () => {
//         assert.equal(lookupChar('', 0), "Incorrect index");
//     });

//     it('07. should return correct char if first param is correct, and index >= 0 && index < str.length.', () => {
//         assert.equal(lookupChar('test', 1), 'e');
//     });

// });

// problem 04
const mathEnforcer = require('./01-functionToTest');
const { assert } = require('chai');

describe('Test mathEnforcer object:',()=>{
    describe('Test addFive function:', ()=>{

        it('01. Should return undefined if input param is a string.', ()=>{
            assert.equal(mathEnforcer.addFive('0'), undefined);
        });

        it('02. Should return undefined if input param is undefined.', ()=>{
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        });

        it('03. Should return undefined if input param is null.', ()=>{
            assert.equal(mathEnforcer.addFive(null), undefined);
        });

        it('04. Should return undefined if input param is arr.', ()=>{
            assert.equal(mathEnforcer.addFive([1,2,3]), undefined);
        });

        it('05. Should return correct if input param is number.', ()=>{
            assert.equal(mathEnforcer.addFive(5), 10);
        });

        it('06. Should return correct if input param is decimal.', ()=>{
            assert.equal(mathEnforcer.addFive(5.5), 10.5);
        });

        it('07. Should return 0 if input param is -5.', ()=>{
            assert.equal(mathEnforcer.addFive(-5), 0);
        });
    })

    describe('Test subtractTen function:', ()=>{
        it('01. Should return undefined if input param is a string.', ()=>{
            assert.equal(mathEnforcer.subtractTen('10'),undefined);
        });

        it('02. Should return undefined if input param is undefined.', ()=>{
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
        });

        it('03. Should return undefined if input param is null.', ()=>{
            assert.equal(mathEnforcer.subtractTen(null), undefined);
        });

        it('04. Should return correct if input param is number.', ()=>{
            assert.equal(mathEnforcer.subtractTen(15), 5);
        });

        it('05. Should return correct if input param is number.', ()=>{
            assert.equal(mathEnforcer.subtractTen(15.5), 5.5);
        });

        it('06. Should return 0 if input param is 10.', ()=>{
            assert.equal(mathEnforcer.subtractTen(10), 0);
        });
    })

    describe('Test sum   function:', ()=>{
        it('01. Should return undefined if input params are a strings.', ()=>{
            assert.equal(mathEnforcer.sum('10', '10'), undefined);
        });

        it('02. Should return undefined if input first param is a string.', ()=>{
            assert.equal(mathEnforcer.sum('10', 10), undefined);
        });

        it('03. Should return undefined if input second param is a string.', ()=>{
            assert.equal(mathEnforcer.sum(10, '10'), undefined);
        });

        it('04. Should return undefined if input param is undefined.', ()=>{
            assert.equal(mathEnforcer.sum(undefined, 10), undefined);
        });

        it('05. Should return undefined if input param is undefined.', ()=>{
            assert.equal(mathEnforcer.sum(10, undefined), undefined);
        });

        it('06. Should return undefined if input param is null.', ()=>{
            assert.equal(mathEnforcer.sum(null, 10), undefined);
        });

        it('07. Should return undefined if input param is null.', ()=>{
            assert.equal(mathEnforcer.sum(10, null), undefined);
        });

        it('08. Should return correct if input params are numbers.', ()=>{
            assert.equal(mathEnforcer.sum(15, 15), 30);
        });

        it('09. Should return correct if input params are decimals.', ()=>{
            assert.equal(mathEnforcer.sum(15.5, 15.5), 31);
        });

        it('10. Should return correct if input params are decimals.', ()=>{
            assert.equal(mathEnforcer.sum(15.5, -15.5), 0);
        });

        it('11. Should return correct if one of input params is decimal.', ()=>{
            assert.equal(mathEnforcer.sum(15, 15.5), 30.5);
        });

        it('12. Should return correct if one of input params is decimal.', ()=>{
            assert.equal(mathEnforcer.sum(15.5, 15), 30.5);
        });

        it('13. Should return 0 if input params are abs equal.', ()=>{
            assert.equal(mathEnforcer.sum(15, -15), 0);
        });

        it('14. Should return 0 if input params are abs equal.', ()=>{
            assert.equal(mathEnforcer.sum(15.5, -15.5), 0);
        });
        
        it('15. Should return negative if input params are negatives.', ()=>{
            assert.equal(mathEnforcer.sum(-15.5, -15.5), -31);
        });
    })
})
