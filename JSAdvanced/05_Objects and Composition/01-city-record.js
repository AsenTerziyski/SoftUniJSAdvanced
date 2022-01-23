function cityRecord(cityName, population, treasure) {

    // 1. Първи начин:
    let record = {
        name: cityName,
        population: population,
        treasury: treasure,
    };

    // 2. Втори начин - dot notations (за предпочитане)
    // let record = {};
    // record.name = cityName;
    // record.population=population;
    // record.treasure=treasure;

    // 3. Трети начин:
    // let record = {
    //     name: cityName,
    //     population,
    //     treasure,
    // }

    // 4. Начин - brcket notation, само когато не може дот нотейшън:
    let record2 =   {};
    record2['name'] = cityName;
    // тирето не е позволено в дот нотейшън. Тогава ползвал бракет:
    record2['city - popul'] = population;
    record2['tr'] = treasure;

    // console.log(record.name);
    // console.log(record2['city - popul']);

    // console.log(record);
    // console.log(record2);

   
    let {name, treasury} = record;
  
    console.log(record);

    
    return record;
}

cityRecord('Tortuga', 7000, 15000);
// console.log(cityRecord('Tortuga', 7000, 15000).name);


let record = {
    name: 'Shumen',
    population: 25,
    treasury: 'test',
};

let {...clonedCity} = record;
console.log(clonedCity);
clonedCity.treasury = "Pametnik";
console.log(clonedCity);