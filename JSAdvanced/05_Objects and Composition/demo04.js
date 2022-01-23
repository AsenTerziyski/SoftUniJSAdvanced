let rectangle = {
    with: 0,
    heght: 0,
    getArea: function () {
        return this.with * this.heght;
    },
    getPerimeter: function () {
        return 2*(this.with + this.heght);
    }
}

console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());

rectangle.heght = 5;
rectangle.with = 10;

console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());