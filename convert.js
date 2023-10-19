// q: how do I read a .csv file and convert it to a .json file?
// a: use the csvtojson module

// npm install csvtojson

const csvFilePath = './MonsterListV2.csv';
const csv = require('csvtojson');
const fs = require('fs');

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
        fs.writeFileSync('MonsterListV2.json', JSON.stringify(jsonObj, null, 2));
    });

