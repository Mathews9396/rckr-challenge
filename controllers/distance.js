var distance = (lat1, lat2, lon1, lon2, name1, name2) => {

    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;
    let dlat = lat1 - lat2;
    let dlon = lon1 - lon2;
    let a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    let r = 6371;
    let total = 0;
    // calculate the result
    total = c * r;
    total = Math.floor(total * 100) / 100;

    return (total);
}
module.exports = distance;