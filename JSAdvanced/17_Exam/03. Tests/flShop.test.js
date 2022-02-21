let flowerShop = require("./flowerShop");
const { assert, expect } = require('chai');

describe("Flower Shop", function () {
    describe("TODO …", function () {
        it("TODO …", function () {
            // TODO: …
        });
    });

    describe("I. Test calcPriceOfFlowers", function () {
        it("01 Should throw Error if flower is not String", function () {
            expect(() => flowerShop.calcPriceOfFlowers(1, 10, 10)).to.throw('Invalid input!');
        });

        it("02 Should throw Error if price is not integer", function () {
            expect(() => flowerShop.calcPriceOfFlowers('Flower', 10.10, 10)).to.throw('Invalid input!');
        });

        it("03 Should throw Error if quantity is not integer", function () {
            expect(() => flowerShop.calcPriceOfFlowers('Flower', 10, 10.10)).to.throw('Invalid input!');
        });

        it("04 Should return correct message", function () {

            expect(flowerShop.calcPriceOfFlowers('Flower', 10, 10)).to.equal('You need $100.00 to buy Flower!');
        });
    });

    describe("II. checkFlowersAvailable", function () {
        let gardenArr = ["Rose", "Lily", "Orchid"];
        it("01 Returns correct message if flower in garden array ", function () {
            expect(flowerShop.checkFlowersAvailable("Lily", gardenArr)).to.equal(`The Lily are available!`)
        });

        it("02 Returns message that flower are sold", function () {
            expect(flowerShop.checkFlowersAvailable("Flower", gardenArr)).to.equal(`The Flower are sold! You need to purchase more!`)
        });



    });


    describe("III. Test sellFlowers", function () {
        let gardenArr = ["Rose", "Lily", "Orchid"];

        it("01. Should throw Error if first param is not array", function () {
            expect(()=> flowerShop.sellFlowers(10, 10)).to.throw('Invalid input!');
        });

        it("02. Should throw Error if second param is not integer", function () {
            expect(()=> flowerShop.sellFlowers(gardenArr, 10.11111)).to.throw('Invalid input!');
        });

        it("03. Should throw Error if second param is negative", function () {
            expect(()=> flowerShop.sellFlowers(gardenArr, -10)).to.throw('Invalid input!');
        });

        it("04. Should throw Error if space equals gardenArr length", function () {
            expect(()=> flowerShop.sellFlowers(gardenArr, 3)).to.throw('Invalid input!');
        });

        it("05. Should throw Error if space is higher than gardenArr length", function () {
            expect(()=> flowerShop.sellFlowers(gardenArr, 4)).to.throw('Invalid input!');
        });

        it("06. Should return correct output", function () {
            expect(flowerShop.sellFlowers(gardenArr, 2)).to.equal('Rose / Lily')
        });






    });

});