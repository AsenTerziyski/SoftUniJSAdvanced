function townsToJson(input) {
    let array = input.slice();
    let resultArray = [];

    for (let i = 1; i < array.length; i++) {
        let currentLine = array[i].split(' | ');
        let[town, latitude, longitude ] = currentLine;
        town = town.split('| ')[1];

        latitude = Number(latitude);
        longitude = Number(longitude.split(' |')[0]);

        latitude = Number(latitude.toFixed(2));
        longitude = Number(longitude.toFixed(2));

        let resultObject = {};
        resultObject.Town = town;
        resultObject.Latitude = latitude;
        resultObject.Longitude = longitude;

        resultArray.push(resultObject);
    }

   console.log(JSON.stringify(resultArray));
}

townsToJson(
    [
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ]
)