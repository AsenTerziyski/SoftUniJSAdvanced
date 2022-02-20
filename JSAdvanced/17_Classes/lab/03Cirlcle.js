class Circle {
    constructor (radius) {
        this.radius = radius;
    }
    get diameter () {
        return this.radius * 2;
    }

    set diameter (value) {
        if (this.value<=0) {
            throw new Error ('Radius should be greater than zero!')
        }
        diameter = 2* value;
    }
}

// let cirlce = new Circle(2);
// console.log(cirlce.diameter);
// let cirlce1 = new Circle(0);
// cirlce1.diameter = ;
// console.log(cirlce1);
