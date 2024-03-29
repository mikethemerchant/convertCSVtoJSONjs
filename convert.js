// q: how do I read a .csv file and convert it to a .json file?
// a: use the csvtojson module

// npm install csvtojson

const csvFilePath = './RequirementsNotClosed.csv';
const csv = require('csvtojson');
const fs = require('fs');

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log(jsonObj);
        fs.writeFileSync('RequirementsNotClosed.json', JSON.stringify(jsonObj, null, 2));
    });

