function rectangle(wdth, hght, color) {
    
    function capitalizeFirstLetter(color) {
        return result = color.charAt(0).toUpperCase() + color.slice(1);
    }

    let clr = capitalizeFirstLetter(color)

    let rect = {
        width: wdth,
        height: hght,
        color: clr,
        calcArea: function () {
            return this.width*this.height;
        }
    }
    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());