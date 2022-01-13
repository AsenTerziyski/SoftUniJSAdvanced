function stringLength(inpOne, inpTwo, inpThree) {
    let firstLength = inpOne.length;
    let secondLenght = inpTwo.length;
    let thirthLenght = inpThree.length;
    let sum = firstLength + secondLenght + thirthLenght;
    console.log(sum);
    let av = Math.floor(sum/3);
    console.log(av);
};

stringLength('chocolate', 'ice cream', 'cake');

