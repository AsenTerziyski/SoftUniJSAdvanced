// object:
let record = {
    name: "Shumen",
    population: 100000,
    treasury: "1300 years of Bulgaria",
    someArray: ["Test1", "Test2","Test3","Test4","Test5"],
};

// => convert object to json:
let recordToJson = JSON.stringify(record);
console.log(recordToJson);

// convert json to object <=
let parsedRecord = JSON.parse(recordToJson);
console.log(parsedRecord.name);

let resultArray = parsedRecord.someArray;
for(let i= 0; i< resultArray.length; i++) {
    console.log(resultArray[i]);
}