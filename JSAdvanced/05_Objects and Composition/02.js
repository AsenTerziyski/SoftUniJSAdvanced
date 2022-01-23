function townPopulation(input) {
    let towns = {};
    for (let i = 0; i < input.length; i++) {
        let currnetTownInfo = input[i].split(' <-> ');
        let townName = currnetTownInfo[0];
        let townPopulation = Number(currnetTownInfo[1]);
        if (!towns[townName]) {
            towns[townName] = 0;
        }
        towns[townName] +=townPopulation;
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`)
    }

}
townPopulation(['Istanbul <-> 100000','Honk Kong <-> 2100004',
'Jerusalem <-> 2352344','Mexico City <-> 23401925',
'Istanbul <-> 1000']
);