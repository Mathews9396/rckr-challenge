const fs = require('fs');
const distance = require('./controllers/distance');

// read JSON object from file
fs.readFile('./data/countriesV2.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    // parse JSON object
    const countries = JSON.parse(data.toString());

    var i = 0, count = 0, emptyLatLong = 0;
    const countriesLength = countries.length;
    var sortedDataEntries = [];

    //Sorting the data - ascending
    countries.sort((a,b)=>{
        return a.population - b.population;
     })

    for (i = 0; i < countriesLength && count < 20; i++) {
        if (countries[i].population >= 300) {
            if(countries[i].latlng.length ==0){
                console.log("latlang empty");
                sortedDataEntries.push([countries[i].name, countries[i].population, [0,0]]);            
            }
            else{
                sortedDataEntries.push([countries[i].name, countries[i].population, countries[i].latlng]);
            }
            count++;
        }
    }
    var j, lat1, lat2, long1, long2, totalKM = 0;

    //Evaluvating the sum of lines between all countries
    count = 0;
    for (i = 0; i < 19; i++) {
        lat1 = sortedDataEntries[i][2][0];
        long1 = sortedDataEntries[i][2][1];
        for (j = i + 1; j < 20; j++) {
            lat2 = sortedDataEntries[j][2][0];
            long2 = sortedDataEntries[j][2][1];

            totalKM += distance(lat1, lat2, long1, long2, sortedDataEntries[i][0], sortedDataEntries[j][0]);
        }
    }
    totalKM = Math.floor(totalKM * 100) / 100;

    console.log('Total distance : ', totalKM);
});