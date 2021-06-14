const fs = require('fs');
const distance = require('./controllers/distance');

// read JSON object from file
fs.readFile('./data/countriesV2.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    // parse JSON object
    const countries = JSON.parse(data.toString());

    var i = 0;
    var count = 0;
    countriesLength = countries.length;
    sortedDataEntries = [];

    for (i = 0; i < countriesLength && count < 20; i++) {
        if (countries[i].population >= 2302) {
            sortedDataEntries.push([countries[i].name, countries[i].population, countries[i].latlng]);
            count++;
        }
    }

    var j, lat1, lat2, long1, long2, totalKM = 0;

    //Evaluvating the sum of lines between all countries

    for (i = 0; i < 19; i++) {
        for (j = i + 1; j < 20; j++) {
            // console.log(sortedDataEntries[i], sortedDataEntries[j]);
            lat1 = sortedDataEntries[i][2][0];
            long1 = sortedDataEntries[i][2][1];
            lat2 = sortedDataEntries[j][2][0];
            long2 = sortedDataEntries[j][2][1];
            totalKM += distance(lat1, lat2, long1, long2, sortedDataEntries[i][0], sortedDataEntries[j][0]);
        }
    }

    console.log('Total distance : ', parseFloat(totalKM).toFixed(2));

});


