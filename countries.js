function distance(lat1, lat2, lon1, lon2) {

    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;
    console.log(lat1, lat2, lon1, lon2);

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
        + Math.cos(lat1) * Math.cos(lat2)
        * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371;

    // calculate the result
    return (c * r);
}

// Driver code   

let lat1 = 24;
let lat2 = -10;
let lon1 = 90;
let lon2 = -55;
console.log(lat1, lat2, lon1, lon2);

console.log(distance(lat1, lat2, lon1, lon2) + " K.M");


// [ 'China', 1377422166 ]
// [ 'India', 1295210000 ]
// [ 'United States of America', 323947000 ]
// [ 'Indonesia', 258705000 ]
// [ 'Brazil', 206135893 ]
// [ 'Pakistan', 194125062 ]
// [ 'Nigeria', 186988000 ]
// [ 'Bangladesh', 161006790 ]
// [ 'Russian Federation', 146599183 ]
// [ 'Japan', 126960000 ]

    // console.log(sortedDataEntries);

    // sortedDataEntries.sort(function (a, b) {
    //     return b[1] - a[1];
    // });

// distance between  Bangladesh  and Brazil 15996.66
// distance between  Bangladesh  and China 1894.15
// distance between  Brazil  and China 16574.11

//for 65110000 - Total distance :  1366408.24