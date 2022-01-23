function cityTaxes(name, population, treasury) {

    let record = {

        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,

        collectTaxes() {
            return this.treasury += this.population * this.taxRate;
        },

        applyGrowth(percentage) {
            let percent = percentage / 100;
            // this.population = this.population + this.population * percent;
            return this.population *= percent + 1;
        },

        applyRecession(percentage) {
            let percent = percentage / 100;
            return this.treasury *= 1 - percent;
        }
    }

    return record;
}

const city = cityTaxes('Tortuga',7000,15000);
console.log(city);

console.log(``);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
