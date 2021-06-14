var distance = (lat1, lat2, lon1, lon2, name1, name2) => {
    if(lat1==0 || lat2==0 || lon1==0 || lon2==0){
        console.log('value is empty');
    }
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    let dlat = lat2 - lat1;
    let dlon = lon2 - lon1;
    let a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    let r = 6371;
    let total =0;
    // calculate the result
    total = parseFloat(c*r).toFixed(2);
    // console.log(`distance between ${name1} and ${name2} is ${total}` );
    return (parseFloat(total));
}

module.exports = distance;