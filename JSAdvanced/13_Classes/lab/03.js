class Cirlce {
    #piNumber = Math.PI

    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        if (value <= 0) {
            throw new Error('Diameter can not be negative!')
        }
        this.radius = value / 2;
    }

    get area() {
        return this.#piNumber * this.radius * this.radius;
    }
}

let cirlce = new Cirlce(2);
console.log(cirlce.diameter);
cirlce.diameter = 2;
console.log(cirlce.area.toFixed(2));
cirlce.diameter = -10;