function getTotalPrice(fruit, weight, price) {

    let fruitType = fruit;
    let fruitWeght = weight;
    let pricePerKg = price;

    let fruitWeightInKg = weight / 1000;

    let totalPrice = fruitWeightInKg * pricePerKg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${fruitWeightInKg.toFixed(2)} kilograms ${fruitType}.`)
}

getTotalPrice('orange', 2500, 1.80);