// class Point {
    
//     constructor (x,y) {
//         this.x = x;
//         this.y = y;
//     }

//     static distance (firstPoint, secondPoint) {
//         return Math.sqrt(Math.pow((firstPoint.x-secondPoint.x),2) + Math.pow((firstPoint.y-secondPoint.y),2));
//     }
// }

// let p1 = new Point(5, 5);
// let p2 = new Point(9, 8);
// console.log(Point.distance(p1, p2));

class Point {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }

    static distance (fp, sp) {
        return Math.sqrt(Math.pow((fp.x-sp.x),2) + Math.pow((fp.y - sp.y),2));
    }
}

// let p1 = new Point(2,0);
// let p2 = new Point(0,2);
// console.log(Point.distance(p1,p2))

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
