let { expect } = require('chai')
let { Repository } = require("./solution.js");

// в джъдж отива целия describe:

describe("Repository", function () {

    // describe("TODO …", function () {
    //     it("TODO …", function () {
    //         // TODO: …
    //     });
    // });

    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    let entity2 = {
        name: "Pesho2",
        age: 222,
        birthday: new Date(19982, 3, 72)
    };

    let invalidEntity = {
        name: 'Test',
    }

    let invalidEntity2 = {
        name: "Pesho2",
        age: 222,
        birthday: '01 12 1200'
    };

    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };

    let repo = new Repository(properties);

    describe("Initilization", function () {
        it("It should add props property on init", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };
            // let repo = new Repository(properties);
            expect(repo).to.have.property('props');
            expect(repo.props).to.deep.equal(properties)
            // TODO: …
        });

        it("Should hava data map on init", function () {
            // let properties = {
            //     name: "string",
            //     age: "number",
            //     birthday: "object"
            // };
            // let repo = new Repository(properties);
            expect(repo).to.have.property('data');
            expect(typeof repo.data).is.equal('object');
            expect(repo.data).instanceOf(Map);
            // TODO: …
        });

        it("Next id should be zero when initialized", function () {
            // let repo = new Repository(properties);
            expect(repo.nextId()).to.equal(0);
        });

    });

    describe("Get count", function () {
        it("Should return number of entries", function () {
            // let repo = new Repository(properties);
            expect(repo.count).is.equal(0);
            repo.add(entity);
            expect(repo.count).is.equal(1);
            repo.add(entity2);
            expect(repo.count).is.equal(2);
        });
    });

    describe("Add Entity", function () {
        it("Should return correct incremented id if added entity is valid", function () {
            let repo = new Repository(properties);
            let resultId0 = repo.add(entity);
            expect(resultId0).to.equal(0);
            let resultId1 = repo.add(entity2);
            expect(resultId1).to.equal(1);
        });

        it("Should store valid entity in data map", function () {
            let repo = new Repository(properties);
            repo.add(entity);
            expect(repo.data.get(0)).deep.equal(entity);
            expect(repo.data.get(0)).to.have.property('name').that.equals('Pesho')
        });

        it("Should throw and error if add invalid entity", function () {
            let repo = new Repository(properties);
            expect(() => repo.add(invalidEntity)).to.throw;
            expect(() => repo.add(invalidEntity)).to.throw(Error, `Property age is missing from the entity!`)
        });

        it("Should throw and error if add invalid entity that has invalid Date format", function () {
            let repo = new Repository(properties);
            expect(() => repo.add(invalidEntity2)).to.throw;
            expect(() => repo.add(invalidEntity2)).to.throw(Error, `Property birthday is not of correct type!`)
        });
    });

    describe("Test get Id", function () {
        it("Should return entity by id", function () {
            let repo = new Repository(properties);
            repo.add(entity);
            expect(repo.getId(0)).to.deep.equal(entity);
            // TODO: …
        });

        it("Should throw Error when id is not found", function () {
            let repo = new Repository(properties);
            repo.add(entity);
            expect(() => repo.getId(100)).to.throw(Error, `Entity with id: 100 does not exist!`)
            // TODO: …
        });
    });

    describe("Update", function () {
        it("Should update one valid entity with another", function () {
            let repo = new Repository(properties);
            repo.add(entity)
            expect(repo.getId(0)).to.deep.equal(entity);
            repo.update(0, entity2);
            expect(repo.getId(0)).to.deep.equal(entity2);
            // TODO: …
        });

        it("Should throw error if not valid id", function () {
            let repo = new Repository(properties);
            repo.add(entity)
            expect(() => repo.update(100, entity2)).to.throw(Error, `Entity with id: 100 does not exist!`)
            // TODO: …
        });
    });

    describe("Delete", function () {
        it("deletes an entity by the given id", function () {
            let repo = new Repository(properties);
            repo.add(entity);
            repo.add(entity2);
            repo.del(0);
            expect(repo.count).to.equal(1);
            repo.del(1);
            expect(repo.count).to.equal(0);
            // TODO: …
        });

        it("throws error when try to delete an entity with not valid id", function () {
            let repo = new Repository(properties);
            repo.add(entity);
            repo.add(entity2);
            expect(() => repo.del(100)).to.throw(Error, `Entity with id: 100 does not exist!`);
            // TODO: …
        });
    });
    // TODO: …
});
